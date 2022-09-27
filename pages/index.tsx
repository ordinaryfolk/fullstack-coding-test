import React, { useRef } from "react";

/* Components */
import Head from "next/head";
import DynamicText from "../components/DynamicText";

/* Styles */
import { Flex, Box, Input } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";

const Home = () => {
  const dynamicTextRef = useRef(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    dynamicTextRef.current.changeValue(e.target.value || "Random Text");
  };

  return (
    <Flex className={styles.container}>
      <Head>
        <title>Coding Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex direction="column" p={12} rounded={6}>
        <Box className={styles.main}>
          <DynamicText ref={dynamicTextRef}/>
          <Input placeholder="input some text..." onChange={onChange} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
