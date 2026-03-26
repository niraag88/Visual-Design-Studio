import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/1234567890" // Replace with actual number
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-medium group-hover:ml-3 group-hover:mr-1">
        Chat with us
      </span>
    </a>
  );
}
