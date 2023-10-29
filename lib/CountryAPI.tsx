
export async function getCountries() {
        const response = await fetch("https://restcountries.com/v3.1/all")
        const data = await response.json();
        return data
}

export async function getCountry(name: string) {
    const response = await fetch("https://restcountries.com/v3.1/name/" + name)
    const data = await response.json();
    return data
}