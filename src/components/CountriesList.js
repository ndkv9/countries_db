const CountriesList = ({ countries }) => {
	return countries.map(c => (
		<div key={c.name}>
			{c.name} <button onClick={() => showInfo(c)}>show</button>
		</div>
	))
}

export default CountriesList
