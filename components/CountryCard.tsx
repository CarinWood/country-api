import React from 'react'
import Link from 'next/link'

interface countryCardProps {
    name: string
}

export const CountryCard = ({name}: countryCardProps) => {
  return (
    <Link
        className='dark:border-zinc-500 border-[1.5px] 
        px-2 py-1 rounded hover:border-gray-400 text-md m-3 flex
        items-center justify-center'
        href={name}
        key={name + "Card"}
    >
        {name}
    </Link>
  )
}
