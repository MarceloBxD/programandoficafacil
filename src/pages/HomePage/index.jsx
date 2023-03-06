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
} from "@chakra-ui/react";

import linkedin from "../../assets/images/linkedin.png";
import github from "../../assets/images/github.png";
import instagram from "../../assets/images/instagram.png";
import bg2 from "../../assets/images/bg2.jpg";
import bg3 from "../../assets/images/bg3.jpg";
import bg4 from "../../assets/images/bg4.jpg";

function HomePage() {
  const [email, setEmail] = useState("");
  const toast = useToast();

  // const handleSend = (email) => {
  //   if (email) {
  //     toast({
  //       title: "Email enviado com sucesso!",
  //       description: "Em breve você receberá nossas novidades.",
  //       status: "success",
  //       duration: 2000,
  //       isClosable: true,
  //     });
  //     setEmail("");
  //   }
  // };

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
        align="center"
        objectFit="cover"
        backgroundPosition="center"
        backgroundSize="cover"
        flex="1"
        w="100%"
      >
        <Flex
          flexDir="column"
          justify="center"
          align="center"
          h="100%"
          gap="10px"
          flex="1"
        >
          <a href="https://www.instagram.com/programandoficafacil/">
            <Image w="80px" alt="Instagram" src={instagram} />
          </a>
          <Text fontWeight="500" fontSize="18px" color="#FFF">
            Instagram
          </Text>
        </Flex>
        <Flex
          flexDir="column"
          gap="10px"
          justify="center"
          align="center"
          h="100%"
          flex="1"
        >
          <a href="https://github.com/MarceloBxD">
            <Image w="80px" src={github} />
          </a>
          <Text fontWeight="500" fontSize="18px" color="#FFF">
            Github
          </Text>
        </Flex>
        <Flex
          flexDir="column"
          gap="10px"
          justify="center"
          align="center"
          h="100%"
          flex="1"
        >
          <a href="https://www.linkedin.com/in/marcelo-bracet-b51938223/">
            <Image cursor="pointer" w="80px" src={linkedin} alt="Linkedin" />
          </a>
          <Text color="#FFF" fontWeight="500">
            Linkedin
          </Text>
        </Flex>
      </Flex>
      {/* <Flex
        position="fixed"
        bottom="20px"
        right="20px"
        gap="10px"
        flexDir="column"
      >
        <Text fontWeight="bold" color="#FFF" fontSize="2xl">
          Quer receber nossas notícias?
        </Text>
        <InputGroup>
          <Input
            outline="none"
            focusBorderColor="#FFF"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            color="#FFF"
            placeholder="Email"
            _placeholder={{ color: "#CCC" }}
          />
          <InputRightElement>
            <Button
              onClick={handleSend}
              mr="20px"
              color="#FFF"
              variant="unstyled"
            >
              Enviar
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex> */}
    </Flex>
  );
}

export default HomePage;
