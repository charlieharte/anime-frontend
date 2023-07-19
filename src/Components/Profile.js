import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Profile() {
    const navigate = useNavigate()

    // const [animeInput, setAnimeInput] = useState(null)

    // const { id } = useParams()
    // const URL= `${process.env.REACT_APP_BACKEND_URI}/animes/${id}`
    // useEffect(() => {
    //   const fetchData = async () => {
    //   const response = await fetch(URL)
    //   const data = await response.json()
    //   setAnimeInput(data)
    //   }

      // fetchData()
      // }, [id, URL])

    return (
        <>
        <div className="mb-2">
            <Button variant="primary" size="lg" onClick={() => navigate(`/login`) }>
                Login
            </Button>{' '}
        </div>
        <div>
            <Button variant="secondary" size="sm" onClick={() => navigate('/review') }>
                New Review Post
            </Button>
        </div>
        <div>
        <CardGroup style={{ width: '50rem' }}>
      {/* {animes.length > 0 && 
            animes.map(anime => {
              console.log('LE ANIME =>', anime) */}
        {/* return ( */}
          <Card>

            <Card.Body>
              {/* <img src = {animeInput.image} /> */}
              <Card.Title>
                {/* {animeInput.name} */}
              </Card.Title>
              <Card.Text>
                {/* {animeInput.review} */}
              </Card.Text>
          </Card.Body>
          <Card.Footer>
            {/* <small className="text-muted">{animeInput.episodes}</small> */}
          </Card.Footer>
        </Card>
        {/* )
    })
  
  } */}
    </CardGroup>
        </div>
    </>
    )
}

export default Profile