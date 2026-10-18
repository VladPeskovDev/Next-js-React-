"use client";

import { useState } from "react";
import InfoModal from "./InfoModal";

/** Кнопка «Подробнее» (Botton secondary) + модальное окно из макета. */
export default function MoreButton({
  title,
  children,
  label = "Подробнее",
  className,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
  label?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" className={className ?? "btn-secondary"} onClick={() => setOpen(true)}>
        {label}
      </button>
      <InfoModal open={open} onClose={() => setOpen(false)} title={title}>
        {children}
      </InfoModal>
    </>
  );
}
