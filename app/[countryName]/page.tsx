    import { getCountry } from "@/lib/CountryAPI";
    import Image from "next/image";

    export default async function page({params}: {params:{countryName: string}}) {
        const { countryName } =  params;

        const countryObject = await getCountry(countryName.toLowerCase());
        console.log(countryObject);
       

        return (
          <div className="w-full h-[100vh] flex flex-col items-center justify-start pt-12">
            <h1 className="my-4 text-3xl">{countryObject[0].name.common}</h1>
             <Image
                width={150}
                height={120}
                src={countryObject[0].flags.png}
                alt="flag"
                className="rounded h-auto"
             /> 

             <div className="min-w-[150px] flex flex-col items-start justify-start">
             <p className="mt-12 flex justify-start">
                  <span className="w-[70px] flex items-start">Region:</span> 
                  {countryObject[0].region}
             </p>
             <p className="mt-4 flex justify-start">
                  <span className="w-[70px] flex items-start">Capital:</span>
                  {countryObject[0].capital}
             </p>
             </div>

             <div className="w-[290px] flex flex-col items-center justify-start mt-10">
             <p><span className="mr-3">Currency:</span>
             {Object.values<any>(countryObject[0].currencies)[0].name}
             <span> (</span>
             {Object.values<any>(countryObject[0].currencies)[0].symbol}
             <span>)</span>
             </p>
             </div>
          </div>
        )

    }