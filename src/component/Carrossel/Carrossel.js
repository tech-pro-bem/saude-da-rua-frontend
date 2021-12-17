import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

import img1 from './../../img/imagem1.jpg'
import img2 from './../../img/imagem2.jpg'
import img3 from './../../img/imagem3.jpg'

import { Button } from 'rbx';


function Carrossel(){
    return(
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      <Button.Group>
        <Button class="button is-info is-rounded is-hovered">
            <strong>doe agora</strong>
        </Button>
    </Button.Group>    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      <Button.Group>
        <Button class="button is-info is-rounded is-hovered is-outlined">
            <strong>doe agora</strong>
        </Button>
    </Button.Group>  
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    )
}

export default Carrossel;