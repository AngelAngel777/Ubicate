import Carousel from 'react-bootstrap/Carousel';


const MainConteiner = () => {
    return (
        <div>
 <Carousel className='carruselContenedor'>
      <Carousel.Item >
        <img className='carruselFondo' src="https://www.lanacion.com.ar/resizer/v2/bugatti-chiron-super-sport-uno-de-los-autos-mas-PEELQ7TKSFF2BNHXAOQW3XTWFA.jpg?auth=39b28a11081e66df94c5a666bee032f6251d1b807d358d4d5dda718efb8f7d2f&width=880&height=586&quality=70&smart=true" alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='carruselFondo' src="https://www.lanacion.com.ar/resizer/v2/bugatti-chiron-super-sport-uno-de-los-autos-mas-PEELQ7TKSFF2BNHXAOQW3XTWFA.jpg?auth=39b28a11081e66df94c5a666bee032f6251d1b807d358d4d5dda718efb8f7d2f&width=880&height=586&quality=70&smart=true" alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='carruselFondo' src="https://www.lanacion.com.ar/resizer/v2/bugatti-chiron-super-sport-uno-de-los-autos-mas-PEELQ7TKSFF2BNHXAOQW3XTWFA.jpg?auth=39b28a11081e66df94c5a666bee032f6251d1b807d358d4d5dda718efb8f7d2f&width=880&height=586&quality=70&smart=true" alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div> 
    )
}

export default MainConteiner;