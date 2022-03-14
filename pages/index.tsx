import { Container } from "@chakra-ui/react";
import { useAuth } from "contexts/AuthUserContext";
import { withAuthen } from "HOCs/withAuthen";

const Home = withAuthen(function Home() {
  const { signOut } = useAuth();
  return (
    <Container padding={16}>
      <button onClick={signOut}>Sign out</button>
    </Container>
  );
});

export default Home;
