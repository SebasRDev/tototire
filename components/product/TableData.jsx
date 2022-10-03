import Styles from "./TableData.module.css";

export const TableData = ({ data }) => {
  return (
    <section>
      <h2 className={Styles.table__title}>Especificaciones técnicas</h2>
      <div className={Styles.table}>
        {data.map(({ name, value }) => (
          <div className={Styles.feature} key={name}>
            <p className={Styles.label}>{name}</p>
            <p>{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
