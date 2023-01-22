import React from 'react';
import {
  Text,
  Container,
  Stack,
  Image,
  Box,
  chakra,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import Page from '../components/Page';
import { Header } from 'src/components/custom';

const About = () => {
  return (
    <Box as={Page} title='About us'>
      <Container maxWidth='7xl' py={10}>
        <Stack
          maxW={{ md: '70%', base: '100%' }}
          margin='0 auto'
          textAlign='center'
          mb={10}
        >
          <Header>We create virtual commerce to physical</Header>
          <Text as='div' fontSize={{ base: 'xl', md: '2xl' }} py={5}>
            With Buylocate you can be at two different places at the Same time (
            Virtual & Physical)
          </Text>
        </Stack>
        <Stack my={10}>
          <Image
            src='/images/delivery-worker.jpg'
            alt='delivery-worker'
            rounded='xl'
            maxW='100%'
            height='60%'
          />
        </Stack>
        <Stack maxW={{ md: '70%', base: '100%' }} margin='0 auto'>
          <Stack spacing={10}>
            <Text
              as='h3'
              fontWeight='700'
              fontSize={{ base: '2xl', md: '3xl' }}
            >
              About Buylocate
            </Text>
            <Text fontSize={{ base: 'lg', md: 'xl' }}>
              Buylocate is a virtual platform that represents you anywhere in
              the World. This is an international platform that helps you get
              your shopping just the way you do it yourself. We represent you in
              another country to shop for your local foodstuffs and groceries
              and ship down to your within 3 to 6 days. Buylocate provides a
              platform for Nigerians in diaspora to access the Nigerian
              foodstuff markets. We create the virtue shopping experience to
              physical (V2P). So with Buylocate, you can be at two different
              places at the same time (Virtual & Physical)
            </Text>
            <Text as='h4' fontWeight='700' fontSize={{ base: 'xl', md: '2xl' }}>
              THE NEED GAP
            </Text>
            <Text fontSize={{ base: 'lg', md: 'xl' }}>
              Buylocate provides a platform for Nigerians in diaspora to access
              the Nigerian foodstuff markets. We create the virtue shopping
              experience to physical (V2P). So with Buylocate you can be at two
              different places at the same time (Virtual & Physical) The volume
              of Nigerian export of foodstuffs to these countries is still on a
              very small scale considering the estimation of well over 20
              million Nigerians who reside outside the country, with the
              majority, living in the UK and the US. This is a great opportunity
              to sell to this category of people. The few exporters of African
              foodstuffs cannot meet with the demand of Nigerians whose
              population is increasing everyday abroad. Some of the exportable
              groceries (foodstuffs) are: smoked fish, garri, beans flour, melon
              seed, ogbono, cassava flour, bitter leaf, dried pumpkin leaf, palm
              wine, butter production, coconut processing, pepper, tomato paste,
              hibiscus flower, yoghurt, pap, other vegetable leaves, hot chilli
              pepper, among many others. The demand for African foodstuffs in
              Europe and America is rising due to increasing number of Africans,
              particularly Nigerians who sojourn to these countries for the
              proverbial greener pastures. There are many small foodstuffs
              exporters in the West African sub region who depend on middlemen
              to export their produce in small quantities and sell to consumers
              or retailers running ethnic shops in the US and Europe. Source:
              https://agoa.info/news/article/4803-nigeria-how-to-tap-into-foodstuff-exportmarket.html
            </Text>
          </Stack>
        </Stack>
        <Stack>
          <Box>
            <Text></Text>
          </Box>
          <Box>
            <Grid>
              <GridItem>
                <Image src='/images' alt='about' />
              </GridItem>
            </Grid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;
