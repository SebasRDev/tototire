import styles from "../../styles/components/FilterChips.module.css";

const LABELS = {
  marca:  "Marca",
  rin:    "Rin",
  ancho:  "Ancho",
  perfil: "Perfil",
};

export const FilterChips = ({ activeFilters, onRemove }) => {
  const chips = Object.entries(activeFilters).flatMap(([type, values]) =>
    values.map((value) => ({ type, value }))
  );

  if (chips.length === 0) return null;

  return (
    <div className={styles.container}>
      {chips.map(({ type, value }) => (
        <span key={`${type}-${value}`} className={styles.chip}>
          <span className={styles.label}>
            {LABELS[type]}: {value}
          </span>
          <button
            className={styles.remove}
            onClick={() => onRemove(type, value)}
            aria-label={`Eliminar filtro ${LABELS[type]} ${value}`}
          >
            ×
          </button>
        </span>
      ))}
    </div>
  );
};
