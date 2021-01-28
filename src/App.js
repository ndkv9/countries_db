import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'

const App = () => {
	const [countries, setCountries] = useState([])
	const [name, setName] = useState('')

	useEffect(() => {
		axios
			.get('https://restcountries.eu/rest/v2/all')
			.then(res => setCountries(res.data))
			.catch(err => console.log(err.message))
	}, [])

	const handleNameChange = e => {
		setName(e.target.value)
	}

	const filteredCountries = countries.filter(country =>
		country.name.toLowerCase().includes(name.toLocaleLowerCase())
	)

	const display = () => {
		if (filteredCountries.length === 1) {
			return (
				<div>
					<h3>{filteredCountries[0].name}</h3>
					<p>Capital: {filteredCountries[0].capital}</p>
					<p>Population: {filteredCountries[0].population}</p>
					<strong>languages</strong>
					{filteredCountries[0].languages.map(l => (
						<p key={l.name}>{l.name}</p>
					))}
					<img
						src={filteredCountries[0].flag}
						alt='nations flag'
						height='80px'
						width='120px'
					/>
				</div>
			)
		} else if (filteredCountries.length <= 10) {
			return filteredCountries.map(c => <p key={c.name}>{c.name}</p>)
		} else {
			return <p>Too many results, please more specific</p>
		}
	}

	return (
		<div>
			<h2>Countries DB</h2>
			<Filter name={name} handleNameChange={handleNameChange} />
			{name && display()}
		</div>
	)
}

export default App
