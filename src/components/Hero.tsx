/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import {
  motion,
  Variants,
} from 'motion/react';

/**
 * Components
 */
import { Button } from '@/components/ui/button';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';

/**
 * Assets
 */
import { heroBanner } from '@/assets';

/**
 * Constants
 */
import { heroData } from '@/constants';

/**
 * Framer motion variants
 */
const heroVariant: Variants = {
  start: {},
  end: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const heroChildVariant: Variants = {
  start: {
    y: 30,
    opacity: 0,
    filter: 'blur(5px)',
  },
  end: {
    y: 0,
    opacity: 1,
    filter: 'blur(0)',
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

const Hero = () => {
  return (
    <section className='min-h-[80vh] flex flex-col items-center py-10'>
      <HeroGeometric 
        badge={heroData.sectionSubtitle}
        title1={heroData.sectionTitle}
        title2={heroData.decoTitle}
        description={heroData.sectionText}
        className="h-[65vh] md:h-[60vh] max-h-[700px] min-h-[500px]"
      />

      <motion.div
        variants={heroVariant}
        initial='start'
        animate='end'
        className='container text-center'
      >
        <div className='max-w-screen-md mx-auto'>
          <motion.p
            variants={heroChildVariant}
            className='text-muted-foreground mt-4 md:text-lg'
          >
            FounderPilot AI conecta seus dados financeiros, operacionais e de agenda para antecipar riscos, sugerir melhorias e impulsionar seu crescimento. Tudo com clareza, benchmark de mercado e filosofia aplicada.
          </motion.p>

          <motion.div
            variants={heroChildVariant}
            className='flex justify-center gap-2 mt-8 md:mt-10'
          >
            <Button size="lg">Quero acesso antecipado</Button>
          </motion.div>
          
          <motion.p
            variants={heroChildVariant}
            className='text-sm text-muted-foreground/70 mt-3 mb-8'
          >
            Entre na lista de espera e seja o primeiro a testar
          </motion.p>
        </div>
      </motion.div>
      
      <div className='w-full'>
        <ContainerScroll
          titleComponent={
            <div className="mb-8 md:mb-10"></div>
          }
        >
          <div className='relative w-full h-full flex items-center justify-center bg-background/50 backdrop-blur-md border border-slate-800 rounded-xl p-4 md:p-6'>
            <img
              src={heroBanner}
              alt='FounderPilot AI dashboard'
              className='w-full h-full object-contain max-w-4xl rounded-lg'
            />
            
            {/* Blurry glow effect inside the card */}
            <div className='absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-30'></div>
          </div>
        </ContainerScroll>
      </div>
    </section>
  );
};

export default Hero;
