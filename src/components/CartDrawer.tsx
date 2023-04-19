import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import products from "../assets/productData.json";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  id: number;
}

const CartDrawer = ({ isOpen, onClose, id }: CartDrawerProps) => {
  const [prodId, setProdId] = useState<
    | {
        id: number;
        title: string;
        price: number;
        description: string;
        category: string;
        image: string;
        rating: { rate: number; count: number };
      }
    | undefined
  >();
  useEffect(() => {
    const cartProductId = products.find((item) => item.id === id);
    setProdId(cartProductId);
  }, []);

  return (
    <>
      <Drawer isOpen={isOpen} placement='right' size='md' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Shopping Cart</DrawerHeader>

          <DrawerBody>
            {prodId ? <h3>{prodId.title}</h3> : <h3>Cart is Empty!</h3>}
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CartDrawer;
