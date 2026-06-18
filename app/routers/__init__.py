from fastapi import APIRouter
from app.routers.contact import router as contact_router
from app.routers.health import router as health_router
from app.routers.newsletter import router as newsletter_router
from app.routers.webhook import router as webhook_router

api_router = APIRouter()
api_router.include_router(health_router, tags=["Health"])
api_router.include_router(contact_router, prefix="/contact", tags=["Contact"])
api_router.include_router(newsletter_router, prefix="/newsletter", tags=["Newsletter"])
api_router.include_router(webhook_router, prefix="/gogaga", tags=["GoGaga"])
