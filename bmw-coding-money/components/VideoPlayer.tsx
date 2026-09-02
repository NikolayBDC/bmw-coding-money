import { Play } from "lucide-react";

export function VideoPlayer({ src }: { src?: string }) {
  return (
    <div className="relative aspect-video w-full bg-black rounded-lg overflow-hidden border border-gray-700">
      {src ? (
        <iframe
          src={src}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500">
          <Play className="h-16 w-16 mb-4 text-bmw-red" />
          <p className="text-lg">Видео скоро будет доступно</p>
        </div>
      )}
    </div>
  );
}
