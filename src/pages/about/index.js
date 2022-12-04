import React from "react";
import './styles.css';

const About = () => {
    return (
        <div className="PriAbout">
            <header  >

                <img src="./Edites-1.jpg" className="photo-background" alt="backgrount_image" />
                

                <div className="row-about">
                    {/* <p className="text-about"> Somos una empresa que diseña, fabrica y comercializa soluciones de ingeniería para diferentes industrias. Nuestro foco es la aplicación de nuevas tecnologías en diferentes sectores, contamos con una amplia experiencia en el fabricación de dispositivos médicos, por lo que nuestros trabajos cumplen con los más altos estándares de calidad. </p> */}
                    <p className="text-about"> We are a company that designs, manufactures and markets engineering solutions for different industries. Our focus is the application of new technologies in different sectors, we have extensive experience in the manufacture of medical devices, so our work meets the highest standards of quality. </p> 
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/NoPO19ed2Q8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </header>

        </div>
    )
}


export default About;

