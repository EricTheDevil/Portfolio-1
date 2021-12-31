import React, { useContext } from 'react';

import { MouseContext } from '../context/mouse-context';

import useMousePosition from '../hooks/useMousePosition';

const DotRing = () => {
	// 1.
	const { x, y } = useMousePosition();
	return (
		<>
			{/* 2. */}
			<div className="ring" style={{ left: `${x}px`, top: `${y}px` }}></div>
			{/* 3. */}
			<div className="dot" style={{ left: `${x}px`, top: `${y}px` }}></div>
		</>
	);
};

export default DotRing;
