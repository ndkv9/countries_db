import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Country from './components/Country'

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
			return <Country country={filteredCountries[0]} />
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
