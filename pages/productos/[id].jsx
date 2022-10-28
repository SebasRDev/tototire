import { DetailSlider, TableData } from "../../components"
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
        <div className={Styles.tire__gallery}>
          <DetailSlider />
        </div>
        <div className={Styles.tire__info}>
          <div className={Styles.tire__name}>
            <h3>PIRELLI</h3>
            <h2>CINTURATO P7 RFT</h2>
          </div>
          <div className={Styles.tire__price}>
            <p className={Styles.price__label}>PRECIO</p>
            <p className={Styles.price}>$963.374 </p>
            <p className={Styles.disclaimer}>*Este producto no incluye el Rin</p>
            {/* boton añadir al carrito */}
          </div>
        </div>
      </section>
      <TableData data={data} />
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const resp = await fetch(`${process.env.API_URL}/productos/177?populate=IMAGEN`);
  const { data } = await resp.json();

  return {
    props: {
      data,
    },
  };
};

export default ProductDetail
