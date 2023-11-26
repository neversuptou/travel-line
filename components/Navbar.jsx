"use client"

import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from './Button'

const Navbar = () => {
  const[isClick, setisClick] =useState(false);
  const toggleNavbar = () => {
    setisClick(!isClick);
  }

  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
     <Link href="/"> 
     <Image src="/logo.svg" alt='logo' width={60} height={60} />
     </Link>
     <ul className='hidden h-full gap-12 lg:flex'>
      {NAV_LINKS.map((link) => (
        <Link href={link.href} key={link.key} className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
          {link.label}
        </Link>
      ))}
     </ul>

     <div className='lg:flexCenter hidden'>
      <Button 
      type="button" 
      title="Login" 
      icon="/user.svg"
      variant="btn_dark_green"
      />
     </div>
    
    <button onClick={toggleNavbar}>
    {isClick ? (
      <Image src="/close.svg" alt='close' width={32} height={32} className='inline-block cursor-pointer lg:hidden bg-green-500 rounded-xl' />
    ) : (
      <Image 
    src="/menu.svg"
    alt='menu'
    width={32}
    height={32}
    className='inline-block cursor-pointer lg:hidden'
    />
    )}
    {isClick && (
      <div className="fixed right-6  lg:hidden bg-green-500 inline-block cursor-pointer lg:hidden h-[100vh] overflow-hidden" >
        <div className="flex flex-row px-2 py-3 space-y-1 sm:px-3 gap-5">
          <ul className="h-full gap-12 lg:flex  ">
        {NAV_LINKS.map((link) => (
        <Link href={link.href} key={link.key} className='regular-16 block text-black flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
          {link.label}
        </Link>
      ))}
          </ul>
        </div>
      </div>
      
    )}
    </button>
    </nav>
  )
}

export default Navbar