import React from 'react';
import { Image } from 'react-bootstrap';
import errorImg from '../Images/banner_error_404.jpg'

const Error = () => {
    return (
        <div className="text-center mt-5">
            <Image src={errorImg} alt="404 Page Not Found" fluid />
        </div>
    );
};

export default Error;