"""
GoGaga AI Concierge — Session Model
Stores WhatsApp conversation history per customer.
"""
import json
from datetime import datetime
from supabase import create_client, Client
from app.core.config import settings

supabase: Client = create_client(
    settings.SUPABASE_URL,
    settings.SUPABASE_SERVICE_ROLE_KEY
)

async def get_or_create_session(phone: str) -> dict:
    result = supabase.table("gogaga_sessions")\
        .select("*")\
        .eq("phone", phone)\
        .execute()
    if result.data:
        return result.data[0]
    new_session = {
        "phone": phone,
        "messages": json.dumps([]),
        "context": json.dumps({}),
        "current_step": "greeting",
        "message_count": 0,
        "is_active": True,
        "created_at": datetime.utcnow().isoformat(),
        "last_message_at": datetime.utcnow().isoformat(),
    }
    result = supabase.table("gogaga_sessions").insert(new_session).execute()
    return result.data[0]

async def append_message(phone: str, role: str, content: str) -> dict:
    session = await get_or_create_session(phone)
    messages = json.loads(session.get("messages", "[]"))
    messages.append({
        "role": role,
        "content": content,
        "timestamp": datetime.utcnow().isoformat()
    })
    if len(messages) > 20:
        messages = messages[-20:]
    result = supabase.table("gogaga_sessions")\
        .update({
            "messages": json.dumps(messages),
            "message_count": len(messages),
            "last_message_at": datetime.utcnow().isoformat(),
            "last_bot_message": content if role == "assistant" else None
        })\
        .eq("phone", phone)\
        .execute()
    return result.data[0]

async def get_conversation_history(phone: str) -> list:
    session = await get_or_create_session(phone)
    messages = json.loads(session.get("messages", "[]"))
    return [
        {"role": m["role"], "content": m["content"]}
        for m in messages
    ]
