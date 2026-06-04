import React from 'react';
import Hero from '../components/Hero';
import Showcase from '../components/Showcase';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Comparison from '../components/Comparison';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Showcase />
      <Features />
      <HowItWorks />
      <Comparison />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}
