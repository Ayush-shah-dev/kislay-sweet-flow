
interface WhatsAppButtonProps {
  text?: string;
  className?: string;
  size?: string;
}

const WhatsAppButton = ({ 
  text = "Order on WhatsApp", 
  className = "",
  size = "default"
}: WhatsAppButtonProps) => {
  const whatsappUrl = "https://wa.me/917043630938?text=Hi! I'm interested in ordering Kaslay Naturals Liquid Monk Fruit Sweetener. Please share details.";
  
  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg"
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-colors text-center ${sizeClasses[size as keyof typeof sizeClasses]} ${className}`}
    >
      {text}
    </a>
  );
};

export default WhatsAppButton;
