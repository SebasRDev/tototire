import { FeaturedSlider } from "../components";

export default function Home({ products }) {
  return <FeaturedSlider products={products} />;
}

export const getServerSideProps = async () => {
  const resp = await fetch(
    `${process.env.API_URL}/categorias?filters[slug][$eq]=especiales&populate[productos][populate]=IMAGEN`
  );
  const { data } = await resp.json();

  const specialCategory = data?.find((item) => item.slug === "especiales");
  const products = specialCategory?.productos ?? [];

  return {
    props: { products },
  };
};
