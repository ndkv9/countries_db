import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
	const [countries, setCountries] = useState([])
	const [name, setName] = useState('')

	useEffect(() => {
		axios
			.get('https://restcountries.eu/rest/v2/all')
			.then(res => setCountries(res.data))
			.catch(err => console.log(err.message))
	})
	return (
		<div>
			<h2>Countries DB</h2>
		</div>
	)
}

export default App
