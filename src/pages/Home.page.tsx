import { Grid } from "@chakra-ui/react";
import ShowCard from "../components/Cards/ShowCard.component";
import useCartStore from "../store/CartStore";

function Home() {
  const { allProducts } = useCartStore();

  return (
    <Grid
      templateColumns={{
        "2xl": "repeat(3, minmax(300px, 1fr))",
        xl: "repeat(auto-fit, minmax(300px, 1fr))",
        lg: "repeat(auto-fit, minmax(300px, 1fr))",
        md: "repeat(auto-fit, minmax(300px, 1fr))",
        sm: "repeat(auto-fit, minmax(300px, 1fr))",
      }}
      justifyItems={{
        "2xl": "normal",
        xl: "normal",
        lg: "normal",
        md: "normal",
        sm: "center",
      }}
      py={4}
      gap={6}>
      {allProducts.map((product) => (
        <ShowCard product={product} key={product.id} />
      ))}
    </Grid>
  );
}

export default Home;
