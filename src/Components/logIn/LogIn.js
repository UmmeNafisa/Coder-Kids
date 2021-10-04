import React from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap';

const LogIn = () => {
    return (
        <div className="w-75 mx-auto my-5 bg-light py-3 px-5" >
            <h1 className="text-primary text-center mx-auto bg-info text-white w-25 rounded-3 mb-3 p-2"> Log In </h1>
            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <Button className="my-3" type="submit">Log In</Button>

        </div>
    );
};

export default LogIn;