import Country from './Country'

const CountriesList = ({ countries, countryToShow, showInfo }) => {
	return countryToShow ? (
		<Country country={countryToShow} />
	) : (
		countries.map(c => (
			<div key={c.name}>
				{c.name} <button onClick={() => showInfo(c)}>show</button>
			</div>
		))
	)
}

export default CountriesList
