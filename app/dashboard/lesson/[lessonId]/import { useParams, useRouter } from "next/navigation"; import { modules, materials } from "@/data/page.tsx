"use client";

import type { Material } from "@/types";
import { useParams, useRouter } from "next/navigation";
import { modules, materials } from "@/data/mockData";
import { useProgress } from "@/lib/progress-context";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { VideoPlayer } from "@/components/VideoPlayer";
import { CheckCircle, ChevronLeft, ChevronRight, FileText, ClipboardCheck, Package } from "lucide-react";

export default function LessonPage() {
  const { lessonId } = useParams();
  const router = useRouter();
  const { completedLessons, toggleLessonCompletion } = useProgress();

  const moduleData = modules.find((m) => m.lessons.some((l) => l.id === lessonId));
  const lesson = moduleData?.lessons.find((l) => l.id === lessonId);
  if (!moduleData || !lesson) return <div>Урок не найден</div>;

  const isCompleted = completedLessons.includes(lesson.id);
  const currentIndex = moduleData.lessons.findIndex((l) => l.id === lesson.id);
  const prevLesson = moduleData.lessons[currentIndex - 1];
  const nextLesson = moduleData.lessons[currentIndex + 1];

  const lessonMaterials: Material[] = [];

if (lesson.materials) {
  for (const id of lesson.materials) {
    const material = materials.find((m) => m.id === id);
    if (material) {
      lessonMaterials.push(material);
    }
  }
}
  
  return (
    <div className="max-w-4xl mx-auto">
      <nav className="text-sm text-gray-400 mb-4">
        Модуль {moduleData.id} → Урок {lesson.id}
      </nav>

      <h1 className="text-3xl font-bold mb-2">{lesson.title}</h1>
      <p className="text-gray-400 mb-6">Продолжительность: {lesson.duration} минут</p>

      <VideoPlayer />

      <div className="mt-8 space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-3">Что ты узнаешь</h2>
          <ul className="space-y-2">
            {lesson.learningPoints?.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-bmw-red mt-0.5 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Описание урока</h2>
          <p className="text-gray-300">{lesson.description}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Материалы</h2>
          <div className="grid gap-2">
            {lessonMaterials.map((mat) => (
              <div key={mat.id} className="flex items-center justify-between p-3 bg-bmw-graphite rounded-lg border border-gray-800">
                <div className="flex items-center gap-2">
                  {mat.type === "PDF" ? (
                    <FileText className="h-5 w-5 text-bmw-red" />
                  ) : mat.type === "Checklist" ? (
                    <ClipboardCheck className="h-5 w-5 text-bmw-red" />
                  ) : (
                    <Package className="h-5 w-5 text-bmw-red" />
                  )}
                  <span>{mat.title}</span>
                </div>
                <Button variant="outline" size="sm">Скачать</Button>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Практическое задание</h2>
          <Card className="p-4">
            <p className="text-gray-300 mb-2">{lesson.task}</p>
            <Button variant="outline">Перейти к заданию</Button>
          </Card>
        </section>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
          {prevLesson ? (
            <Button variant="ghost" onClick={() => router.push(`/dashboard/lesson/${prevLesson.id}`)}>
              <ChevronLeft className="mr-2 h-4 w-4" /> Предыдущий урок
            </Button>
          ) : <span />}
          <Button
            onClick={() => toggleLessonCompletion(lesson.id)}
            variant={isCompleted ? "secondary" : "default"}
          >
            {isCompleted ? (
              <>
                <CheckCircle className="mr-2 h-4 w-4" /> Завершено
              </>
            ) : (
              "Завершить урок"
            )}
          </Button>
          {nextLesson ? (
            <Button variant="ghost" onClick={() => router.push(`/dashboard/lesson/${nextLesson.id}`)}>
              Следующий урок <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          ) : <span />}
        </div>
      </div>
    </div>
  );
}
