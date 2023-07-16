import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UpdateAnime() {
const navigate = useNavigate()

const [animeInput, setAnimeInput] = useState(null)

const { id } = useParams()
const URL = `${process.env.REACT_APP_BACKEND_URI}/anime/${id}`

useEffect(() => {
const fetchData = async () => {
const response = await fetch(URL)
const data = await response.json()
setAnimeInput(data)
}

fetchData()
}, [id, URL])

const handleChange = (e) => {
const value = e.target.value;
setAnimeInput({
...animeInput,
[e.target.name]: value
});
}

const handleSubmit = async (e) => {
e.preventDefault()
const response = await fetch(URL, {
method: 'PUT',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(animeInput)
})
if (response.status !== 204) console.log('error!') // add error handling later
navigate(`/anime/${id}`)
}

const display = animeInput && (
<form onSubmit={handleSubmit}>
<input required onChange={handleChange} value={animeInput.name} name='name' placeholder='name' />
<input onChange={handleChange} value={animeInput.image} name='image' placeholder='image' />
<input type='submit' />
</form>
)

return (
<div>
{display}
</div>
)
}

export default UpdateAnime