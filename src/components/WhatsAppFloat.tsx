import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => (
  <a
    href="https://api.whatsapp.com/send/?phone=5519990147479&text&type=phone_number&app_absent=0"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Fale conosco no WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform"
  >
    <MessageCircle size={28} fill="white" />
  </a>
);

export default WhatsAppFloat;
