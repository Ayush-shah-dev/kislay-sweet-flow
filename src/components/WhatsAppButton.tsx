
import { MessageCircle, Zap } from 'lucide-react';

interface WhatsAppButtonProps {
  text?: string;
  className?: string;
  size?: string;
  variant?: 'primary' | 'secondary' | 'accent';
}

const WhatsAppButton = ({ 
  text = "Order on WhatsApp", 
  className = "",
  size = "default",
  variant = "primary"
}: WhatsAppButtonProps) => {
  const whatsappUrl = "https://wa.me/917043630938?text=Hi! I'm interested in ordering Kislay Naturals Liquid Monk Fruit Sweetener. Please share details.";
  
  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg"
  };

  const variantClasses = {
    primary: "bg-gradient-primary text-primary-foreground hover:scale-105 glow",
    secondary: "glass border-primary/30 text-foreground hover:border-primary hover-glow",
    accent: "bg-gradient-accent text-accent-foreground hover:scale-105 glow-strong"
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center space-x-2 rounded-xl font-medium transition-all duration-300 text-center hover-lift ${sizeClasses[size as keyof typeof sizeClasses]} ${variantClasses[variant]} ${className}`}
    >
      <MessageCircle className="h-5 w-5" />
      <span>{text}</span>
      <Zap className="h-4 w-4 opacity-70" />
    </a>
  );
};

export default WhatsAppButton;
