import React from 'react'
import Section from './Section'
import { benefits } from './constants'
import Arrow from '../assets/svg/Arrow'
import {GradientLight} from './design/Benefits'
import ClipPath from '../assets/svg/ClipPath'
import ButtonGradient from '../assets/svg/ButtonGradient'
import { BottomLine } from './design/Hero'
const Benefits = () => {
  return (
    <div className="w-full">
    <Section id="feature">
        <div className="mx-5">
             <div className="text-3xl md:text-4xl lg:text-5xl relative z-1 max-w-[40rem] mx-auto md:text-center   mb-[3.875rem] md:mb-20 lg:mb-[6.25rem] font-normal ">
                Chat Smarter, Not Harder with&nbsp;Brainwave
             </div>
        </div>

        <div className="flex flex-wrap gap-15 mb-10 justify-center xl:mx-[30rem]">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] "
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              <GradientLight />

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
    </Section>
    </div>
  );
};

export default Benefits;