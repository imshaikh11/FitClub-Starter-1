import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png'


const Hero = () => {
   return (
      <div className='Hero'>
         <div className='left-h'>
            <Header />
            {/*Hero Ad*/}
            <div className='the-best-ad'>
               <div></div>
               <span>THE BEST FITNESS CLUB IN THE TOWN</span>
            </div>

            {/*Hero Headline*/}
            <div className='hero-text'>
               <div>
                  <span className='stroke-text'>Shape </span>
                  <span>Your</span>
               </div>
               <div>
                  <span>Ideal Body</span>
               </div>
               <div>
                  <span>in here we will help you to shape and build your ideal body and live up your life to fullest</span>
               </div>
            </div>

            {/*Figures*/}

            <div className='figures'>
               <div>
                  <span>+100</span>
                  <span>ExpertCoach</span>
               </div>
               <div>
                  <span>+800</span>
                  <span>Members Joined</span>
               </div>
               <div>
                  <span>+50</span>
                  <span>Fitness Program</span>
               </div>
            </div>

            {/*Button*/}
            <div className='hero-buttons'>
               <button className='btn'>Get Started</button>
               <button className='btn'>Learn More</button>
            </div>

         </div>
         <div className='right-h'>
            <button className='btn'>Join Now</button>


            <div className='heart-rate'>
               <img src={Heart} alt='' />
               <span>Heart Rate</span>
               <span>116 bpm</span>
            </div>

            {/*hero Images */}
            <img src={hero_image} alt='' className='hero_image' />
            <img src={hero_image_back} alt='' className='hero_image_back' />

            {/*Calories*/}
            <div className='calories'>
               <img src={Calories} alt='' />
               <div>
                  <span>Calories Burned</span>
                  <span>110 kcal</span>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Hero