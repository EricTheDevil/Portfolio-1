import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal } from 'react-bootstrap';
import ContactForm from './ContactForm';

export default function ContactFormComp() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div>
			<Button variant="primary" onClick={handleShow}>
				Launch demo modal
			</Button>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Insert Form</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<ContactForm />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					{/* 
					<Button variant="primary" onClick={handleClose}>
						Watch ad for no reason
					</Button>
                    */}
				</Modal.Footer>
			</Modal>
		</div>
	);
}
