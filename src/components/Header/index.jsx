import { Avatar, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import marcelo from "../../assets/images/marcelo.jpg";

export const Header = () => {
  return (
    <Flex
      bgColor="#000"
      as="header"
      w="100%"
      h="8vh"
      p="20px"
      color="#FFF"
      fontWeight="bold"
      justifyContent="space-between"
      align="center"
    >
      <Link to="/cursos-em-alta">
        <Text
          p="5px"
          _hover={{
            color: "#EEE",
            bgColor: "#648cc4",
            borderRadius: "10px",
          }}
        >
          Cursos
        </Text>
      </Link>{" "}
      <Link to="/thanks">
        <Text
          p="5px"
          _hover={{
            color: "#EEE",
            bgColor: "#DAE292",
            borderRadius: "10px",
          }}
        >
          Ebook
        </Text>
      </Link>{" "}
      <Link to="/">
        <Text fontSize="18px" fontFamily="mynerve">
          @programandoficafacil
        </Text>
      </Link>
      <Link to="/sobre">
        <Text
          p="5px"
          _hover={{
            color: "#000",
            bgColor: "#FF0FF2",
            borderRadius: "10px",
          }}
        >
          Sobre
        </Text>
      </Link>
      <Avatar size="sm" src={marcelo} />
    </Flex>
  );
};
