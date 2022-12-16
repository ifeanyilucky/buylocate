import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { HeroVector } from '../svgIcons';
import { fadeInUp, staggerText } from '../animation';
import { Link as RouterLink } from 'react-router-dom';
import {
  SimpleGrid,
  Box,
  Container,
  Stack,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';
import HeroImageForMobile from './HeroImageForMobile';
import { PATH_PAGES } from 'src/routes/path';

export default function HeroSection() {
  const tl = useRef(null);
  // DOM element
  let headerDom = useRef(null);
  let hero = useRef(null);
  let heroImageWrapper = useRef(null);
  let heroContent = useRef(null);

  useEffect(() => {
    tl.current = gsap.timeline({ delay: 0.8 });
    gsap.to(hero, { css: { visibility: 'visible' } });
    // hero image DOM
    const heroImage = heroImageWrapper.firstElementChild;
    // hero content DOM
    const vectorDom = heroContent.children[0];
    const heroHeader = vectorDom.nextSibling;
    const heroHeader1 = heroHeader.children[0];
    const heroHeader2 = heroHeader.children[1];
    const heroHeader3 = heroHeader.children[2];
    const heroBtn = heroHeader.nextSibling;
    // hero image animation
    tl.current
      .fromTo(
        heroImageWrapper,
        { duration: 1.2, y: 800, ease: 'power3.InOut' },
        { y: 0 }
      )
      .fromTo(
        heroImage,
        { duration: 2, scale: 1.6, ease: 'power3.inOut' },
        { scale: 1, delay: 0.5 }
      );

    // content animation
    fadeInUp(vectorDom);
    staggerText(heroHeader1, heroHeader2, heroHeader3, 'auto');
    fadeInUp(heroBtn);
  }, [tl]);
  return (
    <>
      <Container maxW='7xl'>
        <div className='hero' ref={(el) => (hero = el)}>
          <Stack
            align={'center'}
            spacing={{ base: 8, md: 10, sm: 1 }}
            py={{ base: 10, md: 28 }}
            direction={{ base: 'column', md: 'row' }}
            justifyContent='space-between'
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Stack spacing={6} w={'full'} maxW={'lg'}>
                <div className='hero-content' ref={(el) => (heroContent = el)}>
                  <HeroVector />
                  <div>
                    <Heading
                      lineHeight={1.3}
                      fontSize={{
                        base: '32px',
                        sm: '36px',
                        md: '45px',
                        lg: '6xl',
                      }}
                      as={'span'}
                      position={'relative'}
                    >
                      A helping hand to make your life easier
                    </Heading>
                  </div>
                  <Text color={'gray.500'} my={'8'}>
                    Our errand service is designed for people in the diaspora
                    who wants to get one or two things done in Nigeria but they
                    are limited with help.
                  </Text>
                  <Button
                    size='lg'
                    colorScheme='brand'
                    as={RouterLink}
                    to={PATH_PAGES.requestQuote}
                  >
                    Request a quote
                  </Button>
                </div>
              </Stack>
            </Stack>
            <Box flex={1} display={{ base: 'none', md: 'block' }}>
              <div className='hero-media'>
                <div
                  className='image-mask'
                  ref={(el) => (heroImageWrapper = el)}
                >
                  <img
                    src='images/hero-mask.jpeg'
                    className='hero-image'
                    alt='hero-image'
                  />
                </div>
                <div className='circular one'>
                  <img
                    src='images/girl-with-grocery.jpeg'
                    className='circular-image'
                    alt='...'
                  />
                </div>
                <div className='circular two'>
                  <img
                    src='images/grocery5.avif'
                    className='circular-image'
                    alt='...'
                  />
                </div>
                <div className='circular three'>
                  <img
                    src='images/grocery3.avif'
                    className='circular-image'
                    alt='...'
                  />
                </div>
              </div>
            </Box>
          </Stack>
        </div>
      </Container>
      <HeroImageForMobile />{' '}
    </>
  );
}
