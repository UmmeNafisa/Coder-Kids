import React from 'react';
import { Col, Container } from 'react-bootstrap';
import './About.css'
import aboutImg from '../Images/CoderKidsGirl.jpg'
import missionImg from '../Images/CoderKidsInstructor.jpg'
import currImg from '../Images/CoderKidsGirls.jpg'

const About = () => {
    return (
        <Container className="my-5 about-details">
            <div className="d-lg-flex align-items-center">
                <div className="flex-grow-1 me-3">
                    <h2 className="bg-info text-white w-75 text-center py-2 rounded-pill mb-3">ABOUT US </h2>
                    <h5 className="text-wrap">Since 2016, Coder Kids has been a provider of classes and lessons to thousands of kids in grades K-12. We care about providing high quality coding instruction at a reasonable price.</h5>
                </div>
                 <div className="flex-shrink-0 about-img">
                    <img className="img-fluid py-3" src={aboutImg} alt="" />
                </div>
            </div>

            <div className="d-lg-flex align-items-center">
             <div className="flex-shrink-0 about-img">
                    <img className="img-fluid py-3" src={missionImg} alt="" />
                </div>
                <div className="flex-grow-1 ms-3">
                    <h2 className="bg-info text-white w-75 text-center py-2 px-5 rounded-pill mb-3">CODER KIDS MISSION</h2>
                    <h5 className="text-wrap">
                        Learning how to code engages kids’ minds in critical thinking and prepares them for an increasingly tech-driven world. At Coder Kids, we believe all kids should have this opportunity, so we’ve partnered with schools to provide courses that teach kids how to code in fun and practical ways.

                        At Coder Kids we offer scholarships and believe that everyone should have the chance to learn to code or explore technology.
                    </h5>
                </div>
               
            </div>

            <div className="d-lg-flex align-items-center">
                <div className="flex-grow-1 me-3">
                    <h2 className="bg-info text-white w-75 text-center py-2 rounded-pill mb-3">CODER KIDS CURRICULUM</h2>
                    <h5 className="text-wrap">In our after-school classes and camps, students create interactive games and animations, starting with basic coding languages like Scratch Jr. Then we progress into more advanced languages and concepts such as modding Minecraft with Java, Arduino boards, Python programming, and Game Maker Studio. Our advanced students learn web development and app development. Check out our registration page to see the variety of classes we are offering now.

                        In addition to our coding camps, we also offer gaming camps, where your kids can make friends and learn new skills in popular games like Minecraft, Roblox, and even Fortnite, and digital arts classes where students can learn how to draw, edit video, and create 3D objects!</h5>
                </div>
                  <div className="flex-shrink-0 about-img">
                    <img className="img-fluid py-3" src={currImg} alt="" />
                </div>
            </div>
        </Container >
    );
};

export default About;