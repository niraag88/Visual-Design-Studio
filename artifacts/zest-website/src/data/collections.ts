export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
}

export const collections: Collection[] = [
  {
    id: "c1",
    name: "Aromatherapy",
    slug: "aromatherapy",
    description: "Pure essential oils and therapeutic blends for the mind and body.",
    imageUrl: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "c2",
    name: "Bath & Body",
    slug: "bath-and-body",
    description: "Nourishing washes, scrubs, and lotions for daily rituals.",
    imageUrl: "https://images.unsplash.com/photo-1610411306359-5f25ed44f387?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "c3",
    name: "Facial Skincare",
    slug: "facial-skincare",
    description: "Advanced botanical and marine solutions for radiant skin.",
    imageUrl: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "c4",
    name: "Guest Amenities",
    slug: "guest-amenities",
    description: "Sustainable, luxurious touches for the hospitality sector.",
    imageUrl: "https://images.unsplash.com/photo-1584305574647-0cc91866385a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "c5",
    name: "Hand & Foot Care",
    slug: "hand-and-foot-care",
    description: "Intensive repair and restorative treatments.",
    imageUrl: "https://images.unsplash.com/photo-1519014816548-bf5fe459e98b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "c6",
    name: "Spa Rituals",
    slug: "spa-rituals",
    description: "Professional grade masks, wraps, and treatment mediums.",
    imageUrl: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "c7",
    name: "Wellness Lifestyle",
    slug: "wellness-lifestyle",
    description: "Candles, teas, and accessories for mindful living.",
    imageUrl: "https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "c8",
    name: "Massage Oils",
    slug: "massage-oils",
    description: "Cold-pressed carrier oils and professional mediums.",
    imageUrl: "https://images.unsplash.com/photo-1615397323136-1e64627bb53c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "c9",
    name: "Bespoke Creations",
    slug: "bespoke-creations",
    description: "Custom formulated products tailored to your unique brand.",
    imageUrl: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=800",
  }
];
