import Image from 'next/image';
import React from 'react';

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  isPro?: boolean; // New prop to identify if it's the Pro card
}

const PricingCard: React.FC<PricingCardProps> = ({ title, subtitle, price, features, isPro }) => {
  const cardStyle = isPro
    ? {
        background: 'var(--main, linear-gradient(143deg, #DB00FF -3.42%, #306BFF 97.67%))',
      }
    : {};

  return (
    <div
      className={`shadow-2xl bg-${isPro ? 'gradient-pro' : 'white'} flex w-full ${
        isPro ? 'scale-150' : 'grow'
      } flex-col mt-10 mx-auto pt-8 pb-6 px-8 rounded-3xl md:mt-0`}
      style={cardStyle}
    >
      <div className='w-full max-w-full mb-5 md:w-[260px] md:mb-0'>
        <h3 className='text-neutral-800 text-2xl md:text-3xl lg:text-4xl font-bold leading-[131%]'>
          {title}
        </h3>
        <p className='text-slate-600 text-base md:text-lg font-medium leading-[150%] mt-1.5'>
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
            <div key={index} className='flex gap-4 items-start p-2'>
              <Image
                src={`/darkcheck.png`}
                alt=''
                className='aspect-[1.14] object-contain object-center w-4 overflow-hidden self-center max-w-full my-auto'
                width={35}
                height={35}
              />
              <p className='text-slate-600 text-base md:text-lg font-medium leading-[150%]'>{feature}</p>
            </div>
          ))}
        </div>

        <div className='flex flex-col gap-4 mt-6'>
          <button
            className={`bg-${isPro ? '#323232' : '#000'} text-white px-4 py-2 rounded-[37.48px] hover:bg-blue-700`}
          >
            {isPro ? 'Upgrade Now' : 'Get Started'}
          </button>
          {isPro && (
            <button className='bg-[#FAFAFA] text-[#323232] px-4 py-2 rounded-[37.48px] hover:bg-gray-100'>
              Book A Call
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
