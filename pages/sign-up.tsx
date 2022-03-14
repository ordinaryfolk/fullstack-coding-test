import { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "contexts/AuthUserContext";
import { Container, Text, FormControl, FormLabel, Flex, Button, Input, Box } from "@chakra-ui/react";
import Link from "next/link";
import styles from "styles/SignIn.module.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const router = useRouter();
  const [error, setError] = useState(null);
  const [loadingInternal, setLoading] = useState(false);

  const { createUserWithEmailAndPassword, loading } = useAuth();

  const onSubmit = (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);
    if (passwordOne === passwordTwo)
      createUserWithEmailAndPassword(email, passwordOne)
        .then((authUser) => {
          setLoading(false);
          console.log("Success. The user is created in Firebase");
          router.push("/");
        })
        .catch((error) => {
          setLoading(false);
          setError(error.message);
        });
    else {
      setError("Password do not match");
      setLoading(false);
    }
  };

  return (
    <div>
      <Container padding={16}>
        <Text fontSize="6xl" marginBottom={16}>
          Sign Up Page
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
              <FormLabel htmlFor="password1">Password</FormLabel>
              <Input
                id="password1"
                type="password"
                value={passwordOne}
                onChange={(event) => setPasswordOne(event.target.value)}
              />
            </FormControl>
          </Box>
          <Box marginBottom={4}>
            <FormControl>
              <FormLabel htmlFor="password2">Password</FormLabel>
              <Input
                id="password2"
                type="password"
                value={passwordTwo}
                onChange={(event) => setPasswordTwo(event.target.value)}
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
          Already have account ?{" "}
          <Link href="/">
            <a>Log in</a>
          </Link>
        </Text>
      </Container>
    </div>
  );
};

export default SignUp;
