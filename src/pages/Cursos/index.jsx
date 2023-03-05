import { Center, Flex, Text, Highlight, Heading } from "@chakra-ui/react";

const Cursos = () => {
  return (
    <Flex flexDir="column" bgColor="#EEE" flex="1" align="center" p="20px">
      <Heading lineHeight="tall">
        <Highlight
          query="Cursos"
          styles={{ px: "2", py: "1", rounded: "full", bg: "red.500" }}
        >
          Cursos em alta
        </Highlight>
      </Heading>
      <Flex
        mt="20px"
        w="1000px"
        justify="space-around"
        flexWrap="wrap"
        gap="30px"
      >
        <Text>Curso 1</Text>
        <Text>Curso 2</Text>
      </Flex>
    </Flex>
  );
};

export default Cursos;
