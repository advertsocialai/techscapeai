"""
GoGaga AI Concierge — WhatsApp Webhook
UC-001: Instant acknowledgement
UC-002: Intent detection + itinerary generation
"""
from fastapi import APIRouter, Request, Form
from fastapi.responses import PlainTextResponse
from app.models.lead import get_or_create_lead, update_lead_stage, LeadStage
from app.models.session import get_or_create_session, append_message, get_conversation_history
from app.services.claude import get_travel_response
from app.services.whatsapp import send_whatsapp_message, send_acknowledgement

router = APIRouter()

@router.post("/webhook/whatsapp", response_class=PlainTextResponse)
async def whatsapp_webhook(
    request: Request,
    From: str = Form(...),
    Body: str = Form(...),
    ProfileName: str = Form(default="Unknown")
):
    """
    Receives incoming WhatsApp messages from Twilio.
    Triggers UC-001 (acknowledgement) and UC-002 (AI response).
    """
    # Extract phone number (remove whatsapp: prefix)
    phone = From.replace("whatsapp:", "")
    message = Body.strip()
    name = ProfileName

    print(f"📱 Message from {phone} ({name}): {message}")

    try:
        # Get or create lead in database
        lead = await get_or_create_lead(phone=phone, name=name)

        # Get conversation history
        history = await get_conversation_history(phone)

        # Save customer message
        await append_message(phone=phone, role="user", content=message)

        # If new lead — send instant acknowledgement first
        if lead.get("stage") == LeadStage.NEW:
            await update_lead_stage(phone, LeadStage.ENGAGED)
            await send_acknowledgement(phone)

        # Get AI response from Claude
        ai_response = await get_travel_response(
            message=message,
            conversation_history=history,
            customer_phone=phone
        )

        # Save AI response to session
        await append_message(phone=phone, role="assistant", content=ai_response)

        # Send response back to customer
        await send_whatsapp_message(to_phone=phone, message=ai_response)

        print(f"✅ Response sent to {phone}")

    except Exception as e:
        print(f"❌ Error processing message from {phone}: {e}")
        await send_whatsapp_message(
            to_phone=phone,
            message="Namaste! 🙏 Thank you for contacting GoGaga Holidays. Our team will get back to you shortly!"
        )

    # Always return 200 to Twilio
    return PlainTextResponse("OK", status_code=200)


@router.get("/webhook/whatsapp")
async def whatsapp_webhook_verify():
    """Health check for webhook."""
    return {"status": "GoGaga WhatsApp Webhook is live!"}
