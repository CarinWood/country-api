"use client"
import { useState } from 'react'

export const SearchCountries = () => {
    const [searchText, setSearchText] = useState("");
    //PokemonGrid
  return (
    <div>
        <h2 className='text-2xl py-6 text-center'>Search for a country!</h2>
        <div className='flex flex-col items-center justify-center'>
            <input 
                type="text" 
                value={searchText}
                placeholder="Sweden, Norway, etc."
                onChange={(e) => setSearchText(e.target.value)}
            />
        </div>
    </div>
 )
}
