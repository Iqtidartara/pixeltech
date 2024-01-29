import React from 'react'
import { Button } from './ui/button'

const Banner = () => {
  return (
    <section className='w-full bg-[#FFF] py-[100px]'>
      <main className='mx-auto max-w-[80rem] px-[46px] banner flex items-center justify-center flex-col py-[66px] gap-6'>

<h2 className='text-[#FFF] md:text-[36px] text0-[2rem] font-[700] leading-normal'>Learn more about how Pixeltect works and if it&apos;s right for you.</h2>
<p className='md:text-[22px] text-[1rem] text-[#F0F0F0] leading-normal font-[400]'>Embark on your design journey with Pixeltect. Discover how to<br className='md:block hidden'/> revolutionize your team&apos;s creative design process, starting now.</p>
<Button  className='tnsa bg-transparent rounded-full  px-8 py-6 hover:bg-transparent hover:opacity-90 text-[#fff] text-[18px] font-[700] tracking-[-0.029px] leading-[32.79px] '>Get Started</Button>

      </main>
    </section>
  )
}

export default Banner