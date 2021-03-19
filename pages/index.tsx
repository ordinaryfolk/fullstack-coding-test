import Head from "next/head";
import styles from "../styles/Home.module.css";
import DynamicText from "components/DynamicText";
import { Input } from "@chakra-ui/react";
import React, { useRef } from "react";
import { Heading } from "@chakra-ui/react";
interface Ref {
  changeValue: (value: String) => void;
}
const Home = () => {
  const inputRef = useRef<Ref>();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputRef.current.changeValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coding Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <DynamicText ref={inputRef} />
        <Input onChange={onChange} />
      </main>
    </div>
  );
};

export default Home;
