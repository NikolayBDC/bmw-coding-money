export interface User {
  id: string;
  name: string;
  email: string;
  registrationDate: string;
  completedModules: number;
  progress: number;
}

export interface Material {
  id: string;
  title: string;
  type: string;
  size: string;
  description: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: number;
  type: string;
  completed: boolean;
  materials?: string[];
  learningPoints?: string[];
  task?: string;
  description?: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  status: "completed" | "in_progress" | "locked";
  lessons: Lesson[];
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: "completed" | "not_completed";
  difficulty: string;
}

export interface AITool {
  id: string;
  title: string;
  description: string;
}

export interface Progress {
  completedLessons: string[];
}
