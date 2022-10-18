import React, { useState, useRef } from "react";
import Head from "next/head";
import DynamicText from "components/DynamicText";
import { Container, Box, Input, Flex } from "@chakra-ui/react";

const Home = () => {
  const inputTextRef = useRef(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    inputTextRef.current.changeValue(e.target.value);
  };

  return (
    <Container>
      <Head>
        <title>Coding</title>
      </Head>

      <Box>
        <Flex direction="column" align="center" justifyContent="center">
          <DynamicText ref={inputTextRef} />
          <Input onChange={onChange} mt="20px" />
        </Flex>
      </Box>
    </Container>
  );
};

export default Home;
