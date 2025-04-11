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
import Logo from '@/components/Logo';
import { GlowingEffect } from '@/components/ui/glowing-effect';

/**
 * Constants
 */
import { footerData } from '@/constants';

/**
 * Framer motion variants
 */
import * as variants from '@/lib/motionVariants';

const Footer = () => {
  return (
    <footer className='section !pt-16 !pb-8 bg-gradient-to-b from-background to-background/80'>
      <div className='container'>
        <div className='grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-4 relative z-10'>
          <motion.div
            variants={variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
          >
            <Logo />
            <p className='text-sm text-muted-foreground mt-4 max-w-xs leading-relaxed'>
              Desenvolvido pela Synapsia para fundadores que buscam clareza estratégica através de inteligência artificial.
            </p>
            
            <div className='mt-6'>
              <ul className='flex gap-4'>
                {footerData.socialLinks.map(({ href, icon }, index) => (
                  <li key={index}>
                    <a
                      href={href}
                      target='_blank'
                      className="text-muted-foreground hover:text-primary transition-colors p-2 bg-background/50 border border-slate-800 rounded-lg hover:border-primary/30 flex items-center justify-center"
                    >
                      {icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div 
            variants={variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='grid grid-cols-2 gap-x-6 gap-y-8 text-sm sm:grid-cols-3 lg:col-span-3 mt-4'
          >
            {footerData.links.map(({ title, items }, index) => (
              <div key={index} className='relative'>
                <h3 className='mb-4 font-semibold text-base bg-gradient-to-r from-primary/90 to-primary/60 bg-clip-text text-transparent'>{title}</h3>

                <ul className='space-y-2'>
                  {items.map(({ href, label }, index) => (
                    <li
                      key={index}
                      className='text-muted-foreground'
                    >
                      <a
                        href={href}
                        className='inline-block py-1 transition-colors hover:text-primary'
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          variants={variants.fadeInUp}
          initial='start'
          whileInView='end'
          viewport={{ once: true }}
          className='flex flex-col md:flex-row md:justify-between mt-12 border-t border-slate-800 py-6 gap-4 relative'
        >
          <div className='relative overflow-hidden rounded-lg mt-2 bg-background/30 border border-slate-800 backdrop-blur-md p-4 w-full'>
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={1}
            />
            <p className='text-sm text-muted-foreground relative z-10'>
              {footerData.copyright}
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Efeito decorativo */}
      <div className='absolute bottom-0 left-0 w-full h-64 pointer-events-none'>
        <div className='absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background/20 to-transparent'></div>
        <div className='absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-[80px] opacity-30'></div>
        <div className='absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-[60px] opacity-20'></div>
      </div>
    </footer>
  );
};

export default Footer;
