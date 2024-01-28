import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'



const cardsData = [
  {
    imageSrc: '/Mask group (2).png',
    title: 'Permanent monthly rate',
    description: 'One flat fee that covers all your design needs',
  },
  {
    imageSrc: '/Mask group (1).png',
    title: 'Unlimited requests',
    description: 'Load your Trello board up with as many design requests as you want',
  },
  {
    imageSrc: '/Mask group.png',
    title: 'Instant designification',
    description: 'Get your design fast: Designs delivered within days, not weeks.',
  },
  {
    imageSrc: '/Mask group (4).png',
    title: 'Pixel perfection',
    description: 'We\'re your design concierge here to deliver top-notch design whenever you need it.',
  },
  {
    imageSrc: '/Mask group (5).png',
    title: 'Dynamic and adaptable',
    description: 'No design limitations or commitments. Scale your possibilities, pause when needed, cancel without constraints.',
  },
  {
    imageSrc: '/Mask group (6).png',
    title: 'Curated for you',
    description: 'Each of our designs are crafted specifically for you and your brand.',
  },
];


const Ordinary = () => {
  return (
    <section className='w-full bg-[#FAFAFA] py-[60px] relative overflow-x-clip'>
      <main className='mx-auto max-w-[80rem] py-16'>

<Image className='absolute top-[110px] left-[540px] '  src={"/largestar.png"} alt='star' width={25} height={25} />
<Image className='absolute top-[150px] left-[510px] '  src={"/largestar.png"} alt='star' width={15} height={15} />

<Image className='absolute top-[110px] right-[540px] '  src={"/largestar.png"} alt='star' width={25} height={25} />
<Image className='absolute top-[150px] right-[510px] '  src={"/largestar.png"} alt='star' width={15} height={15} />



<div className='flex flex-col items-center justify-center'>
  <h1 className='text-[#323232] md:text-[50px] text-[2rem] font-[600] md:leading-normal leading-[1.3] text-center fontT'>Beyond ordinary <br/>perks</h1>
  <p className='text-center leading-[104.167%] md:text-[24px] text-[1rem] text-[#323232] py-[25px] fontT'>Everything you need to get everything done.</p>
  <Button className="btn text-[#FFF] text-[17px] tracking-[0.375px] font-[700] leading-[88.235%] translate-y-0 hover:-translate-y-2 transition delay-100 ">Get started</Button>
</div>

 {/* Cards */}
<div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-[20px] py-[40px] px-4'>
          {cardsData.map((card, index) => (
            <div
              key={index}
              className='flex flex-col justify-center items-center gap-4 w-full h-[340px] p-[30px] bg-[#fff] rounded-[10px]'
            >
              <Image src={card.imageSrc} alt={`card${index + 1}`} width={82} height={82} />
              <h2 className='md:text-[25px] text-[1.5rem] text-[#000] font-[700] text-center leading-normal'>{card.title}</h2>
              <p className='md:text-[17px] text-[.9rem] text-[#323232] font-[400] text-center tracking-[0.34px]'>{card.description}</p>
            </div>
          ))}
        </div>
</main>
   </section>
  )
}

export default Ordinary