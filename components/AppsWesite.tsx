import React from 'react';
import "./Style.module.css"
const AppsWesite = () => {
  const categories = [
    'Websites',
    'Slide decks',
    'Trade show banners',
    'Mobile apps',
    'Direct mail',
    'Email Graphics',
    'Logos & branding',
    'Infographics',
    'Resumes',
    'Design systems',
    'Brochures',
    'Business cards',
    'SAAS',
    'Signage',
    'Packaging',
    'Wireframes',
    'Brand guides',
    'Blog graphics',
    'Stationery',
    'Social media graphics',
    'Digital ads',
    'Pitch decks',
    'Billboards',
    'Icons',
  ];

  return (
    <section className='w-full py-[60px]'>
      <main className='mx-auto max-w-[80rem]'>
        <h1 className='leading-normal text-[50px] text-[#323232] font-[700] text-center py-16'>
          Apps, websites, logos & more.
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[80rem]   md:text-start text-center gradient-border  border-4 '>
          {categories.map((category, index) => (
            <div 
            key={index} className='p-9 '>
              <h1 className='text-start text-[30px] text-[#323232] font-[400] leading-normal pb-3'>{category}</h1>
              <div className='w-[350px] h-[4px] bg-gradient-to-br from-[#DB00FF] via-[#DB00FF] to-[#306BFF] '></div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default AppsWesite;
