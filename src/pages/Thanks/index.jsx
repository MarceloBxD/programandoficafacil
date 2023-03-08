import {
  Flex,
  AspectRatio,
  Heading,
  Highlight,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

import thanks from "../../assets/images/thanks.jpg";
import ebook from "../../assets/images/ebook.png";

function Thanks() {
  return (
    <Flex
      flex="1"
      align="center"
      objectFit="cover"
      flexDir="column"
      backgroundPosition="center"
      backgroundSize="cover"
      gap="15px"
      bgImg={`${thanks}`}
    >
      <Text fontSize="20px" fontWeight="bold" color="#FFF">
        Quer ler um livro curto, e que te mostre como se desenvolver e mostra
        maneiras e dicas de fazer isso?
      </Text>
      <Text fontSize="18px" color="#FFF">
        Ta esperando oque?
      </Text>
      <Heading color="#FFF" lineHeight="tall">
        <Highlight
          query="Ebook"
          styles={{
            px: "2",
            py: "1",
            rounded: "full",
            bg: "#DDDDA3",
          }}
        >
          Meu Ebook Novo
        </Highlight>
      </Heading>
      <Flex align="center" flexDir="column">
        <Image w="200px" h="200px" src={ebook} />
        <Text
          fontWeight="bold "
          color="#FFF"
          textDecor="underline"
          _hover={{ textDecor: "none" }}
        >
          <a href="https://app-vlc.hotmart.com/market/details?producerUcode=f14d1a39-dc15-4bc9-9196-6cb989d896f0&productUcode=e501d3a6-2804-44cf-ab76-dc847933d6c5&bookmarked=false&searchId=4cb931b3-e9f0-49b5-878a-4283dcadb83b">
            Comprar
          </a>
        </Text>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8505875581417099"
          crossorigin="anonymous"
        ></script>
      </Flex>
    </Flex>
  );
}

export default Thanks;
