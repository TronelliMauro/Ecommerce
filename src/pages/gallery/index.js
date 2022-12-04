import React from "react";
import './gallery.css';

//import Button from './Components/Button';
import {Slideshow, Slide, TextoSlide} from '../../components/Slideshow';
//import './estilos.css';
import './gallery.css';
import styled from 'styled-components';
import img1 from '../../img/3.jpg';
import img2 from '../../img/2.jpg';
import img3 from '../../img/4.jpg';
import img4 from '../../img/5.jpg';
import img5 from '../../img/G2.jpg';
import img6 from '../../img/G3.jpg';
import img7 from '../../img/G4.jpg';
import img8 from '../../img/G5.jpg';
import img9 from '../../img/G6.jpg';
import img10 from '../../img/G7.jpg';
import img11 from '../../img/G8.jpg';
import img12 from '../../img/G10.jpg';
import img13 from '../../img/G11.jpg';
import img14 from '../../img/G14.jpg';
import img15 from '../../img/G15.jpg';
import img16 from '../../img/G20.jpg';
import img17 from '../../img/G18.jpg';
import img18 from '../../img/G19.jpg';

//import img4 from './img/4.jpg';

 const Gallery = () => {
     return (

        <main className="main-gallery">
			<Titulo className="text-title">Welcome to our picture gallery</Titulo>
			<Slideshow controles={true}>
				<Slide>
					<a href="https://www.siruom.com">
						<img src={img1} alt=""/>
					</a>
					<TextoSlide>
						<p>Fotos Edites Solutions</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.siruom.com">
						<img src={img2} alt=""/>
					</a>
					<TextoSlide>
						<p>Fotos Edites Solutions</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.siruom.com">
						<img src={img3} alt=""/>
					</a>
					<TextoSlide>
						<p>Fotos Edites Solutions</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.siruom.com">
						<img src={img4} alt=""/>
					</a>
					<TextoSlide>
						<p>Fotos Edites Solutions</p>
					</TextoSlide>
				</Slide>
                <Slide>
					<a href="https://www.siruom.com">
						<img src={img5} alt=""/>
					</a>
					<TextoSlide>
						<p>Fotos Edites Solutions</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.siruom.com">
						<img src={img6} alt=""/>
					</a>
					<TextoSlide>
						<p>Fotos Edites Solutions</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.siruom.com">
						<img src={img7} alt=""/>
					</a>
					<TextoSlide>
						<p>Fotos Edites Solutions</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.siruom.com">
						<img src={img8} alt=""/>
					</a>
					<TextoSlide>
						<p>Fotos Edites Solutions</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.siruom.com">
						<img src={img9} alt=""/>
					</a>
					<TextoSlide>
						<p>Fotos Edites Solutions</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.siruom.com">
						<img src={img10} alt=""/>
					</a>
					<TextoSlide>
						<p>Fotos Edites Solutions</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.siruom.com">
						<img src={img11} alt=""/>
					</a>
					<TextoSlide>
						<p>Fotos Edites Solutions</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.siruom.com">
						<img src={img12} alt=""/>
					</a>
					<TextoSlide>
						<p>Fotos Edites Solutions</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.siruom.com">
						<img src={img13} alt=""/>
					</a>
					<TextoSlide>
						<p>Fotos Edites Solutions</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.siruom.com">
						<img src={img14} alt=""/>
					</a>
					<TextoSlide>
						<p>Fotos Edites Solutions</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.siruom.com">
						<img src={img15} alt=""/>
					</a>
					<TextoSlide>
						<p>Fotos Edites Solutions</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.siruom.com">
						<img src={img16} alt=""/>
					</a>
					<TextoSlide>
						<p>Fotos Edites Solutions</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.siruom.com">
						<img src={img17} alt=""/>
					</a>
					<TextoSlide>
						<p>Fotos Edites Solutions</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.siruom.com">
						<img src={img18} alt=""/>
					</a>
					<TextoSlide>
						<p>Fotos Edites Solutions</p>
					</TextoSlide>
				</Slide>
				
			</Slideshow>
            </main>

       

         
     )
 }

 const Titulo = styled.p`
	font-size: 18px;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 10px;
`;

export default Gallery; 



