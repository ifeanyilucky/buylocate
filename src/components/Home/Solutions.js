import React, { DOMElement, useEffect, useRef } from 'react';
import {
  Stack,
  Container,
  Text,
  Button,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

function Solutions() {
  let tl = useRef(null);
  let maxWidth = 0;
  let imgSlide = useRef(null);
  console.log(imgSlide);
  console.log(tl);

  let stepWrapper = useRef(null);

  // useEffect(() => {
  //   const step1: gsap.DOMTarget = stepWrapper.children[0];
  //   const step2 = stepWrapper.children[1];
  //   const step3 = stepWrapper.children[2];
  //   const step4 = stepWrapper.children[3];
  //   const sections: gsap.DOMTarget = gsap.utils.toArray([
  //     step1,
  //     step2,
  //     step3,
  //     step4,
  //   ]);

  //   tl.current = gsap
  //     .timeline({
  //       scrollTrigger: {
  //         trigger: stepWrapper,
  //         start: 'top top',
  //         end: 'bottom bottom',
  //         scrub: 1,
  //       },
  //     })
  //     .to(sections, { xPercent: -100, ease: 'none' });
  //   console.log(stepWrapper);
  // }, []);
  return (
    <>
      <Container maxW={'7xl'} py={20}>
        <Stack
          justifyContent='space-between'
          direction={{ base: 'column', md: 'row' }}
          alignItems='center'
          spacing={20}
        >
          <Stack flex={1} spacing={8}>
            <Text
              bg={useColorModeValue('blue.50', 'brand.500')}
              rounded='lg'
              p={2}
              alignSelf='flex-start'
              color='brand.500'
              textTransform='uppercase'
              fontSize='sm'
              fontWeight='600'
            >
              Solutions
            </Text>
            <Text
              fontWeight={700}
              lineHeight={1.2}
              as={'span'}
              fontSize={{ base: '2xl', sm: '3xl', lg: '5xl' }}
            >
              The 1-space all view experience technology
            </Text>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color='gray.500'>
              Whether you are in Asia, Europe, America, Antartica or Australia,
              distance should not be a barrier. When you need an errand runner
              or a wheel to get the task done, we are here to help run errands
              for those who a re unable to. We can do your pickups, deliveries,
              help buy stuff from the market, drive folks around and many more.
            </Text>
            <Box>
              <Button colorScheme='brand' size='lg'>
                Shop now
              </Button>
            </Box>
          </Stack>
          <Stack flex={1}>
            <div className='image-slide-scroll' ref={(el) => (imgSlide = el)}>
              <img
                src='images/grocery3.avif'
                alt='Groceries'
                className='w-100 rounded is-reveal'
              />
            </div>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

export default Solutions;
