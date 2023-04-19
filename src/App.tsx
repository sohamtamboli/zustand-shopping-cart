import { Container, Grid } from "@chakra-ui/react";
import products from "./assets/productData.json";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <Container
      py={4}
      minW={{
        "2xl": "1320px",
        xl: "1140px",
        lg: "960px",
        md: "720px",
        sm: "540px",
      }}>
      <Grid templateColumns={"repeat(auto-fit, minmax(300px, 1fr))"} gap={6}>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Grid>
    </Container>
  );
}

export default App;
