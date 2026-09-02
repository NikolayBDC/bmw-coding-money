"use client";

import { useAuth } from "@/lib/auth-context";
import { useProgress } from "@/lib/progress-context";
import { modules } from "@/data/mockData";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CheckCircle, Lock, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const { user } = useAuth();
  const { getOverallProgress, getModuleProgress, completedLessons } = useProgress();

  const overall = getOverallProgress();
  const completedModulesCount = modules.filter((m) => m.status === "completed").length;
  const totalModules = modules.length;

  const nextLesson = modules
    .flatMap((m) => m.lessons.map((l) => ({ ...l, moduleId: m.id })))
    .find((l) => !completedLessons.includes(l.id));

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Добро пожаловать, {user?.name}</h1>
        <p className="text-gray-400">BMW CODING MONEY — панель обучения</p>
      </div>

      <Card className="p-6">
        <div className="flex items-end justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold mb-1">ПРОГРЕСС ОБУЧЕНИЯ</h2>
            <p className="text-gray-400 text-sm">
              {completedModulesCount} из {totalModules} модулей
            </p>
          </div>
          <span className="text-4xl font-bold text-bmw-red">{overall}%</span>
        </div>
        <ProgressBar value={overall} showLabel />
      </Card>

      {nextLesson && (
        <Card className="p-6 bg-bmw-dark border-bmw-red/30">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <Badge variant="info" className="mb-2">Следующий урок</Badge>
              <h2 className="text-2xl font-bold mb-1">{nextLesson.title}</h2>
              <p className="text-gray-400">{nextLesson.duration} минут</p>
              <ProgressBar value={60} className="mt-3" />
            </div>
            <Link href={`/dashboard/lesson/${nextLesson.id}`}>
              <Button size="lg">
                Продолжить обучение <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Card>
      )}

      <div>
        <h2 className="text-2xl font-bold mb-6">МОДУЛИ</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod) => {
            const progress = getModuleProgress(mod.id);
            const status = mod.status;
            return (
              <Link key={mod.id} href={`/dashboard/module/${mod.id}`}>
                <Card className="p-5 h-full">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-mono text-gray-400">{mod.id}</span>
                    {status === "completed" ? (
                      <Badge variant="success"><CheckCircle className="h-3 w-3 mr-1" /> Завершено</Badge>
                    ) : status === "in_progress" ? (
                      <Badge variant="warning"><Clock className="h-3 w-3 mr-1" /> В процессе</Badge>
                    ) : (
                      <Badge variant="default"><Lock className="h-3 w-3 mr-1" /> Заблокировано</Badge>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{mod.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{mod.description}</p>
                  <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
                    <span>{mod.lessons.length} уроков</span>
                    <span>{progress}%</span>
                  </div>
                  <ProgressBar value={progress} />
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
