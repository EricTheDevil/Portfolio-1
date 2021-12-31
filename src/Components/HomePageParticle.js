import * as THREE from 'three';
import React, { Suspense, useEffect, useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import {
	PerspectiveCamera,
	Environment,
	MeshDistortMaterial,
	ContactShadows,
} from '@react-three/drei';
import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/three';
import NoiseParticles from '../Components/NoiseParticles';
import { render, events, Canvas, useThree } from '@react-three/fiber';
import { useControls } from 'leva';
import { OrbitControls, CameraShake } from '@react-three/drei';

export default function HomePageParticle() {
	const props = {
		focus: { value: 5.1 },
		speed: { value: 0.1 },
		aperture: { value: 1.8 },
		fov: { value: 60 },
		curl: { value: 0.25 },
	};
	props.focus = 5.58;
	props.speed = 32.3;
	props.aperture = 3.5;
	props.fov = 60;
	props.curl = 0.26;
	/* if you want to add an additional sphere
	const props3 = useControls{
		focus: { value: 5.1, min: 3, max: 7, step: 0.01 },
		speed: { value: 0.1, min: 0.1, max: 100, step: 0.1 },
		aperture: { value: 1.8, min: 1, max: 5.6, step: 0.1 },
		fov: { value: 60, min: 0, max: 200 },
		curl: { value: 0.25, min: 0.01, max: 0.5, step: 0.01 },
	};
    */
	return (
		<>
			<NoiseParticles {...props} />
		</>
	);
}

// Not used
function Camera(props) {
	const ref = useRef();
	const set = useThree((state) => state.set);
	// Make the camera known to the system
	useEffect(() => void set({ camera: ref.current }), []);
	// Update it every frame
	useFrame(() => ref.current.updateMatrixWorld());
	return <perspectiveCamera ref={ref} {...props} />;
}
