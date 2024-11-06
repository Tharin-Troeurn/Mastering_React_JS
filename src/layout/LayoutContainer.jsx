import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'

export const LayoutContainer = () => {
  return (
    <div className='bg-errie-black min-h-screen'>
        <Header/>
        <main className='relative'>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}
