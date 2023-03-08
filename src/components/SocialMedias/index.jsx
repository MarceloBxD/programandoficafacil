import { Flex, Image, Text } from "@chakra-ui/react";

const SocialMedias = ({ name, img, href }) => {
  return (
    <Flex
      flexDir="column"
      justify="center"
      align="center"
      h="100%"
      gap="10px"
      flex="1"
    >
      <a href={href}>
        <Image w="60px" alt="Instagram" src={img} />
      </a>

      <Text fontWeight="500" fontSize="18px" color="#FFF">
        {name}
      </Text>
      
    </Flex>
  );
};

export default SocialMedias;
