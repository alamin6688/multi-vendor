import React from "react";
import { formatNumber } from "../utils/formatNumber";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: number;
  target: number;
  suffix: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  delay: string;
}

const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  target,
  suffix,
  description,
  icon: IconComponent,
  gradient,
  delay,
}) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl text-center transition-all duration-300 ease-in-out",
        "bg-white/5 dark:bg-black/5 backdrop-blur-xl",
        "border border-black/10 dark:border-white/10",
        "hover:scale-105 hover:border-black/20 dark:hover:border-white/20 hover:shadow-2xl",
        "opacity-0 animate-fade-in-up",
        delay
      )}
    >
      {/* Icon Container */}
      <div className="relative mb-6">
        <div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${gradient} flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-lg`}
        >
          <IconComponent className="h-8 w-8 text-white" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 via-transparent to-transparent"></div>
        </div>
        {/* Floating Badge */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white/20">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse-slow"></div>
        </div>
      </div>
      {/* Animated Value */}
      <div className="mb-4">
        <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2 font-headline">
          {label === "Customer Rating"
            ? formatNumber(value, true)
            : formatNumber(value)}
          <span className="text-2xl lg:text-3xl ml-1 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {suffix}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-foreground/90 mb-2">
          {label}
        </h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {/* Progress Bar */}
      <div className="mt-6">
        <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
          <div
            className={`h-2 bg-gradient-to-r ${gradient} rounded-full transition-all duration-1000 delay-1000 transform translate-x-0`}
            style={{ width: "85%" }}
          ></div>
        </div>
      </div>
      {/* Hover Glow Effect */}
      <div
        className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-30 transition-all duration-500 blur-2xl -z-10`}
      ></div>
    </div>
  );
};

export default StatCard;
