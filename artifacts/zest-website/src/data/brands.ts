export interface Brand {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  category: string;
  story: string;
  whyZestChose: string;
  featured: boolean;
  imageUrl: string;
  logoUrl?: string;
}

export const brands: Brand[] = [
  {
    id: "b1",
    name: "Aura Botanica",
    slug: "aura-botanica",
    shortDescription: "Pure, wildcrafted essential oils and aromatherapy blends.",
    description: "Aura Botanica sources the finest organic botanicals from around the world to create potent, therapeutic-grade essential oil blends designed for holistic healing and spa rituals.",
    category: "Aromatherapy",
    story: "Founded by a master herbalist in 1998, Aura Botanica was born from a deep respect for traditional plant medicine. Every drop is meticulously distilled to preserve the vital life force of the plant.",
    whyZestChose: "Their uncompromising commitment to purity and ethical wild-harvesting aligns perfectly with our vision of authentic wellness.",
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1608248593842-8d76d4981881?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "b2",
    name: "Lumière Spa",
    slug: "lumiere-spa",
    shortDescription: "Advanced marine-based skincare for professional treatments.",
    description: "Harnessing the regenerative power of the ocean, Lumière Spa provides high-performance facial and body care protocols tailored for luxury hospitality.",
    category: "Facial Skincare",
    story: "Developed in a coastal laboratory in Brittany, France, Lumière utilizes patented extraction methods to capture active marine enzymes that deeply rejuvenate the skin.",
    whyZestChose: "They offer unparalleled results in professional settings, creating an immediate, visible 'spa glow' that clients love.",
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "b3",
    name: "Verdant Rituals",
    slug: "verdant-rituals",
    shortDescription: "Conscious bath and body care rooted in nature.",
    description: "Verdant Rituals creates sensory-rich bathing experiences using only plant-derived ingredients, crafted to turn daily routines into moments of mindfulness.",
    category: "Bath & Body",
    story: "What started as a small apothecary in the English countryside has grown into a globally recognized standard for natural body care, maintaining their small-batch ethos.",
    whyZestChose: "Their textures and natural fragrances are unmatched, providing a deeply grounding sensory experience.",
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "b4",
    name: "Olea Estate",
    slug: "olea-estate",
    shortDescription: "Premium massage oils and professional wellness mediums.",
    description: "Specializing in organic, cold-pressed carrier oils and massage mediums that provide the perfect slip while nourishing the skin barrier.",
    category: "Massage Oils",
    story: "Sourced from a multi-generational olive estate in the Mediterranean, Olea has perfected the art of pressing oils specifically optimized for therapeutic touch.",
    whyZestChose: "The consistency and purity of their oils make them the absolute favorite among elite massage therapists.",
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1615397323136-1e64627bb53c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "b5",
    name: "Maison d'Hôtes",
    slug: "maison-dhotes",
    shortDescription: "Sustainable, luxurious guest amenities for premium hotels.",
    description: "Elevating the hospitality experience with beautifully packaged, refillable, and ecologically sound in-room amenities.",
    category: "Guest Amenities",
    story: "Created by former hoteliers who recognized a gap in the market for amenities that are both truly luxurious and genuinely sustainable.",
    whyZestChose: "They allow our hotel partners to offer a premium guest experience without compromising their environmental commitments.",
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1584305574647-0cc91866385a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "b6",
    name: "Solace Lifestyle",
    slug: "solace-lifestyle",
    shortDescription: "Curated wellness accessories and mindful home goods.",
    description: "From hand-poured botanical candles to organic cotton spa linens, Solace provides the physical touchpoints that complete a wellness environment.",
    category: "Wellness Lifestyle",
    story: "A design-led brand focused on creating objects that encourage slowing down and finding comfort in the present moment.",
    whyZestChose: "Their aesthetic perfectly complements our beauty ranges, allowing us to offer complete, cohesive spa concepts.",
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "b7",
    name: "Tierra Therapeutics",
    slug: "tierra",
    shortDescription: "Earth-based muds, clays, and restorative body masks.",
    description: "Mineral-rich therapeutic muds harvested from pristine global environments for detoxifying and remineralizing body treatments.",
    category: "Spa Rituals",
    story: "Focused purely on earth elements, Tierra has spent decades mapping and sustainably harvesting the most biologically active clays on the planet.",
    whyZestChose: "Their raw ingredients form the backbone of some of the most spectacular signature spa treatments we help design.",
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "b8",
    name: "Nourish & Kin",
    slug: "nourish-and-kin",
    shortDescription: "Specialized hand, foot, and nail care.",
    description: "Nutrient-dense salves and treatments designed specifically for the extremities, focusing on repair and intense hydration.",
    category: "Hand & Foot Care",
    story: "Born in a professional podiatry clinic, Nourish & Kin bridges the gap between medical efficacy and spa luxury.",
    whyZestChose: "They transform standard manicures and pedicures into luxurious, restorative rituals.",
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800",
  }
];
