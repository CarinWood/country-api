import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full h-[8vh] flex justify-end items-center pr-10'>
        <ul className='flex justify-center items-center'>
            <Link href="/"><li className='mr-4'>Search countries</li></Link>
            <Link href="/"><li>Flag games</li></Link>
        </ul>

    </nav>
  )
}

export default Navbar