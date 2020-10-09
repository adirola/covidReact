import React from 'react';
import './landing.css';
import product1 from '../../../assets/img/product2.png';


export default function () {
    return(
        <section id="services" className="vc_row heightfix pb-90 bg-no-repeat bg10Section">
        <div className="container">

            <div className="row d-flex flex-wrap align-items-center">

                <div className="lqd-column col-md-5 mb-30">

                    <header className="fancy-title pr-md-4">
                        <h6 className="text-uppercase">B I X B O X</h6>
                        <h2 className="lh-1 mb-0" ><strong>Kids Welcome</strong> to Bixbox</h2>
                    </header>

                    <p className="font-size-18 lh-15 mb-55">Please keep your arms and legs inside the vehicle at all times.</p>

                    <a
                    href="#ordernow"
                    className="btn btn-solid text-uppercase btn-md circle btn-bordered border-thin btn-gradient font-weight-bold px-2">
                        <span>
                            <span className="btn-gradient-bg"></span>
                            <span className="btn-txt">Login</span>
                            <span className="btn-gradient-bg btn-gradient-bg-hover"></span>
                            
                               
                        </span>
                    </a>

                </div>

                <div className="lqd-column col-md-6">

                    <div className="liquid-img-group-container lqd-parallax-images-8">
                        <img src={product1}/>
                    </div>

                </div>
            </div>

            <div className="lqd-space visible-lg visible-md- mb-200"></div>


        </div>
    </section>
    );
}