import { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  GridItem,
  Container,
  SimpleGrid,
  useBreakpointValue,
  Image,
  Box,
  Text,
  Button,
  useDisclosure,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { useAuth } from "contexts/AuthUserContext";
import { withAuthen } from "HOCs/withAuthen";
import firebase from "firebase";
const db = firebase.firestore();

type BlogType = {
  title: string;
  img: string;
};

const Blog = withAuthen(() => {
  const [blogs, setBlogs] = useState([]);
  const [activeBlog, setActiveBlog] = useState<BlogType>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { signOut } = useAuth();
  const colSpan = useBreakpointValue({ lg: 4, md: 3, sm: 1, xs: 1 });

  useEffect(() => {
    db.collection("blogs").onSnapshot((snapshot) => {
      setBlogs(snapshot.docs);
    });
  }, []);

  const onHandleClickBlog = (item: BlogType) => {
    onOpen();
    setActiveBlog(item);
  };

  return (
    <Container maxW="90vw" padding={16}>
      <Box marginBottom={4}>
        <Button onClick={signOut}>Sign out</Button>
      </Box>
      <SimpleGrid columns={colSpan} gap={6}>
        {blogs.map((item) => (
          <GridItem
            onClick={() =>
              onHandleClickBlog({
                title: item.data().title,
                img: item.data().img,
              })
            }
            key={item.id}
            marginBottom={4}>
            <Box>
              <Image src={item.data().img} alt="img" />
            </Box>
            <Text fontSize="2xl">{item.data().title}</Text>
          </GridItem>
        ))}
      </SimpleGrid>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        {activeBlog && (
          <ModalContent>
            <ModalHeader>{activeBlog.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Image src={activeBlog.img} alt="img" />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        )}
      </Modal>
    </Container>
  );
});

export default Blog;
