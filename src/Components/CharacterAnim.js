import { Suspense, React, useEffect, useFrame } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import Warrior from './Warrior';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { OrthographicCamera, PerspectiveCamera } from '@react-three/drei';
import { RGBA_ASTC_5x4_Format } from 'three';

const CameraController = () => {
	const { camera, gl } = useThree();
	const controls = new OrbitControls(camera, gl.domElement);
	useEffect(() => {
		console.log(controls.getPolarAngle());
		controls.autoRotate = true;
		controls.minDistance = 2;
		controls.maxDistance = 5;
		camera.position.set(-0.5, 1.9, 2);
		controls.update();
		return () => {
			controls.dispose();
		};
	}, [camera, gl]);

	return null;
};

export default function CharacterAnim() {
	return (
		<div className="character-container">
			<Canvas>
				<CameraController />
				<ambientLight intensity={0.6} />
				<directionalLight intensity={1} />

				<directionalLight intensity={0.5} />
				<Suspense fallback={null}>
					<Warrior></Warrior>
				</Suspense>
			</Canvas>
		</div>
	);
}
