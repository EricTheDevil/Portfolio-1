import React from 'react';

function ContactItem({ icon, phone, title }) {
	return (
		<div className="ContactItem">
			<div className="contact">
				<img src={icon} alt=""></img>
				<div className="right-items">
					<h6>{title}</h6>
					<p>{phone}</p>
					<p>{title}</p>
				</div>
			</div>
		</div>
	);
}
export default ContactItem;
