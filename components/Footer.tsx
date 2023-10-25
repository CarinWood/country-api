'use client'
import React from 'react'
import { MdSchool } from "react-icons/md"

export const Footer = () => {
  return (
    <footer className='absolute bottom-0 flex 
    flex-col items-start justify-center w-full h-12 pl-12 text-sm'>
        <p>&copy; 2023</p>
        <p>
            Built and created by 
            <a className='underline ml-1' 
            href="https://carinwood-eng-cv.netlify.app/" 
            target="_blank">Carin Wood
            </a>
        </p>
    </footer>
  )
}
