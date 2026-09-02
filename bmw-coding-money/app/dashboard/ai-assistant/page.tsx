"use client";

import { aiTools } from "@/data/mockData";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Bot, ArrowRight } from "lucide-react";

export default function AIAssistantPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">BMW AI ASSISTANT</h1>
        <p className="text-gray-400">Набор AI-инструментов для BMW-кодировщика</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {aiTools.map((tool) => (
          <Card key={tool.id} className="p-6 flex flex-col">
            <Bot className="h-10 w-10 text-bmw-red mb-4" />
            <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
            <p className="text-gray-400 flex-1">{tool.description}</p>
            <Button variant="ghost" className="mt-4 self-start">
              Открыть <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
