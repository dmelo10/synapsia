/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { ReactLenis } from 'lenis/react';

/**
 * Components
 */
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Feature from '@/components/Feature';
import Process from '@/components/Process';
import Overview from '@/components/Overview';
import Review from '@/components/Review';
import PricingSection from '@/components/PricingSection';
import Cta from '@/components/Cta';
import { NewFooter } from '@/components/ui/new-footer';

const App = () => {
  return (
    <ReactLenis root>
      <div className='relative isolate overflow-hidden'>
        <Header />

        <main>
          <Hero />
          <Feature />
          <Process />
          <Overview />
          <Review />
          <PricingSection />
          <Cta />
        </main>

        <NewFooter />
      </div>
    </ReactLenis>
  );
};

export default App;
