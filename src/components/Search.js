export default function Search(props) {
    return <input
        onChange={e => props.setSearchValue(e.target.value)}
        placeholder='search'
        type='search'
    />
}