import React from "react";
import './gallery.css';
import {Slideshow, Slide, TextoSlide} from '../../components/Slideshow';
import './gallery.css';
import styled from 'styled-components';



 const Gallery = () => {
     return (

        <main className="main-gallery">
			<Titulo className="text-title">Welcome to our picture gallery</Titulo>
			<Slideshow controles={true}>
				<Slide>
					<a href="https://www.siruom.com">
						<img src={'https://lartek.com.ar/downloads/mauroimages/gallery/3.jpg'} alt=""/>
					</a>
					<TextoSlide>
						<p>Fotos Edites Solutions</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.siruom.com">
						<img src={'https://lartek.com.ar/downloads/mauroimages/gallery/2.jpg'} alt=""/>
					</a>
					<TextoSlide>
						<p>Fotos Edites Solutions</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.siruom.com">
						<img src={'https://lartek.com.ar/downloads/mauroimages/gallery/4.jpg'} alt=""/>
					</a>
					<TextoSlide>
						<p>Fotos Edites Solutions</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.siruom.com">
						<img src={'https://lartek.com.ar/downloads/mauroimages/gallery/5.jpg'} alt=""/>
					</a>
					<TextoSlide>
						<p>Fotos Edites Solutions</p>
					</TextoSlide>
				</Slide>
                <Slide>
					<a href="https://www.siruom.com">
						<img src={'https://lartek.com.ar/downloads/mauroimages/gallery/G2.jpg'} alt=""/>
					</a>
					<TextoSlide>
						<p>Fotos Edites Solutions</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.siruom.com">
						<img src={'https://lartek.com.ar/downloads/mauroimages/gallery/G3.jpg'} alt=""/>
					</a>
					<TextoSlide>
						<p>Fotos Edites Solutions</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.siruom.com">
						<img src={'https://lartek.com.ar/downloads/mauroimages/gallery/G4.jpg'} alt=""/>
					</a>
					<TextoSlide>
						<p>Fotos Edites Solutions</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.siruom.com">
						<img src={'https://lartek.com.ar/downloads/mauroimages/gallery/G5.jpg'} alt=""/>
					</a>
					<TextoSlide>
						<p>Fotos Edites Solutions</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.siruom.com">
						<img src={'https://lartek.com.ar/downloads/mauroimages/gallery/G6.jpg'} alt=""/>
					</a>
					<TextoSlide>
						<p>Fotos Edites Solutions</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.siruom.com">
						<img src={'https://lartek.com.ar/downloads/mauroimages/gallery/G7.jpg'} alt=""/>
					</a>
					<TextoSlide>
						<p>Fotos Edites Solutions</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.siruom.com">
						<img src={'https://lartek.com.ar/downloads/mauroimages/gallery/G8.jpg'} alt=""/>
					</a>
					<TextoSlide>
						<p>Fotos Edites Solutions</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.siruom.com">
						<img src={'https://lartek.com.ar/downloads/mauroimages/gallery/G10.jpg'} alt=""/>
					</a>
					<TextoSlide>
						<p>Fotos Edites Solutions</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.siruom.com">
						<img src={'https://lartek.com.ar/downloads/mauroimages/gallery/G11.jpg'} alt=""/>
					</a>
					<TextoSlide>
						<p>Fotos Edites Solutions</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.siruom.com">
						<img src={'https://lartek.com.ar/downloads/mauroimages/gallery/G14.jpg'} alt=""/>
					</a>
					<TextoSlide>
						<p>Fotos Edites Solutions</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.siruom.com">
						<img src={'https://lartek.com.ar/downloads/mauroimages/gallery/G15.jpg'} alt=""/>
					</a>
					<TextoSlide>
						<p>Fotos Edites Solutions</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.siruom.com">
						<img src={'https://lartek.com.ar/downloads/mauroimages/gallery/G20.jpg'} alt=""/>
					</a>
					<TextoSlide>
						<p>Fotos Edites Solutions</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.siruom.com">
						<img src={'https://lartek.com.ar/downloads/mauroimages/gallery/G18.jpg'} alt=""/>
					</a>
					<TextoSlide>
						<p>Fotos Edites Solutions</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.siruom.com">
						<img src={'https://lartek.com.ar/downloads/mauroimages/gallery/G19.jpg'} alt=""/>
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



