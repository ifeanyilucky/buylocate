import React from 'react';
import {
  Stack,
  Box,
  Text,
  Tag,
  Grid,
  GridItem,
  Image,
  Heading,
} from '@chakra-ui/react';

const Marquee = () => {
  const itemTag = [
    'smoked fish',
    'garri',
    'bean flour',
    'melon seed',
    'ogbono',
    'cassava flour',
    'bitter leaf',
    'dried pumpkin leaf',
    'palm wine',
    'coconut processing',
    'palm wine',
    'palm oil',
    'coconut processing',
    'pepper',
    'tomato paste',
    'yoghurt',
    'pap',
    'vegetable leaves',
    'hibiscus flower',
    'hot chilli pepper',
    'bitter production',
    'groundnut',
    'seseme seed',
  ];
  const marqueImages = [
    'https://res.cloudinary.com/thebrickng/image/upload/v1668793632/buylocate/dried-fish_swbdwg.jpg',
    'https://res.cloudinary.com/thebrickng/image/upload/v1668793555/buylocate/bean-flour_rmvitj.jpg',
    'https://res.cloudinary.com/thebrickng/image/upload/v1668793553/buylocate/cassava-flour-bowl_434193-5528_yce5dk.jpg',
    'https://res.cloudinary.com/thebrickng/image/upload/v1668793548/buylocate/bitter-leaf_vekjsu.jpg',
    'https://res.cloudinary.com/thebrickng/image/upload/v1668793330/buylocate/tomato-paste_mo50q6.jpg',
    'https://res.cloudinary.com/thebrickng/image/upload/v1668793257/buylocate/Egusi-Melon-Dey-Chop_ifi7qb.png',
    'https://res.cloudinary.com/thebrickng/image/upload/v1668793255/buylocate/ogbono_seeds_african_wild_mango_seed_ogbono_seed_irvinia_gabonensis_Wild_Mango_Seeds_zkyrd3.jpg',
    'https://res.cloudinary.com/thebrickng/image/upload/v1668793151/buylocate/palmoil_indonesia_best_bakhabarkissan.com__xtmwle.webp',
    'https://res.cloudinary.com/thebrickng/image/upload/v1668793257/buylocate/Egusi-Melon-Dey-Chop_ifi7qb.png',
    'https://res.cloudinary.com/thebrickng/image/upload/v1668793255/buylocate/ogbono_seeds_african_wild_mango_seed_ogbono_seed_irvinia_gabonensis_Wild_Mango_Seeds_zkyrd3.jpg',
    'https://res.cloudinary.com/thebrickng/image/upload/v1668793151/buylocate/palmoil_indonesia_best_bakhabarkissan.com__xtmwle.webp',
    'https://res.cloudinary.com/thebrickng/image/upload/v1668793257/buylocate/Egusi-Melon-Dey-Chop_ifi7qb.png',
    'https://res.cloudinary.com/thebrickng/image/upload/v1668793255/buylocate/ogbono_seeds_african_wild_mango_seed_ogbono_seed_irvinia_gabonensis_Wild_Mango_Seeds_zkyrd3.jpg',
    'https://res.cloudinary.com/thebrickng/image/upload/v1668793151/buylocate/palmoil_indonesia_best_bakhabarkissan.com__xtmwle.webp',
    'https://res.cloudinary.com/thebrickng/image/upload/v1669106177/buylocate/africans_x4zozi.jpg',
  ];
  return (
    <Grid className='marque__wrapper' height={{ base: '40rem', md: '50rem' }}>
      <div className='marquee'>
        <div className='marquee__group'>
          {marqueImages.slice(0, 4).map((image, index) => (
            <img src={image} key={index} alt={index} />
          ))}
        </div>

        <div className='marquee__group'>
          {marqueImages.slice(0, 4).map((image, index) => (
            <img src={image} key={index} alt={index} />
          ))}
        </div>
      </div>

      <div className='marquee marquee--borders'>
        <div className='marquee__group'>
          {itemTag.map((item, index) => (
            <Tag
              size='lg'
              bg={'white'}
              variant='solid'
              textColor={'blackAlpha.800'}
              key={index}
              py={5}
              px={10}
              textTransform='uppercase'
            >
              {item}
            </Tag>
          ))}
        </div>

        <div aria-hidden='true' className='marquee__group'>
          {itemTag.map((item, index) => (
            <Tag
              size='lg'
              bg={'white'}
              variant='solid'
              textColor={'blackAlpha.800'}
              key={index}
              py={5}
              px={10}
              textTransform='uppercase'
            >
              {item}
            </Tag>
          ))}
        </div>
      </div>

      <div className='marquee marquee--reverse'>
        <div className='marquee__group'>
          {marqueImages.slice(5, 9).map((image, index) => (
            <img src={image} key={index} alt={index} />
          ))}
        </div>

        <div aria-hidden='true' className='marquee__group'>
          {marqueImages.slice(5, 9).map((image, index) => (
            <img src={image} key={index} alt={index} />
          ))}
        </div>
      </div>
    </Grid>
  );
};
export default function Marque() {
  const itemTag = [
    'Egusi',
    'Dried vegetable',
    'dried fish',
    'Tomato paste',
    'beans flour',
    'cassava flour',
    'Egusi',
    'Dried vegetable',
    'dried fish',
    'Tomato paste',
    'beans flour',
    'cassava flour',
    'Egusi',
    'Dried vegetable',
    'dried fish',
    'Tomato paste',
    'beans flour',
    'cassava flour',
    'cassava flour',
    'Egusi',
    'Dried vegetable',
    'dried fish',
    'Tomato paste',
    'beans flour',
    'cassava flour',
    'cassava flour',
    'Egusi',
    'Dried vegetable',
    'dried fish',
    'Tomato paste',
    'beans flour',
    'cassava flour',
  ];
  return (
    <Box
      bgGradient={'linear(to-r, brand.900, black)'}
      py={10}
      position='relative'
    >
      <Box textAlign='center' maxW={'container.md'} margin='0 auto' pb={16}>
        <Heading
          as='span'
          fontWeight='800'
          size={{ base: 'xl', md: '3xl' }}
          color='white'
        >
          <Text as='span' opacity={0.5}>
            #buylocate
          </Text>{' '}
          anywhere- with over 4000 customers and counting.
        </Heading>
      </Box>
      <Marquee />
      {/* <Stack direction='column' gap={2}>
        <Box
          transform={'translateX(0)'}
          float='right'
          className='marque-wrapper-right'
        >
          <Stack gap={2} direction='row' width='600%'>
            {itemTag.map((item, index) => (
              <Tag
                size='lg'
                bg={'white'}
                variant='solid'
                textColor={'blackAlpha.800'}
                key={index}
                py={5}
                px={10}
              >
                {item}
              </Tag>
            ))}
          </Stack>{' '}
        </Box>
        <Box float='left' className='marque-wrapper'>
          <Stack direction='row' gap={2} width='400%'>
            {marqueImages.map((image, i) => (
              <Stack key={i}>
                <Image
                  src={image}
                  rounded={'xl'}
                  height='286px'
                  width='409px'
                  fit='cover'
                  alt={i}
                />
              </Stack>
            ))}
          </Stack>
        </Box>
        <Box float='right' className='marque-wrapper-right'>
          <Stack gap={2} direction='row' width='600%'>
            {itemTag.map((item, index) => (
              <Tag
                size='lg'
                bg={'white'}
                variant='solid'
                textColor={'blackAlpha.800'}
                key={index}
                py={5}
                px={10}
              >
                {item}
              </Tag>
            ))}
          </Stack>{' '}
        </Box>
        <Box float='left' className='marque-wrapper'>
          <Stack direction='row' gap={2} width='400%'>
            {marqueImages.map((image, i) => (
              <Stack key={i}>
                <Image
                  src={image}
                  rounded={'xl'}
                  height='286px'
                  width='409px'
                  fit='cover'
                  alt={i}
                />
              </Stack>
            ))}
          </Stack>
        </Box>
      </Stack> */}
    </Box>
  );
}
