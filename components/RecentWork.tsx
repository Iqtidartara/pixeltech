'use client'


import React, { useRef } from 'react';
import { Button } from './ui/button';
import { motion, useTransform, useScroll } from 'framer-motion';
import Image from 'next/image';

const RecentWork = () => {
const ref = useRef<HTMLDivElement>(null);
const {scrollYProgress } = useScroll({
  target : ref,
  offset:["0 1 ","1.33 1"]
});
const scaleProgress = useTransform(scrollYProgress,[0,1],[0.5,1]);
const opacityProgress = useTransform(scrollYProgress,[0,1],[0.6,1]);

const scrollToSection = (sectionId :any ) => {
  const targetElement = document.getElementById(sectionId);

  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth',
    });
  }
};

  return (
    
    <section className='bg-[#FAFAFA] py-[60px]'>
      <main
      
      className='mx-auto max-w-[80rem]'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-[#323232] md:text-[50px] text-[2rem] font-[600] md:leading-normal leading-[1.3] text-center fontT'>Recent Work</h1>
          <p className='text-center leading-[104.167%] md:text-[24px] text-[1rem] text-[#323232] py-[25px] fontT'>Designs that inspire.</p>
          <Button onClick={() => scrollToSection('recentwork')} className="btn text-[#FFF] text-[17px] tracking-[0.375px] font-[700] leading-[88.235%] translate-y-0 hover:-translate-y-2 transition delay-100 ">View recent work</Button>
        </div>
        
        <motion.div 
      
      ref={ref}
      style={{
        scale:scaleProgress,
        opacity:opacityProgress
      }}>
        <div className='flex flex-col md:flex-row items-center justify-between py-[40px] px-4' id='recentwork'>
          <Image src={"/imgae2.jpg"} alt='as' width={600} height={700} className='mb-[20px] md:mb-0 md:w-[48%]' />
          <Image src={"/i.jpg"} alt='as' width={600} height={700} className='md:w-[48%]' />
        </div>

        <div className='flex flex-col md:flex-row items-center justify-between py-[40px] px-4'>
          <Image src={"/image3.jpg"} alt='as' width={600} height={700} className='mb-[20px] md:mb-0 md:w-[48%]' />
          <Image src={"/image4.jpg"} alt='as' width={600} height={700} className='md:w-[48%]' />
        </div>
        <div className='flex flex-col md:flex-row items-center justify-between py-[40px] px-4'>
          <Image src={"/image6.jpg"} alt='as' width={600} height={700} className='mb-[20px] md:mb-0 md:w-[48%]' />
          <Image src={"/image5.jpg"} alt='as' width={600} height={700} className='md:w-[48%]' />
        </div>
        </motion.div>
      </main>
    </section>
  )
}

export default RecentWork
