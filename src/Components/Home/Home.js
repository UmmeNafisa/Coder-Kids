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
            <div className="text-center banner img-fluid" style={{ backgroundImage: `url(${background})` }}>
                <div>
                    <h1 className="text-white text-center banner-tag w-75 mx-auto">AFTER-SCHOOL PROGRAMS YOUR CHILD WILL LOVE!</h1>
                    <Link to="/registration">
                        <button className="sign-up-btn my-3"> SIGN UP TODAY </button>
                    </Link>
                </div>
            </div>
            <div className="course-bg">
                <Container className="p-5">
                    <Row xs={1} md={2} lg={4} className="g-4">
                        {
                            courses.slice(0, 4).map(course => <CourseDetails key={course.key} course={course}></CourseDetails>)
                        }
                    </Row>
                    <div className="text-center">
                        <Link to="/courses" >
                            <Button className="text-white btn-color fw-bold px-5 fs-5 mt-3" size="lg">
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