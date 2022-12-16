import {
  Menu,
  MenuButton,
  IconButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Button,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { PATH_AUTH, PATH_DASHBOARD } from 'src/routes/path';
import { AccountIcon } from 'src/components/svgIcons';

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
  );
}
