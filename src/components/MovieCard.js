import React from 'react'
import Card from 'react-bootstrap/Card'
import StarRatingComponent from 'react-star-rating-component'

function MovieCard({movie}) {
    return (
               
 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.img} />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <StarRatingComponent value={movie.rate}/>
    <Card.Text>{movie.description}</Card.Text>
   
 </Card.Body>
</Card>

            
        
    )
}

export default MovieCard
