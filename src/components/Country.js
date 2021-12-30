export default function Country(props) {
    const { flags, name, capital, region } = props

    return <li>
        <div
            className='flag'
            style={{ backgroundImage: `url(${flags.svg})` }}
        />
        <div>
            <div><strong>{name.common}</strong> - {capital}</div>
            <label>{region}</label>
        </div>
    </li>
}