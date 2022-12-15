import React from 'react';
import {
  chakra,
  Stack,
  Text,
  Button,
  Container,
  SimpleGrid,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

const whyUs = [
  {
    heading: 'Range of errands',
    text: 'We offer a professional errand services solely for the purpose of your everyday needs.',
  },
  {
    heading: 'Reliable & Trustworthy',
    text: ' Our commitment to quality client service is one tht keeps our clients coming back again and again.',
  },
  {
    heading: '7 days a week',
    text: 'Our errand running services are available everyday of the week.',
  },
];
function WhyChooseUs() {
  return (
    <Container maxW='7xl' py={20}>
      <Stack align={'center'} maxW='2xl' textAlign='center' margin='0 auto'>
        <Heading
          textTransform={'uppercase'}
          color={'blue.400'}
          fontWeight={600}
          fontSize={'sm'}
          bg={useColorModeValue('blue.50', 'blue.900')}
          p={2}
          alignSelf={'center'}
          rounded={'md'}
        >
          Why choose us
        </Heading>
        <Text
          fontWeight={700}
          lineHeight={1.2}
          as={'div'}
          fontSize={{ base: '2xl', sm: '3xl', lg: '5xl' }}
        >
          The benefits that will make you comfort
        </Text>
      </Stack>
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={10} py={10}>
        {whyUs.map(({ heading, text }, i) => (
          <Stack
            textAlign={'center'}
            spacing={5}
            maxW='xs'
            key={i}
            margin='0 auto'
          >
            <Heading fontSize={{ base: 'lg', md: 'xl' }}>{heading}</Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color='gray.500'>
              {text}
            </Text>
          </Stack>
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default WhyChooseUs;
