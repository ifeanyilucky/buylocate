import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Text, Stack } from '@chakra-ui/react';
import { EmptyContainer } from '../../svgIcons';

export default function EmptyOrders() {
  return (
    <Box>
      <EmptyContainer />
      <Text color='gray.500' my={5}>
        You have not made any order yet!
      </Text>
      <Button colorScheme='brand' rightIcon={<ArrowForwardIcon />}>
        Shop now
      </Button>
    </Box>
  );
}
