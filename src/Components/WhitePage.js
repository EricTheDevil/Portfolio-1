import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function WhitePage() {
	const whiteRef = useRef();

	useEffect(() => {
		const t1 = gsap.timeline();
		t1.to([whiteRef.current], {
			duration: 2,
			clipPath: 'polygon(50% 50%, 100% 0, 50% 50%, 0% 100%)',
		});
	}, []);

	return <div className="WhitePage" ref={whiteRef}></div>;
}
export default WhitePage;
