import React from 'react';
import './home.css'
import {ReactComponent as Cactus} from './cactus.svg'
import spirit from 'spiritjs';
import gsap from "gsap";

const Home = () => {
      spirit.loadAnimation({
        loop: true,
        path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/cactus.json',
      }).then(() => {
        gsap.set('svg', {autoAlpha: 1});
      })
    return (
        <div className="svg-animation">
           <h1>Home under construction</h1>
           <Cactus/>
        </div>
    );
};

export default Home;
