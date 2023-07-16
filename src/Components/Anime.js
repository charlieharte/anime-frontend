import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Anime() {
    const navigate = useNavigate()

    const [anime, setAnime] = useState(null)

    const { id } = useParams()
    const URL = `${process.env.REACT_APP_BACKEND_URI}/animes/${id}`
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(URL)
            const data = await response.json()
            setAnime(data)
        }

        fetchData()
    }, [id, URL])

    const deleteAnime = async () => {
        const response = await fetch(URL, {
            method: 'DELETE'
        })
        if (response.status !== 204) console.log('error') // add error handling later
        navigate('/')
    }

    const display = anime && (
            <div>
                <h1>{anime.name}</h1>
                <img src={anime.image} alt={anime.name} height={300} />
                <p>Description:</p>
                <div>
                    <button onClick={() => navigate(`/anime/update/${id}`)}>Edit</button>
                    <button onClick={deleteAnime}>Delete</button>
                </div>
            </div>
        )

    return (
        <div>
            {display}
        </div>
    )
}

export default Anime