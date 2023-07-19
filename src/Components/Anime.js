import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Anime() {
    const navigate = useNavigate()

    const [popularAnime, setPopularAnime] = useState(null)

    const { id } = useParams()
   // const URL = backend
   
   const display = anime && (
    <div>
        <h1>{anime.name}</h1>

        <img src={anime.image} alt={anime.name} height={300} />
        <p>Description:</p>
        
    </div>
)

    return (
        <div>
            {display}
        </div>
    )
}

export default Anime