import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { UserContext } from '../../App';

const Feedback = () => {
    const { loggedInUser } = useContext(UserContext)

    const [description, setDescription] = useState('')
    const [company, setCompany] = useState('')

    const handleReview = () => {
        const review = { ...loggedInUser }
        review.description = description
        review.company = company
        review.image = loggedInUser.image

        fetch('http://localhost:8088/addFeedback', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }

    return (
        <div className="col-md-10 col-sm-6 order-form " style={{ height: "" }}>

            <h2 className="mb-3 pb-3">Review</h2>

            <Form className="form" >

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="text" value={loggedInUser.name} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Company Name.."
                        onChange={(e) => setCompany(e.target.value)} />
                </Form.Group>


                <Form.Group controlId="formBasicPassword">
                    <form >
                        <textarea style={{ height: '200px', width: '500px' }} placeholder="Project Details.."
                            onChange={(e) => setDescription(e.target.value)}   ></textarea>
                    </form>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="text" value={loggedInUser.image} />
                </Form.Group>

                <Button onClick={() => handleReview()} style={{ marginLeft: '5px' }} variant="dark" size="md" >
                    Send
                </Button>
            </Form>
        </div>
    );
};

export default Feedback;