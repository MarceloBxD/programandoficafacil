import { useState } from "react";
import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Button,
  Image,
  useToast,
  Heading,
  Highlight,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import setacurva from "../../assets/images/seta-curva.png";
import seta from "../../assets/images/seta-direita.png";
import linkedin from "../../assets/images/linkedin.png";
import github from "../../assets/images/github.png";
import instagram from "../../assets/images/instagram.png";
import bg4 from "../../assets/images/bg4.jpg";
import SocialMedias from "../../components/SocialMedias";

function HomePage() {
  return (
    <Flex flexDir="column" h="92vh">
      <Flex
        bgImg={`${bg4}`}
        objectFit="cover"
        backgroundPosition="center"
        backgroundSize="cover"
        flex="1"
        w="100%"
      ></Flex>{" "}
      <Flex
        borderTop="3px solid #FFF"
        bgColor="#000"
        justify="center"
        flexDir="column"
        align="center"
        objectFit="cover"
        backgroundPosition="center"
        backgroundSize="cover"
        flex="1"
        w="100%"
      >
        <Flex w="100%" justify="center" align="center" flex="1">
          <Heading color="#FFF" lineHeight="tall">
            <Highlight
              query="Sociais"
              styles={{
                px: "2",
                py: "1",
                rounded: "full",
                bg: "#ff00f2",
              }}
            >
              Redes Sociais
            </Highlight>
          </Heading>
        </Flex>
        <Flex flex="1" w="100%">
          <SocialMedias
            href="https://www.instagram.com/programandoficafacil/?next=%2F"
            img={instagram}
            name="Instagram"
          />
          <SocialMedias
            href="https://github.com/MarceloBxD"
            img={github}
            name="Github"
          />
          <SocialMedias
            href="https://www.linkedin.com/in/marcelo-bracet-b51938223/"
            img={linkedin}
            name="linkedin"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default HomePage;
