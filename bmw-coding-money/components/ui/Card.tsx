import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-lg bg-bmw-graphite border border-gray-800 shadow-card",
        hover && "hover:border-bmw-red/50 hover:shadow-glow-red transition-all",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";
