import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';

import * as location from '../Img/70296-cube';

// Settings for Lottie animation
// Used for loading preloading the files
const defaultOptions1 = {
	loop: true,
	autoplay: true,
	animationData: location.default,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice',
	},
};
{
	/* <h1>Your Data</h1>
          <br />
          <h6 style={{ position: "Absolute", right: "5rem", bottom: "0" }}>
            <a
              style={{ color: "white" }}
              href="https://lottiefiles.com/chrisgannon"
            >
              Earth Animation by Chris Gannon on LottieFiles
            </a>
            <br />
            <a style={{ color: "white" }} href="https://lottiefiles.com/darius">
              Success Animation by Chris Gannon on LottieFiles
            </a> */
}
// need to attribute to license https://lottiefiles.com/page/license
function PreLoader() {
	return (
		<div className="PreLoader">
			<div className="loadingAnim">
				<Lottie options={defaultOptions1} height={200} width={200} />
			</div>
		</div>
	);
}

export default PreLoader;
