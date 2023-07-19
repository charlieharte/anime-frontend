import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Review() {
    const navigate = useNavigate()

    const [animeInput, setAnimeInput] = useState({
        name: '',
        image: '',
        episodes: '',
        review:''
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setAnimeInput({
            ...animeInput,
            [e.target.name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const URL = `${process.env.REACT_APP_BACKEND_URI}/animes`
        const response = await fetch(URL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(animeInput)
        })
        if (response.status !== 201) console.log('error!')
        navigate('/')
    }
 
    // add character limit later
    return (    
        <form onSubmit={handleSubmit}>
            <h3>New</h3>
            <div>
                <p>Name of anime:</p>
                <input onChange={handleChange} value={animeInput.name} name='name' placeholder='Name' required />
            </div>
            <br />
            <div>
                <p>Image of the anime:</p>
                <input onChange={handleChange} value={animeInput.image} name='image' placeholder='Image' />
            </div>
            <br />
            <div>
                <p>Number of episodes watched:</p>
                <input onChange={handleChange} value={animeInput.episodes} name='episodes' placeholder='Episodes' />
            </div>
            <br />
            <div>
                <p>Please provide a review for the anime:</p>
                <input onChange={handleChange} value={animeInput.review} name='review' placeholder='Review' />
            </div>
            <br />
            <input type='submit' />
        </form>
    )
}

export default Review