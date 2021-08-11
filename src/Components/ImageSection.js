import React from 'react';

function ImageSection() {
	return (
		<div className="ImageSection">
			<div className="img">
				<img
					src={
						'https://cdn.shopify.com/s/files/1/0220/9497/0980/products/Axolotl---Ambystoma-mexicanum_720x.jpg?v=1571152418'
					}
					alt=""
				/>
			</div>
			<div className="about-info">
				<h4> Who am I?</h4>
				<p className="about-text-1">full-stack developper</p>
				<div className="about-details">
					<div className="left-section">
						<p>Name</p>
						<p>Degree</p>
						<p>Stacks</p>
						<p>Certifications</p>
					</div>
					<div className="right-section">
						<p>Eric Ng</p>
						<p>Bachelor of Information Technology and Communication</p>
						<p>MERN, JAMSTACK</p>
						<p>NETWORKING</p>
					</div>
				</div>
				<form method="get" action="file.doc">
					<FontAwesomeIcon icon={['fab', icon]} />

					<button type="submit">Download!</button>
				</form>
				<button className="btn-download">Download CV</button>
			</div>
		</div>
	);
}
export default ImageSection;
