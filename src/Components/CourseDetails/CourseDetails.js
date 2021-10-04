import React from 'react';
import './CourseDetails.css'
import { Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChair, faCheckCircle, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';

const CourseDetails = (props) => {
    const { imgUrl, programName, instructorName, courseFees, rating, availableSeat } = props.course;
    return (
        <Col className="card border-0">
            <div className="card h-100 border-0">
                <Image src={imgUrl} alt="" fluid className="mx-auto rounded-3 img-size border-0" />

                <div className="text-center pt-3">
                    <h3>{programName}</h3>
                    <h5>{instructorName}</h5>
                    <div className="d-flex justify-content-center">
                        <p className="text-danger px-2"> <FontAwesomeIcon icon={faDollarSign} />{courseFees}</p>
                        <p className="text-primary px-2"><FontAwesomeIcon icon={faChair} /> {availableSeat}</p>
                    </div>
                    <Rating
                        emptySymbol="far fa-star text-warning"
                        fullSymbol="fas fa-star text-warning"
                        initialRating={rating}
                        readonly
                    /> <br />
                    <Link to="/registration">
                        <Button className="text-white btn-color fw-5 my-2 px-3"><FontAwesomeIcon icon={faCheckCircle} /> Select</Button>
                    </Link>
                </div>
            </div>
        </Col>

    );
};

export default CourseDetails;