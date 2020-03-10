import React from 'react'
import Junco from './img/junco.jpg'
import Capoeira from './img/capoeira.jpg'
import  Pico from './img/pico.jpeg'
import  Topacio from './img/topacio.jpg'
import  Mando from './img/mando.jpeg'
import  Mario from './img/mario.jpg'
import  Luigi from './img/luigi.jpg'
import  Pacman from './img/pacman.gif'
import'./App.css'



export default function Hobbies() {
    return (
        <div>
            <h1>Hobbies</h1>
            <ul>
                <h1 className="hobbies">Capoeira</h1>
                <article>
                <img src= {Junco} alt="Capoeira" className="junco"/>
                <img src={Capoeira} alt="capoeira"/>
                <img src={Pico} alt="capoeira"/>
                <img src={Topacio} alt="capoeira"/>
                </article>
                <h1 className="hobbies">Video games</h1>
                <article>
                <img src= {Mario} alt="Capoeira" className="junco"/>
                <img src={Pacman} alt="capoeira"/>
                <img src={Luigi} alt="capoeira"/>
                <img src={Mando} alt="capoeira"/>
                </article>
            
            </ul>
        </div>
    )
}
