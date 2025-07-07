
import { cn } from "@/lib/utils";

interface ContactButtonProps {
  href: string;
  icon: string;
  label: string;
  className?: string;
}

const ContactButton = ({ href, icon, label, className }: ContactButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105 text-white hover:text-white",
        className
      )}
    >
      <span className="text-xl">{icon}</span>
      <span className="font-medium">{label}</span>
    </a>
  );
};

export default ContactButton;
