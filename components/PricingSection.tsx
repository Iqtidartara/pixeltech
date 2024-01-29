import React from 'react';
import PricingCard from './PricingCard';

const PricingSection = () => {
  return (
    <section className='w-full py-10 md:py-16 lg:py-20 gradient-background'>
      <main className='max-w-[90rem] mx-auto px-4'>
        <h2 className='text-[#323232] text-center text-3xl md:text-4xl lg:text-5xl font-bold leading-normal'>
          Design Tiers
        </h2>
        <p className='text-[#323232] text-center text-xl md:text-2xl font-normal leading-normal pt-4'>
          Discover the Pixeltect difference.
        </p>

        <div className='flex flex-col md:flex-row gap-10 py-16 px-5'>
          <PricingCard
            title={'Standard'}
            subtitle={'Single request. Speedy delivery. Pause or cancel at any time.'}
            price={'$4499/Month'}
            features={[
              'One request at a time',
              'Average 48-hour delivery',
              'Unlimited brands',
              'Unlimited users',
              'Easy credit-card payments',
              'Pause or cancel anytime',
            ]}
            type='standard'
          />
          <PricingCard
            title={'Pro'}
            subtitle={'Same speedy delivery. Double the requests. Pause or cancel at any time.'}
            price={'$5499/Month'}
            features={[
              'One request at a time',
              'Average 48-hour delivery',
              'Unlimited brands',
              'Unlimited users',
              'Easy credit-card payments',
              'Pause or cancel anytime',
            ]}
            type='pro'
          />
          <PricingCard
            title={'Premium'}
            subtitle={'Suitable for large projects.Pause or cancel at any time.'}
            price={'$7499/Month'}
            features={[
              'Unlimited requests',
              'Priority access',
              'Average 24-hour delivery',
              'Unlimited brands',
              'Unlimited users',
              'Easy credit-card payments',
              'Pause or cancel anytime',
            ]}
            type='premium'
          />
        </div>
      </main>
    </section>
  );
};

export default PricingSection;
