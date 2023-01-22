import React from 'react';
import {
  WhyChooseUs,
  HowItWorks,
  ErrandsForYou,
  HeroSection,
  Solutions,
} from '../components/Home';
import Marque from '../components/Home/Marque';
import Page from '../components/Page';

export default function Home() {
  return (
    <Page title={'Home'}>
      <HeroSection />
      <ErrandsForYou />
      <WhyChooseUs />
      <Solutions />
      <Marque />
      <HowItWorks />
    </Page>
  );
}
