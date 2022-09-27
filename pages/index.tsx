/* Components */
import Head from "next/head";
import DynamicText from "../components/DynamicText";

/* Styles */
import { Flex, Box, Input } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";

const Home = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (   
    <Flex className={styles.container}>
      <Head>
        <title>Coding Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex direction="column" p={12} rounded={6}>

      </Flex>

      <Box className={styles.main}>
        <DynamicText />
        <Input placeholder="input some text..." onChange={onChange} />
      </Box>
    </Flex>
  );
};

export default Home;
