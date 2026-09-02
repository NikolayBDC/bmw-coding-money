"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BookOpen, FlaskConical, FileText, Bot, User, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/lib/auth-context";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/module/01", label: "Обучение", icon: BookOpen },
  { href: "/dashboard/practice", label: "Практика", icon: FlaskConical },
  { href: "/dashboard/materials", label: "Материалы", icon: FileText },
  { href: "/dashboard/ai-assistant", label: "BMW AI Assistant", icon: Bot },
  { href: "/dashboard/profile", label: "Профиль", icon: User },
  { href: "/dashboard/admin", label: "Настройки", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const { user } = useAuth();

  return (
    <aside className="hidden md:flex flex-col fixed inset-y-0 left-0 w-64 bg-bmw-dark border-r border-gray-800 z-40">
      <div className="p-6 border-b border-gray-800">
        <Link href="/" className="block">
          <h1 className="text-xl font-bold leading-tight">
            BMW CODING <br />
            <span className="text-bmw-red">MONEY</span>
          </h1>
          <p className="mt-1 text-xs text-gray-500">by Nikolay BDC</p>
        </Link>
      </div>
      <nav className="flex-1 px-4 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center px-4 py-2.5 rounded-md text-sm font-medium transition-colors",
                isActive
                  ? "bg-bmw-red/10 text-bmw-red"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              )}
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-gray-800">
        <div className="text-xs text-gray-500 mb-2">Статус ученика</div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-500" />
          <span className="text-sm text-gray-300">Active</span>
        </div>
        <div className="mt-2 text-xs text-gray-500">Тариф: Demo</div>
      </div>
    </aside>
  );
}
