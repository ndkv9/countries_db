const Filter = ({ name, handleNameChange }) => {
	return (
		<div>
			Enter countries name: <input value={name} onChange={handleNameChange} />
		</div>
	)
}

export default Filter
