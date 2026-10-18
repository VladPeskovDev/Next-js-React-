import LawyerPhoto from "./LawyerPhoto";

/** Фото адвоката + цитата (Body 1). */
export default function Statement({ children }: { children: React.ReactNode }) {
  return (
    <section className="statement" style={{ width: "100%", padding: "0 120px", display: "flex", gap: 40, alignItems: "center" }}>
      <LawyerPhoto width={178} height={143.047} />
      <p className="t-body1" style={{ flex: "1 0 0", minWidth: 1 }}>{children}</p>
    </section>
  );
}
