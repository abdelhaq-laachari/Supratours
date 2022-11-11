import React from 'react'
import BusCard from '../components/Bus Card/BusCard'
import Navbar from '../components/NavBar/NavBar'

const Result = () => {
  return (
    <>
    <section className='bg-red-400'>
      <Navbar/>
    </section>
    <section className='flex justify-center w-full bg-slate-300'>
      <BusCard/>
    </section>
    </>
  )
}

export default Result