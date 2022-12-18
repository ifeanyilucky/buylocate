// Chakra imports
import {
  AvatarGroup,
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Link,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
// Custom components
import Card from './Card';
// Assets
import { useState } from 'react';
import { CloseIcon } from '../svgIcons';
import ProductModal from './ProductModal';

export default function ProductCard({ product }) {
  const { name, description, price, image, id } = product;
  const [like, setLike] = useState(false);
  const textColor = useColorModeValue('navy.700', 'white');
  const textColorBid = useColorModeValue('brand.500', 'white');

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {isOpen && (
        <ProductModal
          product={product}
          isOpen={isOpen}
          onClose={onClose}
          onOpen={onOpen}
        />
      )}
      <Card>
        <Flex direction={{ base: 'column' }} justify='center' mb={'15px'}>
          <Box mb={{ base: '10px', '2xl': '20px' }} position='relative'>
            <Image
              src={image}
              w={{ base: '100%', '3xl': '100%' }}
              h={{ md: '180px', base: '130px' }}
              borderRadius='20px'
              fit='cover'
              alt={name}
            />
          </Box>
          <Flex flexDirection='column' justify='space-between' h='100%'>
            <Flex
              justify='space-between'
              direction={{
                base: 'row',
                md: 'column',
                lg: 'row',
                xl: 'column',
                '2xl': 'row',
              }}
              mb='auto'
            >
              <Flex direction='column'>
                <Text
                  color={textColor}
                  fontSize={{
                    base: 'xl',
                    md: 'lg',
                    lg: 'lg',
                    xl: 'lg',
                    '2xl': 'md',
                    '3xl': 'lg',
                  }}
                  mb='5px'
                  fontWeight='bold'
                  me='14px'
                  textTransform='capitalize'
                >
                  {name}
                </Text>
                <Text
                  color='secondaryGray.600'
                  fontSize={{
                    base: 'sm',
                  }}
                  fontWeight='400'
                  me='14px'
                >
                  {description}
                </Text>
              </Flex>
            </Flex>
            <Flex
              align={{
                base: 'center',
                md: 'start',
                lg: 'center',
                xl: 'start',
                '2xl': 'center',
              }}
              justify='space-between'
              direction={{
                base: 'row',
                md: 'column',
                lg: 'row',
                xl: 'column',
                '2xl': 'row',
              }}
              mt='5px'
            >
              <Link
                to='#'
                mt={{
                  base: '0px',
                  md: '10px',
                  lg: '0px',
                  xl: '10px',
                  '2xl': '0px',
                }}
              >
                <Button
                  variant='darkBrand'
                  color='white'
                  fontSize='sm'
                  fontWeight='500'
                  borderRadius='70px'
                  px='24px'
                  onClick={onOpen}
                  py='5px'
                >
                  View item
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </>
  );
}

// import { useState } from 'react';
// import imageUrlBuilder from '@sanity/image-url';
// import client from '../../client';
// import ProductModal from './ProductModal';
// import { Url } from 'url';

// function urlFor(source: Url) {
//   return imageUrlBuilder(client).image(source);
// }
// export default function ProductCard({ product }): JSX.Element {
//   const [showModal, setShowModal] = useState<Boolean>(false);
//   const { defaultProductVariant, blurb, title } = product;
//   return (
//     <>
//       <div
//         className='product-card rounded border-bottom d-flex justify-content-between p-3'
//         onClick={() => setShowModal(true)}
//       >
//         <div className='product-card-content p-2'>
//           <h5 className='h5'>{title}</h5>
//           <p className='text-muted'>{blurb.en}</p>
//           <p className='lead'>NGN {defaultProductVariant.price}</p>
//         </div>
//         <div className='product-card-media'>
//           <img
//             src={urlFor(defaultProductVariant.images[0])}
//             className='rounded'
//             width='130'
//             alt='grocery'
//             loading='lazy'
//           />
//         </div>
//       </div>
//       <ProductModal
//         showModal={showModal}
//         setShowModal={setShowModal}
//         product={product}
//       />
//     </>
//   );
// }
