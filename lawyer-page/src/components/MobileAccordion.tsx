"use client";

import { useState } from "react";

/**
 * Универсальный аккордеон: на мобилке — тоггл через data-атрибут + CSS,
 * на десктопе — body всегда виден (управляется в стилях родительского модуля).
 */
export default function MobileAccordion({
  title,
  children,
  className = "",
  summaryClassName = "",
  bodyClassName = "",
  defaultOpen = false,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  summaryClassName?: string;
  bodyClassName?: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={className} data-open={open}>
      <button
        type="button"
        className={summaryClassName}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {title}
      </button>
      <div className={bodyClassName}>{children}</div>
    </div>
  );
}
