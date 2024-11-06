import React from 'react'
import {Icons} from '../assets/icons'
import routeConstants from '../constants/routeContants'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className='flex items-center bg-errie-black relative border-t-[1px] border-t-white border-solid'>
      <div className='px-4 max-w-[1320px] mx-auto lg:py-8 md:py-6 py-4 flex items-center justify-between w-full'>
        <Link to={routeConstants.HOME} >
          <img src={Icons.logo} alt="" />
        </Link>
        <div className=''>
          <Link className='text-base text-white hover:text-risd-blue transition-all duration-300'>
            Already a member?
          </Link>
          <Link className='capitalize text-base text-white hover:bg-grad-theme-135 transition-all duration-300 ease-in-out
          px-[30px] lg:min-h-[35px] min-h-[30px] border-[1px] border-white border-solid rounded-lg 
          inline-flex items-center justify-center text-center mx-3'>
            Login
          </Link>
        </div>
      </div>
    </footer>
  )
}
