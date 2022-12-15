import {
  Box,
  HStack,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import * as React from 'react';

export type CartProductMetaProps = {
  isGiftWrapping?: boolean,
  name: string,
  description: string,
  image: string,
};

export const CartProductMeta = (props) => {
  const { isGiftWrapping = true, image, name, description } = props;
  return (
    <Stack direction='row' spacing='5' width='full'>
      <Image
        rounded='lg'
        width='120px'
        height='120px'
        fit='cover'
        src={image}
        alt={name}
        draggable='false'
        loading='lazy'
      />
      <Box pt='4'>
        <Stack spacing='0.5'>
          <Heading size='md'>{name}</Heading>
          <Text color={mode('gray.600', 'gray.400')} fontSize='sm'>
            {description}
          </Text>
        </Stack>
      </Box>
    </Stack>
  );
};
