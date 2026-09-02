"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BookOpen, FlaskConical, FileText, Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Обзор", icon: LayoutDashboard },
  { href: "/dashboard/module/01", label: "Обучение", icon: BookOpen },
  { href: "/dashboard/practice", label: "Практика", icon: FlaskConical },
  { href: "/dashboard/materials", label: "Материалы", icon: FileText },
  { href: "/dashboard/ai-assistant", label: "AI", icon: Bot },
  { href: "/dashboard/profile", label: "Профиль", icon: User },
];

export function MobileNav() {
  const pathname = usePathname();
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-bmw-dark border-t border-gray-800">
      <div className="grid grid-cols-6 h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center text-xs gap-1",
                isActive ? "text-bmw-red" : "text-gray-500"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span className="truncate">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
