import { Container } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.component";

const MainLayout = () => {
  return (
    <>
      <Container
        py={4}
        minW={{
          "2xl": "1320px",
          xl: "1140px",
          lg: "960px",
          md: "720px",
          sm: "540px",
        }}>
        <Navbar />
        <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
