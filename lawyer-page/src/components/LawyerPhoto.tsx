import { IMG } from "@/lib/img";

/** Фото адвоката с кадрированием как в макете (одинаковые проценты для всех размеров). */
export default function LawyerPhoto({ width, height, className }: { width: number; height: number; className?: string }) {
  return (
    <div className={className} style={{ position: "relative", width, height, flexShrink: 0, overflow: "hidden" }}>
      <img
        src={IMG.lawyer}
        alt="Адвокат Песков В.С."
        style={{ position: "absolute", height: "160.48%", width: "193.45%", left: "-46.55%", top: "-30.02%", maxWidth: "none" }}
      />
    </div>
  );
}
