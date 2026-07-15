import styles from "../../styles/components/Pagination.module.css";

function buildPages(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const pages = new Set([1, total, current]);
  for (let d = 1; d <= 2; d++) {
    if (current - d > 1)     pages.add(current - d);
    if (current + d < total) pages.add(current + d);
  }

  const sorted = [...pages].sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < sorted.length; i++) {
    if (i > 0 && sorted[i] - sorted[i - 1] > 1) result.push("…");
    result.push(sorted[i]);
  }
  return result;
}

export const Pagination = ({ current, total, onChange }) => {
  if (total <= 1) return null;

  const pages = buildPages(current, total);

  return (
    <nav className={styles.container} aria-label="Paginación">
      <button
        className={styles.btn}
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
      >
        ← Anterior
      </button>

      {pages.map((p, i) =>
        p === "…" ? (
          <span key={`ellipsis-${i}`} className={styles.ellipsis}>…</span>
        ) : (
          <button
            key={p}
            className={`${styles.btn} ${p === current ? styles["btn--active"] : ""}`}
            onClick={() => onChange(p)}
          >
            {p}
          </button>
        )
      )}

      <button
        className={styles.btn}
        onClick={() => onChange(current + 1)}
        disabled={current === total}
      >
        Siguiente →
      </button>
    </nav>
  );
};
