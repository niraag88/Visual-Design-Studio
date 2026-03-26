import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/1234567890" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-foreground text-background text-sm font-medium px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
        Chat with us
      </span>
      
      {/* Button */}
      <div className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ring-2 ring-transparent group-hover:ring-primary/30">
        <MessageCircle size={32} />
      </div>
    </a>
  );
}