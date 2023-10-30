"use client"
import { useState } from 'react'
import { CountryCard } from '@/components/CountryCard'


interface SearchCountriesProps {
    countryList: any
}

export const SearchCountries = ({countryList}: SearchCountriesProps) => {
    const [searchText, setSearchText] = useState("");

    const searchFilter = (countryList: any) => {
        return countryList.filter((country:any) => country.name.common.toLowerCase().includes(searchText.toLowerCase()) )
    }

    const filteredCountryList = searchFilter(countryList);
    console.log(filteredCountryList.length)
  
  return (
    <div className='w-full h-[100vh] flex flex-col justify-start 
    items-center mt-10'>
        <h2 className='text-2xl py-6 text-center'>Search for a country!</h2>
        <div className='flex flex-col items-center justify-center'>
            <input
                className='rounded px-2 py-1 border-zinc-500 border-2' 
                type="text" 
                value={searchText}
                placeholder="Sweden, Norway, etc."
                onChange={(e) => setSearchText(e.target.value)}
            />
        </div>
      {/*   Show countries result */}
        <div className='w-[70%] mt-[60px] flex 
        flex-wrap justify-center items-center'>
       
        
        {filteredCountryList.map((country: any) => {
            return <CountryCard key={country.name.common} name={country.name.common}/>
        })}
       
        </div>

    </div>
 )
}
