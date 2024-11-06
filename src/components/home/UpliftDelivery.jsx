import React from 'react'
import { UPLIFT_DELIVERY_DATA } from '../../data/mockData'
import { motion } from 'framer-motion'
import { useGradientUpdate } from '../../hook/useGradientUpdate';


export const UpliftDelivery = () => {
  const gradientRefs = useGradientUpdate();

  return (
    <section className='lg:py-[65px] py-10 px-4'>
      <div className='max-w-[1200px] mx-auto'>
        <h3 className='text-center text-white lg:text-3xl md:text-2xl text-xl font-semibold'>
          Uplify Your Delivery Squad
        </h3>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 xxl:gap-10 xl:gap-8
        lg:gap-6 gap-4 lg:mt-10 md:mt-8 mt-6'>
          {
            UPLIFT_DELIVERY_DATA.map(({id,icon,title,description} , index)=>{
              return(
                <motion.div 
                  key={id}
                  className='bg-grad-theme-135 rounded-3xl p-[3px] md:min-h-[315px] min-h-auto'
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
                  <div className='rounded-3xl bg-jet flex-col items-start h-full lg:p-8 md:p-6 p-4'>
                    <img src={icon} alt="" className='w-12'/>
                    <h4 className='lg:text-xl md:text-lg text-base text-white mt-5 mb-4 font-semibold'>
                      {title}
                    </h4>
                    <p className='lg:text-base text-white text-sm'>
                      {description}
                    </p>
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
