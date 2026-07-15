import styles from "../../styles/components/ProductViewControls.module.css";

const GridIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <rect x="0" y="0" width="7" height="7" rx="1" />
    <rect x="9" y="0" width="7" height="7" rx="1" />
    <rect x="0" y="9" width="7" height="7" rx="1" />
    <rect x="9" y="9" width="7" height="7" rx="1" />
  </svg>
);

const ListIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <rect x="0" y="0"  width="16" height="3" rx="1" />
    <rect x="0" y="6"  width="16" height="3" rx="1" />
    <rect x="0" y="12" width="16" height="3" rx="1" />
  </svg>
);

const PAGE_SIZES = [10, 25];

export const ProductViewControls = ({
  total,
  pageSize,
  view,
  onPageSizeChange,
  onViewChange,
}) => (
  <div className={styles.bar}>
    <div className={styles.left}>
      <span className={styles.total}>{total} productos</span>
      <span>· Mostrar:</span>
      {PAGE_SIZES.map((n) => (
        <button
          key={n}
          className={`${styles.size__btn} ${pageSize === n ? styles["size__btn--active"] : ""}`}
          onClick={() => onPageSizeChange(n)}
        >
          {n}
        </button>
      ))}
    </div>

    <div className={styles.right}>
      <button
        className={`${styles.view__btn} ${view === "grid" ? styles["view__btn--active"] : ""}`}
        onClick={() => onViewChange("grid")}
        title="Vista mosaico"
      >
        <GridIcon />
      </button>
      <button
        className={`${styles.view__btn} ${view === "list" ? styles["view__btn--active"] : ""}`}
        onClick={() => onViewChange("list")}
        title="Vista lista"
      >
        <ListIcon />
      </button>
    </div>
  </div>
);
