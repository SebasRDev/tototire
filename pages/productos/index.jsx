import { ProductCard } from "../../components"

import styles from '../../styles/pages/Products.module.css'

const dataProduct = {
  img: "/icons/default-wheel.svg",
  reference:'SL369 215/70R16',
  mark: 'West lake',
  price: '301.681',
  priceOffer: '270.500'
}

const dataProduct2 = {
  img: "/icons/default-wheel.svg",
  reference:'SL369 215/70R16',
  mark: 'West lake',
  price: '301.681'
}

const productos = () => {
  return (
    <div className={`container ${styles.products__page}`}>
      <div className={styles.products__wrapper}>
        <ProductCard {...dataProduct}/>
        <ProductCard {...dataProduct2}/>
        <ProductCard {...dataProduct}/>
        <ProductCard {...dataProduct}/>
        <ProductCard {...dataProduct}/>
      </div>
    </div>
  )
}

export default productos