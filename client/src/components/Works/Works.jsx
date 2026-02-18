import React from 'react'
import Biosleep from "../../assets/images/biosleep.png"
import Arclevel from "../../assets/images/arclevel.png"
import Arrendaria from "../../assets/images/arrendaria.png"
import Tim from "../../assets/images/tim-hensons.png"
import Thef from "../../assets/images/thefifth.png"
import Maya from "../../assets/images/maya-stone.png"



const Works = () => {
    return (
        <div className="container">
            <div className="text-center">
                <h2 className="mb-2">
                    Our <span className="gradient-text-border heading-text">Works</span>
                </h2>
                <p className="subheading-text">
                    Explore our diverse range of successful projects across industries. Each one represents our
                    commitment to excellence and innovation.
                </p>
            </div>

            <div className="row g-4 mt-1 mt-md-4">
                <div className="col-md-6 col-lg-4">
                    <div className="work-card">
                        <div href="#">
                            <img src={Biosleep} className="work-img" alt="" />
                            <div className="work-content">
                                <h5>Bio Sleep Concept</h5>
                                {/* <span className="work-arrow"><i className="fa-solid fa-arrow-right"></i></span> */}
                            </div>
                        </div>
                    </div>
                    <div className="work-card work-card-gap">
                        <div href="#">
                            <img src={Arclevel} className="work-img" alt="" />
                            <div className="work-content">
                                <h5>Arc Levers</h5>
                                {/* <span className="work-arrow"><i className="fa-solid fa-arrow-right"></i></span> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                    <div className="work-card">
                        <div href="#">
                            <img src={Arrendaria} className="work-img" alt="" />
                            <div className="work-content">
                                <h5>Arrendaria</h5>
                                {/* <span className="work-arrow"><i className="fa-solid fa-arrow-right"></i></span> */}
                            </div>
                        </div>
                    </div>
                    <div className="work-card work-card-gap">
                        <div href="#">
                            <img src={Tim} className="work-img" alt="" />
                            <div className="work-content">
                                <h5>Tim Henson's Unique Lighting</h5>
                                {/* <span className="work-arrow"><i className="fa-solid fa-arrow-right"></i></span> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-12 col-lg-4">
                    <div className="row">
                        <div className="col-md-6 col-lg-12">
                            <div className="work-card">
                                <div href="#">
                                    <img src={Thef} className="work-img" alt="The Fifth OC" />
                                    <div className="work-content">
                                        <h5>The Fifth OC</h5>
                                        {/* <span className="work-arrow"><i className="fa-solid fa-arrow-right"></i></span> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-12">
                            <div className="work-card work-card-gap">
                                <div href="#">
                                    <img src={Maya} className="work-img" alt="Maya Stone" />
                                    <div className="work-content">
                                        <h5>Maya Stone</h5>
                                        {/* <span className="work-arrow"><i className="fa-solid fa-arrow-right"></i></span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works