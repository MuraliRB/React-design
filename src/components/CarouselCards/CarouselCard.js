import React from 'react'
import { Card, Carousel } from 'react-bootstrap'
import './CarouselCard.css'
const CarouselCard = () => {
  return (
    <div>
<Carousel className='col-3  carousel'>
  <Carousel.Item interval={1000} className='col-3'>
    <img
      className="d-block w-100 col-3 img-cards" 
      src="https://upload.wikimedia.org/wikipedia/en/c/c0/Avengers_2020_cover_art.png"
      alt="First slide"
    />
    
    <Card.ImgOverlay>
    <Carousel.Caption>
    <h6>Featured Movies</h6>
      <h3>Avengers</h3>
      <p>Earth Mightiest Heroes ever.</p>
    </Carousel.Caption>
    
    </Card.ImgOverlay>
    
    
  </Carousel.Item>
  <Carousel.Item interval={500} className='col-3'>
    <img
      className="d-block w-100 col-3 img-cards"
      src="https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg"
      alt="Second slide"
    />
    <Card.ImgOverlay>
    <Carousel.Caption>
    <h6>Featured Movies</h6>
      <h3>Spiderman No way home</h3>
      <p>Multiverse is exist</p>
    </Carousel.Caption>
    
    </Card.ImgOverlay>

  </Carousel.Item>
  <Carousel.Item className='col-3'>
    <img
      className="d-block w-100 col-3 img-cards"
      src="https://m.media-amazon.com/images/I/81xPLSOkvJL._SS500_.jpg"
      alt="Third slide"
    />
    <Card.ImgOverlay>
    <Carousel.Caption>
    <h6>Featured Movies</h6>
      <h3>Thor:Love and Thunder</h3>
      <p>Thor got new partner in hammer.</p>
    </Carousel.Caption>
    
    </Card.ImgOverlay>

  </Carousel.Item>
</Carousel>

    </div>
  )
}

export default CarouselCard