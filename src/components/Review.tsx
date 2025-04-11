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
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { GlowingEffect } from '@/components/ui/glowing-effect';

/**
 * Constants
 */
import { reviewData } from '@/constants';

/**
 * Assets
 */
import { LineChart, AlertTriangle, Gauge, Sparkles } from 'lucide-react';

/**
 * Framer motion variants
 */
import * as variants from '@/lib/motionVariants';

const benefitIcons = [
  <LineChart className='w-10 h-10 text-primary' />,
  <AlertTriangle className='w-10 h-10 text-primary' />,
  <Gauge className='w-10 h-10 text-primary' />,
];

const Review = () => {
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
            {reviewData.sectionSubtitle}
          </motion.p>

          <motion.h2
            variants={variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-title'
          >
            {reviewData.sectionTitle}
          </motion.h2>
        </div>

        <motion.div
          variants={variants.staggerContainer}
          initial='start'
          whileInView='end'
          viewport={{ once: true }}
          className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8'
        >
          {reviewData.reviewCard.map(({ title, text, reviewAuthor, date }, index) => (
            <motion.div
              key={index}
              variants={variants.fadeInUp}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className='h-full flex'
            >
              <div className="relative w-full h-full flex">
                <Card className='h-full flex flex-col bg-background/60 border border-slate-800 backdrop-blur-3xl rounded-xl shadow-lg overflow-hidden'>
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={2}
                  />
                  
                  {/* Elementos decorativos */}
                  <motion.div 
                    className="absolute -right-16 -top-16 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div 
                    className="absolute -left-16 -bottom-16 w-32 h-32 bg-primary/5 rounded-full blur-xl"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                  
                  <CardHeader className="pb-2">
                    <motion.div
                      initial={{ rotate: 0, y: 0 }}
                      whileHover={{ rotate: 15, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className='p-3 rounded-lg bg-primary/10 w-fit mb-4 relative group'
                    >
                      {benefitIcons[index]}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        animate={{ 
                          boxShadow: ["0px 0px 0px rgba(89, 86, 255, 0)", "0px 0px 20px rgba(89, 86, 255, 0.5)", "0px 0px 0px rgba(89, 86, 255, 0)"] 
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.div 
                        className="absolute top-0 right-0 opacity-0 group-hover:opacity-100"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1, rotate: [0, 20, 0] }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      >
                        <Sparkles className="w-3 h-3 text-primary/80" />
                      </motion.div>
                    </motion.div>
                    <CardTitle className='text-xl font-semibold'>{title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className='flex-1 pt-2'>
                    <p className='text-muted-foreground leading-relaxed'>{text}</p>
                  </CardContent>
                  
                  <CardFooter className='border-t border-slate-800 pt-4 mt-auto'>
                    <div className='flex justify-between w-full'>
                      <p className='font-medium text-primary'>{reviewAuthor}</p>
                      <motion.p 
                        className='text-sm text-muted-foreground bg-primary/10 px-2 py-1 rounded-full'
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(89, 86, 255, 0.2)" }}
                        transition={{ duration: 0.2 }}
                      >
                        {date}
                      </motion.p>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Review;
