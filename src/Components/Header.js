import React, { Component, useRef, useEffect, useState } from 'react';
import {
	NavDropdown,
	Nav,
	Navbar,
	Col,
	Row,
	Container,
} from 'react-bootstrap/';

import { debounce } from 'lodash';
import Button from '@mui/material/Button';
import TimeDisplay from '../Components/TimeDisplay.js';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollTo from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollTrigger, ScrollTo);

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			prevScrollpos: window.pageYOffset,
			visible: true,
		};
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll = () => {
		const { prevScrollpos } = this.state;

		const currentScrollPos = window.pageYOffset;
		const visible = prevScrollpos > currentScrollPos;

		this.setState({
			prevScrollpos: currentScrollPos,
			visible,
		});
	};

	render() {
		return (
			<nav className={`nav ${this.state.visible ? '' : 'nav-hidden'}`}>
				<ul className="nav-items">
					<Button
						variant="text"
						onClick={() => {
							gsap.to(window, {
								scrollTo: {
									y: 0,
								},
							});
						}}>
						Home
					</Button>

					<Button
						variant="text"
						onClick={() => {
							gsap.to(window, {
								scrollTo: {
									y: '.AboutPage',
								},
							});
						}}>
						About
					</Button>
					<Button
						variant="text"
						onClick={() => {
							gsap.to(window, {
								scrollTo: {
									y: '.SkillsPage',
								},
							});
						}}>
						Skills
					</Button>
					<Button
						variant="text"
						onClick={() => {
							gsap.to(window, {
								scrollTo: {
									y: '.TimeLine',
								},
							});
						}}>
						Experience
					</Button>
				</ul>
			</nav>
		);
	}
}

// Old header
const Header2 = React.forwardRef((props, ref) => {
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
