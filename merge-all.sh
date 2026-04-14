#!/usr/bin/env bash
# merge-all.sh
# Merges every branch (local + remote) into main, favouring incoming changes on conflict.
# Then pushes main and deletes all other branches.

set -e

MAIN="main"

echo "=== Fetching all remotes ==="
git fetch --all --prune

echo ""
echo "=== Switching to $MAIN ==="
git checkout "$MAIN"

# ── Collect branches to process ───────────────────────────────────────────────
# Local branches excluding main
LOCAL=$(git branch --format='%(refname:short)' | grep -v "^${MAIN}$")

# Remote-tracking branches excluding origin/main and origin/HEAD
REMOTE=$(git branch -r --format='%(refname:short)' \
  | grep -v "^origin/${MAIN}$" \
  | grep -v "^origin/HEAD" \
  | sed 's|^origin/||')          # strip "origin/" prefix

# Combine, deduplicate
ALL_BRANCHES=$(printf '%s\n%s\n' "$LOCAL" "$REMOTE" | sort -u | grep -v '^$')

echo ""
echo "=== Branches to merge into $MAIN ==="
echo "$ALL_BRANCHES"
echo ""

# ── Merge each branch ─────────────────────────────────────────────────────────
for BRANCH in $ALL_BRANCHES; do
  # Make sure we have a local ref to merge from
  if git show-ref --verify --quiet "refs/heads/${BRANCH}"; then
    REF="$BRANCH"
  elif git show-ref --verify --quiet "refs/remotes/origin/${BRANCH}"; then
    REF="origin/${BRANCH}"
  else
    echo "  [SKIP] $BRANCH — no local or remote ref found"
    continue
  fi

  echo "--- Merging $REF into $MAIN ---"

  # Attempt merge; on conflict favour the incoming (feature) branch with -X theirs
  git merge "$REF" \
    --no-edit \
    --allow-unrelated-histories \
    -X theirs \
    -m "chore: merge ${BRANCH} into ${MAIN}" \
    || {
      echo "  [ERROR] Merge of $REF failed even with -X theirs. Aborting merge and continuing."
      git merge --abort 2>/dev/null || true
    }

  echo ""
done

# ── Push main ─────────────────────────────────────────────────────────────────
echo "=== Pushing $MAIN to origin ==="
git push origin "$MAIN"

# ── Delete remote branches (excluding main) ───────────────────────────────────
echo ""
echo "=== Deleting remote branches ==="
for BRANCH in $ALL_BRANCHES; do
  if git ls-remote --exit-code --heads origin "$BRANCH" > /dev/null 2>&1; then
    echo "  Deleting remote: origin/$BRANCH"
    git push origin --delete "$BRANCH" || echo "  [WARN] Could not delete remote $BRANCH"
  fi
done

# ── Delete local branches (excluding main) ────────────────────────────────────
echo ""
echo "=== Deleting local branches ==="
for BRANCH in $ALL_BRANCHES; do
  if git show-ref --verify --quiet "refs/heads/${BRANCH}"; then
    echo "  Deleting local: $BRANCH"
    git branch -D "$BRANCH" || echo "  [WARN] Could not delete local $BRANCH"
  fi
done

echo ""
echo "=== Done. Only '$MAIN' remains. ==="
git branch -a
