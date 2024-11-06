import React from 'react'
import { Images } from '../../assets/images'
import { motion } from 'framer-motion'


export const ProcessMap = () => {
  return (
    <section className='max-w-[1000px] mx-auto py-[65px] text-white px-4'>
      <div className='grid lg:grid-cols-2 gap-6 items-center'>
        <motion.dev 
          className="max-w-[580px] flex flex-col items-center lg:items-start text-center lg:text-start  "
          initial={{
            opacity : 0,
            x : -80
          }}
          whileInView={{
            opacity : 1,
            x : 0
          }}
          transition={{
            duration : 0.8,
            ease : "easeInOut"
          }}
        >
          <h3 className='lg:text-2xl md:text-xl text-lg font-semibold'>
            Try our FREE Process Map Generator
          </h3>
          <p className='mt-3 mb-10 lg:text-xl md:text-lg text-base'>
            Generate Process Flow maps and diagrams for your project with automated AI genderate of User Stories
          </p>
          <button type='submit' className='bg-risd-blue rounded-lg lg:min-h-[50px] min-h-[40px] text-nowrap md:text-base text-sm px-5 font-semibold hover:scale-105 transition-all duration-300'>
            Try it now for free
          </button>

        </motion.dev>
        <motion.div 
          className='flex justify-center lg:justify-end'
          initial={{
            opacity : 0,
            x : 80
          }}
          whileInView={{
            opacity : 1,
            x : 0
          }}
          transition={{
            duration : 0.8,
            ease : "easeInOut"
          }}
        >
          <img src={Images.process_map} alt="" />

        </motion.div>
      </div>

    </section>
  )
}
