import React from "react";
import { Heading, Image, Text } from "@chakra-ui/react";
import logo from "../assets/melody-maestro-logo.png";

const Header = () => {
  return (
    <>
      <Image
        src={logo}
        alt="logo"
        width={500}
        height={500}
        marginBottom="-50px"
      />
      <Heading color="black" marginBottom="1rem">
        Welcome to Melody Maestro
      </Heading>
      <Text fontSize={25} textAlign="center">
        Enter an artist you like and we'll find other similar artists you'll
        love!
      </Text>
    </>
  );
};

export default Header;
