"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { IMG } from "@/lib/img";
import s from "./InfoModal.module.css";

type Props = { open: boolean; onClose: () => void; title: React.ReactNode; children: React.ReactNode };

export default function InfoModal({ open, onClose, title, children }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;
  return createPortal(
    <div className={s.overlay} onClick={onClose}>
      <div className={s.box} role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <div className={s.head}>
          <h3 className="t-h3">{title}</h3>
          <button className={s.close} onClick={onClose} aria-label="Закрыть" autoFocus>
            <img src={IMG.close32} alt="" width={32} height={32} />
          </button>
        </div>
        <div className={`t-body3 ${s.body}`}>{children}</div>
      </div>
    </div>,
    document.body,
  );
}
