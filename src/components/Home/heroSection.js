import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { HeroVector } from '../svgIcons';
import { fadeInUp, staggerText } from '../animation';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  SimpleGrid,
  Box,
  Container,
  Stack,
  Heading,
  Text,
  Button,
  ButtonGroup,
  Image,
} from '@chakra-ui/react';
import { PATH_PAGES } from 'src/routes/path';
import { Header } from '../custom';

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
    <div className='bg-gradient'>
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
                    <Header>A helping hand to make your life easier</Header>
                  </div>
                  <Text my={'8'} fontSize={{ base: 'lg', md: 'xl' }}>
                    Our errand service is designed for people in the diaspora
                    who wants to get one or two things done in Nigeria but they
                    are limited with help.
                  </Text>
                  <ButtonGroup spacing={3}>
                    <Button
                      size='lg'
                      colorScheme='brand'
                      as={RouterLink}
                      to={PATH_PAGES.requestQuote}
                      rightIcon={<ArrowForwardIcon />}
                    >
                      Request a quote
                    </Button>
                    <Button
                      variant='light'
                      as={RouterLink}
                      to={PATH_PAGES.shopping}
                      rightIcon={<ArrowForwardIcon />}
                    >
                      Shop now
                    </Button>
                  </ButtonGroup>
                </div>
              </Stack>
            </Stack>
            <Box mr='auto' display={{ base: 'none', md: 'block' }}>
              <Image
                rounded='3xl'
                height={{ base: '320px', lg: '500px', md: '430px' }}
                fit={'cover'}
                width={{ base: '100%', md: '320px', lg: '360px' }}
                src='images/hero-mask.jpeg'
                className='hero-image'
                alt='hero-image'
              />
            </Box>
          </Stack>
        </div>
      </Container>
      <section
        data-v-16029162=''
        data-v-07a2afe5=''
        className='people-container'
      />
    </div>
  );
}
