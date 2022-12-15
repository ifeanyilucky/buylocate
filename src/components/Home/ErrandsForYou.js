import React from 'react';
import {
  Container,
  Stack,
  Box,
  Text,
  Image,
  Button,
  useColorModeValue,
  Heading,
} from '@chakra-ui/react';

function ErrandsForYou() {
  return (
    <Container maxW='7xl'>
      <Stack
        direction={{ base: 'column-reverse', md: 'row' }}
        justifyContent='space-between'
        alignItems={'center'}
        py={{ base: 20, md: 28 }}
        spacing={{ base: 8, md: 10, sm: 1 }}
      >
        <Stack flex={1}>
          <div className='image-mask'>
            <img
              src='images/man-with-envelope.jpeg'
              className='hero-image'
              alt='hero-image'
            />
          </div>
        </Stack>
        <Stack flex={1}>
          <Stack spacing={6} maxW='lg' w='full' align={'right'}>
            <Stack spacing={0}>
              <Text
                textTransform={'uppercase'}
                color={'blue.400'}
                fontWeight={600}
                fontSize={'sm'}
                bg={useColorModeValue('blue.50', 'blue.900')}
                p={2}
                alignSelf={'flex-start'}
                rounded={'md'}
              >
                Virtual Running Service
              </Text>
              <Heading lineHeight={1.2} size={{ base: 'lg', md: '2xl' }}>
                Let us run errands for you.
              </Heading>
            </Stack>
            <Text
              className='my-4'
              fontSize={{ base: 'md', lg: 'lg' }}
              fontWeight={400}
              color='gray.500'
            >
              Life's hectic schedule often makes it hard to complete personal
              tasks which is why Buylocate have created a reliable and
              professional virtual running services.
            </Text>
            <Box>
              <Button colorScheme='brand' size='lg'>
                Request a quote
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}

export default ErrandsForYou;
