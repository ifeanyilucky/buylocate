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
import { Header2 } from '../custom';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { PATH_PAGES } from 'src/routes/path';

function ErrandsForYou() {
  return (
    <Container maxW='7xl'>
      <Stack
        direction={{ base: 'column-reverse', md: 'row' }}
        justifyContent='space-between'
        alignItems={'center'}
        pt={{ base: 20, md: 28 }}
        spacing={{ base: 10 }}
      >
        <Stack flex={1} mt={5}>
          <Image
            src='images/man-with-carton.jpeg'
            alt='man with documents'
            rounded='3xl'
            height={{ base: '320px', md: '450px' }}
            fit={'cover'}
            width={{ base: '100%', md: '320px' }}
          />
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
              <Header2>Let us run errands for you.</Header2>
            </Stack>
            <Text
              className='my-4'
              fontSize={{ base: 'lg', lg: 'xl' }}
              fontWeight={400}
            >
              Life's hectic schedule often makes it hard to complete personal
              tasks which is why Buylocate have created a reliable and
              professional virtual running services.
            </Text>
            <Box>
              <Button
                colorScheme='brand'
                size='lg'
                rightIcon={<ArrowForwardIcon />}
                as={RouterLink}
                to={PATH_PAGES.requestQuote}
              >
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
