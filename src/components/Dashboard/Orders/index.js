import { Heading, Text, Stack, Container } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'src/redux/store';
import { useEffect } from 'react';
import { getOrders } from 'src/redux/slices/user';
import OrderTable from './OrderTable';

export default function Orders() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const { orders } = useSelector((state) => state.user);
  console.log(orders);
  return (
    <Container>
      <Stack mb={10}>
        <Heading size={{ base: 'lg', md: 'xl' }}>Orders</Heading>
        <Text>Below is a history of your orders to date</Text>
      </Stack>
      <OrderTable />
    </Container>
  );
}
