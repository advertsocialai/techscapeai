"""Demo / seed endpoint — provisions the Gogaga Holidays dataset in one call."""
from uuid import UUID

from fastapi import APIRouter, Depends

from app.services.travel import seed_gogaga_demo
from app.routers.techscape._deps import require_business

router = APIRouter()


@router.post("/seed-gogaga")
def seed_gogaga(biz: dict = Depends(require_business)):
    """
    Inserts the full Gogaga Holidays starter set:
      • 8 destinations (Kerala, Himachal, Rajasthan, Goa, Thailand, Singapore, Dubai, Bali)
      • 9 packages with itinerary templates
      • 14 wiki entries (policies, SOPs, objection handlers, brand promise)
      • 8 franchisees across major Indian cities
      • 6 suppliers (hotels, transport, cruises)
    Idempotent — safe to call repeatedly.
    """
    return seed_gogaga_demo(UUID(biz["id"]))
