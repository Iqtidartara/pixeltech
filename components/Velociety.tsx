
"use client"
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const images = [
  '/IMG.png',
  '/IMG.png',
  '/IMG.png',
  '/IMG.png',
  '/IMG.png',
];

const Velociety = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['-70%', '-40%']);

  return (

    <div className='overflow-x-hidden'>
    <div ref={targetRef} className='py-[99px] flex   md:w-[115rem] w-[1400px] '>
      {images.map((image, index) => (
        <motion.div
          key={index}
          style={{ x }}
          className='ml-[1.5rem] w-full '>
          <Image
            src={image}
            alt={`pic-${index}`}
            width={1800}
            height={1800}
            className='w-[50rem] hover:scale-110'
          />
        </motion.div>
      ))}
    </div>
    </div>
  );
};

export default Velociety
