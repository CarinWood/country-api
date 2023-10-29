
import { SearchCountries } from '@/components/SearchCountries'
import { getCountries } from '@/lib/CountryAPI'

export default async function Home() {
  const countryList = await getCountries()
  return (
    <main className="w-full h-full flex flex-col items-center justify-center">
      <SearchCountries countryList={countryList}/>
     
  </main>
  )
}
