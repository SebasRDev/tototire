import { useState } from "react";
import styles from "../../styles/components/ProductFilters.module.css";

const GROUPS = [
  { key: "marca",  label: "Marca",  optionsKey: "marcas"   },
  { key: "rin",    label: "Rin",    optionsKey: "rines"    },
  { key: "ancho",  label: "Ancho",  optionsKey: "anchos"   },
  { key: "perfil", label: "Perfil", optionsKey: "perfiles" },
];

export const ProductFilters = ({
  filterOptions,
  activeFilters,
  onFilterChange,
  onClearAll,
}) => {
  const [open, setOpen] = useState(false);

  const totalActive = Object.values(activeFilters).reduce(
    (sum, arr) => sum + arr.length,
    0
  );

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`${styles.overlay} ${open ? styles["overlay--open"] : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Filter panel */}
      <aside className={`${styles.panel} ${open ? styles["panel--open"] : ""}`}>
        <button className={styles.close} onClick={() => setOpen(false)} aria-label="Cerrar filtros">
          ×
        </button>

        <div className={styles.header}>
          <h3 className={styles.title}>Filtros</h3>
          {totalActive > 0 && (
            <button className={styles.clear} onClick={onClearAll}>
              Limpiar todo
            </button>
          )}
        </div>

        {GROUPS.map(({ key, label, optionsKey }) => {
          const options = filterOptions[optionsKey] ?? [];
          if (options.length === 0) return null;
          return (
            <div key={key} className={styles.group}>
              <h4 className={styles.group__title}>{label}</h4>
              <ul className={styles.list}>
                {options.map((opt) => {
                  const val = String(opt);
                  const checked = activeFilters[key]?.includes(val) ?? false;
                  return (
                    <li key={val}>
                      <label
                        className={`${styles.option} ${checked ? styles["option--active"] : ""}`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={(e) => onFilterChange(key, val, e.target.checked)}
                        />
                        <span>{val}</span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </aside>

      {/* Mobile floating button */}
      <button className={styles.toggle} onClick={() => setOpen(true)}>
        Filtros
        {totalActive > 0 && (
          <span className={styles.toggle__badge}>{totalActive}</span>
        )}
      </button>
    </>
  );
};
