import { useState, useEffect } from 'react'
import axios from 'axios'

const Country = ({ country }) => {
	const { name, capital, population, languages, flag } = country
	const [data, setData] = useState(null)
	const YOUR_ACCESS_KEY = process.env.REACT_APP_API_KEY

	useEffect(() => {
		axios
			.get(
				`http://api.weatherstack.com/current?access_key=${YOUR_ACCESS_KEY}&query=${capital}`
			)
			.then(res => setData(res.data))
			.catch(err => console.lg(err.message))
	}, [YOUR_ACCESS_KEY, capital])

	return (
		<div>
			<h2>{name}</h2>
			<p>Capital: {capital}</p>
			<p>Population: {population}</p>
			<h3>Spoken languages</h3>
			<ul>
				{languages.map(l => (
					<li key={l.name}>{l.name}</li>
				))}
			</ul>
			<img
				src={flag}
				alt='nations flag'
				height='80px'
				width='120px'
				border='2'
			/>
			<div>
				<h3>Weather in {capital}</h3>
			</div>
			<p>
				<strong>Temperature:</strong> {data?.current.temperature}
			</p>
			<p>
				<strong>Wind:</strong> {data?.current.wind_degree} mph direction{' '}
				{data?.current.wind_dir}
			</p>
			<img
				src={data?.current.weather_icons[0]}
				alt='weather icon'
				height='80px'
				width='80px'
				border='1'
			/>
		</div>
	)
}

export default Country
