"use client";

import { useState } from "react";
import { materials } from "@/data/mockData";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FileText, ClipboardCheck, Table, Package, Bot } from "lucide-react";

const typeMap = {
  PDF: FileText,
  Checklist: ClipboardCheck,
  Table: Table,
  Files: Package,
  "AI Prompts": Bot,
};

export default function MaterialsPage() {
  const [filter, setFilter] = useState<string>("All");

  const filtered = filter === "All" ? materials : materials.filter((m) => m.type === filter);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">МАТЕРИАЛЫ</h1>
      <div className="flex flex-wrap gap-2 mb-8">
        {["All", "PDF", "Checklist", "Table", "Files", "AI Prompts"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              filter === f
                ? "bg-bmw-red text-white"
                : "bg-bmw-graphite text-gray-400 hover:bg-gray-700"
            }`}
          >
            {f === "All" ? "Все" : f}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((mat) => {
          const Icon = typeMap[mat.type as keyof typeof typeMap] || FileText;
          return (
            <Card key={mat.id} className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <Icon className="h-6 w-6 text-bmw-red" />
                <span className="text-sm text-gray-400">{mat.type}</span>
              </div>
              <h3 className="font-semibold mb-1">{mat.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{mat.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{mat.size}</span>
                <Button variant="outline" size="sm">Скачать</Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
