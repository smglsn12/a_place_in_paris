import { MapPin } from "lucide-react";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-full ${
          inverted ? "bg-cream text-ink" : "bg-ink text-cream"
        }`}
      >
        <MapPin size={18} strokeWidth={2.2} />
      </span>
      <span
        className={`font-serif text-lg leading-none font-semibold tracking-tight ${
          inverted ? "text-cream" : "text-ink"
        }`}
      >
        A Place in Paris
      </span>
    </span>
  );
}
