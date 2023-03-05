import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Flex
      as="header"
      w="100%"
      p="20px"
      bgColor="#011638"
      color="#FFF"
      fontWeight="bold"
      justifyContent="space-between"
      alignItems="center"
    >
      <Link to="/">
        <Text>@programandoficafacil</Text>
      </Link>
      <Link to="/cursos-em-alta">
        <Text>Cursos</Text>
      </Link>{" "}
      <Link to="/sobre">
        <Text>Sobre</Text>
      </Link>
    </Flex>
  );
};
