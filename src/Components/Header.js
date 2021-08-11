import React, { Component, useRef, useEffect, useState } from 'react';
import {
	NavDropdown,
	Nav,
	Navbar,
	Col,
	Row,
	Container,
} from 'react-bootstrap/';

import TimeDisplay from '../Components/TimeDisplay.js';

const Header = React.forwardRef((props, ref) => {
	const fixedText = ' ';
	const whenNotFixed = 'Introduction';
	const [headerText, setHeaderText] = useState(fixedText);
	const refs = useRef(null);
	const [timeText, setTime] = useState();
	let d = new Date();

	useEffect(() => {
		setTime(d);

		/*
		const header = document.getElementById('myHeader');
		header.classList.add('sticky');
		const sticky = header.offsetTop;
		const scrollCallBack = window.addEventListener('scroll', () => {
			if (header.style.backgroundColor === '#f1efed') {
				setHeaderText(whenNotFixed);
			}
			if (window.pageYOffset > sticky) {
				if (headerText !== fixedText) {
					setHeaderText(whenNotFixed);
				}
			}
			/* else {
				//header.classList.remove('sticky');
				if (headerText !== whenNotFixed) {
				}
			}
		
		});
        
		return () => {
			window.removeEventListener('scroll', scrollCallBack);
		};
	*/
	}, []);

	const [button, setButton] = useState('');
	/*
	const [blogPosts, setBlogPosts] = useState([
		{ title: 'Introduction', id: 1 },
		{ title: 'Timeline', id: 2 },
	]);

	const onYesPress = () => {
		setButton('Yes');
	};
	const onAddPosts = () => {
		setHeaderText(fixedText);
	};
    */

	return (
		<header className="Header" ref={ref}>
			<Container>
				<Row>
					<Col xs={3}>
						<center>
							<span>
								{' '}
								<TimeDisplay />
							</span>
						</center>
					</Col>
					<Col xs={6}>
						<center>
							<span ref={refs} className="headerText">
								Title{headerText}
							</span>
						</center>
					</Col>
					<Col xs={3}>
						<center>
							<span>Location</span>
						</center>
					</Col>
				</Row>
			</Container>
		</header>
	);
});
export default Header;
