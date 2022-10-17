import Head from "next/head";
import DynamicText from "../components/DynamicText";
import { Container, Box, Input } from "@chakra-ui/react";

const Home = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <Container>
      <Head>
        <title>Coding</title>
      </Head>

      <Box>
        <DynamicText />
        <Input onChange={onChange} />
      </Box>
    </Container>
  );
};

export default Home;
