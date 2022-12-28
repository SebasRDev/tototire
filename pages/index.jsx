import { FeaturedSlider } from "../components";

export default function Home({ data }) {
  console.log(data);
  const specialData = data.find(
    ({ attributes }) => attributes.slug === "especiales"
  );
  const { data: specialProducts } = specialData.attributes.productos;
  return <FeaturedSlider products={specialProducts} />;
}

export const getServerSideProps = async () => {
  const resp = await fetch(`${process.env.API_URL}/categorias?populate=deep`);
  const { data } = await resp.json();

  console.log(data);

  return {
    props: {
      data,
    },
  };
};
