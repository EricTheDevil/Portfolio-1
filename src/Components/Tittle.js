import React from 'react';

// Used to set the title for each page
function Tittle({ title, span }) {
	return (
		<div className="Title">
			<h3>
				{title}
				<span>{span}</span>
			</h3>
		</div>
	);
}
export default Tittle;
