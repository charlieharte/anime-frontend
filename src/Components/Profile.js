import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Profile() {
    const navigate = useNavigate()

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
              <img src=''/>
              <Card.Title>
                {}
              </Card.Title>
              
              <Card.Text>
                {}
                
              </Card.Text>
          </Card.Body>

          <Card.Footer>
            <small className="text-muted">Rating {} Year: {} Episodes: {}</small>
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