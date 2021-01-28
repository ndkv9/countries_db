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

	console.log(filteredCountries)
	return (
		<div>
			<h2>Countries DB</h2>
			<Filter name={name} handleNameChange={handleNameChange} />
		</div>
	)
}

export default App
