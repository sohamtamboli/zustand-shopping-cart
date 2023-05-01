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

interface StoreCardProps {
  product: Product;
}

const StoreCard = ({ product }: StoreCardProps) => {
  const { cartProducts } = useCartStore();
  const currentProduct = cartProducts.find(
    (presentProduct) => presentProduct.id === product.id
  );

  return (
    <>
      <Card variant={"outline"}>
        <HStack spacing={8}>
          <Box
            bgImage={`url(${product.image})`}
            bgPosition='center'
            bgRepeat='no-repeat'
            bgSize='contain'
            borderRadius='lg'
            h={200}
            w={200}
            m={3}
          />
          <CardBody>
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
              </HStack>
            ) : null}
          </CardFooter>
        </HStack>
      </Card>
    </>
  );
};

export default StoreCard;
