import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CourseDetails from '../CourseDetails/CourseDetails';
import background from '../Images/shutterstock_741220234small.jpg'
import './Home.css'

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <div className="text-center banner" style={{ backgroundImage: `url(${background})` }}>
                <div>
                    <h1 className="text-white text-center banner-tag">AFTER-SCHOOL PROGRAMS YOUR CHILD WILL LOVE!</h1>
                    <Link to="/registration">
                        <button className="sign-up-btn mb-5"> SIGN UP TODAY </button>
                    </Link>
                </div>
            </div>
            <div className="course-bg">
                <Container className="p-5">
                    <Row>
                        {
                            courses.slice(0, 4).map(course => <CourseDetails key={course.key} course={course}></CourseDetails>)
                        }
                    </Row>
                </Container>
            </div>
        </div>

    );
};

export default Home;