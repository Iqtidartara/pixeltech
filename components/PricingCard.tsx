import Image from 'next/image';
import React from 'react';

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  type: 'standard' | 'pro' | 'premium'; // Add a type property
}

const PricingCard: React.FC<PricingCardProps> = ({ title, subtitle, price, features, type }) => {
  const cardStyles = {
    standard: 'bg-[#EFEFEF] ', // Standard card background color
    pro: 'gradient text-[#FAFAFA] ',
    // Gradient color for Pro card
    premium: 'bg-[#F5F2F0]', // Premium card background color
  };

  const buttonStyles = {
    standard: 'gradient text-white',
    pro: 'bg-[#000] text-[#FAFAFA] ',
    // Gradient color for Pro button
    premium: 'gradient text-white', // Premium card button color
  };

  const featureImages = {
    standard: '/darkcheck.png',
    pro: '/check-circle.png', // Replace with the path to the Pro image
    premium: '/darkcheck.png', // Replace with the path to the Premium image
  };

  return (
    <div
      className={`shadow-2xl flex w-full grow flex-col mt-10 mx-auto pt-16 pb-12 px-6 rounded-3xl md:mt-0 ${cardStyles[type]}`}
    >
      <div className='w-full max-w-full mb-5 md:w-[260px] md:mb-0'>
        <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold leading-[131%]'>
          {title}
        </h3>
        <p className='text-base md:text-lg font-medium leading-[150%] mt-1.5'>
          {subtitle}
        </p>
      </div>

      <div className='w-full max-w-full flex flex-col mt-5'>
        <div className='flex gap-3.5'>
          <div className='text-3xl font-bold leading-[120%] tracking-tight uppercase bg-clip-text'>
            {price}
          </div>
        </div>

        <div className='flex flex-col mt-5'>
          {features.map((feature, index) => (
            <div key={index} className='flex gap-4 items-center p-2'>
              <Image
                src={featureImages[type]} // Use the appropriate image based on the card type
                alt=''
                className='w-fit'
                width={85}
                height={85}
              />
              <p className='text-base md:text-lg font-medium leading-[150%]'>{feature}</p>
            </div>
          ))}
        </div>

        <div className='flex flex-col gap-4 mt-6'>
          <button className={`px-4 py-2 rounded-[37.48px] hover:bg-[#FAFAFA] hover:text-[#000] ${buttonStyles[type]}`}>
            {type === 'pro' ? 'Upgrade Now' : 'Get Started'}
          </button>
          <button className={`px-4 py-2 rounded-[37.48px] hover:bg-[#fafafada] bg-[#FAFAFA] text-[#323232] text-[16px] font-[700] `}>
            Book A Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
