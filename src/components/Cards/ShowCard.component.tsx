import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import useCartStore from "../../store/CartStore";
import { Product } from "../../types/product.types";
import { priceFormatter } from "../../utils";
import QuantityChanger from "../QuantityChanger.component";

interface ShowCardProps {
  product: Product;
}

const ShowCard = ({ product }: ShowCardProps) => {
  const { addProductToCart, cartProducts } = useCartStore();
  const currentProduct = cartProducts.find(
    (presentProduct) => presentProduct.id === product.id
  );

  return (
    <>
      <Card maxW='lg'>
        <CardBody>
          <Box
            bgImage={`url(${product.image})`}
            bgPosition='center'
            bgRepeat='no-repeat'
            bgSize='contain'
            borderRadius='lg'
            h={300}
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{product.title}</Heading>
            <Text color='blue.600' fontSize='2xl'>
              {priceFormatter(product.price)}
            </Text>
          </Stack>
        </CardBody>
        <CardFooter>
          {currentProduct ? (
            <HStack spacing={6}>
              <QuantityChanger currentProduct={currentProduct} />
              <Button
                as={Link}
                to='cart'
                colorScheme='teal'
                size={{ lg: "lg", md: "md", sm: "sm", base: "sm" }}
                rightIcon={<ArrowForwardIcon />}>
                Go to Cart
              </Button>
            </HStack>
          ) : (
            <Button
              colorScheme='teal'
              onClick={() => addProductToCart(product.id)}>
              Add to cart
            </Button>
          )}
        </CardFooter>
      </Card>
    </>
  );
};

export default ShowCard;
