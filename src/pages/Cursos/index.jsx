import { Center, Flex, Text, Highlight, Heading } from "@chakra-ui/react";
import { cursos } from "./cursos";

import { formatPrice } from "../../helpers/formatPrice";

const Cursos = () => {
  return (
    <Flex flexDir="column" bgColor="#EEE" flex="1" pt="20px" align="center">
      <Heading lineHeight="tall">
        <Highlight
          query="Cursos"
          styles={{ px: "2", py: "1", rounded: "full", bg: "#648cc4" }}
        >
          Cursos indicados
        </Highlight>
      </Heading>
      <Flex
        mt="20px"
        w="1000px"
        justify="space-around"
        flexWrap="wrap"
        gap="30px"
      >
        {cursos.map((curso, index) => (
          <Flex
            key={index}
            cursor="pointer"
            flexDir="column"
            w="55%"
            bgColor="#FFF"
            p="20px"
            borderRadius="10px"
            boxShadow="1px 1px 8px #000"
          >
            <a href={curso.link}>
              <Text
                _hover={{ textDecor: "underline" }}
                color="#648cc4"
                fontWeight="bold"
              >
                {curso.name}
              </Text>
            </a>
            <Text color="green.500">{formatPrice(curso.price)}</Text>
            <Text fontWeight="600">{curso.description}</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Cursos;
