import Image from 'next/image';
import React from 'react';


const images = [
  '/IMG.png',
  '/IMG.png',
  '/IMG.png',
  '/IMG.png',
  '/IMG.png',
  
  
];

const Velociety = () => {
  return (
    <section className='w-full py-[99px] flex'>
     
        {images.map((image, index) => (
          <div key={index} className='mr-4  '>
            <Image src={image} alt={`pic-${index}`} width={300} height={300} className='w-[500px] '/>
          </div>
        ))}
      
    </section>
  );
};

export default Velociety;
