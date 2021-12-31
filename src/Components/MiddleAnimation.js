import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';

import * as location from '../Img/21197-astrolottie';
import CharacterAnim from './CharacterAnim';

const defaultOptions1 = {
	loop: true,
	autoplay: true,
	animationData: location.default,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice',
	},
};
{
	/*
			<Lottie
				options={defaultOptions1}
				height={200}
				width={200}
				isClickToPauseDisabled={true}
			/>
			*/
}
// need to attribute to license https://lottiefiles.com/page/license
function MiddleAnimation() {
	return <div className="MiddleAnimation"></div>;
}
export default MiddleAnimation;
