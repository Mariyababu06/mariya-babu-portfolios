
import { cn } from "@/lib/utils";
import React from "react";

interface SkillCardProps {
  skill: string;
  level?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SkillCard = ({ skill, level = 90, className, style }: SkillCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105",
        className
      )}
      style={style}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="font-medium text-white">{skill}</span>
        <span className="text-sm text-white/80">{level}%</span>
      </div>
      <div className="w-full bg-white/20 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

export default SkillCard;
