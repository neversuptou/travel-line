import Camp from '@/components/Camp'
import Features from '@/components/Features'
import GetApp from '@/components/GetApp'
import Guide from '@/components/Guide'
import Hero from '@/components/Hero'
import React from 'react'
import { sql } from "@vercel/postgres"

const page = () => {

  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </>
  )
}

export default page

