import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { priceFormatter } from "../utils";

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const handleCartUpdate = (id: number) => {
    console.log({ id });
  };

  return (
    <>
      <Card maxW='sm'>
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
          <Button
            colorScheme='blue'
            onClick={() => handleCartUpdate(product.id)}>
            Add to cart
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProductCard;
