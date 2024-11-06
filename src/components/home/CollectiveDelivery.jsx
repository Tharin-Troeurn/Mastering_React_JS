import React from 'react'
import { COLLECTIVE_DELIVERY_DATA } from '../../data/mockData'
import { motion } from 'framer-motion'
import { useGradientUpdate } from '../../hook/useGradientUpdate';

export const CollectiveDelivery = () => {
  const gradientRefs = useGradientUpdate();
  return (
    <section className='max-w-[1180px] mx-auto lg:py-[65px] py-10 text-white px-4  '>
      <div className='text-center'>
        <p className='lg:text-xl md:text-lg text-base mb-4'>
          Behind Every Great Delivery
        </p>
        <h3 className='lg:text-3xl md:text-2xl text-xl font-semibold'>
          The Collective Delivery Squad
        </h3>
      </div>
      <div className=' lg:mt-[90px] md:mt-16 mt-12 grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-y-[70px] md:gap-y-16 gap-y-12 lg:gap-x-[100px] md:gap-x-16 gap-x-12'>
        {
          COLLECTIVE_DELIVERY_DATA.map(({id,icon,title,description},index)=>{
            return(
              <motion.div
                key={id}
                className=' d-flex flex-col rounded-3xl p-[20px] justify-center items-center text-center '
                
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
                <img src={icon} alt="" className='w-[80px] h-[80px] mx-auto  '/>
                <h4 className='lg:mt-10 md:mt-6 mt-4 lg:mb-4 mb-2 lg:text-xl md:text-lg text-base'>
                  {title}
                </h4>
                <p className='lg:text-base text-sm'>
                  {description}
                </p>
              </motion.div>
            )
          })
        }
      </div>

    </section>
  )
}
