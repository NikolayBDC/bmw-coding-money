"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { initialProgress, modules } from "@/data/mockData";

interface ProgressContextType {
  completedLessons: string[];
  toggleLessonCompletion: (lessonId: string) => void;
  getModuleProgress: (moduleId: string) => number;
  getOverallProgress: () => number;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [completedLessons, setCompletedLessons] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("bmw_completed_lessons");
      return saved ? JSON.parse(saved) : initialProgress.completedLessons;
    }
    return initialProgress.completedLessons;
  });

  useEffect(() => {
    localStorage.setItem("bmw_completed_lessons", JSON.stringify(completedLessons));
  }, [completedLessons]);

  const toggleLessonCompletion = (lessonId: string) => {
    setCompletedLessons((prev) =>
      prev.includes(lessonId)
        ? prev.filter((id) => id !== lessonId)
        : [...prev, lessonId]
    );
  };

  const getModuleProgress = (moduleId: string) => {
    const moduleData = modules.find((m) => m.id === moduleId);
    if (!moduleData) return 0;
    const total = moduleData.lessons.length;
    const done = moduleData.lessons.filter((l) => completedLessons.includes(l.id)).length;
    return Math.round((done / total) * 100);
  };

  const getOverallProgress = () => {
    const allLessons = modules.flatMap((m) => m.lessons.map((l) => l.id));
    const done = allLessons.filter((id) => completedLessons.includes(id)).length;
    return Math.round((done / allLessons.length) * 100);
  };

  return (
    <ProgressContext.Provider
      value={{ completedLessons, toggleLessonCompletion, getModuleProgress, getOverallProgress }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) throw new Error("useProgress must be used within ProgressProvider");
  return context;
};
