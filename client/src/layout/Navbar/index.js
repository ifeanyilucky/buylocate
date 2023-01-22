import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Container,
  Badge,
  ButtonGroup,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import Logo from '../../components/Logo';
import { useStateContext } from '../../context/stateContext';
import CartItems from '../../components/Shopping/CartItems';
import DesktopNav from './desktopNav';
import MobileNav from './MobileNav';
import { TrolleyIcon } from '../../components/svgIcons';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useSelector } from 'src/redux/store';
import { sum } from 'lodash';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import { useDispatch } from 'src/redux/store';
import { getCart } from 'src/redux/slices/product';
import AccountPopover from './AccountPopover';

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

  useEffect(() => {
    dispatch(getCart(cart));
  }, [dispatch, cart]);
  useEffect(() => {
    if (location.pathname) {
      setShowCart(false);
      onClose();
    }
  }, [location.pathname]);

  return (
    <Container maxW={{ lg: '1200px', md: 'full', sm: 'full' }}>
      <Flex
        minH={'60px'}
        py={{ base: 2, md: 8 }}
        alignItems={'center'}
        justifyContent={{ md: 'space-between', base: 'start' }}
      >
        <Flex
          flex={{ md: '1', base: 'none' }}
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

        <Logo />

        <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
          <DesktopNav />
        </Flex>

        <Stack flex={1} justify={'flex-end'} direction={'row'} spacing={1}>
          <ButtonGroup>
            <IconButton
              position='relative'
              icon={
                <>
                  <TrolleyIcon />
                  <div class='site-header__cart-count'>
                    <span>{totalItems}</span>
                  </div>
                </>
              }
              variant='unstyled'
              aria-label='Toggle Cart'
              onClick={() => setShowCart(true)}
            />
            <AccountPopover />
          </ButtonGroup>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
      {showCart ? <CartItems /> : ''}
    </Container>
  );
}
