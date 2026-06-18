"""
GoGaga AI Concierge — Lead Model
Tracks every customer enquiry from first contact to booked trip.
"""
import enum
from datetime import datetime
from supabase import create_client, Client
from app.core.config import settings

supabase: Client = create_client(
    settings.SUPABASE_URL,
    settings.SUPABASE_SERVICE_ROLE_KEY
)

class LeadStage(str, enum.Enum):
    NEW         = "new"
    ENGAGED     = "engaged"
    QUALIFIED   = "qualified"
    PROPOSAL    = "proposal"
    NEGOTIATING = "negotiating"
    BOOKED      = "booked"
    LOST        = "lost"

async def get_or_create_lead(phone: str, name: str = None) -> dict:
    result = supabase.table("gogaga_leads")\
        .select("*")\
        .eq("phone", phone)\
        .execute()
    if result.data:
        return result.data[0]
    new_lead = {
        "phone": phone,
        "name": name or "Unknown",
        "stage": LeadStage.NEW,
        "created_at": datetime.utcnow().isoformat(),
        "updated_at": datetime.utcnow().isoformat(),
    }
    result = supabase.table("gogaga_leads").insert(new_lead).execute()
    return result.data[0]

async def update_lead_stage(phone: str, stage: LeadStage) -> dict:
    result = supabase.table("gogaga_leads")\
        .update({
            "stage": stage,
            "updated_at": datetime.utcnow().isoformat()
        })\
        .eq("phone", phone)\
        .execute()
    return result.data[0]

async def update_lead_info(phone: str, info: dict) -> dict:
    info["updated_at"] = datetime.utcnow().isoformat()
    result = supabase.table("gogaga_leads")\
        .update(info)\
        .eq("phone", phone)\
        .execute()
    return result.data[0]
