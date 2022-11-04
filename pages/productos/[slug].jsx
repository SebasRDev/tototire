import { DetailSlider, TableData } from "../../components";
import Styles from "../../styles/pages/ProductDetail.module.css";

const ProductDetail = ({ data }) => {
  const { attributes } = data;
  const DataImages = attributes?.IMAGEN.data;

  const images = DataImages
    ? DataImages.map((img) => img.attributes.url)
    : ["/icons/default-wheel.svg"];

  return (
    <div className={`container`}>
      <section className={Styles.product__banner}>
        <div className={Styles.tire__gallery}>
          <DetailSlider images={images} />
        </div>
        <div className={Styles.tire__info}>
          <div className={Styles.tire__name}>
            <h3>{attributes.MARCA}</h3>
            <h2>{attributes.DISENO}</h2>
          </div>
          <div className={Styles.tire__price}>
            <p className={Styles.price__label}>PRECIO</p>
            <p className={Styles.price}>${attributes.PRECIO}</p>
            <p className={Styles.disclaimer}>
              *Este producto no incluye el Rin
            </p>
            {/* boton añadir al carrito */}
          </div>
        </div>
      </section>
      <TableData data={attributes} />
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const { slug } = ctx.query;

  const resp = await fetch(`${process.env.API_URL}/productos/${slug}`);
  const { data } = await resp.json();

  return {
    props: {
      data,
    },
  };
};

export default ProductDetail;
