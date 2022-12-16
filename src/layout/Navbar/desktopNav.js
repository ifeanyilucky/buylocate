import {
  Box,
  Stack,
  Popover,
  PopoverTrigger,
  Link as ChakraLink,
  PopoverContent,
  useColorModeValue,
  Text,
  Flex,
  Icon,
  Divider,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '../../components/svgIcons';
import { NAV_ITEMS } from './NavItem';

export default function DesktopNav() {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <ChakraLink
                p={2}
                as={Link}
                fontSize={{ lg: 'lg', md: 'md' }}
                fontWeight={500}
                to={navItem.to ?? '#'}
                color={linkColor}
                _hover={{
                  textDecoration: 'underline',
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </ChakraLink>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
}

const DesktopSubNav = ({ label, to, subLabel }) => {
  return (
    <Link to={to}>
      <ChakraLink
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('brand.100', 'gray.900') }}
      >
        <Stack direction={'row'} align={'center'}>
          <Box>
            <ChakraLink
              fontWeight='700'
              transition={'all .3s ease'}
              _groupHover={{ color: 'brand.400' }}
              fontWeight={500}
            >
              {label}
            </ChakraLink>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}
          >
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </ChakraLink>
    </Link>
  );
};
