import { Box, Button, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StoreCard from "../components/Cards/StoreCard.component";
import useCartStore from "../store/CartStore";
import { priceFormatter } from "../utils";

const Cart = () => {
  const { cartProducts, calculateTotal, total } = useCartStore();
  console.log({ cartProducts });

  useEffect(() => {
    calculateTotal();
  }, [cartProducts]);

  if (cartProducts.length === 0) {
    return (
      <Grid placeItems='center' minH='container.sm'>
        <Box textAlign='center'>
          <Heading size={"sm"} p={4}>
            Your cart is Empty!
          </Heading>
          <Button as={Link} to='/' colorScheme='teal'>
            Continue Shopping
          </Button>
        </Box>
      </Grid>
    );
  }

  return (
    <>
      <Flex justifyContent={"space-between"} my={4}>
        <Text fontSize={"2xl"}>
          Shopping Cart ({cartProducts.length}{" "}
          {`${cartProducts.length > 1 ? "Items" : "Item"}`})
        </Text>
        <Text fontSize={"2xl"} fontWeight={"semibold"}>
          Total: {priceFormatter(total)}
        </Text>
      </Flex>
      <Flex gap={4} direction='column'>
        {cartProducts.map((cartProduct) => (
          <StoreCard key={cartProduct.id} product={cartProduct} />
        ))}
      </Flex>
    </>
  );
};

export default Cart;
