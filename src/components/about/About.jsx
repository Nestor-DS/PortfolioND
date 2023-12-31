import React from 'react'
import './about.css'
import ME from '../../assets/image.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { BsFolderFill } from 'react-icons/bs'

const About = () => {
    return (
        <section id='about'>
            <h5>Conoce un poco</h5>
            <h2>Sobre mi</h2>
            <div className='container about__container'>
                <div className='about__me'>
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">

                    <div className="about__cards">
                        <a href="#experience">
                            <article className='about__card'>
                                <FaAward className='about__icon'/>
                                <h5>Tecnologías</h5>
                                <small>Lenguajes y más</small>
                            </article>
                        </a>
                        
                        <a href="#services">
                            <article className='about__card'>
                                <FiUsers className='about__icon'/>
                                <h5>Preparación</h5>
                                <small>Certificaciones</small>
                            </article>
                        </a>

                        <a href="#portfolio">
                            <article className='about__card'>
                                <BsFolderFill className='about__icon'/>
                                <h5>Proyectos</h5>
                                <small>Mis proyectos</small>
                            </article>
                        </a>  
                    </div>

                    <div className="about__cards">
                        
                    </div>
                    <p>
                    Apasionado por las nuevas tecnologías y con una habilidad en constante mejora para abordar desafíos, 
                    me encuentro impulsado en una búsqueda constante de conocimiento. Siempre dispuesto a aprender y crecer, 
                    empleando una resolución creativa de problemas.  Estoy emocionado por contribuir al mundo del desarrollo 
                    de software por medio de resolución de problemas de manera cretiva.
                    </p>
                    <a href="#contact" className='btn'>Contactame</a>
                </div>
            </div>
        </section>
    )
}

export default About