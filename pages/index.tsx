import Head from "next/head";
import styles from "../styles/Home.module.css";
import DynamicText from "components/DynamicText";
import { Box, Container, Input } from "@chakra-ui/react";
import { useRef } from "react";

const Home = () => {
  const inputRef = useRef(null);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    inputRef.current.changeValue(e.target.value);
  };

  return (
    <Container minH={"100vh"} centerContent>
      <Head>
        <title>Coding Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box className={styles.main} maxW={'90vw'}>
        <DynamicText ref={inputRef}/>
        <Input onChange={onChange} />
      </Box>
    </Container>
  );
};

export default Home;
