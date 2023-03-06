import { Center, Flex, Text, Highlight, Heading } from "@chakra-ui/react";
import { cursos } from "./cursos";

import { formatPrice } from "../../helpers/formatPrice";

const Cursos = () => {
  return (
    <Flex flexDir="column" bgColor="#111" flex="1" pt="20px" align="center">
      <Heading color="#FFF" lineHeight="tall">
        <Highlight
          query="Cursos"
          styles={{
            px: "2",
            py: "1",
            rounded: "full",
            bg: "#648cc4",
          }}
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
            _hover={{ opacity: "1" }}
            opacity="0.8"
            flexDir="column"
            w="55%"
            bgColor="#000"
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
            <Text color="#FFF" fontWeight="600">
              {curso.description}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Cursos;
