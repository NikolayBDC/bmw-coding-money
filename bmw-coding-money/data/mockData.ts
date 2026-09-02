import { Module, User, Material, Task, AITool, Progress } from "@/types";

export const demoUser: User = {
  id: "1",
  name: "Николай BDC",
  email: "demo@bmwcoding.money",
  registrationDate: "2024-01-15",
  completedModules: 1,
  progress: 62,
};

export const modules: Module[] = [
  {
    id: "00",
    title: "СТАРТ",
    description: "Познакомимся с BMW-кодированием и системой обучения.",
    status: "completed",
    lessons: [
      {
        id: "0-1",
        title: "Что такое BMW-кодирование",
        duration: 12,
        type: "video",
        completed: true,
        learningPoints: ["Понять, что такое кодирование BMW", "Узнать, как устроен курс"],
        description: "Введение в тему кодирования BMW.",
        task: "Посмотреть видео и записать основные термины.",
      },
      {
        id: "0-2",
        title: "Как устроено обучение",
        duration: 10,
        type: "video",
        completed: true,
        learningPoints: ["Ориентироваться в платформе", "Понять структуру модулей"],
        description: "Обзор платформы и методики обучения.",
        task: "Изучить интерфейс и отметить первый урок.",
      },
    ],
  },
  {
    id: "01",
    title: "РАБОЧЕЕ МЕСТО",
    description: "Ноутбук, кабели, адаптеры, питание и подготовка рабочего места.",
    status: "in_progress",
    lessons: [
      {
        id: "1-1",
        title: "Какой компьютер нужен",
        duration: 12,
        type: "video",
        completed: true,
        learningPoints: ["Требования к ноутбуку", "Рекомендации по ОС"],
        description: "Разбор минимальных требований к компьютеру для BMW-кодирования.",
        task: "Проверить свой компьютер на соответствие.",
      },
      {
        id: "1-2",
        title: "Кабели и интерфейсы",
        duration: 18,
        type: "video",
        completed: false,
        learningPoints: ["Типы кабелей", "Разъёмы BMW"],
        description: "Обзор необходимых кабелей и адаптеров.",
        task: "Составить список необходимого оборудования.",
      },
      {
        id: "1-3",
        title: "ENET",
        duration: 15,
        type: "video",
        completed: false,
        materials: ["pdf1", "checklist1"],
        learningPoints: ["Что такое ENET", "Как подключить BMW через ENET"],
        description: "Подробное руководство по подключению через ENET-кабель.",
        task: "Практическое задание: подключить автомобиль через ENET (если есть доступ).",
      },
    ],
  },
  {
    id: "02",
    title: "BMW И АРХИТЕКТУРА",
    description: "E/F/G-серии, ECU, блоки управления и основные понятия.",
    status: "locked",
    lessons: [
      {
        id: "2-1",
        title: "Поколения BMW",
        duration: 20,
        type: "video",
        completed: false,
        learningPoints: ["E, F, G серии", "Отличия архитектуры"],
        description: "Обзор поколений BMW и их электронных архитектур.",
      },
      {
        id: "2-2",
        title: "ECU и блоки управления",
        duration: 25,
        type: "video",
        completed: false,
        learningPoints: ["Что такое ECU", "Основные блоки"],
        description: "Изучение электронных блоков управления.",
      },
    ],
  },
  {
    id: "03",
    title: "SOFTWARE",
    description: "ISTA, E-Sys, BimmerCode, BimmerUtility, Tool32 и другие инструменты.",
    status: "locked",
    lessons: [
      {
        id: "3-1",
        title: "Обзор программ",
        duration: 22,
        type: "video",
        completed: false,
        learningPoints: ["ISTA", "E-Sys", "BimmerCode"],
        description: "Знакомство с основным ПО для BMW.",
      },
    ],
  },
  {
    id: "04",
    title: "КОДИРОВАНИЕ",
    description: "Практическая работа с BMW.",
    status: "locked",
    lessons: [
      {
        id: "4-1",
        title: "Первое кодирование",
        duration: 30,
        type: "video",
        completed: false,
        learningPoints: ["Безопасное кодирование", "Простые опции"],
        description: "Первое практическое кодирование автомобиля.",
      },
    ],
  },
  {
    id: "05",
    title: "ДИАГНОСТИКА",
    description: "Основы диагностики BMW.",
    status: "locked",
    lessons: [
      {
        id: "5-1",
        title: "Чтение ошибок",
        duration: 20,
        type: "video",
        completed: false,
        learningPoints: ["Считывание кодов ошибок", "Интерпретация"],
        description: "Основы диагностики и чтения ошибок.",
      },
    ],
  },
  {
    id: "06",
    title: "РЕТРОФИТЫ",
    description: "Логика работы с дооснащением.",
    status: "locked",
    lessons: [
      {
        id: "6-1",
        title: "Что такое ретрофит",
        duration: 18,
        type: "video",
        completed: false,
        learningPoints: ["Виды ретрофитов", "Необходимое оборудование"],
        description: "Введение в ретрофиты BMW.",
      },
    ],
  },
  {
    id: "07",
    title: "УДАЛЁННАЯ РАБОТА",
    description: "Как организовать удалённое выполнение услуг.",
    status: "locked",
    lessons: [
      {
        id: "7-1",
        title: "Инструменты удалённой работы",
        duration: 15,
        type: "video",
        completed: false,
        learningPoints: ["TeamViewer", "AnyDesk", "VPN"],
        description: "Организация удалённого доступа.",
      },
    ],
  },
  {
    id: "08",
    title: "КЛИЕНТЫ И ПРОДАЖИ",
    description: "Как превратить технический навык в услугу.",
    status: "locked",
    lessons: [
      {
        id: "8-1",
        title: "Поиск первых клиентов",
        duration: 25,
        type: "video",
        completed: false,
        learningPoints: ["Площадки для поиска", "Продвижение"],
        description: "Стратегии привлечения клиентов.",
      },
    ],
  },
  {
    id: "09",
    title: "BMW CODING MONEY",
    description: "Финальная бизнес-система.",
    status: "locked",
    lessons: [
      {
        id: "9-1",
        title: "Итоговая система",
        duration: 40,
        type: "video",
        completed: false,
        learningPoints: ["Объединение знаний", "Бизнес-модель"],
        description: "Финальный модуль: превращение навыков в бизнес.",
      },
    ],
  },
];

