import Country from "./Country"

export default function CountriesList(props) {
    const { list } = props

    list.sort((a, b) => a.name.common > b.name.common ? 1 : -1)

    return <ul>
        {list.map(a => <Country
            key={a.cca2}
            {...a}
        />)}
    </ul>
}