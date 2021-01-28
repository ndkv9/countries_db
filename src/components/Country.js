const Country = ({ country }) => {
	return (
		<div>
			<h3>{country.name}</h3>
			<p>Capital: {country.capital}</p>
			<p>Population: {country.population}</p>
			<strong>languages</strong>
			<ul>
				{country.languages.map(l => (
					<li key={l.name}>{l.name}</li>
				))}
			</ul>
			<img src={country.flag} alt='nations flag' height='80px' width='120px' />
		</div>
	)
}

export default Country
