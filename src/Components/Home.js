import React from 'react'
import '../App.css';
import ImageSlider from '../ImageSlider'
import Carousel from 'react-bootstrap/Carousel'
import { SliderData } from '../SliderData';
import MediaQuery from 'react-responsive'
import { AiFillBulb } from "react-icons/ai";
import { VscChromeRestore } from "react-icons/vsc";
import {Contact} from './Contact.js';
import Ankit_Raut_tl from '../Ankit_Raut_tl.jpg';
import Harsha_tl from "../Harsha_tl.jpg";
import Venkatesh_tl from '../Venkatesh_tl.jpg';
import Surendra_tl from '../Surendra_tl.jpg';
import banner_img_tl from '../banner_img_tl.png';
import learning_img_tl from '../learning_img_tl.png';

export const Home = () => (
    <div>
        <div className = 'Ban'>
        <MediaQuery query="(min-device-width: 600px)">
        <img src={banner_img_tl} className= 'Banner' alt="Banner"/>
        </MediaQuery>
        <div className = 'Banner'>
           <h3 className='h3B'>SKILL DEVELOPMENT & TRAINING</h3>
           <br/>
           <MediaQuery query="(min-device-width: 1000px)">
           <h1 className='h1B'>Launch Into The</h1>
           <br/>
           <h1 className='h1B'>World Of</h1>
           <br/>
           <h1 className='h1B'>Technology</h1>
           </MediaQuery>
           <h6>Explore the state-of-the art programs crafted by industry experienced professionals for aspiring Engineers.</h6>
           <h6>Learn Latest technologies.</h6>
           <MediaQuery query="(min-device-width: 350px)">
           <h6> Conducting Seminars, Workshops & Project Programmes</h6>
           </MediaQuery>
        </div>
        </div>


        <div className='home2'>
        <MediaQuery query="(min-device-width: 1000px)">
        <div className='h2Banner'>
             <h2>Engineering a skilled India</h2>
             <p>Industry experienced trainers know exactly what is it to make you an employable graduate</p>
        </div>
        <div className ='h2banner'>

        </div>
        <div className='h2Banner'>
            <VscChromeRestore className='h2icon'/>
             <h2>Better Future</h2>
             <p>This is our attempt to make you a better engineer who can contribute to a 'better future'</p>
        </div>
        <div className ='h2banner'>
             
        </div>
        <div className='h2Banner'>
             <h2>Qualified Trainers</h2>
             <p>Our training team comprises of committeed IIT alumni focused on ensuring the engineering fundamentals are well engrained into their students</p>
        </div>
        <div className ='h2banner'>
             
        </div>
        <div className='h2Banner'>
            <AiFillBulb className='h2icon'/>
             <h2>Job Oppurtunity</h2>
             <p>Every organization looks for competent and smart employees. We train you to be one!</p>
        </div>
        </MediaQuery>
           
        <MediaQuery query="(max-device-width: 999px)">
           <div className="ma">
            <ul>
              <li>
                <div>
             <h2>Engineering a skilled India</h2>
             <p>Industry experienced trainers know exactly what is it to make you an employable graduate</p>
                </div>
              </li>
              <li>
              <div>
            <VscChromeRestore className='h2icon'/>
             <h2>Better Future</h2>
             <p>This is our attempt to make you a better engineer who can contribute to a 'better future'</p>
        </div>
              </li>
              <li>
              <div >
             <h2>Qualified Trainers</h2>
             <p>Our training team comprises of committeed IIT alumni focused on ensuring the engineering fundamentals are well engrained into their students</p>
        </div>
              </li>
              <li>
              <div >
            <AiFillBulb className='h2icon'/>
             <h2>Job Oppurtunity</h2>
             <p>Every organization looks for competent and smart employees. We train you to be one!</p>
              </div>
              </li>
             </ul>
             </div> 
        </MediaQuery>
        </div>
        <br/>
        <br/>

         <div className='home2'>
         <h2>Members</h2>


         <MediaQuery query="(min-device-width: 1000px)">
              <div className='h2BannerPh'>
             <img src={Venkatesh_tl} className='photo'/>
             <h4> B Venkatesh Ph.D.</h4>
             <h4>Civil Engineering</h4>
             </div>
             <div className='h2banner'>

             </div>
             <div className='h2BannerPh'>
             <img src={Surendra_tl} className = "photo"/>
             <h4> Surendra Errepalli M.Tech</h4>
             <h4>Civil Engineering</h4>
             </div>
             <div className='h2banner'>

             </div>
             <div className='h2BannerPh'>
             <img src={Ankit_Raut_tl} className='photo'/>
             <h4> Ankit Raut Ph.D.</h4>
             <h4>Mechanical Engineering</h4>
             </div>
             <div className='h2banner'>

             </div>
             <div className='h2BannerPh'>
             <img src={Harsha_tl} className="photo"/>
             <h4> Harsha Ph.D.</h4>
             <h4>Computer Science and Engineering</h4>
             </div>
         </MediaQuery>

         <MediaQuery query="(max-device-width: 999px)">
         <div >
             <img src={Venkatesh_tl} className="ph"/>
             <h4> B Venkatesh Ph.D.</h4>
             <h4>Civil Engineering</h4>
             </div>

             <div >
             <img src={Surendra_tl} className="ph"/>
             <h4> Surendra Errepalli M.Tech</h4>
             <h4>Civil Engineering</h4>
             </div>

             <div >
             <img src={Ankit_Raut_tl} className="ph"/>
             <h4> Ankit Raut Ph.D.</h4>
             <h4>Mechanical Engineering</h4>
             </div>

             <div >
             <img src={Harsha_tl} className="ph"/>
             <h4> Harsha Ph.D.</h4>
             <h4>Computer Science and Engineering</h4>
             </div>
         </MediaQuery>

         </div>
     <div className='hHome'>

        <div className = 'Ban'>
        
          <div className = 'HomeAbout'>
             <h5>_____ ABOUT US</h5>
             <MediaQuery query="(min-device-width: 1000px)">
            <h3 className='h1B'>Our Profile</h3>
            </MediaQuery>
            <br/>
            <p>Tech Launchpad was started by a group of enthusiastic IIT Madras alumni who specialize in Structural Engineering. The team has experience in designing, proof checking and value added engineering of several domestic and international projects. Come and experience 'the joy of learning' form the professionals!</p>
            <br/>
            <MediaQuery query="(min-device-width: 600px)">  
            <ul>
                <li>Well trained professional Engineers</li>
                <li> All our Trainers have experience in industry related programs</li>
            </ul>
            </MediaQuery>
          </div>
          <MediaQuery query="(min-device-width: 600px)">
          <div className="BanAbout">
            <img src={learning_img_tl} className= 'HomeAbout' alt="Banner"/>
          </div>
          </MediaQuery>
        </div>
      </div>
      <br/>
      <br/>
      <MediaQuery query="(min-device-width: 400px)">
         <div>
         <Contact/>
         </div>
         </MediaQuery>  
    </div>
)
