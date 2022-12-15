import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  Menu,
  MenuItem,
  MenuList,
  MenuDivider,
  MenuButton,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Container,
  Badge,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import Logo from '../../components/Logo';
import { useStateContext } from '../../context/stateContext';
import CartItems from '../../components/Shopping/CartItems';
import { CloseIcon, HamburgerIcon } from '../../components/svgIcons';
import DesktopNav from './desktopNav';
import MobileNav from './MobileNav';
import {
  BasketIcon,
  TrolleyIcon,
  AccountIcon,
} from '../../components/svgIcons';
import { PATH_AUTH, PATH_DASHBOARD } from 'src/routes/path';
import { useSelector } from 'src/redux/store';
import { sum } from 'lodash';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import { useDispatch } from 'src/redux/store';
import { getCart } from 'src/redux/slices/product';

export default function WithSubnavigation() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const location = useLocation();
  const isMountedRef = useIsMountedRef();
  const dispatch = useDispatch();
  const { showCart, setShowCart, totalQuantities, cartItems } =
    useStateContext();

  const { checkout } = useSelector((state) => state.product);
  const { cart } = checkout;
  const totalItems = sum(cart.map((item) => item.quantity));

  console.log(checkout);
  useEffect(() => {
    dispatch(getCart(cart));
  }, [dispatch, cart]);
  useEffect(() => {
    if (location.pathname) {
      setShowCart(false);
      onClose();
    }
  }, [location.pathname]);
  const accountItem = [
    {
      title: 'Account setting',
      link: PATH_DASHBOARD.root,
    },
    {
      title: 'Order history',
      link: PATH_DASHBOARD.orders,
    },
    {
      title: 'Address',
      link: PATH_DASHBOARD.addressList,
    },
  ];
  return (
    <Container maxW={{ lg: '1200px', md: 'full', sm: 'full' }}>
      {showCart ? <CartItems /> : ''}
      <Flex minH={'60px'} py={{ base: 2, md: 8 }} alignItems={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: 'center', md: 'start' }}
          alignItems={'center'}
        >
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}
          >
            <Logo />
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={1}
        >
          <IconButton
            icon={
              <>
                <TrolleyIcon w={2} h={3} />

                <Box
                  as='span'
                  style={{
                    fontSize: '12px',
                    background: 'brand',
                    borderRadius: '50%',
                    color: '#fff',
                    padding: '0 5px',
                    verticalAlign: 'top',
                    marginLeft: '-8px',
                  }}
                >
                  {totalItems}
                </Box>
              </>
            }
            variant='ghost'
            aria-label='Toggle Cart'
            onClick={() => setShowCart(true)}
          />
          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}
            >
              <IconButton
                display={{ base: 'inline-flex', md: 'inline-flex' }}
                fontSize={'md'}
                as={RouterLink}
                fontWeight={600}
                icon={<AccountIcon />}
                to={PATH_AUTH.login}
              />
            </MenuButton>
            <MenuList>
              {accountItem.map((item) => (
                <MenuItem as={RouterLink} to={item.link}>
                  {item.title}
                </MenuItem>
              ))}

              <MenuDivider />
              <MenuItem>Log out</MenuItem>
            </MenuList>
          </Menu>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Container>
  );
}
