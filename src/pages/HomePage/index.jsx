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
      <Flex flex="1" w="100%">
        <Flex
          cursor="pointer"
          gap="10px"
          _hover={{ opacity: "1" }}
          opacity={"0.7"}
          justify="center"
          align="center"
          objectFit="cover"
          backgroundPosition="center"
          backgroundSize="cover"
          bgImg={`${bg2}`}
          flex="1"
        >
          <Image w="40px" src={instagram} />
          <a href="https://www.instagram.com/programandoficafacil/">
            <Text
              _hover={{ textDecor: "underline" }}
              fontSize="25px"
              color="#FFF"
              fontWeight="bold"
            >
              @programandoficafacil
            </Text>
          </a>
        </Flex>
        <Flex
          cursor="pointer"
          _hover={{ opacity: "1" }}
          opacity={"0.7"}
          gap="10px"
          justify="center"
          align="center"
          objectFit="cover"
          backgroundPosition="center"
          backgroundSize="cover"
          bgImg={`${bg3}`}
          flex="1"
        >
          <Image w="40px" src={github} />
          <a href="https://github.com/MarceloBxD">
            <Text
              _hover={{ textDecor: "underline" }}
              fontSize="25px"
              color="#FFF"
              fontWeight="bold"
            >
              MarceloBxD
            </Text>
          </a>
        </Flex>
      </Flex>{" "}
      <Flex
        cursor="pointer"
        _hover={{ opacity: "1" }}
        opacity={"0.7"}
        justify="center"
        flexDir="column"
        align="center"
        objectFit="cover"
        backgroundPosition="center"
        backgroundSize="cover"
        bgImg={`${bg4}`}
        flex="1"
        w="100%"
      ></Flex>
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
