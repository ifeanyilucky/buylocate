import React, { useState, useEffect } from 'react';
import {
  Grid,
  GridItem,
  Text,
  Stack,
  Container,
  SimpleGrid,
  Input,
  Skeleton,
  Box,
} from '@chakra-ui/react';
import { NavArrowDown } from '../components/svgIcons';
import ProductCard from '../components/Shopping/ProductCard';
import { useStateContext } from '../context/stateContext';
import CartItems from '../components/Shopping/CartItems';
import ProductModal from '../components/Shopping/ProductModal';
import { useDisclosure } from '@chakra-ui/react';
import { Items } from '../components/storeItems';

function Shopping() {
  console.log(Items);
  const [search, setSearch] = useState('');
  const [product, setProduct] = useState([]);

  const { qty, setShowCart, showCart } = useStateContext();

  useEffect(() => {
    console.log(search);
    if (search.length >= 1) {
      const filteredProducts = Items.filter(
        (product) => search === product.name
      );
      setProduct(filteredProducts);
      console.log(filteredProducts);
    } else {
      setProduct(Items);
    }
  }, [search]);

  const SkeletonLoad = () => (
    <GridItem>
      <Skeleton height='180px' width='100%' rounded='lg' />
    </GridItem>
  );
  if (!Items && Items.length >= 1) {
    return (
      <Container maxW='7xl' my={20}>
        <Grid
          templateColumns={{ md: 'repeat(4, 1fr)', base: 'repeat(2, 1fr)' }}
          gap={10}
        >
          {Array.from({ length: 8 })
            .fill('a')
            .map((_, index) => (
              <SkeletonLoad key={index} />
            ))}
        </Grid>
      </Container>
    );
  }

  return (
    <>
      <Container maxW='7xl'>
        <Stack maxW='md' mx='auto' mb={5}>
          <Input
            py='20px'
            borderRadius='full'
            variant='filled'
            placeholder='Search...'
            onChange={(e) => setSearch(e.target.value)}
          />
        </Stack>
        <div className=' mt-5' id='vegetable'>
          <SimpleGrid columns={{ base: 1, md: 4, sm: 2 }} gap={6}>
            {!product.length ? (
              <SkeletonLoad />
            ) : (
              product.map((product, index) => (
                <ProductCard product={product} key={index} />
              ))
            )}
          </SimpleGrid>
        </div>
      </Container>
    </>
  );
}

export default Shopping;
