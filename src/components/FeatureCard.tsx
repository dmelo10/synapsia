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
import { GlowingEffect } from '@/components/ui/glowing-effect';

/**
 * Framer motion variants
 */
import * as variants from '@/lib/motionVariants';

type FeatureCardProps = {
  classes?: string;
  children: JSX.Element;
};

const FeatureCard = ({ classes, children }: FeatureCardProps) => {
  return (
    <motion.div
      variants={variants.staggerContainer}
      initial='start'
      whileInView='end'
      viewport={{ once: true }}
      className={`relative overflow-hidden rounded-[14px] ${classes}`}
    >
      <div className='relative isolate bg-card backdrop-blur-md rounded-xl overflow-hidden min-h-full p-[1px]'>
        {/* Efeito de brilho ao passar o mouse */}
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
        />
        
        <div className="relative z-10 rounded-xl overflow-hidden">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
