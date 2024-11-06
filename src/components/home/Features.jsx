import React from 'react'
import {FEATURES_DATA} from '../../data/mockData.js'
import { motion } from 'framer-motion'
import { useGradientUpdate } from '../../hook/useGradientUpdate.js'


export const Features = () => {
  const gradientRefs = useGradientUpdate();
  return (
    <section className='px-4 py-10 lg:py-[65px]'>
      <div className='max-w-[1200px] mx-auto'>
        <h3 className='text-center text-white lg:text-lg
        text-base font-semibold'
        >
          Say goodbye to manual requirement building. Let Reqops speed thing up.
        </h3>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 xxl:gap-10 xl:gap-8 lg:gap-6 gap-4 lg:mt-[65px] mt-10'>
          {
            FEATURES_DATA.map(({id,title,image}, index)=>{
              return(
                <motion.div 
                  key={id} 
                  className='bg-grad-theme-135 rounded-3xl p-[3px] md:min-h-[444px]'
                  ref={(el)=> gradientRefs.current[index] = el}
                  initial={{
                    opacity : 0,
                    y : 80
                  }}
                  whileInView={{
                    opacity : 1,
                    y:0

                  }}
                  transition={{
                    duration : 0.5,
                    ease : "easeInOut"
                  }}
                  whileHover={{
                    scale : 1.05
                  }}
                >
                  <div className='rounded-3xl bg-jet flex flex-col justify-between items-center h-full'>
                    <h4 className='lg:mt-8 md:mt-6 mt-4 mb-4 lg:text-2xl md:text-xl text-lg text-white text-center px-4'>
                      {title}
                    </h4>
                    <img 
                      src={image} 
                      alt="" 
                      className={`px-4 ${index==1 && "mb-5"} ${index==2 && "mb-8"}`}
                    />
                  </div>
                </motion.div>
              )
            })
          }
        </div>
      </div>

    </section>
  )
}
