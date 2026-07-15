import { useState, useMemo } from "react";
import {
  ProductCard,
  ProductFilters,
  FilterChips,
  ProductViewControls,
  Pagination,
} from "../../components";
import styles from "../../styles/pages/Products.module.css";

const EMPTY_FILTERS = { marca: [], rin: [], ancho: [], perfil: [] };

async function fetchProducts(filters) {
  const hasFilters = Object.values(filters).some((arr) => arr.length > 0);
  if (!hasFilters) return null;

  const params = new URLSearchParams();
  filters.marca.forEach((v)  => params.append("marca",  v));
  filters.rin.forEach((v)    => params.append("rin",    v));
  filters.ancho.forEach((v)  => params.append("ancho",  v));
  filters.perfil.forEach((v) => params.append("perfil", v));

  const res  = await fetch(`/api/productos-filtrar?${params}`);
  const json = await res.json();
  return json.data ?? [];
}

const Productos = ({ initialData, filterOptions }) => {
  const [products,      setProducts]      = useState(initialData);
  const [activeFilters, setActiveFilters] = useState(EMPTY_FILTERS);
  const [loading,       setLoading]       = useState(false);
  const [view,          setView]          = useState("grid"); // "grid" | "list"
  const [pageSize,      setPageSize]      = useState(25);
  const [currentPage,   setCurrentPage]   = useState(1);

  const totalPages = Math.ceil(products.length / pageSize);

  const paginated = useMemo(
    () => products.slice((currentPage - 1) * pageSize, currentPage * pageSize),
    [products, currentPage, pageSize]
  );

  const applyFilters = async (nextFilters) => {
    setLoading(true);
    setCurrentPage(1);
    try {
      const result = await fetchProducts(nextFilters);
      setProducts(result ?? initialData);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (type, value, checked) => {
    const nextFilters = {
      ...activeFilters,
      [type]: checked
        ? [...activeFilters[type], value]
        : activeFilters[type].filter((v) => v !== value),
    };
    setActiveFilters(nextFilters);
    applyFilters(nextFilters);
  };

  const handleRemove = (type, value) => handleFilterChange(type, value, false);

  const handleClearAll = () => {
    setActiveFilters(EMPTY_FILTERS);
    setProducts(initialData);
    setCurrentPage(1);
  };

  const handlePageSizeChange = (n) => {
    setPageSize(n);
    setCurrentPage(1);
  };

  const totalActive = Object.values(activeFilters).reduce(
    (n, arr) => n + arr.length, 0
  );

  return (
    <div className={`container ${styles.products__page}`}>
      <FilterChips activeFilters={activeFilters} onRemove={handleRemove} />

      <div className={styles.products__layout}>
        <ProductFilters
          filterOptions={filterOptions}
          activeFilters={activeFilters}
          onFilterChange={handleFilterChange}
          onClearAll={handleClearAll}
        />

        <main className={styles.products__main}>
          <ProductViewControls
            total={products.length}
            pageSize={pageSize}
            view={view}
            onPageSizeChange={handlePageSizeChange}
            onViewChange={setView}
          />

          {loading && <p className={styles.loading}>Filtrando...</p>}

          <div
            className={`${
              view === "list"
                ? styles["products__wrapper--list"]
                : styles.products__wrapper
            } ${loading ? styles["products__wrapper--loading"] : ""}`}
          >
            {paginated.map((product) => {
              const { COD_REF, MARCA, PRECIO, DISENO, ANCHO, PERFIL, RIN, IMAGEN, slug } =
                product;
              const mainImg = IMAGEN?.[0]?.url ?? "/icons/default-wheel.svg";
              return (
                <ProductCard
                  key={COD_REF}
                  img={mainImg}
                  reference={`${DISENO} ${ANCHO}/${PERFIL}R${RIN}`}
                  mark={MARCA}
                  price={PRECIO}
                  slug={slug}
                  view={view}
                  product={product}
                />
              );
            })}

            {!loading && products.length === 0 && totalActive > 0 && (
              <p className={styles.no__results}>
                No se encontraron productos con los filtros seleccionados.
              </p>
            )}
          </div>

          <Pagination
            current={currentPage}
            total={totalPages}
            onChange={setCurrentPage}
          />
        </main>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const [productsRes, filtersRes] = await Promise.all([
    fetch(`${process.env.API_URL}/productos?populate=IMAGEN&pagination[limit]=200`),
    fetch(`${process.env.API_URL}/productos/filtros`),
  ]);

  const { data: initialData }   = await productsRes.json();
  const { data: filterOptions } = await filtersRes.json();

  return {
    props: {
      initialData:   initialData  ?? [],
      filterOptions: filterOptions ?? { marcas: [], rines: [], anchos: [], perfiles: [] },
    },
  };
};

export default Productos;
