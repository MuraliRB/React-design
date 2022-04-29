import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './MainCard.css'

const MainCard = () => {
  return (
    <div className='card-div'>
        <Card className="bg-dark text-white col-6 card" >
  <Card.Img className='image-card' src="https://img.freepik.com/free-vector/mountain-landscape-with-waterfall-night_107791-7316.jpg?w=2000" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Welcome back,</Card.Title>
    <Card.Title>Trainee!!</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Button variant="success">Go now</Button>
  </Card.ImgOverlay>
</Card>
    </div>
  )
}

export default MainCard