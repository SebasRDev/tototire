import React, { useEffect, useState } from "react";
import styles from "../../styles/components/Counter.module.css";

export const Counter = ({ cant, maxValue }) => {
  const [items, setItems] = useState(cant);
  console.log(cant);
  console.log(items);
  console.log(maxValue)

  useEffect(()=>{
    if(cant <= maxValue){
      setItems(cant);
    }
  },[cant, maxValue])

  const handleAdd = () =>
    items < maxValue ? setItems(items + 1) : setItems(maxValue);

  const handleSubstrac = () => (items > 1 ? setItems(items - 1) : setItems(1));

  return (
    <div className={styles.counter}>
      <button
        onClick={handleSubstrac}
        className={`${styles.button} ${items == 1 && styles["disabled"]}`}
      >
        -
      </button>
      <div className={styles.items}>{items}</div>
      <button 
        onClick={handleAdd} 
        className={`${styles.button} ${items == maxValue && styles["disabled"]}`}
      >
        +
      </button>
    </div>
  );
};
