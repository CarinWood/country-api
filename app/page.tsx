import { SearchCountries } from '@/components/SearchCountries'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center">
      <SearchCountries/>
    </main>
  )
}
