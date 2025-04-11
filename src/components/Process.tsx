/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { motion } from 'framer-motion';

/**
 * Components
 */
import { GlowingEffect } from '@/components/ui/glowing-effect';

/**
 * Constants
 */
import { processData } from '@/constants';

/**
 * Framer motion variants
 */
import * as variants from '@/lib/motionVariants';

const Process = () => {
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
            {processData.sectionSubtitle}
          </motion.p>

          <motion.h2
            variants={variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-title'
          >
            {processData.sectionTitle}
          </motion.h2>

          <motion.p
            variants={variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-text max-w-screen-lg mx-auto'
          >
            {processData.sectionText}
          </motion.p>
        </div>

        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3 items-stretch mt-16'>
          {processData.list.map(({ icon, title, text }, index) => (
            <motion.div
              key={index}
              variants={variants.fadeInUp}
              initial='start'
              whileInView='end'
              viewport={{ once: true }}
              className='relative'
            >
              <div className='bg-background/60 border border-slate-800 backdrop-blur-3xl rounded-xl shadow-lg p-6 flex flex-col relative overflow-hidden'>
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                <div className='mb-6 p-4 rounded-lg bg-primary/10 w-fit relative z-10'>
                  {icon}
                </div>

                <div className='flex-1 relative z-10'>
                  <h3 className='text-xl font-semibold mb-3'>{title}</h3>
                  <p className='text-muted-foreground leading-relaxed'>{text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
