import React from 'react';
import ContactItem from '../Components/ContactItem';

function ContactPage() {
	return (
		<div className="ContactPage">
			<div className="contact-sect">
				<ContactItem icon={'phone'} phone={'65235'} title={'02652'} />
				<ContactItem icon={'phone'} phone={'pono'} title={'zee'} />
			</div>
		</div>
	);
}
export default ContactPage;
