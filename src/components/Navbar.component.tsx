import { Button, ButtonGroup, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyles = {
    bgColor: "teal.500",
    color: "white",
    borderRadius: "md",
    fontWeight: "semibold",
  };
  return (
    <>
      <Flex
        minWidth='max-content'
        justifyContent='space-between'
        alignItems='center'
        direction={{
          "2xl": "row",
          xl: "row",
          lg: "row",
          md: "row",
          sm: "column",
          base: "column",
        }}
        gap='2'
        py='2'>
        <Heading size='lg'>Random Shop</Heading>
        <ButtonGroup gap='2'>
          <Button as={NavLink} to='/' p={2} _activeLink={activeStyles}>
            Home
          </Button>
          <Button as={NavLink} to='cart' p={2} _activeLink={activeStyles}>
            Cart
          </Button>
          <Button as={NavLink} to='about' p={2} _activeLink={activeStyles}>
            About
          </Button>
        </ButtonGroup>
      </Flex>
    </>
  );
};

export default Navbar;
