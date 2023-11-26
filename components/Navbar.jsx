"use client"

import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Button from './Button'

const Navbar = () => {
  const[isClick, setisClick] =useState(false);
  const toggleNavbar = () => {
    setisClick(!isClick);
  }

  useEffect(() => {
    if (isClick) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isClick]);

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

    <button className='block lg:hidden transtion' onClick={toggleNavbar}>
      {isClick? (<Image src="/cross.svg" alt='cross' width={32} height={32} className='inline-block cursor-pointer lg:hidden' />
      ) : (<Image 
       src="/menu.svg"
       alt='menu'
       width={32}
       height={32}
       className='inline-block cursor-pointer lg:hidden'
       />)}
       {isClick && (
        
        <div className='lg:hidden block absolute top-20 w-full left-0 right-0 bg-white transition h-[100vh]'>
         <ul className='text-center text-xl p-15 align-center'>
         {NAV_LINKS.map((link) => (
           <Link href={link.href} key={link.key} className='underline underline-offset-1 regular-24 text-gray-50 flexCenter cursor-pointer transition-all hover:font-bold my-8 py-8  border-green-500 hover:bg-green-500 hover:rounded-full'>
             {link.label}
           </Link>
         ))}
        </ul>
        <span className=' regular-15 text-gray-50 flexCenter cursor-pointer'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aliquam quo. Excepturi voluptatibus possimus atque architecto exercitationem debitis, pariatur vel doloremque asperiores? Expedita nemo perferendis tempora. Consequatur animi exercitationem doloremque.</span>
        </div>
        
      )}
      
    </button>
    </nav>
  )
}

export default Navbar