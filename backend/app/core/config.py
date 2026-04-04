"""
Application configuration using Pydantic Settings.
All values are read from environment variables or .env file.
"""
from pydantic_settings import BaseSettings, SettingsConfigDict
from functools import lru_cache


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
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

    # Supabase (use existing connectors)
    SUPABASE_URL: str
    SUPABASE_ANON_KEY: str
    SUPABASE_SERVICE_ROLE_KEY: str

    # Email (optional — for contact form notifications)
    SENDGRID_API_KEY: str = ""
    NOTIFICATION_EMAIL: str = "hello@techscapeai.com"
    FROM_EMAIL: str = "noreply@techscapeai.com"

    # Rate limiting
    RATE_LIMIT_CONTACT: int = 5  # requests per minute per IP
    RATE_LIMIT_NEWSLETTER: int = 3


@lru_cache()
def get_settings() -> Settings:
    return Settings()


settings = get_settings()
