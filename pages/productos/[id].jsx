import { TableData } from "../../components"
import Styles from '../../styles/pages/ProductDetail.module.css'

const data = [
  {name: 'Marca', value: 'PIRELLI'},
  {name: 'Diseño', value: 'CINTURATO P7 RFT'},
  {name: 'Ancho', value: '255'},
  {name: 'Perfil', value: '55'},
  {name: 'Rin', value: '17'},
  {name: 'Indice de velocidad', value: 'Y'},
  {name: 'Indice de carga', value: '92'},
]

const ProductDetail = () => {
  return (
    <div className={`container`}>
      <section className={Styles.product__banner}>
        {/* galeria detalle */}
        <div className={Styles.tire__gallery}></div>
        <div className={Styles.tire__info}>
          <div>
            <h3>PIRELLI</h3>
            <h2>CINTURATO P7 RFT</h2>
          </div>
          <div>
            <p>PRECIO</p>
            <p>$963.374 </p>
            <p>*Este producto no incluye el Rin</p>
            {/* boton añadir al carrito */}
          </div>
        </div>
      </section>
      <TableData data={data} />
    </div>
  )
}

export default ProductDetail
