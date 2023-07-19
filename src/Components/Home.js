import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Home() {
    const [animes, setAnimes] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const URL = "https://api.jikan.moe/v4/top/anime?filter=bypopularity"
            const response = await fetch(URL)
            const data = await response.json()
            console.log(data)
            // const newAni = [data.data[0],data.data[1],data.data[2]]
            setAnimes(data.data)
        }

        fetchData()
    }, [])

    


  return (
    <CardGroup>
      {animes.length > 0  && 
            animes.map(anime => {
              console.log('LE ANIME =>', anime)
        return (
          <Card key={anime.mal_id}>
            <Card.Img variant="top" src="holder.js/100px160" />
            
            <Card.Body>
              <Card.Title>
                {anime.title_english}
              </Card.Title>
              
              <Card.Text>
                {anime.background}
                
              </Card.Text>
          </Card.Body>

          <Card.Footer>
            <small className="text-muted">Rating {anime.rating} Year: {anime.year} Episodes: {anime.episodes}</small>
          </Card.Footer>
        </Card>
        )
    })
  
  }
    </CardGroup>
  );
}

export default Home;