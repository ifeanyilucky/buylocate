import {
  Card,
  CardBody,
  Container,
  Heading,
  VStack,
  Text,
  ButtonGroup,
  Button,
  Box,
  Stack,
  useDisclosure,
  CircularProgress,
} from '@chakra-ui/react';
import useAuth from 'src/hooks/useAuth';
import { Link as RouterLink } from 'react-router-dom';
import { PATH_PAGES } from 'src/routes/path';
import Page from 'src/components/Page';
import NewAddress from 'src/components/Dashboard/NewAddress';
import { useSelector, useDispatch } from 'src/redux/store';
import { useEffect } from 'react';
import { getAddressBook } from 'src/redux/slices/user';

export default function Address() {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    dispatch(getAddressBook());
  }, [dispatch]);
  const { isLoading, addressBook } = useSelector((state) => state.user);

  if (isLoading && !addressBook.length) {
    return (
      <Box>
        <CircularProgress isIndeterminate />
      </Box>
    );
  }
  return (
    <Page title='Account'>
      <Container maxW='full'>
        <Stack mb={10} spacing={5}>
          <Heading size={{ base: 'md', md: 'lg' }}>Addresses</Heading>
          {!addressBook.length ? (
            <Box>
              <Heading size='md'>No saved addresses</Heading>
              <Text color='gray'>
                Let us know where to ship all your products
              </Text>
            </Box>
          ) : (
            addressBook.map((address) => <Box>{address?.city}</Box>)
          )}
          <Box>
            <Button onClick={onOpen} colorScheme='brand'>
              Add new address
            </Button>
          </Box>
        </Stack>
      </Container>
      <NewAddress onClose={onClose} isOpen={isOpen} />
    </Page>
  );
}
