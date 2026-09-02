import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Lock } from "lucide-react";

export default function AdminPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">ADMIN</h1>
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Lock className="h-5 w-5 text-gray-500" />
          <Badge variant="default">Концепция</Badge>
        </div>
        <p className="text-gray-400">
          В будущем здесь будут: Dashboard, Ученики, Модули, Уроки, Материалы, Практические задания, AI Tools, Статистика, Настройки.
        </p>
        <p className="text-gray-500 mt-2">Сейчас доступен только mock UI.</p>
      </Card>
    </div>
  );
}
