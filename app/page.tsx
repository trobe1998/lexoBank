import { BusinessAccount, Functions, Hero, Promotion } from '@components'
import React from 'react'

const Home = () => {
  return (
    <main>
      <Hero/>
      <Functions/>
      <BusinessAccount/>
      <Promotion/>
    </main>
  )
}

export default Home