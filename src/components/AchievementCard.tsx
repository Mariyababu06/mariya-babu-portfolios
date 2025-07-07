
import { cn } from "@/lib/utils";
import React from "react";

interface AchievementCardProps {
  title: string;
  description: string;
  icon?: string;
  className?: string;
  style?: React.CSSProperties;
}

const AchievementCard = ({ title, description, icon = "✔", className, style }: AchievementCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105 group",
        className
      )}
      style={style}
    >
      <div className="flex items-start space-x-4">
        <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-white mb-2">{title}</h3>
          <p className="text-white/80 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
