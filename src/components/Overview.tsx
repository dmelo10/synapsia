/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { motion } from 'motion/react';

/**
 * Components
 */
import { Button } from '@/components/ui/button';
import { GlowingEffect } from '@/components/ui/glowing-effect';

/**
 * Constants
 */
import { overviewData } from '@/constants';

/**
 * Assets
 */

import { Instagram } from 'lucide-react';

/**
 * Framer motion variants
 */
import * as variants from '@/lib/motionVariants';
import CountUp from 'react-countup';

const Overview = () => {
  return (
    <section className='section bg-background/30'>
      <div className='container'>
        <div className='section-head'>
          <motion.p
            variants={variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-subtitle'
          >
            {overviewData.sectionSubtitle}
          </motion.p>

          <motion.h2
            variants={variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-title'
          >
            {overviewData.sectionTitle}
          </motion.h2>

          <motion.p
            variants={variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-text max-w-screen-lg mx-auto'
          >
            {overviewData.sectionText}
          </motion.p>
        </div>

        <motion.div
          variants={variants.fadeInScale}
          initial='start'
          whileInView='end'
          viewport={{ once: true }}
          className='relative w-full max-w-[1200px] mx-auto mt-16'
        >
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {overviewData.list.map(({ title, text }, index) => (
              <motion.div
                key={index}
                variants={variants.fadeInUp}
                initial='start'
                whileInView='end'
                viewport={{ once: true }}
                className='relative'
              >
                <div className='bg-background/60 border border-slate-800 backdrop-blur-3xl rounded-xl shadow-lg p-6 relative overflow-hidden'>
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={2}
                  />
                  <div className='relative z-10'>
                    <h3 className='text-2xl font-semibold mb-2 text-primary'>{title}</h3>
                    <p className='text-muted-foreground'>{text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Efeito de brilho */}
          <div className='absolute -z-10 inset-0 blur-[100px] opacity-20 bg-gradient-to-r from-primary via-primary/50 to-primary/30'></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Overview;
