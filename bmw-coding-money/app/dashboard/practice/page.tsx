"use client";

import { tasks } from "@/data/mockData";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CheckCircle, AlertCircle } from "lucide-react";

export default function PracticePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">ПРАКТИКА</h1>
      <div className="space-y-4">
        {tasks.map((task) => (
          <Card key={task.id} className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-gray-400">{task.id}</span>
                  {task.status === "completed" ? (
                    <Badge variant="success"><CheckCircle className="h-3 w-3 mr-1" /> Выполнено</Badge>
                  ) : (
                    <Badge variant="warning"><AlertCircle className="h-3 w-3 mr-1" /> Не выполнено</Badge>
                  )}
                </div>
                <h2 className="text-xl font-semibold mb-1">{task.title}</h2>
                <p className="text-gray-400">{task.description}</p>
                <p className="text-sm text-gray-500 mt-2">Сложность: {task.difficulty}</p>
              </div>
              <Button variant="outline">
                {task.status === "completed" ? "Просмотреть" : "Начать практику"}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