export const materials: Material[] = [
  {
    id: "pdf1",
    title: "Инструкция по ENET подключению",
    type: "PDF",
    size: "2.4 MB",
    description: "Пошаговая инструкция по подключению через ENET кабель",
  },
  {
    id: "checklist1",
    title: "Чек-лист подготовки рабочего места",
    type: "Checklist",
    size: "0.5 MB",
    description: "Проверьте всё перед началом работы",
  },
  {
    id: "table1",
    title: "Таблица совместимости кабелей",
    type: "Table",
    size: "0.8 MB",
    description: "Сравнение кабелей для разных серий BMW",
  },
  {
    id: "files1",
    title: "Архив с драйверами ENET",
    type: "Files",
    size: "15 MB",
    description: "Необходимые драйверы для работы с ENET",
  },
  {
    id: "ai-prompts1",
    title: "AI Prompts для диагностики",
    type: "AI Prompts",
    size: "0.1 MB",
    description: "Готовые промпты для AI-ассистента",
  },
];

export const tasks: Task[] = [
  {
    id: "task1",
    title: "Практика №01",
    description: "Подключить BMW через ENET.",
    status: "not_completed",
    difficulty: "Средняя",
  },
  {
    id: "task2",
    title: "Практика №02",
    description: "Определить поколение BMW и соответствующий интерфейс.",
    status: "completed",
    difficulty: "Лёгкая",
  },
  {
    id: "task3",
    title: "Практика №03",
    description: "Считать VIN и расшифровать.",
    status: "not_completed",
    difficulty: "Средняя",
  },
  {
    id: "task4",
    title: "Практика №04",
    description: "Выполнить простое кодирование (например, активация цифрового спидометра).",
    status: "not_completed",
    difficulty: "Высокая",
  },
];

export const aiTools: AITool[] = [
  {
    id: "ai1",
    title: "Анализ ошибки BMW",
    description: "Помощь в структурировании диагностической информации.",
  },
  {
    id: "ai2",
    title: "Разбор VIN",
    description: "Помощь в структурировании информации об автомобиле.",
  },
  {
    id: "ai3",
    title: "Ответ клиенту",
    description: "Создание профессионального ответа клиенту.",
  },
  {
    id: "ai4",
    title: "Создание объявления",
    description: "Помощь в подготовке объявления об услуге.",
  },
  {
    id: "ai5",
    title: "Пост для Drive2",
    description: "Создание технического контента.",
  },
  {
    id: "ai6",
    title: "Диагностический алгоритм",
    description: "Помощь в формировании последовательности проверки.",
  },
];

export const initialProgress: Progress = {
  completedLessons: ["0-1", "0-2", "1-1"],
};
