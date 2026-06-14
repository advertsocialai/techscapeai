"""Pydantic schemas for the Travel AI Operating Layer."""
from __future__ import annotations
from datetime import datetime
from typing import Any, Literal, Optional
from uuid import UUID

from pydantic import BaseModel, ConfigDict, EmailStr, Field


class _Base(BaseModel):
    model_config = ConfigDict(from_attributes=True, populate_by_name=True)


WikiCategory = Literal[
    "destination", "package", "policy", "sop",
    "objection", "supplier", "pricing", "general",
]
SupplierType  = Literal[
    "hotel", "transport", "activity", "flight",
    "cruise", "restaurant", "other",
]
ItineraryStatus = Literal[
    "draft", "sent", "accepted", "modified", "booked", "cancelled",
]
GuaranteeStatus = Literal[
    "pending", "verified", "failed", "no_response", "reallocated",
]


# ── Wiki ─────────────────────────────────────────────────────────
class WikiEntryIn(_Base):
    category: WikiCategory
    title:    str = Field(min_length=1, max_length=255)
    content:  str = Field(min_length=1)
    metadata: dict[str, Any] = {}
    tags:     list[str] = []
    source:   Optional[str] = None


class WikiEntryOut(WikiEntryIn):
    id: UUID
    business_id: UUID
    created_at: datetime
    updated_at: datetime


class WikiSearchIn(_Base):
    query:    str = Field(min_length=1)
    category: Optional[WikiCategory] = None
    limit:    int = Field(default=8, ge=1, le=50)


# ── Itinerary agent ──────────────────────────────────────────────
class ItineraryRequest(_Base):
    """User intent: free text + structured hints."""
    intent:    str = Field(min_length=3,
                            description="Free text, e.g. 'Family of 4, North India, 6 days, ₹2L'")
    pax_count: int = Field(default=2, ge=1, le=40)
    budget_inr: Optional[int] = None
    duration_days: Optional[int] = Field(default=None, ge=1, le=60)
    destination_hint: Optional[str] = None
    customer_id: Optional[UUID] = None
    customer_email: Optional[EmailStr] = None
    customer_name:  Optional[str] = None
    customer_phone: Optional[str] = None
    language: str = "en"


class ItineraryDay(_Base):
    day:       int
    location:  str
    title:     Optional[str] = None
    activities: list[str] = []
    meals:     list[str] = []
    hotel:     Optional[str] = None
    transport: Optional[str] = None
    notes:     Optional[str] = None


class ItineraryOut(_Base):
    id: UUID
    business_id: UUID
    customer_id: Optional[UUID] = None
    title:  Optional[str] = None
    intent: Optional[str] = None
    pax_count: int
    days: list[dict] = []
    total_cost_inr: Optional[int] = None
    cost_breakdown: dict[str, Any] = {}
    status: ItineraryStatus
    version: int
    model:  Optional[str] = None
    created_at: datetime


class ItineraryRefineIn(_Base):
    """Modification request against an existing itinerary."""
    modifications: str = Field(min_length=3,
                                description="e.g. 'Make it 4 days and add a houseboat night'")


# ── Franchisee agent ─────────────────────────────────────────────
class FranchiseeAskIn(_Base):
    question: str = Field(min_length=3)
    franchisee_id: Optional[UUID] = None
    franchisee_city: Optional[str] = None


class FranchiseeAnswer(_Base):
    answer:    str
    sources:   list[dict] = []
    confident: bool = True
    model:     str


# ── Language bridge ──────────────────────────────────────────────
class TranslateIn(_Base):
    text:        str = Field(min_length=1, max_length=4000)
    source_lang: str = "auto"
    target_lang: str = Field(default="en", min_length=2, max_length=10)
    formality:   Literal["polite", "casual", "formal"] = "polite"


class TranslateOut(_Base):
    translated:  str
    source_lang: str
    target_lang: str
    model:       str


# ── Booking guarantee ────────────────────────────────────────────
class BookingGuaranteeIn(_Base):
    itinerary_id: UUID
    supplier_id:  UUID
    booking_ref:  Optional[str] = None
    checkin_at:   datetime


class BookingGuaranteeOut(_Base):
    id: UUID
    business_id: UUID
    itinerary_id: Optional[UUID] = None
    supplier_id:  Optional[UUID] = None
    booking_ref:  Optional[str] = None
    checkin_at:   Optional[datetime] = None
    verified_at:  Optional[datetime] = None
    verification_status: GuaranteeStatus
    failure_reason: Optional[str] = None
    alternative_id: Optional[UUID] = None
    created_at: datetime


# ── Customer memory ──────────────────────────────────────────────
class CustomerProfileIn(_Base):
    full_name: Optional[str] = None
    email: Optional[EmailStr] = None
    phone: Optional[str] = None
    preferences: dict[str, Any] = {}
    family_profile: dict[str, Any] = {}
    language: str = "en"
    notes: Optional[str] = None


class CustomerProfileOut(CustomerProfileIn):
    id: UUID
    business_id: UUID
    past_trips: list[dict] = []
    last_intent: Optional[str] = None
    created_at: datetime
    updated_at: datetime


# ── Catalog ──────────────────────────────────────────────────────
class DestinationIn(_Base):
    name: str
    country: str
    region: Optional[str] = None
    best_seasons: list[str] = []
    highlights:   list[str] = []
    avg_cost_inr: Optional[int] = None


class DestinationOut(DestinationIn):
    id: UUID
    business_id: UUID
    is_active: bool
    created_at: datetime


class PackageIn(_Base):
    name: str
    destination_id: Optional[UUID] = None
    duration_days: int = Field(ge=1, le=60)
    base_price_inr: int = Field(ge=0)
    inclusions: list[str] = []
    exclusions: list[str] = []
    itinerary_template: list[dict] = []
    min_pax: int = 1
    max_pax: int = 20


class PackageOut(PackageIn):
    id: UUID
    business_id: UUID
    is_active: bool
    created_at: datetime


class FranchiseeIn(_Base):
    name: str
    city: Optional[str] = None
    state: Optional[str] = None
    country: str = "India"
    owner_name: Optional[str] = None
    contact_email: Optional[EmailStr] = None
    contact_phone: Optional[str] = None


class FranchiseeOut(FranchiseeIn):
    id: UUID
    business_id: UUID
    is_active: bool
    created_at: datetime


class SupplierIn(_Base):
    name: str
    supplier_type: SupplierType
    city: Optional[str] = None
    country: Optional[str] = None
    contact_email: Optional[EmailStr] = None
    contact_phone: Optional[str] = None
    api_endpoint: Optional[str] = None


class SupplierOut(SupplierIn):
    id: UUID
    business_id: UUID
    reliability_score: float
    is_active: bool
    created_at: datetime
