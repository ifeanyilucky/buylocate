import React from 'react';
import { SimpleGrid, Stack, Text, Heading, Container } from '@chakra-ui/react';

const items = [
  { id: '01', description: 'Shop for your local groceries and gift items or' },
  {
    id: '02',
    description:
      'Simply place a request by phone or email and we will discuss your requirements with you',
  },
  { id: '03', description: 'You will receive a shopping invoice.' },
  { id: '04', description: 'Make payment (Payment platform)' },
  {
    id: '05',
    description:
      'You will receive your confirmation email and shipping details.',
  },
  { id: '06', description: 'Your goods are delivered within 3 to 6 days.' },
];

export default function HowItWorks() {
  return (
    <Container maxW='7xl' py={20}>
      <Stack align='center'>
        <Heading
          fontWeight={700}
          lineHeight={1.2}
          size={{ base: 'xl', md: '2xl' }}
          align='center'
          py={10}
        >
          How it works.
        </Heading>
      </Stack>

      <SimpleGrid
        columns={{ base: '1', sm: '2', md: '3' }}
        gap={8}
        margin='0 auto'
      >
        {items.map((i) => (
          <Stack
            spacing={{ base: 1, md: 6 }}
            maxW='xs'
            key={i.id}
            position='relative'
          >
            <Text
              fontWeight={800}
              lineHeight={1.2}
              as={'span'}
              fontSize={{ base: '2xl', sm: '3xl', lg: '5xl' }}
              position={{ base: 'relative', md: 'absolute' }}
              color='gray.300'
              zIndex={-9}
              top={{ md: '-10px' }}
              left={{ lg: '-60px' }}
            >
              {i.id}
            </Text>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color='gray.500'>
              {i.description}
            </Text>
          </Stack>
        ))}
      </SimpleGrid>
    </Container>
  );
}
