import { motion } from 'framer-motion';
import { AvatarWorks } from '../AvatarWorks/AvatarWorks';
import { Circle } from '../Circle';
import { fadeIn } from '@/utils/motionTransitions';
import { TestimonialSlider } from './TestimonialsSlider';
import { useEffect, useState } from 'react';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const Testimonial = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
      function updateScreenSize() {
        setIsSmallScreen(window.innerWidth < 768);
      }
  
      window.addEventListener('resize', updateScreenSize);
      updateScreenSize();
  
      return () => window.removeEventListener('resize', updateScreenSize);
    }, []);

    const [t] = useTranslation("testimonials")

    return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="flex flex-col md:flex-row gap-x-5 -top-5 -md:top-10"
        style={{ marginTop: isSmallScreen ? '400px' : '0' }}
      >            <AvatarWorks />
            <div className="flex flex-col justify-center min-h-screen text-black">
                <motion.h1
                    variants={fadeIn('up', 0.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="my-5 text-4xl text-center md:my-10"
                >{t("Testimonials.title1")}<br /><span className="text-black">{t("Testimonials.title2")}</span>
                </motion.h1>
                <motion.div
                    variants={fadeIn('up', 0.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                    <TestimonialSlider />
                </motion.div>
            </div>
        </div>
        </div>
    );
};