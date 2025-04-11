import React from 'react'
import Section from './Section'
import { smallSphere, stars } from '../assets'
import brackets from '../assets/svg/Brackets'
import Button from '../Button'
import PricingList from './PricingList'
const Pricing = () => {
  return (
    <Section id = "pricing">
            <div className="container relative z-2 mx-auto">
                <div className="z-2 hidden relative justify-center mb-[6.5rem] lg:flex">
                    <img
                    src ={smallSphere} 
                    width = {400}
                    height={400}/>
                <img src={stars}
                className='absolute top-0 left-0'
                width={1300}
                height={1000}/>
                </div>
                <div className="w-full flex justify-center gap-3 scale-150 ">
                   {brackets('left')} <span className='relative  -top-[5px] text-base opacity-40'>Get started with Brainwave</span>  {brackets('right')}
                </div >
                <div className="mt-20">
                <p className='text-4xl lg:text-center lg:text-5xl'>Pay once, use forever</p>
                
                </div>
                <PricingList/>
            <p className='mt-20 uppercase underline text-center font-semibold text-sm'> see &nbsp; the  &nbsp; full  &nbsp; details</p>
            </div>
    </Section>
  )
}

export default Pricing