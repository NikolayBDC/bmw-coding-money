import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "danger" | "info";
}

export const Badge = ({ className, variant = "default", ...props }: BadgeProps) => {
  const variants = {
    default: "bg-gray-700 text-gray-200",
    success: "bg-green-900/30 text-green-400 border border-green-500/30",
    warning: "bg-yellow-900/30 text-yellow-400 border border-yellow-500/30",
    danger: "bg-red-900/30 text-red-400 border border-red-500/30",
    info: "bg-blue-900/30 text-blue-400 border border-blue-500/30",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        variants[variant],
        className
      )}
      {...props}
    />
  );
};
