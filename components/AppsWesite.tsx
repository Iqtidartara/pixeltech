import React from 'react';

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

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-0 g orderapps md:text-start text-center'>
          {categories.map((category, index) => (
            <div key={index} className='p-10 '>
              <span className='border-b-4 border-[#DB00FF] text-[30px] text-[#323232] font-[400] leading-normal text-center'>
                {category}
              </span>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default AppsWesite;
