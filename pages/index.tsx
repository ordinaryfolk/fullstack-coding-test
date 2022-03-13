import React, { useRef } from "react";
import Head from "next/head";
import { Input, Box, Container } from "@chakra-ui/react";
import styles from "styles/Home.module.css";
import DynamicText from "components/DynamicText";

const Home = () => {
  const textFieldRef = useRef(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    textFieldRef.current.changeValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coding Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <main className={styles.main}>
          <Box bg="tomato" w="100%" p={4} color="white">
            <DynamicText ref={textFieldRef} />
          </Box>
          <Input onChange={onChange} placeholder="Enter random text" />
        </main>
      </Container>
    </div>
  );
};

export default Home;
