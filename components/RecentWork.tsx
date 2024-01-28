import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const RecentWork = () => {
  return (
    <section className='bg-[#FAFAFA] py-[60px]'>
      <main className='mx-auto max-w-[80rem]'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-[#323232] md:text-[50px] text-[2rem] font-[600] md:leading-normal leading-[1.3] text-center fontT'>Recent Work</h1>
          <p className='text-center leading-[104.167%] md:text-[24px] text-[1rem] text-[#323232] py-[25px] fontT'>Designs that inspire.</p>
          <Button className="btn text-[#FFF] text-[17px] tracking-[0.375px] font-[700] leading-[88.235%] translate-y-0 hover:-translate-y-2 transition delay-100 ">View recent work</Button>
        </div>
        
        <div className='flex flex-col md:flex-row items-center justify-between py-[40px] px-4'>
          <Image src={"/Rectangle 40.png"} alt='as' width={600} height={700} className='mb-[20px] md:mb-0 md:w-[48%]' />
          <Image src={"/Rectangle 40.png"} alt='as' width={600} height={700} className='md:w-[48%]' />
        </div>

        <div className='flex flex-col md:flex-row items-center justify-between py-[40px] px-4'>
          <Image src={"/Rectangle 40.png"} alt='as' width={600} height={700} className='mb-[20px] md:mb-0 md:w-[48%]' />
          <Image src={"/Rectangle 40.png"} alt='as' width={600} height={700} className='md:w-[48%]' />
        </div>
      </main>
    </section>
  )
}

export default RecentWork
