import React from 'react';
import './CourseDetails.css'
import { Col, Image } from 'react-bootstrap';

const CourseDetails = (props) => {
    const { imgUrl, programName, instructorName, courseFees, rating, availableSeat } = props.course
    return (
        <Col xs={12} md={6} lg={3} className="card">
            <div>
                <Image src={imgUrl} alt="" fluid className="pt-2" />
            </div>
            <div className="text-center pt-3">
                <h3>{programName}</h3>
                <h6>{instructorName}</h6>
                <p>{courseFees}</p>
                <p>{rating}</p>
                <p>{availableSeat}</p>
            </div>
        </Col>

    );
};

export default CourseDetails;