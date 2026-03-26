export interface Product {
  id: string;
  name: string;
  slug: string;
  brandSlug: string;
  shortDescription: string;
  description: string;
  sizes: string[];
  tags: string[];
  keyIngredients: string[];
  keyBenefits: string[];
  howToUse: string;
  suitableFor: string;
  sensoryNotes: string;
  whyWeLoveIt: string;
  imageUrl: string;
  galleryUrls: string[];
}

export const products: Product[] = [
  {
    id: "p1",
    name: "Neroli & Frankincense Balancing Mist",
    slug: "neroli-frankincense-mist",
    brandSlug: "aura-botanica",
    shortDescription: "A hydrating floral water that instantly calms the mind and refreshes the skin.",
    description: "Distilled from fresh organic blossoms, this delicate toning mist restores the skin's natural pH while providing a moment of deep aromatherapeutic calm. Perfect for setting makeup, refreshing during travel, or as a step in a professional facial.",
    sizes: ["100ml Retail", "500ml Professional"],
    tags: ["Retail", "Professional", "Facial Skincare"],
    keyIngredients: ["Organic Neroli Hydrosol", "Omani Frankincense Extract", "Aloe Vera", "Vegetable Glycerin"],
    keyBenefits: ["Balances skin pH", "Hydrates and plumps", "Calms the nervous system", "Prepares skin for serums"],
    howToUse: "Mist generously over face and neck after cleansing, or throughout the day to refresh skin and calm the mind.",
    suitableFor: "All skin types, especially sensitive and stressed skin.",
    sensoryNotes: "Bright, floral citrus opening with a grounding, resinous base.",
    whyWeLoveIt: "It's a beautiful dual-purpose product. It performs brilliantly as a skincare toner, but the scent profile is so exquisite it doubles as an emotional reset button.",
    imageUrl: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=800",
    galleryUrls: [
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "p2",
    name: "Marine Algae Cell-Renewal Serum",
    slug: "marine-algae-serum",
    brandSlug: "lumiere-spa",
    shortDescription: "A potent, lightweight serum that accelerates cellular turnover and boosts hydration.",
    description: "Harnessing the resilience of coastal extremophile algae, this intensive serum delivers a concentrated dose of amino acids and marine peptides deep into the epidermis to smooth fine lines and restore radiance.",
    sizes: ["30ml Retail", "150ml Professional"],
    tags: ["Retail", "Professional", "Facial Skincare", "Anti-Aging"],
    keyIngredients: ["Laminaria Digitata Extract", "Hyaluronic Acid (Multi-weight)", "Sea Water Extract", "Niacinamide"],
    keyBenefits: ["Accelerates cell renewal", "Intensely hydrates", "Improves skin elasticity", "Brightens complexion"],
    howToUse: "Apply 2-3 drops to clean, damp skin. Press gently until fully absorbed before applying moisturizer.",
    suitableFor: "Mature, dry, or dull skin types.",
    sensoryNotes: "Fresh, clean, subtly oceanic and cooling.",
    whyWeLoveIt: "The texture is incredible—it sinks in immediately without any tackiness, leaving the skin feeling instantly plumper and looking visibly brighter.",
    imageUrl: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800",
    galleryUrls: [
      "https://images.unsplash.com/photo-1556228720-1c2f1e8a8b11?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1608248593842-8d76d4981881?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "p3",
    name: "Wild Earth Detoxifying Body Wrap",
    slug: "wild-earth-body-wrap",
    brandSlug: "tierra",
    shortDescription: "Professional grade mineral mud wrap for purifying and remineralizing treatments.",
    description: "A blend of finely milled volcanic clays and marine silt, designed to draw out impurities while infusing the body with essential minerals like magnesium and potassium. Creates an exceptional, warming thermal experience in spa settings.",
    sizes: ["2.5kg Professional Bucket", "5kg Professional Bucket"],
    tags: ["Professional", "Spa Rituals", "Body Care"],
    keyIngredients: ["Bentonite Clay", "Dead Sea Mud", "Kelp Powder", "Organic Green Tea Extract"],
    keyBenefits: ["Draws out toxins", "Stimulates circulation", "Remineralizes the body", "Soothes aching muscles"],
    howToUse: "Mix with warm water or hydrosol to create a smooth paste. Apply an even layer to the body and wrap the client in thermal blankets for 20 minutes.",
    suitableFor: "All body types. Excellent for detox or sports recovery treatments.",
    sensoryNotes: "Deeply earthy, grounding, and rich.",
    whyWeLoveIt: "It mixes beautifully without clumping and retains heat exceptionally well, making the treatment experience deeply comforting for the client.",
    imageUrl: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800",
    galleryUrls: [
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "p4",
    name: "Himalayan Cedarwood & Bergamot Massage Oil",
    slug: "cedarwood-massage-oil",
    brandSlug: "olea-estate",
    shortDescription: "A deeply grounding, slow-absorbing massage medium for deep tissue work.",
    description: "Formulated specifically for deep tissue and sports massage, this heavy-weight oil provides a sustained, slow glide, allowing the therapist to grip the muscle properly. Infused with warming cedarwood and uplifting bergamot.",
    sizes: ["1L Professional", "5L Professional Bulk"],
    tags: ["Professional", "Massage Oils"],
    keyIngredients: ["Cold Pressed Olive Oil", "Sweet Almond Oil", "Cedarwood Essential Oil", "Bergamot Essential Oil"],
    keyBenefits: ["Perfect grip for deep tissue", "Sustained glide", "Warms the muscles", "Nourishes the skin barrier"],
    howToUse: "Warm lightly in hands before application. A little goes a long way.",
    suitableFor: "Deep tissue, sports massage, and grounding relaxation rituals.",
    sensoryNotes: "Warm, woody, slightly sweet and citrusy.",
    whyWeLoveIt: "Therapists consistently praise the 'workability' of this oil. It doesn't absorb too fast, saving product, but doesn't leave the client feeling greasy.",
    imageUrl: "https://images.unsplash.com/photo-1615397323136-1e64627bb53c?auto=format&fit=crop&q=80&w=800",
    galleryUrls: [
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "p5",
    name: "Refillable Amber Glass Guest Collection",
    slug: "amber-glass-guest-collection",
    brandSlug: "maison-dhotes",
    shortDescription: "Sustainable, premium in-room amenities comprising wash, lotion, shampoo and conditioner.",
    description: "Elevate your guest bathroom experience while eliminating single-use plastics. These beautiful, heavy amber glass bottles are designed to be secured in custom brackets and refilled from our 5L bulk eco-pouches.",
    sizes: ["300ml Bottles", "5L Refill Pouches"],
    tags: ["Hospitality", "Guest Amenities", "B2B"],
    keyIngredients: ["Organic Aloe Juice", "Oat Protein", "Pro-Vitamin B5", "Botanical Fragrance Blend"],
    keyBenefits: ["Eliminates single-use plastic", "Premium aesthetic", "Gentle, universally appealing formulas", "Cost-effective at scale"],
    howToUse: "Dispense directly into hands or sponge. Designed for daily use.",
    suitableFor: "Luxury hotels, boutique guesthouses, and premium spas.",
    sensoryNotes: "A universally appealing, fresh botanical blend of geranium and sweet orange.",
    whyWeLoveIt: "It completely solves the tension between offering true luxury and being environmentally responsible in hospitality.",
    imageUrl: "https://images.unsplash.com/photo-1584305574647-0cc91866385a?auto=format&fit=crop&q=80&w=800",
    galleryUrls: [
      "https://images.unsplash.com/photo-1610411306359-5f25ed44f387?auto=format&fit=crop&q=80&w=800"
    ]
  }
];

export const getProductsByBrand = (brandSlug: string) => {
  return products.filter(p => p.brandSlug === brandSlug);
};
