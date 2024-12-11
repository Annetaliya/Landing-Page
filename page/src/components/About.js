import React from 'react';
import './home.css';
import Logo from './Images/landing logo.png';
import Cafe from './Images/Cafe one.png';
import Green from './Images/green logo.png';
import Switch from './Images/mswitch.png';
import Tree from './Images/tree.png';
import Conference from './Images/conference.jpeg';
import Conference2 from './Images/conference2.png';
import Conference3 from './Images/conference 3.jpeg';
import Conference4 from './Images/conference 4.png';
import Conference5 from './Images/conference 5.jpeg';
import Conference6 from './Images/conference 6.jpeg';
import Profile from './Images/Testimonial 3.jpg'
import Cover from './Images/who we are.jpeg';

const About = () => {
  return (
    <div>
        <nav className='navBar'>
            <div className='intro'>
                <img src={Logo} alt='logo'/>
                
            </div>
            
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Gallery</li>
                <li>Contact Us</li>
            </ul>
            <button>
                Register
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                </svg>
            </button>
        </nav>
        <div className='layoutSecond'>
            <div className='innerIntro'>
                <div>
                    <div>
                        <p>Join our premier monthly meetup for startup founders and tech visionaries</p>
                        <p className='textMain'>Connect, Collaborate, Innovate!</p>
                    </div>
                    <p className="textSub">Every last Friday of the month, we bring together the brightest minds in our local tech ecosystem. Whether you're a seasoned entrepreneur or just starting your journey, Founder's Friday is your launchpad for new ideas, valuable connections, and game-changing opportunities.</p>
                    <div className='registerBtn'>
                        Register For Our Next Event
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"/>
                            <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </div>
                    <p className='joinTxt'>Join Us for our next meetup on the 26th of July 2024</p>
                    <div className='partners'>
                        <img  src={Cafe} alt=''/>
                        <img  src={Tree} alt=''/>
                        <img  src={Green} alt=''/>
                        <img  src={Switch} alt=''/>
                    </div>
                    <div className='textJoin'>
                        Become a collaborator today
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                        <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                    </svg>
                        

                    </div>

                </div>
                
                

            </div>
            <div className='imgLayout'>
                <div className='firstImage'>
                    <img src={Conference} alt='conference'/>
                    <p className='firstImageTxt'>Founder's Friday</p>
                </div>
                <div className='secondImage'>
                    <img src={Conference2} alt='conference' />
                    <p className='secondImageTxt'>Founder's Friday</p>
                </div>
                <div className='thirdImage'>
                    <img src={Conference3} alt='conference'/>
                    <p className='thirdImageTxt'>Founder's Friday</p>
                </div>
                <div className='fourthImage'>
                    <img src={Conference4} alt='conference'/>
                    <p className='fourthImageTxt'>Founder's Friday</p>
                </div>

            </div>
        </div>
        <div className='thirdSection'>
            <div className='coverImg'>
                <img src={Cover} alt='cover' />
            </div>
            <div className='coverTxt'>
                <p className='sectionIntro'>Who Are We?</p>
                <p className='sectionContent'>Born from the vibrant startup ecosystem of Abuja, we recognized the need for a consistent, high-quality networking platform where founders, innovators, and tech enthusiasts could connect, share ideas, and foster collaboration.</p>
                <div className='btns'>
                    <button className='btn1'>Register</button>
                    <button className='btn2'>Donate</button>
                    
                </div>
                <p className='founderTxt'>Founder's Friday is more than just a meetup — it's a movement.</p>
            </div>

        </div>
        <div className='fourthSection'>
            <div className='textSection'>
                <p className='textSectionTitle'>Founders Friday</p>
                <p className='textSectionHeading'>What happens At Founders Friday</p>
                <p className='textSectionContent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo suscipit id. Maecenas ut ante quis quam lobortis consequat eu id turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
                <button className='textSectionbtn'>Learn More</button>
            </div>
            <div className='sectionImg'> 
                <img  className='sectionImg1'src={Conference5} alt='conference'/>
                <img className='sectionImg2' src={Conference6} alt='conference'/>
            </div>

        </div>
        <div className='fifthSection'>
            <p className='fifthSectionHeading'>Sponsor The Next Friday</p>
            <p className='fifthSectionTitle'>Why Sponsor Founder Friday?</p>
            <div className='connect'>
                <div className='circles'>
                    <div className='circle1'>
                        <div className='textCircle'>
                            <p className='circleTitle'>Networking Opportunities</p>
                            <p className='circleContent'>Connect with industry leaders, founders, and potential partners.</p>
                        </div>
                    </div>
                    <div className='circle2'>
                        <div className='textCircle'>
                            <p className='circleTitle'> Community
                            Impact</p>
                            <p className='circleContent'>Support the growth and development of the startup ecosystem.</p>
                        </div>
                    </div>
                    <div className='circle3'>
                        <div className='textCircle'>
                            <p className='circleTitle'>Brand
                            Association</p>
                            <p className='circleContent'>Align your brand with innovation and entrepreneurial success.</p>
                        </div>
                    </div>
                    <div className='circle4'>
                        <div className='textCircle'>
                            <p className='circleTitle'>Visibility</p>
                            <p className='circleContent'>Gain exposure to a targeted audience of young professionals and entrepreneurs.</p>
                        </div>
                    </div>

                </div>
                <div className='formSection'>
                    <p>How to sponsor</p>
                    <p>Ready to make an impact</p>
                    <p>Fill out the form below or contact us at [contact email/phone number] to learn more about how you can sponsor the next Founders Friday</p>
                    <form className='formElement'>
                        <div className='formTag'>
                            <label>Name</label>
                            <input type='text' placeholder='Full Name'/>
                        </div>
                        <div className='formTag'>
                            <label>Company (optional)</label>
                            <input type='text' placeholder='Company Name'/>
                        </div>
                        <div className='formTag'>
                            <label>Email</label>
                            <input type='email' placeholder='Email Address'/>
                        </div>
                        <div className='formTag'>
                            <label>Phone</label>
                            <input type='text' placeholder='Phone Number'/>
                        </div>
                        
                    </form>
                    <button className='btnSponsor'>Sponsor</button>
                </div>
            </div>

        </div>
        <div className='sixthSection'>
            <div className='sixthSectionContainer'>
                <div className='sixthSectionTxt'>
                    <p>Founders Friday is coming</p>
                    <p className='wordSwitcher'>
                        <span className='word'>Abuja</span>
                        <span className='word'>Kaduna</span>
                        <span className='word'>Kano</span>
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo suscipit id. Maecenas ut ante quis quam lobortis consequat eu id turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
                    <button>Register</button>
                </div>
                <div className='sixthSectionImg'>
                    <img src={Logo} alt='logo'/>
                </div>
            </div>
        </div>
        <div className='seventhSection'> 
            <p>Register And Be Part of Our Community</p>
            <p>Join our community of over 1000+ founders, developers, and tech junkies in general. Be inspired by people who live to inspire!</p>
            <div className='seventhSectionImg'>
                <img src={Profile} alt='profile'/>
                <img src={Profile} alt='profile'/>
                <img src={Profile} alt='profile'/>
                <img src={Profile} alt='profile'/>
                <img src={Profile} alt='profile'/>
                <img src={Profile} alt='profile'/>
                <button> Register Now</button>
            </div>
            
            
        </div>
    </div>
  )
}

export default About