"""
Application configuration using Pydantic Settings.
All values are read from environment variables or .env file.
"""
from pydantic_settings import BaseSettings, SettingsConfigDict
from functools import lru_cache

class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file="backend/.env",
        env_file_encoding="utf-8",
        case_sensitive=True,
        extra="ignore",
    )
    # App
    APP_NAME: str = "TechScape AI API"
    APP_VERSION: str = "1.0.0"
    DEBUG: bool = False
    ENVIRONMENT: str = "production"

    # CORS
    FRONTEND_URL: str = "http://localhost:3000"
    ALLOWED_ORIGINS: list[str] = [
        "http://localhost:3000",
        "http://localhost:5173",
        "https://techscapeai.com",
        "https://www.techscapeai.com",
    ]

    # Supabase
    SUPABASE_URL: str
    SUPABASE_ANON_KEY: str
    SUPABASE_SERVICE_ROLE_KEY: str

    # Email
    SENDGRID_API_KEY: str = ""
    NOTIFICATION_EMAIL: str = "hello@techscapeai.com"
    FROM_EMAIL: str = "noreply@techscapeai.com"

    # Rate limiting
    RATE_LIMIT_CONTACT: int = 5
    RATE_LIMIT_NEWSLETTER: int = 3

    # ── GoGaga AI Concierge ──
    ANTHROPIC_API_KEY: str = ""
    TWILIO_ACCOUNT_SID: str = ""
    TWILIO_AUTH_TOKEN: str = ""
    TWILIO_WHATSAPP_FROM: str = "whatsapp:+14155238886"
    GOGAGA_WEBHOOK_SECRET: str = "gogaga2026"

@lru_cache()
def get_settings() -> Settings:
    return Settings()

settings = get_settings()
