import React from 'react';
import './CourseDetails.css'
import { Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const CourseDetails = (props) => {
    const { imgUrl, programName, instructorName, courseFees, rating, availableSeat } = props.course
    return (
        <Col className="card border-0">
            <div>
                <Image src={imgUrl} alt="" fluid className="pt-2 mx-auto" />
            </div>
            <div className="text-center pt-3">
                <h3>{programName}</h3>
                <h5>{instructorName}</h5>
                <p>{courseFees}</p>
                <p>{rating}</p>
                <p>{availableSeat}</p>
                <Link to="/registration">
                    <Button className="text-white btn-color fw-5"><FontAwesomeIcon icon={faCheckCircle} /> Select</Button>
                </Link>
            </div>

        </Col>

    );
};

export default CourseDetails;