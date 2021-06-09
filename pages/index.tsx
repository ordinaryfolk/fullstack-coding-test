import Head from "next/head";
import styles from "../styles/Home.module.css";
import DynamicText from "../components/DynamicText";
import { useRef } from "react";
import { Box, Input, Link } from "@chakra-ui/react";

const Home = () => {
  const childRef = useRef(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    childRef.current.changeValue(e.target.value);
  };

  return (
    <Box className={styles.container}>
      <Head>
        <title>Coding Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <DynamicText ref={childRef}/>
        <Input onChange={onChange} placeholder="Enter some texts"/>
      </main>
    </Box>
  );
};

export default Home;
