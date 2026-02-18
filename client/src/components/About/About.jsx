import React from 'react'
import styles from "./About.module.css"
import Pencil from "../../assets/images/ruler-pencil-gradient.png"
import Webicon from "../../assets/images/web-icon-gradient.png"
import Blub from "../../assets/images/bulb-icon.png"
import Hrsicon from "../../assets/images/hrs-icon-gradient.png"

const About = () => {
    return (
        <div className="container">
            <div className="text-center">
                <h2 className="mb-3 ">We Are <span className="gradient-text-border heading-text b3net">B3NET</span></h2>
                <p className="subheading-text ">
                    A digital agency that transforms ideas into powerful digital experiences.
                    Since our inception, we've been committed to excellence, creativity, and innovation.
                </p>
            </div>
            <div className="row g-4 mt-1 mt-lg-4 justify-content-center">
                <div className="col-md-6 col-lg-3">
                    <div className="service-card">
                        <div className="icon-img-sec">
                            <img src={Pencil} className="icon-img" alt="" />
                        </div>
                        <h4 className="">Unique & User-Friendly Design</h4>
                        <p>
                            A website is the gateway to your brand, and we craft unique
                            designs that captivate and convert. We provide both consultation
                            and development tailored to your needs.
                        </p>
                    </div>
                </div>


                <div className="col-md-6 col-lg-3">
                    <div className="service-card">
                        <div className="icon-img-sec">
                            <img src={Webicon} className="icon-img" alt="" />
                        </div>
                        <h4 className="">Perfect Coding</h4>
                        <p>
                            Our skilled developers build high-performing apps and websites.
                            We understand the workflow, tools, and challenges involved to
                            deliver the best results.
                        </p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="service-card highlighted">
                        <div className="icon-img-sec">
                            <img src={Blub} className="icon-img" alt="" />
                        </div>
                        <h4 className="">Great/Innovative Ideas</h4>
                        <p>
                            Our creative services connect instantly with customers using
                            innovative ideas that expand your digital reach.
                        </p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="service-card">
                        <div className="icon-img-sec">
                            <img src={Hrsicon} className="icon-img" alt="" />
                        </div>
                        <h4 className="">Support, Anytime, Anywhere</h4>
                        <p>
                            We provide 24/7 customer support with quick and effective
                            solutions. Clients receive regular project updates with easy
                            communication.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mission-box mt-5">
                Our mission is to empower businesses with
                <span className="text-gradient">innovative digital solutions</span>
                that drive growth, engage audiences, and create lasting impact.
            </div>


        </div>
    )
}

export default About