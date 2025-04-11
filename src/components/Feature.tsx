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
import FeatureCard from '@/components/FeatureCard';

/**
 * Constants
 */
import { featureData } from '@/constants';

/**
 * Framer motion variants
 */
import * as variants from '@/lib/motionVariants';

const Feature = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='section-head'>
          <motion.p
            variants={variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-subtitle'
          >
            {featureData.sectionSubtitle}
          </motion.p>

          <motion.h2
            variants={variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-title'
          >
            {featureData.sectionTitle}
          </motion.h2>

          <motion.p
            variants={variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-text'
          >
            {featureData.sectionText}
          </motion.p>
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
          {featureData.list?.map((item, index) => (
            <motion.div
              key={index}
              variants={variants.fadeInUp}
              initial='start'
              whileInView='end'
              viewport={{ once: true }}
              className='bg-background/60 border border-slate-800 backdrop-blur-3xl rounded-xl shadow-lg p-6'
            >
              <div className='mb-4 p-3 rounded-lg bg-primary/10 w-fit'>
                {item.icon}
              </div>
              <h3 className='text-xl font-semibold mb-2'>{item.title}</h3>
              <p className='text-muted-foreground'>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
