"use client";

import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/Button";
import { LogOut } from "lucide-react";
import Link from "next/link";

export function Topbar() {
  const { user, logout } = useAuth();
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-4 md:px-8 bg-bmw-dark/90 backdrop-blur border-b border-gray-800">
      <Link href="/" className="md:hidden">
        <span className="font-bold text-lg">BMW CODING <span className="text-bmw-red">MONEY</span></span>
      </Link>
      <div className="hidden md:flex items-center gap-4">
        <span className="text-sm text-gray-400">Добро пожаловать, {user?.name}</span>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" onClick={logout}>
          <LogOut className="h-4 w-4 mr-2" /> Выйти
        </Button>
      </div>
    </header>
  );
}
