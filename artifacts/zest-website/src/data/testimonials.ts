export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote: "Working with Zest has transformed our spa offering. They don't just supply products; they understand the entire guest journey and help us craft treatments that our clients return for time and time again.",
    author: "Elena Rossi",
    role: "Spa Director",
    company: "The Grand Coastal Hotel"
  },
  {
    id: "t2",
    quote: "The quality of the brands Zest curates is unmatched. Every product feels purposeful, clean, and incredibly effective. Their training team is also exceptionally knowledgeable and supportive.",
    author: "Sarah Jenkins",
    role: "Founder",
    company: "Sanctuary Wellness Retreat"
  },
  {
    id: "t3",
    quote: "As an independent boutique hotel, finding the right in-room amenities was crucial. Zest provided a sustainable, beautiful solution that constantly receives compliments from our guests.",
    author: "Marcus Chen",
    role: "General Manager",
    company: "The Botanical House"
  },
  {
    id: "t4",
    quote: "Their bespoke service allowed us to create a signature scent that perfectly captures the essence of our property. It was a seamless, highly collaborative process.",
    author: "Olivia Thorne",
    role: "Purchasing Director",
    company: "Luxe Hospitality Group"
  }
];
