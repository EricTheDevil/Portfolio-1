import React, { useRef } from 'react';

import MainAnim from '../Components/MainAnim';
import HomePageContent from '../Components/HomePageContent';
import { gsap } from 'gsap';

function HomePage() {
	const homeRef = useRef();
	function EntranceAnim() {
		const t1 = gsap.timeline();
		t1.to(homeRef.current, {
			duration: 2,
			clipPath: ' polygon(0 0, 100% 0, 100% 50%, 0 50%)',
		});
	}
	return (
		<div className="HomePage" ref={homeRef}>
			<MainAnim />
			<HomePageContent />
		</div>
	);
}

export default HomePage;
