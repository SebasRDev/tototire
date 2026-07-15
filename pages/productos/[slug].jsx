import { useCart } from "../../state/useCart";
import { DetailSlider, TableData } from "../../components";
import Styles from "../../styles/pages/ProductDetail.module.css";

const ProductDetail = ({ data }) => {
  const { addToCart } = useCart();

  const images = data?.IMAGEN?.length
    ? data.IMAGEN.map((img) => img.url)
    : ["/icons/default-wheel.svg"];

  return (
    <div className="container">
      <section className={Styles.product__banner}>
        <div className={Styles.tire__gallery}>
          <DetailSlider images={images} />
        </div>
        <div className={Styles.tire__info}>
          <div className={Styles.tire__name}>
            <h3>{data.MARCA}</h3>
            <h2>{data.DISENO}</h2>
          </div>
          <div className={Styles.tire__price}>
            <p className={Styles.price__label}>PRECIO</p>
            <p className={Styles.price}>${data.PRECIO}</p>
            <p className={Styles.disclaimer}>
              *Este producto no incluye el Rin
            </p>
            <button onClick={() => addToCart(data)}>Agregar al carrito</button>
          </div>
        </div>
      </section>
      <TableData data={data} />
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const { slug } = ctx.query;

  const resp = await fetch(`${process.env.API_URL}/productos/${slug}`);
  const { data } = await resp.json();

  if (!data) {
    return { notFound: true };
  }

  return {
    props: { data },
  };
};

export default ProductDetail;
