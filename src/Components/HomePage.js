import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';
import introImg from '../Images/introImg.webp'
import circut from '../Images/circut.png'
import hompageImg from '../Images/hompageImg.png'
import WorkEx from '../Components/Courses Pages/WorkEx'
import NoWork from './Courses Pages/NoWork';
import CallBackQueryForm from './CallBackQueryForm';
import Footer from './Footer';
import AluminiStories from './AluminiStories';
import { Link } from 'react-router-dom';


const HomePage = () => { 
  return (
    <div style={{backgroundColor:'rgb(250,247,242)'}}>
      <div className='intro-div'>
        <div className='intro-div-one'>
          <div >
        <TypeWriterEffect
                textStyle={{
                    fontWeight:"bolder",
                    fontSize:"2rem",
                    color:'rgb(212,225,227)'
                    // width:"45vw"
                }}
                cursorColor="orange"
                multiText={[
                    "World has enough coders",
                    "Be more than a coder",
                    "Chasing Jobs? Let the jobs chase you.",
                ]}
                multiTextDelay={2000}
                typeSpeed={50}
                multiTextLoop
            />
            </div>
            <p style={{color:'rgb(243,139,29)',fontSize:'40px',fontWeight:'bolder'}}>Be a Coding Ninja</p>
            <h4 style={{color:'rgb(212,225,227)'}}>50,000 Students from 300 colleges have trusted us</h4>
            <button><Link className='link' to='/enroll'>Explore Our Program</Link></button>

        </div>
        <div className='intro-div-two'>
          <img className='anim-img' src={introImg} alt='404' />
          <img className='circut' src={circut} alt='404'/>
        </div>
      </div>

      <div className='homepage-box-two'>
                <h4>If you have the courage and the commitment to learn coding, then Coding<br/> Ninjas will empower you.</h4>
                <h6>NO MATTER WHAT IT TAKES!</h6>
                <div className='box-two-flex'>
                  <div >
                    <img src='https://files.codingninjas.in/boxicon1-9659.svg' alt='404'/>
                    <p>Content designed by IIT & Stanford alumni</p>
                  </div>
                  <div>
                  <img src='https://files.codingninjas.in/boxicon2-9658.svg' alt='404'/>
                    <p>Instant 1:1 doubt resolution</p>
                  </div>
                  <div>
                  <img src='https://files.codingninjas.in/boxicon3-9657.svg' alt='404'/>
                    <p>Practical learning with 100+ problems & 10+ projects in each course</p>
                  </div>
                </div>
        </div>

        {<AluminiStories/>}

        <div className='why-img'>,
          <img src={hompageImg} alt='404' />
        </div>

        <div className='placement-div'>
          <h3>Our Students are placed at</h3>
          <div className='placement-company'>
          <img src='https://files.codingninjas.in/google-9542.svg' alt='404' />
          <img src='https://files.codingninjas.in/microsoft-9541.svg' alt='404' />
          <img src='https://files.codingninjas.in/adobe-9540.svg' alt='404' />
          <img src='https://files.codingninjas.in/walmart-9539.svg' alt='404' />
          <img src='https://files.codingninjas.in/amazon-9538.svg' alt='404' />
          <img src='https://files.codingninjas.in/oyo-9537.svg' alt='404' />
          <img src='https://files.codingninjas.in/flipkart-9536.svg' alt='404' />
          <img src='https://files.codingninjas.in/morganstanley-9535.svg' alt='404' />
          <img src='https://files.codingninjas.in/samsung-9534.svg' alt='404' />
          <img src='https://files.codingninjas.in/expedia-9533.svg' alt='404' />
          <img src='https://files.codingninjas.in/facebook-9532.svg' alt='404' />
          </div>
        </div>

        <div className='review'>
        <div>
          <h1>4.9</h1>
          <img src='https://files.codingninjas.in/stars-9613.svg' alt='404'/>
          <p>100+ reviews</p>
          <img src='https://files.codingninjas.in/fblogo-9599.svg' alt='404' />
        </div>
        <div>
        <h1>4.9</h1>
          <img src='https://files.codingninjas.in/stars-9613.svg' alt='404'/>
          <p>1000+ reviews</p>
          <img src='https://files.codingninjas.in/glogo-9600.svg' alt='404' />
        </div>
        <div>
          <h1>50+</h1>
        <img src='https://files.codingninjas.in/stars-9613.svg' alt='404'/>
          <p>5000 answered</p>
          <img src='https://files.codingninjas.in/qlogo-9611.svg' alt='404' />
        </div>
        </div>
          
          <div className='homepage-course-div'>
          <h2>Courses specially curated for</h2>
          <h6>No Work Experience</h6>
          </div>
          <WorkEx/>

          <div className='homepage-course-div'>
          <h2>Courses specially curated for</h2>
          <h6>Having Work Experience</h6>
          </div>
          <NoWork/>
          
          <div className='homepage-callback-form'>
            <div>
            <h3>Have any queries?</h3>
            <p>Get a free counselling session from our experts</p>
            <div>
              <img src='https://files.codingninjas.in/call-icon-9597.svg' alt='404' />
              <span>Call us on our toll free number<h1>1800-123-3598</h1></span>
            </div>
            </div>
          <div>
          <CallBackQueryForm/>
          </div>
          </div>

          <div className='news-section'> 
            <h3>Coding Ninja in the news</h3>
            <div className='news-article'>
            <div>
                  <img src='https://files.codingninjas.in/bw-logo-5471.jpg' alt='404'></img>
                  <p>Platforms To Watch Out For If You Want To Learn Coding</p>
            </div>
            <div>
                  <img src='https://files.codingninjas.in/india-today-5474.jpg' alt='404'></img>
                  <p>Why learn programming?</p>
            </div>
            <div>
                  <img src='https://files.codingninjas.in/et-brandequity-5439.jpg' alt='404'></img>
                  <p>Coding Ninjas aims for coding curiosity among students</p>
            </div>
            <div>
                  <img src='https://files.codingninjas.in/et-logo-5689.png' alt='404'></img>
                  <p>Coding Ninjas Collaborates With Chitkara University To Offer Programmi...</p>
            </div>
            <div>
                  <img src='https://files.codingninjas.in/inc-42-5477.jpg' alt='404'></img>
                  <p>Coding Ninjas Turns Past Learners Into Teachers</p>
            </div>
            <div>
                  <img src='https://files.codingninjas.in/0000000000004338.png' alt='404'></img>
                  <p>Coding Ninjas aims to crack the edtech code by reskilling and upskilli...</p>
            </div>
            <div>
                  <img src='https://files.codingninjas.in/the-hindu-5475.webp' alt='404'></img>
                  <p>Coding-enabled world and workforce</p>
            </div>
            <div>
                  <img src='https://files.codingninjas.in/bllogo-5440.jpg' alt='404'></img>
                  <p>Ed-tech start-up Coding Ninjas to offer coding, programming courses fo...</p>
            </div>
            <div>
                  <img src='https://files.codingninjas.in/newsx_small-5673.png' alt='404'></img>
                  <p>Ankush Singla, Co-Founder, Coding Ninjas joins a panel discussion with other industry stalwarts to talk about the economy in the times of COVID-19.</p>
            </div>
          </div>
          </div>

          <Footer/>
    </div>
  )
}

export default HomePage