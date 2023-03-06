import { Center, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

import instagram from "../../assets/images/instagram.png";
import history from "../../assets/images/history.png";

function Sobre() {
  return (
    <Flex flex="1" p="20px" bgColor="#2B303A">
      <Flex
        gap="10px"
        flexDir="column"
        bgColor="#FFF"
        justify="center"
        align="center"
        flex="1"
      >
        <Image w="60px" src={instagram} />
        <Text
          maxW="80%"
          letterSpacing="2px"
          textAlign="justify"
          color="#6A7B76"
        >
          O Instagram <b>@programandoficafacil</b> foi criado com o intuito de
          trazer para o público interessado em tecnologia notícias, curiosidades
          e dicas sobre programação e linguagens de programação em geral. Com o
          avanço tecnológico cada vez mais presente em nossas vidas, a demanda
          por profissionais de TI tem crescido exponencialmente nos últimos
          anos, o que torna essencial o conhecimento de pelo menos uma linguagem
          de programação para quem quer se destacar no mercado de trabalho. No
          entanto, sabemos que muitas pessoas têm dificuldades em aprender e
          acompanhar as novidades do universo da programação. Pensando nisso, a
          conta @programandoficafacil foi criada para oferecer um conteúdo fácil
          de entender, com dicas e tutoriais que buscam facilitar o aprendizado
          e incentivar a curiosidade sobre tecnologia. O perfil busca ser uma
          fonte de informação para aqueles que querem se atualizar sobre as
          novidades do mundo da programação, mas que ainda não têm o
          conhecimento técnico necessário para entender textos mais avançados.
          Além disso, a conta busca incentivar a participação e interação dos
          seguidores.
        </Text>
      </Flex>
      <Flex
        border="3px solid #fff"
        flexDir="column"
        gap="10px"
        justify="center"
        align="center"
        flex="1"
      >
        <Image w="60px" src={history} />

        <Text maxW="80%" letterSpacing="2px" textAlign="justify" color="#FFF">
          Marcelo Bracet sempre foi um aluno dedicado em seu curso de Engenharia
          na Universidade Estadual do Rio de Janeiro (UERJ). Ele sempre se
          esforçou para ter boas notas e se destacar em projetos e atividades
          extracurriculares. No entanto, Marcelo sabia que para conseguir um bom
          estágio ou trabalho na sua área, precisaria de mais do que boas notas.
          Foi então que ele decidiu criar uma conta no Instagram focada em
          programação, compartilhando seus projetos pessoais e dicas para quem
          queria aprender mais sobre o assunto. Marcelo acreditava que ao
          compartilhar seu conhecimento, ele poderia atrair a atenção de
          empresas da área e conseguir uma oportunidade de emprego ou estágio.
          Marcelo também sabia que precisava continuar a treinar suas
          habilidades em programação, para estar pronto para qualquer desafio
          que surgisse. Ele se dedicava a criar sites e aplicativos em seu tempo
          livre, sempre em busca de novos desafios. Com o tempo, a conta de
          Marcelo no Instagram começou a ganhar seguidores e a chamar a atenção
          de empresas da área. Ele começou a receber convites para entrevistas
          de emprego e estágios.
        </Text>
      </Flex>
    </Flex>
  );
}

export default Sobre;
