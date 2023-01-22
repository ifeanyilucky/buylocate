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
import { Header2 } from '../custom';

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
      <Stack
        align={'center'}
        maxW='2xl'
        py={10}
        textAlign='center'
        margin='0 auto'
      >
        <Heading
          textTransform={'uppercase'}
          color={'blue.400'}
          fontWeight={400}
          fontSize={'sm'}
          bg={useColorModeValue('blue.50', 'blue.900')}
          p={2}
          alignSelf={'center'}
          rounded={'md'}
        >
          Why choose us
        </Heading>
        <Header2>The benefits that will make you comfort</Header2>
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
            <Heading fontSize={{ base: 'xl', md: '2xl' }}>{heading}</Heading>
            <Text fontSize={{ base: 'lg', lg: 'xl' }}>{text}</Text>
          </Stack>
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default WhyChooseUs;
