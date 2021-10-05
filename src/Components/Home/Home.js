import React, { useEffect, useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CourseDetails from '../CourseDetails/CourseDetails';
import background from '../Images/shutterstock_741220234small.jpg'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            {/* banner part */}
            <div className="text-center banner img-fluid" style={{ backgroundImage: `url(${background})` }}>
                <div className="text-center">
                    <h1 className="text-white banner-tag w-75 mx-auto">AFTER-SCHOOL PROGRAMS YOUR CHILD WILL LOVE!</h1>
                    <Link to="/registration">
                        <button className="sign-up-btn my-3"> SIGN UP TODAY </button>
                    </Link>
                </div>
            </div>
            {/* why code kids part */}
            <div className="why-bg">
                <div className="container py-5 mx-auto">
                    <h1 className="bg-info text-white text-center mx-auto w-50 p-2 fw-bold rounded-pill mb-3"> Why Coder Kids...?</h1>
                    <h4 className="fw-light text-center">Every piece of technology that we use runs on computer programs. Your computer and your apps were created by a computer programmer / software developer / coder. At Coder Kids, our main focus is teaching students the principles of computer programming through coding games, animations, and simple programs. We use platforms like Scratch, Python, and Unity to create these projects. We offer classes for grades Pre-K through 12.
                        We also offer online classes for students throughout the world. We also offer in-person classes in the Houston, TX area.</h4>
                </div>
            </div>
            {/* courses part  */}
            <div className="course-bg">
                <Container className="pt-3 pb-5">
                    <h1 className="bg-info text-white text-center mx-auto w-50 p-2 fw-bold rounded-pill mb-3"> Courses </h1>
                    <Row xs={1} md={2} lg={4} className="g-4">
                        {
                            courses.slice(0, 4).map(course => <CourseDetails key={course.key} course={course}></CourseDetails>)
                        }
                    </Row>
                    <div className="text-center">
                        <Link to="/courses" >
                            <Button className="text-white btn-color fw-bold px-5 fs-4 mt-3 rounded-pill" size="lg">
                                See more Courses  <FontAwesomeIcon icon={faArrowRight} />
                            </Button>
                        </Link>
                    </div>
                </Container>
            </div>

        </div>

    );
};

export default Home;