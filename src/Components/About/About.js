import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <Container className="mt-5 about-details">
            <Row>
                <Col>
                    <h2>ABOUT US </h2>
                    <h5>Since 2016, Coder Kids has been a provider of classes and lessons to thousands of kids in grades K-12. We care about providing high quality coding instruction at a reasonable price.</h5>
                    <br />
                    <h2>CODER KIDS MISSION</h2>
                    <h5>
                        Learning how to code engages kids’ minds in critical thinking and prepares them for an increasingly tech-driven world. At Coder Kids, we believe all kids should have this opportunity, so we’ve partnered with schools to provide courses that teach kids how to code in fun and practical ways.

                        At Coder Kids we offer scholarships and believe that everyone should have the chance to learn to code or explore technology.
                    </h5>
                </Col>
                <Col><h2>CODER KIDS CURRICULUM</h2>
                    <h5>In our after-school classes and camps, students create interactive games and animations, starting with basic coding languages like Scratch Jr. Then we progress into more advanced languages and concepts such as modding Minecraft with Java, Arduino boards, Python programming, and Game Maker Studio. Our advanced students learn web development and app development. Check out our registration page to see the variety of classes we are offering now.

                        In addition to our coding camps, we also offer gaming camps, where your kids can make friends and learn new skills in popular games like Minecraft, Roblox, and even Fortnite, and digital arts classes where students can learn how to draw, edit video, and create 3D objects!</h5></Col>
            </Row>

        </Container>
    );
};

export default About;