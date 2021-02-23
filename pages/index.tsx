import Head from "next/head";
import styles from "../styles/Home.module.css";
import DynamicText from "../components/DynamicText";

const Home = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coding Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <DynamicText />
        <input onChange={onChange} />
      </main>
    </div>
  );
};

export default Home;
