import React from 'react'
import {Contact} from './Contact.js';
import learning_img_tl from '../learning_img_tl.png';
import MediaQuery from 'react-responsive'


export const About = () => (
    <div>
    <div className='BanAbout'>
        <h2 className='About1'>About Us</h2>
        <p>Tech Swap was started by a group of enthusiastic IIT Madras alumni who specialize in Structural Engineering. The team has experience in designing, proof checking and value added engineering of several domestic and international projects.</p>
    </div>

  <div className='BannerAbout1'>
     <div className = 'Ban22'>
           <h5 className='h1B'>PROJECTS OUR ENGINEERS HAVE WORKED ON INCLUDE:</h5>
           <h6>Explore the state-of-the art programs crafted by industry experienced professionals for aspiring Engineers</h6>
           <ul className='h1about'>
               <li>
                 Design of Sewage Treatment Plant in Saudi Arabia
               </li>

               <li>
                 Design of Sewage Treatment Plant in Philippines
               </li>

               <li>
                 Design of Underground tanks in Aurangabad
               </li>

               <li>
                 Design of School Building in Thiruvarur, Tamil Nadu
               </li>

               <li>
                 Design of Mosque, Kodikannal, Tamil Nadu
               </li>
               <li>
                Design of Tank Foundations, Visakhapatnam
               </li>
               <li>
                Retrofit of Hotel in Chennai
               </li>
               <li>
               Proof checking and value engineering of Mini Steel Plant in Oman
               </li>

           </ul>
    </div> 
       <MediaQuery query="(min-device-width: 900px)">
          <img src={learning_img_tl} className='Ban22'></img>
        </MediaQuery>
    </div>
       <br/>
       <br/>
       <div className="con">
         <Contact/>
         </div>
 </div>
 
)
