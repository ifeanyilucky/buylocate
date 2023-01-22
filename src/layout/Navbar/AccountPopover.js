import {
  Menu,
  MenuButton,
  IconButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Button,
} from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { PATH_AUTH, PATH_DASHBOARD } from 'src/routes/path';
import { AccountIcon } from 'src/components/svgIcons';
import useAuth from 'src/hooks/useAuth';

export default function AccountPopover() {
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
  const { logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  return (
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
          variant='unstyled'
          p={0}
          fontWeight={600}
          icon={<AccountIcon />}
        />
      </MenuButton>
      {isAuthenticated ? (
        <>
          <MenuList>
            {accountItem.map((item) => (
              <MenuItem as={RouterLink} to={item.link}>
                {item.title}
              </MenuItem>
            ))}
            <MenuDivider />
            <MenuItem color='red.400' onClick={logout}>
              Log out
            </MenuItem>
          </MenuList>
        </>
      ) : (
        <>
          <MenuList>
            <MenuItem color='red.400' onClick={() => navigate(PATH_AUTH.login)}>
              Log in
            </MenuItem>
            <MenuItem
              color='red.400'
              onClick={() => navigate(PATH_AUTH.register)}
            >
              Register
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
}
