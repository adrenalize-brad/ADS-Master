import React from 'react'
import {Link } from 'gatsby'
import Fade from 'react-reveal/Fade'
import Bounce from 'react-reveal/Bounce'
import Footer from '../components/footer'


function AboutPage(){


    return(

        <div className="divide-y divide-gray-500">
      
            <div className="section-header pb-5">
                <h1>About Us</h1>
                <h3>curious what makes us tick?</h3>
            </div>

            <div className="wrapper">

                <div className="about content-wrapper">

                <div className="subheading mission py-5">
                            <h2 className="text-center">Our Mission</h2>
                            <h3 className="text-center">Inspire today to create a better tomorrow</h3>
                            <p className="pt-5 pb-1">The world is a magical place, but one of the things we think makes it so special is how profound an impact the thoughts and actions of the people living on it can have, for worse or for better. We choose better.</p>
                                    
                            <div className="caption-row justify-center py-5">
                                <div className="caption-row mx-3"><h2>We are:</h2><i className="fas fa-palette ml-5"/><h3>Creators</h3></div>
                                <div className="caption-row mx-3"><i className="fas fa-cog"/><h3>Innovators</h3></div>
                                <div className="caption-row mx-3"><i className="fas fa-brain"/><h3>Forward thinkers</h3></div>  
                            </div>
                            <p>We wake up each day and aspire to be more than just web developers or marketing experts. We're the whole enchelada - the creme de la creme of digital business development.</p>
                        </div>

                        <div className="subheading">
                            <h2 className="text-center">Why do more?</h2>
                            <h3 className="text-center">Better yet, why not?</h3>
                            <p className="pt-5">Why not. It's the question we always ask - to our clients and to ourselves. Rather than preach the same old concepts over and over, we're out there trying to re-invent not only what we do as a company, but your expectations of what's possible. Whether it's jumping onboard with the latest and greatest in development frameworks or staying ahead of the curve with what's new in digital marketing, we approach every scenario with the same forward thinking mentality.</p>
                        </div>

                        <div className="subheading text-center">
                            <h2>Our Core Values</h2>
                            <h3>We're believers in things like</h3>
                        
                            <div className="core-values-wrapper pt-5">

                                <div className="caption-column">
                                    <i className="fas fa-lightbulb core-values-icon"/>
                                    <div className="caption-column">
                                        <h3>Curiosity</h3>
                                        <h4>Open minds open doors</h4>
                                    </div>
                                </div>

                                <div className="caption-column">
                                    <i className="fas fa-handshake core-values-icon"/>
                                    <div className="caption-column">
                                        <h3>Integrity</h3>
                                        <h4>We practice what we preach</h4>
                                    </div>
                                </div>

                                <div className="caption-column">
                                    <i className="fas fa-fist-raised core-values-icon"/>
                                    <div className="caption-column">
                                        <h3>Courage</h3>
                                        <h4>Standing up & speaking out</h4>     
                                    </div>
                                </div>        
                            </div>

                            <p className="text-left">It's our unshakeable belief in these core values that allows us to approach every project with the confidence it takes to go beyond and succeed in achieving the lofty goals of not only our clients by those we set for ourselves.</p>

                        </div>

                        <div className="subheading">
                            <h2 className="text-center">We're here to help</h2> 
                            <h3 className="text-center">To us, you're more than just a client</h3>
                            <p className="pt-5">Successful businesses are built on a foundation of people, beyond just clients and employees - they're the partners, friends and family that give us purpose and support our endeavors. Every decision you make for your business affects the livelihoods of people that matter, so don't you deserve to feel secure in knowing that those people are our priority just as much as you and your business are?</p>
                            <p className="pt-3">We have people too. And we take care of you & yours like we do our own - it's how you know you can count on us. Always.</p>
                            <h3 className="pt-5 text-center">That's what sets us apart.</h3>
                        </div>

                        <div className="services-caption portfolio-caption py-5">
            
                            <Fade delay={300}>
                            <div className="more flex flex-row justify-center w-100">
                                <h4>Ready to reap the benefits of working with people who truly care</h4><i className="fas fa-question ml-0 faa-slow faa-pulse animated"/>
                            </div>
                            </Fade>

                            <Bounce up delay={200}>
                                <div className="more flex flex-row justify-center w-100">
                                    <Link to="/contact" smooth={true} duration={500} className="portfolio-connect-link py-3"><i className="fas fa-comments"/><h3>Click here to connect with us today!</h3></ Link>
                                </div>
                            </Bounce>
                        </div>

                    </div>

                </div>

            <Footer/>

        </div>

    )
}



export default AboutPage