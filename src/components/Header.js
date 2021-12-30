import Search from "./Search";

export default function Header(props) {
    return <header>
        <h1>Countries <span>({props.countriesNum})</span></h1>
        <Search setSearchValue={props.setSearchValue} />
    </header>
}