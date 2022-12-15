import React from 'react';
import { Container, Stack, Text, Button, Box, Heading } from '@chakra-ui/react';

function CallToAction() {
  return (
    <Box>
      <Container maxW='7xl' py='20'>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          justifyContent='space-between'
          align='center'
          spacing={{ base: 8, md: 10, sm: 1 }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Stack spacing={6} w={'full'} maxW={'33rem'}>
              <Text
                fontWeight={700}
                lineHeight={1.2}
                as={'span'}
                fontSize={{ base: '2xl', sm: '3xl', lg: '5xl' }}
              >
                Let&lsquo;s help take the stress of your shoulder
              </Text>
              <Text color='gray.500' fontSize={{ base: 'md', lg: 'lg' }}>
                When you need help with local groceries and gift items,
                Buylocate is here for your support and services. Simply visit
                our marketplace to shop for grocery items.
              </Text>
              <Box>
                <Button colorScheme='brand' size={{ base: 'md', lg: 'lg' }}>
                  Request a quote
                </Button>
              </Box>
            </Stack>
          </Stack>
          <Stack flex={1}>
            <div className='image-mask'>
              <img
                src='/images/hero-mask.jpeg'
                className='hero-image'
                alt='hero-image'
              />
            </div>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default CallToAction;
