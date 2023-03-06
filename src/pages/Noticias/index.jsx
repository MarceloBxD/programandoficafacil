import {
  Flex,
  Center,
  Text,
  Heading,
  Highlight,
  Image,
  Input,
  Button,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

function Noticias() {
  const [noticias, setNoticias] = useState([]);
  const [search, setSearch] = useState("");

  const getNoticias = async () => {
    const response = await fetch(
      `http://servicodados.ibge.gov.br/api/v3/noticias/?busca=${search}`
    );
    const json = await response.json();
    setNoticias(json.items);
  };

  return (
    <Flex flex="1" p="20px" flexDir="column" gap="15px" bgColor="#000">
      <Heading m="0 auto" color="#FFF" lineHeight="tall">
        <Highlight
          query="Notícias"
          styles={{
            px: "2",
            py: "1",
            rounded: "full",
            bg: "#0077b3",
            color: "#fff",
          }}
        >
          Desfrute das notícias
        </Highlight>
      </Heading>
      <Input
        color="#FFF"
        placeholder="Sobre o que quer pesquisar?"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button color="#FFF" colorScheme="telegram" onClick={() => getNoticias()}>
        Pesquisar
      </Button>
      {noticias.map((noticia, index) => (
        <Flex flexDir="column" key={index} p="10px" bgColor="#fff">
          <Text fontSize="20px" fontWeight="bold">
            {noticia.titulo}
          </Text>

          <Text>{noticia.introducao}</Text>
        </Flex>
      ))}
    </Flex>
  );
}

export default Noticias;
