import React from 'react'
import TextLine from "../../assets/images/text-line.png"
import { Link as ScrollLink } from "react-scroll";
const HeroSection = () => {
  return (
    <div className="item hero-slide hero-bg-1 text-white text-center">
                <div className="container">
                    <div className="hero-content animate-slide-up">
                        <h1>Let's Build Something</h1>

                        <div className="gradient-text-border">
                            <h1>Remarkable</h1>
                        </div>

                        <p className="hero-subtitle">
                            Transform your digital presence with a forward-thinking agency that blends creativity,
                            innovation, and cutting-edge technology.
                        </p>

                        <div className="hero-btn mt-2 mt-md-3">
                            <ScrollLink
                to="contact"
                smooth={true}
                duration={300}
                offset={-75}
                spy={false} 
                                     className="btn button-gradient-1">Get Started Today <i
                                    className="fa-solid fa-arrow-right"></i></ScrollLink>
                             <ScrollLink
                    to='works'
                    smooth={true}
                    duration={300}
                    offset={-75}
                    spy={true}
                    activeClass="active"
                    className="btn button-1">View Our Work <i className="fa-solid fa-arrow-right"></i></ScrollLink>
                        </div>

                        <section className="stats-section mt-2 mt-md-4">
                            <div className="container text-center position-relative">

                                <p className="trusted-title mb-2">Trusted by <strong>Businesses</strong></p>

                                
                                <img src={TextLine} alt="divider" className="trusted-line mb-3 mb-lg-4" />

                                <div className="row gy-4 justify-content-center">

                                    <div className="col-3 p-sm-1 p-md-auto">
                                        <h2 className="stats-number">25+</h2>
                                        <p className="stats-text">Years Experience</p>
                                    </div>

                                    <div className="col-3 p-sm-1 p-md-auto">
                                        <h2 className="stats-number">3500+</h2>
                                        <p className="stats-text">Happy Clients</p>
                                    </div>

                                    <div className="col-3 p-sm-1 p-md-auto">
                                        <h2 className="stats-number">5000+</h2>
                                        <p className="stats-text">Projects Delivered</p>
                                    </div>

                                    <div className="col-3 p-sm-1 p-md-auto">
                                        <h2 className="stats-number">98%</h2>
                                        <p className="stats-text">Client Satisfaction</p>
                                    </div>

                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
  )
}

export default HeroSection
