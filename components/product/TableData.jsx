import Styles from "./TableData.module.css";

export const TableData = ({ data }) => {
  const tireInfo = [
    { name: "Marca", value: data?.MARCA },
    { name: "Diseño", value: data?.DISENO },
    { name: "Ancho", value: data?.ANCHO },
    { name: "Perfil", value: data?.PERFIL },
    { name: "Rin", value: data?.RIN },
    { name: "uso", value: data?.USO },
    { name: "Indice de velocidad", value: data?.IND_VEL },
    { name: "Indice de carga", value: data?.CARGA },
    { name: "Velocidad Máxima", value: data?.VEL_MAX },
  ];

  return (
    <section className={Styles.features__table}>
      <h2 className={Styles.table__title}>Especificaciones técnicas</h2>
      <div className={Styles.table}>
        {tireInfo.map(({ name, value }) => value && (
          <div className={Styles.feature} key={name}>
            <p className={Styles.label}>{name}</p>
            <p>{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
