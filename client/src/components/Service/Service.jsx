import React from 'react'
import WebDesign from "../../assets/images/Web-Design-icon.png"
import AppDesign from "../../assets/images/app-Design-icon.png"
import DigitalMarketing from "../../assets/images/Digital-Marketing-icon.png"
import AiIcon from "../../assets/images/ai-icon.png"
import BrandIcon from "../../assets/images/brand-icon.png"
import ColudServer from "../../assets/images/cloud-server-icon.png"

export const Service = () => {
    return (
        <div className="container">
            <div className="text-center">
                <h2 className="mb-3 ">
                    What We <span className="gradient-text-border heading-text">Services</span>
                </h2>
                <p className="subheading-text">
                    Comprehensive digital solutions tailored to your unique business needs. From concept to
                    launch and beyond, we’ve got you covered.
                </p>
            </div>

            <div className="row g-4 mt-1 mt-md-4 justify-content-center">


                <div className="col-md-6 col-lg-4">
                    <div className="service-card">
                        <div className="service-icon">
                            <img src={WebDesign} className="icon-img" alt="" />
                        </div>
                        <h4>Web Design & Development</h4>
                        <p>
                            Custom websites that captivate, convert, and scale. From responsive designs to
                            complex web applications.
                        </p>

                        <ul className="service-list">
                            <li>Responsive Design</li>
                            <li>E-commerce</li>
                            <li>CMS Integration</li>
                            <li>Performance Optimization</li>
                        </ul>
                    </div>
                </div>


                <div className="col-md-6 col-lg-4">
                    <div className="service-card">
                        <div className="service-icon">
                            <img src={AppDesign} className="icon-img" alt="" />
                        </div>
                        <h4>App Design & Development</h4>
                        <p>
                            Native and cross-platform mobile apps that deliver seamless user experiences on any
                            device.
                        </p>

                        <ul className="service-list">
                            <li>iOS & Android</li>
                            <li>Cross-Platform</li>
                            <li>UI/UX Design</li>
                            <li>App Store Optimization</li>
                        </ul>
                    </div>
                </div>


                <div className="col-md-6 col-lg-4">
                    <div className="service-card">
                        <div className="service-icon">
                            <img src={DigitalMarketing} className="icon-img" alt="" />
                        </div>
                        <h4>Digital Marketing</h4>
                        <p>
                            Data-driven marketing strategies that boost visibility, engagement, and ROI across all
                            channels.
                        </p>

                        <ul className="service-list">
                            <li>SEO & SEM</li>
                            <li>Social Media</li>
                            <li>Content Strategy</li>
                            <li>Analytics</li>
                        </ul>
                    </div>
                </div>


                <div className="col-md-6 col-lg-4">
                    <div className="service-card">
                        <div className="service-icon">
                            <img src={AiIcon} className="icon-img" alt="" />
                        </div>
                        <h4>AI & Automation</h4>
                        <p>
                            Intelligent automation solutions that streamline operations and enhance customer
                            experiences.
                        </p>

                        <ul className="service-list">
                            <li>Chatbots</li>
                            <li>Workflow Automation</li>
                            <li>AI Integration</li>
                            <li>Predictive Analytics</li>
                        </ul>
                    </div>
                </div>


                <div className="col-md-6 col-lg-4">
                    <div className="service-card">
                        <div className="service-icon">
                            <img src={BrandIcon} className="icon-img" alt="" />
                        </div>
                        <h4>Brand & Creative</h4>
                        <p>
                            Compelling brand identities and creative assets that resonate with your target audience.
                        </p>

                        <ul className="service-list">
                            <li>Brand Strategy</li>
                            <li>Logo Design</li>
                            <li>Marketing Materials</li>
                            <li>Brand Guidelines</li>
                        </ul>
                    </div>
                </div>


                <div className="col-md-6 col-lg-4">
                    <div className="service-card">
                        <div className="service-icon">
                            <img src={ColudServer} className="icon-img" alt="" />
                        </div>
                        <h4>Cloud & Infrastructure</h4>
                        <p>
                            Scalable cloud solutions and robust infrastructure to support your digital growth.
                        </p>

                        <ul className="service-list">
                            <li>Cloud Migration</li>
                            <li>DevOps</li>
                            <li>Security</li>
                            <li>Maintenance</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}
