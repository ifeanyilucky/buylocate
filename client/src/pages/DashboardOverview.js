import EmptyOrders from '../components/Dashboard/Orders/EmptyOrders';
import OrderTable from '../components/Dashboard/Orders/OrderTable';
import { useState, useEffect } from 'react';
import {
  Container,
  Stack,
  Box,
  Text,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Heading,
  Tabs,
} from '@chakra-ui/react';
import axios from '../utils/axios';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import Page from 'src/components/Page';
import useAuth from 'src/hooks/useAuth';
import Address from './Addresses';
import AllOrders from 'src/components/Dashboard/Orders';
import { useDispatch, useSelector } from 'src/redux/store';
import { getOrders } from 'src/redux/slices/user';

const DashboardOverview = () => {
  const { user } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { tab } = useParams();
  console.log(tab);

  const [tabIndex, setTabIndex] = useState('overview');
  const tabItem = [
    {
      title: 'overview',
      element: <Address />,
    },
    {
      title: 'orders',
      element: <AllOrders />,
    },
    {
      title: 'addresses',
      element: <Address />,
    },
  ];

  const greetings = ['Good morning', 'Good afternoon', 'Good evening'][
    parseInt((new Date().getHours() / 24) * 3)
  ];

  useEffect(() => {
    if (tab) {
      setTabIndex(tab);
    } else {
      setTabIndex('overview');
    }
  }, []);
  return (
    <Container maxW='7xl' minH='90vh' my={10}>
      <Stack textAlign='center' spacing={5} my={10} maxW='xl' margin='0 auto'>
        <Heading size={{ base: 'xl', md: '2xl' }}>
          Hello {user?.firstName}, {greetings}!
        </Heading>
        <Text>
          Welcome to your Buylocate.com account! Here you can modify your
          account information, check the status of your orders.
        </Text>
      </Stack>
      <Tabs
        align='center'
        mt={10}
        colorScheme={'black'}
        onChange={(idx) => {
          console.log(idx);
          setTabIndex(idx);
        }}
      >
        <TabList>
          {tabItem.map((item) => (
            <Tab
              sx={{ textTransform: 'capitalize' }}
              onClick={() => {
                navigate(`/dashboard/${item.title}`);
              }}
            >
              {item.title}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {tabItem.map((item) => (
            <TabPanel>{item.element}</TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default DashboardOverview;
