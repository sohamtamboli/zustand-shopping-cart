import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { HStack, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import useCartStore from "../store/CartStore";
import { Product } from "../types/product.types";

interface QuantityChangerProps {
  currentProduct: Product;
}

const QuantityChanger = ({ currentProduct }: QuantityChangerProps) => {
  const { decrementQty, incrementQty } = useCartStore();
  return (
    <HStack spacing={{ md: 6, sm: 3, base: 2 }}>
      <IconButton
        variant='outline'
        colorScheme='teal'
        aria-label='Decrease Quantity'
        onClick={() => decrementQty(currentProduct.id)}
        icon={<MinusIcon />}
      />
      <Text fontSize={{ lg: "xl", md: "lg" }}>{currentProduct.qty}</Text>
      <IconButton
        variant='outline'
        colorScheme='teal'
        aria-label='Increase Quantity'
        onClick={() => incrementQty(currentProduct.id)}
        icon={<AddIcon />}
      />
    </HStack>
  );
};

export default QuantityChanger;
