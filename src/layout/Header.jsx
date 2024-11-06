import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import routeConstants from '../constants/routeContants'
import { Icons } from "../assets/icons"
import { IoMdClose } from 'react-icons/io'
import { MdMenu } from 'react-icons/md'

export const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const toggleNavbar=()=>{
    setIsNavbarOpen(!isNavbarOpen);
  }



  return (
    <header className='text-white flex flex-col relative  after:bg-grad-theme-135
      after:absolute xl:after:w-[520px] xl:after:h-[520px]
      md:after:w-[300px] md:after:h-[300px] after:w-[200px] after:h-[200px]
      after:top-[90%] after:left-0 after:blur-[70px] after:rounded-full 
      '
    >
      <div className='max-w-[1320px] px-4 flex items-center justify-between py-5 mx-auto w-full relative'>
        <div className='flex items-center gap-x-9'>
          <Link to={routeConstants.ROOT} className='max-w-[120px] lg:max-w-[160px] md:max-w-[140px]'>
            <img src={Icons.logo} alt='site logo' />
          </Link>
          <nav
            className={`lg:relative lg:right-auto lg:top-auto lg:bg-transparent lg:p-0
            fixed right-0 top-0 bg-errie-black h-full w-full z-50 p-5 transition-transform duration-300 ease-in-out
            sm:w-[300px] shadow-navbar lg:shadow-none lg:translate-x-0 
            ${isNavbarOpen ? "translate-x-0" : "translate-x-full"} `}
          >
            <div className='flex justify-end mb-10 lg:hidden hover:opacity-80 transition-all duration-300 ease-in-out'>
              <button type='button' onClick={toggleNavbar}>
                <IoMdClose size={20} />
              </button>
            </div>
            <ul className='flex lg:flex-row lg:items-center xl:gap-x-12 lg:gap-x-10 gap-x-8 flex-col gap-y-5 text-center'>
              <li>
                <Link to="" className='text-white text-base font-source-sans whitespace-nowrap'>
                  Features
                </Link>
              </li>
              <li>
                <Link to="" className='text-white text-base font-source-sans whitespace-nowrap'>
                  Benifits
                </Link>
              </li>
              <li>
                <Link to="" className='text-white text-base font-source-sans whitespace-nowrap'>
                  Free Generator
                </Link>
              </li>
            </ul>
            <div className='flex flex-col gap-y-5 items-center lg:hidden mt-6'>
              <Link to="" className='text-base font-semibold text-white hover:text-risd-blue transition-all duration-300 ease-in-out'>
                Already a member?
              </Link>
              <Link
                to=""
                className='capitalize text-base font-semibold text-white px-[30px]
                min-h-[35px] border-[1px] border-white border-solid rounded-lg inline-flex
                items-center justify-center text-center hover:bg-grad-theme-135 w-full'
              >
                log in
              </Link>
            </div>
          </nav>
        </div>
        <div className='lg:flex items-center xl:gap-x-7 lg:gap-x-6 gap-x-5 hidden'>
          <Link to="" className='text-base font-semibold text-white hover:text-risd-blue transition-all duration-300 ease-in-out whitespace-nowrap'>
            Already a member?
          </Link>
          <Link
            to=""
            className='capitalize text-base font-semibold text-white px-[30px]
                min-h-[35px] border-[1px] border-white border-solid rounded-lg inline-flex
                items-center justify-center text-center hover:bg-grad-theme-135 w-full'
          >
            log in
          </Link>
        </div>
        <button 
          type='button' 
          className='lg:hidden hover:opacity-80'
          onClick={toggleNavbar}
        >
          <MdMenu size={20}/>
        </button>
      </div>
      <div className='flex flex-col items-center justify-center max-w-[1020px]
          mx-auto text-center flex-1 relative z-10 mt-[100px] px-4'
      >
        <h1 className='text-white font-bold xl:text-[64px] lg:text-5xl text-4xl leading-[1.25]'>
          Pionneering communication in 
          <span className='grad-theme-text'> software delivery.</span>
        </h1>
        <p className='lg:text-xl md:text-lg text-base my-[46px]'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At 
          quae vero accusamus eius quibusdam cum sunt reiciendis, harum 
          architecto quidem repudiandae ea velit, voluptate nihil 
          inventore ullam odio numquam. Veniam.
        </p>
        <form className='w-full'>
          <div className='flex flex-col md:flex-row items-stretch gap-[14px] md:max-w-[610px] mx-auto'>
            <input 
              type="email" 
              placeholder='Enter you work email'
              className='lg:min-h-[45px] min-h-[40px] px-3 bg-transparent
              border-[1px] border-white w-full placeholder:text-cadet-gray outline-0
              font-source-sans text-sm rounded'
            />
            <button
              type='submit'
              className='bg-risd-blue rounded-lg lg:min-h-[50px]
              min-h-[40px] text-nowrap px-5 font-semibold hover:scale-105'
            >Request Early Access</button>
          </div>
        </form>
      </div>

    </header>
  )
}
