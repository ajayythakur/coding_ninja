import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from './context/auth';
const NavBar = () => {
  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: ""
    });
    localStorage.removeItem("auth");
    console.log("User logout succesfully");
  }
  return (
    <div>
      <div className='NavBar'>
        <div><Link to='/home'>
          <img alt='404' className='logo' src='https://files.codingninjas.in/logo_variants-white-25005.png' />
          </Link>
        </div>
        <div className='links course'>Courses
          <div className='dropdown-content '>
            <div className='content'>
              <div><h2>What is your work experience?</h2>
                <span>This will help us recommend the best programs for you.</span></div>
              <div className='cards'>
                <div className='experience-card one'>
                  <div><img alt='404' src='https://files.codingninjas.com/student-24426.png' /></div>
                  <div><h1>No work &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &gt;<br /> experience </h1></div>
                  <div>Designed as per college student schedule</div>
                </div>
                <div className='experience-card two'>
                  <div><img alt='404' src='https://files.codingninjas.com/professional-24427.png' /></div>
                  <div><h1>Having work &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &gt;<br /> experience </h1></div>
                  <div>Designed as per working professional schedule</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>Scholarship</div>
        <div className='links course'>Community
          <div className='dropdown-content'>
            <div className='content-sponsor'>
              <div className='events'>
                <span className='drop-list'>Events</span>
                <div className='event-list'>
                  <div className='event-tab'>
                    <div className='upcoming-event'>
                      <div className='event-text'>UPCOMING EVENTS</div>
                      <div className='event-card'>
                        <div className=''>
                          <img alt='404' src='https://files.codingninjas.in/codekaze-5-27236.jpg' />
                          <p>CodeKaze June'23 - India's Big...</p>
                        </div>
                        <div>
                          <img alt='404' src='https://files.codingninjas.in/coding-event-mobile-1-27800.webp' />
                          <p>PAT || KPIT || Shri Ram Group ...</p>
                        </div>
                        <div>
                          <img alt='404' src='https://files.codingninjas.in/artboard-9-2x-8-2-25888.png' />
                          <p>Scholarship Test 13th to 14th ...</p>
                        </div>
                        <div>
                          <img alt='404' src='https://files.codingninjas.in/coding-event-mobile-27433.jpg' />
                          <p>BitBlitz || IEEE WIE MUJ</p>
                        </div>
                        <p className='view-more-btn'>View More</p>
                      </div>
                    </div>
                    <div className='past-event' >
                      <div className='event-text'>PAST EVENTS</div>
                      <div><p>Coding Ninjas Studio Presents: BCA Coding Contest | Sree Vidyanikethan Engineering College</p></div>
                      <div><p>DevSpark | IEEE-WIE and IEEE IAS (VIT Vellore)</p></div>
                      <div><p>Coding Trivia || MTC</p></div>
                      <div><p>Coding Trivia || MTC</p></div>

                      <div className='view-more-btn'>View More</div>
                    </div>

                  </div>
                </div>
              </div>
              <div className='drop-list'>Sponsorship & Collaborations</div>
              <div className='drop-list'>Campus Ambassador Program</div>
            </div>
          </div>
        </div>
        <div>
          <div className='links practice'>Practice
            <div className='practice-dropdown'>
              <div>Coding Ninja's Studio</div>
              <hr />

              <div >Contest</div>
              <div >Guided Paths</div>
              <div>Code Problems</div>
              <div>Interview Experiences</div>
              <div>Mock Tests</div>

            </div>
          </div>
        </div>
        <div>
          <img alt='404' className='carrier_camp' src='https://files.codingninjas.in/careercamp-12614.svg' />
        </div>
        <Link to='/classroom' style={{color:'whitesmoke'}}>
        <div>
          {
          // if user is logged in only then My classroom is visible
          !auth?.user ? (<></>) : (<>My Classroom</>)
        }
        </div>
        </Link>

        <div><button className='login-btn'>

          {
            !auth?.user ? (<Link to='/login'>Login</Link>) :
              (<>

                <span className='links nav-login'>{auth?.user.name}
                  <div className='login-dropdown-content'>
                    <div className='login-dropdown'>

                      <div className='logout-btn' onClick={handleLogout}>Logout</div>
                      <div><Link className='link' to='/dashboard'>Dashboard</Link></div>
                    </div>
                  </div>
                </span>
              </>)}

        </button>
        </div>
        <div><button className='enrol-btn'><Link to='/enroll'>Enrol Now</Link></button></div>
      </div>








      <div className='responsive-nav'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary nav-bg">
          <div className="container-fluid ">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <span className="navbar-brand">
              <Link to='/home'><div>
                <img alt='404' className='logo' src='https://files.codingninjas.in/logo_variants-white-25005.png' />
              </div></Link></span>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <span className="nav-link active" aria-current="page">
                    <div className='links course'>Courses
                      <div className='dropdown-content'>
                        <div className='content'>
                          <div><h2>What is your work experience?</h2>
                            <span>This will help us recommend the best programs for you.</span></div>
                          <div className='cards'>
                            <div className='experience-card one'>
                              <div><img alt='404' src='https://files.codingninjas.com/student-24426.png' /></div>
                              <div><h1>No work &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &gt;<br /> experience </h1></div>
                              <div>Designed as per college student schedule</div>
                            </div>
                            <div className='experience-card two'>
                              <div><img alt='404' src='https://files.codingninjas.com/professional-24427.png' /></div>
                              <div><h1>Having work &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &gt;<br /> experience </h1></div>
                              <div>Designed as per working professional schedule</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div></span>
                </li>
                <li className="nav-item">
                  <span className="nav-link"><div>Scholarship</div>
                  </span>
                </li>
                <li className="nav-item">
                  <span className="nav-link"><div className='links course'>Community
                    <div className='dropdown-content'>
                      <div className='content-sponsor'>
                        <div className='events'>
                          <span className='drop-list'>Events</span>
                          <div className='event-list'>
                            <div className='event-tab'>
                              <div className='upcoming-event'>
                                <div className='event-text'>UPCOMING EVENTS</div>
                                <div className='event-card'>
                                  <div className=''>
                                    <img alt='404' src='https://files.codingninjas.in/codekaze-5-27236.jpg' />
                                    <p>CodeKaze June'23 - India's Big...</p>
                                  </div>
                                  <div>
                                    <img alt='404' src='https://files.codingninjas.in/coding-event-mobile-1-27800.webp' />
                                    <p>PAT || KPIT || Shri Ram Group ...</p>
                                  </div>
                                  <div>
                                    <img alt='404' src='https://files.codingninjas.in/artboard-9-2x-8-2-25888.png' />
                                    <p>Scholarship Test 13th to 14th ...</p>
                                  </div>
                                  <div>
                                    <img alt='404' src='https://files.codingninjas.in/coding-event-mobile-27433.jpg' />
                                    <p>BitBlitz || IEEE WIE MUJ</p>
                                  </div>
                                  <p className='view-more-btn'>View More</p>
                                </div>
                              </div>
                              <div className='past-event' >
                                <div className='event-text'>PAST EVENTS</div>
                                <div><p>Coding Ninjas Studio Presents: BCA Coding Contest | Sree Vidyanikethan Engineering College</p></div>
                                <div><p>DevSpark | IEEE-WIE and IEEE IAS (VIT Vellore)</p></div>
                                <div><p>Coding Trivia || MTC</p></div>
                                <div><p>Coding Trivia || MTC</p></div>

                                <div className='view-more-btn'>View More</div>
                              </div>

                            </div>
                          </div>
                        </div>
                        <div className='drop-list'>Sponsorship & Collaborations</div>
                        <div className='drop-list'>Campus Ambassador Program</div>
                      </div>
                    </div>
                  </div>

                  </span>
                </li>
                <li className="nav-item">
                  <span className="nav-link">        <div className='links practice'>Practice
                    <div className='practice-dropdown'>
                      <div>Coding Ninja's Studio</div>
                      <hr />

                      <div >Contest</div>
                      <div >Guided Paths</div>
                      <div>Code Problems</div>
                      <div>Interview Experiences</div>
                      <div>Mock Tests</div>

                    </div>
                  </div>
                  </span>
                </li>
                <li className="nav-item">
                  <span className="nav-link"><div>
                    <img alt='404' className='carrier_camp' src='https://files.codingninjas.in/careercamp-12614.svg' />
                  </div>
                  </span>
                </li>
                <li className="nav-item">
                  <span className="nav-link">
                    <Link className='' to='/classroom'>
                    <div>
                      {
                        auth?.user ? ('My Classroom') : ("")
                      }
                    </div>
                    </Link>
                  </span>
                </li>
                <li className="nav-item">
                  <Link to='/login' className="nav-link"><div><button className='login-btn'>

{
  !auth?.user ? (<Link to='/login'>Login</Link>) :
    (<>

      <span className='links nav-login'>{auth?.user.name}
        <div className='login-dropdown-content'>
          <div className='login-dropdown'>

            <div className='logout-btn' onClick={handleLogout}>Logout</div>
            <div><Link className='link' to='/dashboard'>Dashboard</Link></div>
          </div>
        </div>
      </span> 
    </>)}

</button></div>
                  </Link>
                </li>
                <li className="nav-item">
                  <span className="nav-link"><div><button className='enrol-btn'><Link to='/enroll'>Enrol Now</Link></button></div>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

    </div>
  )
}

export default NavBar