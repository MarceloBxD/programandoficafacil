import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
      <Link to="/">
        <Text>@programandoficafacil</Text>
      </Link>
      <Link to="/sobre">
        <Text
          p="5px"
          _hover={{
            color: "#EEE",
            bgColor: "#648cc4",
            borderRadius: "10px",
          }}
        >
          Sobre
        </Text>
      </Link>
    </Flex>
  );
};
