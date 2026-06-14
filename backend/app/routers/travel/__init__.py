"""Travel AI Operating Layer — router registry.

All routes prefixed with `/travel/v1`.
Auth uses the same `require_business` dependency as TechScape so a single
API key / JWT / X-Business-ID flow secures both surfaces.
"""
from fastapi import APIRouter

from .booking     import router as booking_router
from .catalog     import router as catalog_router
from .customer    import router as customer_router
from .demo        import router as demo_router
from .franchisee  import router as franchisee_router
from .itinerary   import router as itinerary_router
from .language    import router as language_router
from .wiki        import router as wiki_router


travel_router = APIRouter(prefix="/travel/v1")

travel_router.include_router(wiki_router,       prefix="/wiki",        tags=["Travel · Wiki / RAG"])
travel_router.include_router(itinerary_router,  prefix="/itineraries", tags=["Travel · Itineraries"])
travel_router.include_router(franchisee_router, prefix="/franchisee",  tags=["Travel · Franchisee Agent"])
travel_router.include_router(language_router,   prefix="/language",    tags=["Travel · Language Bridge"])
travel_router.include_router(booking_router,    prefix="/booking",     tags=["Travel · Booking Guarantees"])
travel_router.include_router(customer_router,   prefix="/customers",   tags=["Travel · Customer Memory"])
travel_router.include_router(catalog_router,    prefix="/catalog",     tags=["Travel · Catalog"])
travel_router.include_router(demo_router,       prefix="/demo",        tags=["Travel · Demo"])

__all__ = ["travel_router"]
