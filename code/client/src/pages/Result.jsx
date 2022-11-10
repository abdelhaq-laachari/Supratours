import React from 'react'
import BusCard from '../components/Bus Card/BusCard'
import Navbar from '../components/NavBar/NavBar'

const Result = () => {
  return (
    <>
    <section className='bg-red-400'>
      <Navbar/>
    </section>
    <section>
      <BusCard/>
    </section>
    </>
  )
}

export default Result