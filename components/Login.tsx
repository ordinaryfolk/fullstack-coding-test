import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Text, FormControl, FormLabel, Flex, Button, Input, Box } from "@chakra-ui/react";
import { useAuth } from "contexts/AuthUserContext";
import styles from "./Login.module.css";

export default function Login() {
  const [loadingInternal, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const { signInWithEmailAndPassword } = useAuth();
  const { loading } = useAuth();

  const onSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    signInWithEmailAndPassword(email, password)
      .then(() => {
        setLoading(false);
        router.push("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        setError(error.message);
      });
  };
  return (
    <Container padding={16}>
      <Text fontSize="6xl" marginBottom={16}>
        Login Page
      </Text>
      <form onSubmit={onSubmit}>
        <Box marginBottom={4}>
          <FormControl>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          </FormControl>
        </Box>
        <Box marginBottom={4}>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </FormControl>
        </Box>
        <Box marginBottom={4}>{error && <div className={styles.error}>{error}</div>}</Box>
        <Flex marginBottom={4} justifyContent="center" alignItems="center">
          {(loadingInternal || loading) && <img className={styles.spinner} src="/images/spinner.gif" alt="" />}
          <Button onClick={onSubmit} type="submit" marginLeft={4}>
            Login
          </Button>
        </Flex>
      </form>

      <Text fontSize="1xl">
        No account?{" "}
        <Link href="/sign-up">
          <a className={styles.link}>Create one</a>
        </Link>
      </Text>
    </Container>
  );
}
