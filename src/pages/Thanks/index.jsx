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
        <Image borderTopRadius="10px" w="200px" h="200px" src={ebook} />
        <Text
          fontWeight="bold  "
          color="#FFF"
          mt="-25px"
          textDecor="underline"
          _hover={{ textDecor: "none" }}
        >
          <a href="https://app-vlc.hotmart.com/market/details?producerUcode=f14d1a39-dc15-4bc9-9196-6cb989d896f0&productUcode=e501d3a6-2804-44cf-ab76-dc847933d6c5&bookmarked=false&searchId=4cb931b3-e9f0-49b5-878a-4283dcadb83b">
            Comprar
          </a>
        </Text>
      </Flex>
    </Flex>
  );
}

export default Thanks;
