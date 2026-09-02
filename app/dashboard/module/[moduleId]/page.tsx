"use client";

import { useParams, useRouter } from "next/navigation";
import { modules, materials } from "@/data/mockData";
import { useProgress } from "@/lib/progress-context";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle, Lock, PlayCircle, FileText, CheckSquare } from "lucide-react";
import Link from "next/link";

export default function ModulePage() {
  const { moduleId } = useParams();
  const router = useRouter();
  const { completedLessons, getModuleProgress } = useProgress();

  const mod = modules.find((m) => m.id === moduleId);
  if (!mod) return <div>Модуль не найден</div>;

  const progress = getModuleProgress(mod.id);
  const isLocked = mod.status === "locked";

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <p className="text-sm text-gray-400 mb-2">МОДУЛЬ {mod.id}</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{mod.title}</h1>
        <p className="text-gray-400">{mod.description}</p>
        <div className="mt-4 flex items-center gap-4">
          <ProgressBar value={progress} className="flex-1" />
          <span className="text-sm text-gray-400">{progress}%</span>
        </div>
      </div>

      <div className="space-y-3">
        {mod.lessons.map((lesson, idx) => {
          const isCompleted = completedLessons.includes(lesson.id);
          return (
            <Card key={lesson.id} className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-bmw-gray flex items-center justify-center text-sm font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="font-semibold">{lesson.title}</h3>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <span>{lesson.duration} мин</span>
                    {(lesson.materials?.length ?? 0) > 0 && (
                      <>
                        <span className="flex items-center"><FileText className="h-3 w-3 mr-1" /> PDF</span>
                        <span className="flex items-center"><CheckSquare className="h-3 w-3 mr-1" /> Чек-лист</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {isCompleted ? (
                  <Badge variant="success"><CheckCircle className="h-3 w-3 mr-1" /> Завершено</Badge>
                ) : (
                  <Badge variant="default">Не начат</Badge>
                )}
                {isLocked ? (
                  <Lock className="h-5 w-5 text-gray-500" />
                ) : (
                  <Link href={`/dashboard/lesson/${lesson.id}`}>
                    <Button variant="outline" size="sm">
                      <PlayCircle className="h-4 w-4 mr-2" /> Открыть
                    </Button>
                  </Link>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
