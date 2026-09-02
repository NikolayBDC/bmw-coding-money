"use client";

import { useAuth } from "@/lib/auth-context";
import { useProgress } from "@/lib/progress-context";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Award, Mail, Calendar } from "lucide-react";

export default function ProfilePage() {
  const { user } = useAuth();
  const { getOverallProgress } = useProgress();
  const overall = getOverallProgress();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">МОЙ ПРОФИЛЬ</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-16 w-16 rounded-full bg-bmw-red/10 border border-bmw-red/30 flex items-center justify-center text-2xl font-bold text-bmw-red">
              {user?.name.charAt(0)}
            </div>
            <div>
              <h2 className="text-2xl font-bold">{user?.name}</h2>
              <p className="text-gray-400 flex items-center gap-1"><Mail className="h-4 w-4" /> {user?.email}</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Calendar className="h-4 w-4" /> Дата регистрации: {user?.registrationDate}
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-400">Общий прогресс</span>
                <span className="text-sm text-gray-400">{overall}%</span>
              </div>
              <ProgressBar value={overall} />
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">СЕРТИФИКАТ</h3>
          <div className="border border-dashed border-gray-600 rounded-lg p-6 text-center">
            <Award className="h-12 w-12 text-gray-500 mx-auto mb-3" />
            <p className="text-gray-500">Сертификат будет доступен после завершения курса.</p>
            <Badge variant="default" className="mt-2">Заблокировано</Badge>
          </div>
        </Card>
      </div>
    </div>
  );
}
