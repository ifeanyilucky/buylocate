import React from 'react';
import {
  Container,
  Stack,
  Text,
  Button,
  Box,
  Heading,
  Image,
} from '@chakra-ui/react';
import { Header2 } from 'src/components/custom';
import { ArrowForwardIcon } from '@chakra-ui/icons';

function CallToAction() {
  return (
    <Box>
      <Container maxW='7xl' py='20'>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          justifyContent='space-between'
          align='center'
          spacing={{ base: 10 }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Stack spacing={6} w={'full'} maxW={'33rem'}>
              <Header2>
                Let&lsquo;s help take the stress of your shoulder
              </Header2>
              <Text fontSize={{ base: 'lg', lg: 'xl' }}>
                When you need help with local groceries and gift items,
                Buylocate is here for your support and services. Simply visit
                our marketplace to shop for grocery items.
              </Text>
              <Box>
                <Button
                  colorScheme='brand'
                  size={{ base: 'md', lg: 'lg' }}
                  rightIcon={<ArrowForwardIcon />}
                >
                  Request a quote
                </Button>
              </Box>
            </Stack>
          </Stack>
          <Stack mr='auto'>
            <Image
              src='/images/hero-mask.jpeg'
              alt='hero-image'
              rounded='3xl'
              height={{ base: '320px', md: '450px' }}
              fit={'cover'}
              width={{ base: '100%', md: '320px' }}
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default CallToAction;
