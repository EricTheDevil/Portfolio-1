import React, { useEffect, useState } from 'react';

function CustomMouse() {
	useEffect(() => {
		document.body.style.cursor = hovered
			? 'none'
			: `url('data:image/svg+xml;base64,${btoa(
					'<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="10" fill="pink"/></svg>'
			  )}'), auto`;
	}, [hovered]);
}

export default CustomMouse;
