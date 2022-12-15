import React from 'react';
import {
  Text,
  Stack,
  Container,
  Accordion,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
  AccordionButton,
  Box,
} from '@chakra-ui/react';
import Page from '../components/Page';

function Faqs() {
  return (
    <Page>
      <Container maxW='7xl'>
        <Box maxW='768px'>
          <Box maxW='400px' mb={10}>
            <Stack>
              <Text
                as='span'
                fontWeight='900'
                fontSize={{ base: '2xl', lg: '5xl' }}
              >
                Frequently Asked Questions
              </Text>
            </Stack>
            <Stack>
              <Text
                as='span'
                fontWeight='600'
                fontSize={{ base: 'xl', lg: '2xl' }}
              >
                A handy guide to Diasporas
              </Text>
            </Stack>
          </Box>

          <Accordion>
            {[1, 1, 1, 1, 1, 2, 2, 2, 2].map((faq, index) => (
              <AccordionItem key={index} py={3}>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      <Text
                        as='span'
                        fontWeight='500'
                        fontSize={{ base: 'xl' }}
                      >
                        A handy guide to Diasporas
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>{' '}
      </Container>
    </Page>
  );
}

export default Faqs;
