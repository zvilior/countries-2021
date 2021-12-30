import Header from './Header'
import CountriesList from './CountriesList'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Main() {
    const
        [list, setList] = useState(),
        [searchValue, setSearchValue] = useState('')

    useEffect(getCountries, [])

    function getCountries() {
        axios.get('https://restcountries.com/v3.1/all')
            .then(result => {
                setList(result.data)
            })
    }

    if (!list) return 'loading'

    const filteredList = list.filter(c =>
        c.name.common
            .toLowerCase()
            .startsWith(searchValue.toLowerCase())
    )

    return <main>
        <Header
            setSearchValue={setSearchValue}
            countriesNum={filteredList.length}
        />
        <CountriesList list={filteredList} />
    </main>
}
