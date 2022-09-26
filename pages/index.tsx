import { Container, Button } from "@chakra-ui/react";
import { useAuth } from "contexts/AuthUserContext";
import { withAuthen } from "HOCs/withAuthen";
import Link from "next/link";
const Home = withAuthen(function Home() {
  const { signOut } = useAuth();
  return (
    <Container padding={16}>
      <Link href="/blog">
        <a>Go to Blogs</a>
      </Link>
      {"  "}
      Or <Button onClick={signOut}>Sign out</Button>
    </Container>
  );
});

export default Home;
