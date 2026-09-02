import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  ChevronRight,
  Play,
  FileText,
  CheckCircle,
  FlaskConical,
  Bot,
  Users,
  Sparkles,
  ArrowDown,
} from "lucide-react";

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-bmw-black">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-6 py-24 text-center md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-bmw-black/60 via-transparent to-bmw-black" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-8xl">
            BMW CODING <span className="text-bmw-red">MONEY</span>
          </h1>
          <p className="mt-6 text-xl font-medium text-gray-300 md:text-2xl">
            Освой BMW-кодирование с нуля
          </p>
          <p className="mt-2 text-lg text-gray-400">
            и преврати навык в профессию.
          </p>
          <p className="mt-6 text-md text-gray-400 max-w-2xl mx-auto">
            «Практическое обучение BMW-кодированию, диагностике и удалённой работе. Реальные автомобили. Реальные кейсы. Пошаговая система.»
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-bmw-red hover:bg-bmw-darkred text-white px-8 py-3">
              Начать обучение
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-gray-200 hover:bg-gray-800 px-8 py-3">
              Посмотреть программу
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Что ты получишь */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            НЕ ПРОСТО <span className="text-bmw-red">КУРС</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Play, title: "Практические видео", text: "Реальная работа с BMW и диагностическим оборудованием." },
              { icon: FileText, title: "PDF-инструкции", text: "Подробные пошаговые материалы." },
              { icon: CheckCircle, title: "Чек-листы", text: "Чтобы не забывать важные действия перед работой." },
              { icon: FlaskConical, title: "Практика", text: "Не просто смотри — выполняй задания самостоятельно." },
              { icon: Bot, title: "BMW AI Assistant", text: "Набор AI-инструментов для работы специалиста." },
              { icon: Users, title: "Наставничество", text: "Возможность получить обратную связь." },
            ].map((item, idx) => (
              <Card key={idx} className="p-6 hover:border-bmw-red/50">
                <item.icon className="h-10 w-10 text-bmw-red mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Твой путь */}
      <section className="px-6 py-16 md:py-24 bg-bmw-dark/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            ТВОЙ <span className="text-bmw-red">ПУТЬ</span>
          </h2>
          <div className="space-y-4">
            {[
              "01 СТАРТ",
              "02 РАБОЧЕЕ МЕСТО",
              "03 BMW И АРХИТЕКТУРА",
              "04 SOFTWARE",
              "05 КОДИРОВАНИЕ",
              "06 ДИАГНОСТИКА",
              "07 РЕТРОФИТЫ",
              "08 УДАЛЁННАЯ РАБОТА",
              "09 КЛИЕНТЫ",
              "10 BMW CODING MONEY",
            ].map((step, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-bmw-red/10 border border-bmw-red/30 flex items-center justify-center text-bmw-red font-bold">
                  {idx + 1}
                </div>
                <span className="text-lg md:text-xl">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Реальная практика */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            ТЫ НЕ БУДЕШЬ УЧИТЬСЯ <span className="text-bmw-red">НА ТЕОРИИ</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
            «Основная часть обучения построена вокруг реальных автомобилей, реального оборудования и реальных рабочих сценариев.»
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["BMW", "Laptop", "ISTA", "E-Sys", "ENET", "Diagnostics", "Coding"].map((item) => (
              <span key={item} className="px-6 py-2 bg-bmw-graphite border border-gray-700 rounded-full text-sm font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistant */}
      <section className="px-6 py-16 md:py-24 bg-bmw-dark/50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            BMW <span className="text-bmw-red">AI ASSISTANT</span>
          </h2>
          <p className="text-lg text-gray-400 mb-12">
            «Твой дополнительный цифровой помощник во время обучения и работы.»
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "АНАЛИЗ ОШИБКИ",
              "РАЗБОР VIN",
              "ДИАГНОСТИЧЕСКИЙ АЛГОРИТМ",
              "ОТВЕТ КЛИЕНТУ",
              "СОЗДАНИЕ ОБЪЯВЛЕНИЯ",
              "КОНТЕНТ",
            ].map((item) => (
              <div key={item} className="p-4 bg-bmw-graphite border border-gray-700 rounded-lg hover:border-bmw-red/50 transition-colors">
                <Sparkles className="h-6 w-6 text-bmw-red mx-auto mb-2" />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Для кого */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            ДЛЯ <span className="text-bmw-red">КОГО</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2">НОВИЧОК</h3>
              <p className="text-gray-400">«Никогда не работал с BMW-кодированием.»</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2">ВЛАДЕЛЕЦ BMW</h3>
              <p className="text-gray-400">«Хочет самостоятельно разбираться в своём автомобиле.»</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2">БУДУЩИЙ СПЕЦИАЛИСТ</h3>
              <p className="text-gray-400">«Хочет превратить навык в оплачиваемую услугу.»</p>
            </Card>
          </div>
        </div>
      </section>

      {/* После курса */}
      <section className="px-6 py-16 md:py-24 bg-bmw-dark/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            ЧТО ТЫ БУДЕШЬ <span className="text-bmw-red">УМЕТЬ</span>
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Понимать основные принципы BMW-кодирования",
              "Ориентироваться в поколениях BMW",
              "Работать с основным программным обеспечением",
              "Подключать автомобиль",
              "Выполнять практические задачи",
              "Понимать основы диагностики",
              "Работать с типовыми задачами",
              "Понимать принцип ретрофитов",
              "Организовать удалённую работу",
              "Формировать услуги",
              "Искать первых клиентов",
            ].map((skill, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-bmw-red mt-0.5 flex-shrink-0" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            FAQ
          </h2>
          <div className="space-y-4">
            {[
              "Нужен ли мне опыт?",
              "Нужен ли собственный BMW?",
              "Какой ноутбук нужен?",
              "Какое оборудование потребуется?",
              "Смогу ли я работать удалённо?",
              "Сколько длится обучение?",
              "Будет ли обратная связь?",
            ].map((question) => (
              <details key={question} className="bg-bmw-graphite border border-gray-700 rounded-lg p-4">
                <summary className="font-medium cursor-pointer">{question}</summary>
                <p className="mt-2 text-gray-400">Ответ будет добавлен позже.</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center bg-bmw-dark/50">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          ГОТОВ <span className="text-bmw-red">НАЧАТЬ?</span>
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          BMW CODING MONEY
        </p>
        <p className="text-gray-400 mb-10">«От первого подключения к BMW — до первых клиентов.»</p>
        <Button size="xl" className="bg-bmw-red hover:bg-bmw-darkred">
          Начать обучение
          <ChevronRight className="ml-2 h-6 w-6" />
        </Button>
      </section>
    </main>
  );
}
