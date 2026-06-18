"""
GoGaga AI Concierge — WhatsApp Service
Sends messages back to customers via Twilio.
"""
from twilio.rest import Client
from app.core.config import settings

twilio_client = Client(
    settings.TWILIO_ACCOUNT_SID,
    settings.TWILIO_AUTH_TOKEN
)

async def send_whatsapp_message(to_phone: str, message: str) -> bool:
    """Send a WhatsApp message to a customer."""
    try:
        msg = twilio_client.messages.create(
            from_=settings.TWILIO_WHATSAPP_FROM,
            to=f"whatsapp:{to_phone}",
            body=message
        )
        print(f"Message sent to {to_phone}: {msg.sid}")
        return True
    except Exception as e:
        print(f"Failed to send message to {to_phone}: {e}")
        return False

async def send_acknowledgement(to_phone: str) -> bool:
    """UC-001 — Instant acknowledgement within 5 seconds."""
    message = """Namaste! 🙏 Welcome to GoGaga Holidays!

Thank you for reaching out. I'm your AI travel concierge and I'm here to help you plan your perfect holiday!

To get started, could you tell me:
1. 📍 Where would you like to go?
2. 📅 When are you planning to travel?
3. 👨‍👩‍👧 How many people are travelling?
4. 💰 What is your approximate budget?

I'll have personalised itinerary options ready for you in seconds! ✈️"""
    return await send_whatsapp_message(to_phone, message)
