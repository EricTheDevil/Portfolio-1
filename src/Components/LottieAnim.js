import React, { useLayoutEffect, useRef, useEffect } from 'react';

import memojiJSON from '../Img/21197-astrolottie';
import s from './MiddleAnimation';

import lottie from 'lottie-web';
import { gsap } from 'gsap';
import { ScrollScene } from 'scrollscene';

const LottieAnim = () => {
	const MemojiRef = useRef(null);
	const MemojiContainerRef = useRef(null);
	useLayoutEffect(() => {
		if (MemojiRef === null && MemojiContainerRef === null) {
			return;
		}

		const AnimOptions = {
			container: MemojiRef.current,
			renderer: 'canvas',
			loop: false,
			autoplay: false,
			animationData: memojiJSON,
		};
		const anim = lottie.loadAnimation(AnimOptions);
		const tl = gsap.timeline({ paused: true });

		tl.to(
			{ frame: 0 },
			{
				frame: anim.totalFrames - 50,
				onUpdate: () => {
					anim.goToAndStop(Math.round(tl.progress() * 85), true);
				},
				ease: 'power2.out',
			}
		);

		const scrollScene = new ScrollScene({
			triggerElement: MemojiContainerRef.current,
			triggerHook: 0,
			offset: 0,
			duration: '400%',
			gsap: {
				timeline: tl,
			},
		});

		return () => {
			scrollScene.destroy();
		};
	}, []);
	return (
		<div ref={MemojiContainerRef} id="MemojiContainerRef">
			<div ref={MemojiRef} />
		</div>
	);
};
export default LottieAnim;
