import React, { useEffect, useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CourseDetails from '../CourseDetails/CourseDetails';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="course-bg">
            <Container className="p-5">
                <Row xs={1} md={2} lg={3} className="g-3 gap-1">
                    {
                        courses.map(course => <CourseDetails key={course.key} course={course}></CourseDetails>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Courses;