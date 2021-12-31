import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { MeshDepthMaterial } from 'three';
import React, { useRef, useState, useMemo, useEffect } from 'react';
import * as THREE from 'three';
import { Suspense } from 'react';
import sphereTexture from '../Img/texture1.jpg';

// Not used

let boxColor = 'red';
function Sphere({ geometry, x, y, z, s }) {
	const texture = useLoader(THREE.TextureLoader, sphereTexture);

	const ref = useRef();
	/*
	useFrame((state) => {
		ref.current.position.x =
			x + Math.sin((state.clock.getElapsedTime() * s) / 2);
		ref.current.position.y =
			y + Math.sin((state.clock.getElapsedTime() * s) / 2);
		ref.current.position.z =
			z + Math.sin((state.clock.getElapsedTime() * s) / 2);
	});*/

	useFrame((state) => {
		ref.current.rotation.x = ref.current.rotation.x += 0.01;
	});
	return (
		<mesh ref={ref} position={[x, y, z]} scale={[s, s, s]} geometry={geometry}>
			<meshPhongMaterial
				roughness={1}
				map={texture}
				opacity={'0.05'}
				transparent={false}
			/>
		</mesh>
	);
}
function LightSphere({ geometry, x, y, z, s }) {
	const ref = useRef();
	/*
	useFrame((state) => {
		ref.current.position.x =
			x + Math.sin((state.clock.getElapsedTime() * s) / 2);
		ref.current.position.y =
			y + Math.sin((state.clock.getElapsedTime() * s) / 2);
		ref.current.position.z =
			z + Math.sin((state.clock.getElapsedTime() * s) / 2);
	});*/

	useFrame((state) => {
		ref.current.rotation.y = ref.current.rotation.x += 0.01;
	});
	return (
		<mesh ref={ref} position={[x, y, z]} scale={[s, s, s]} geometry={geometry}>
			<meshNormalMaterial
				color="blue"
				roughness={'1'}
				transparent={true}
				opacity={'0.3'}
			/>
		</mesh>
	);
}
function RandomSpheres() {
	const [geometry] = useState(() => new THREE.OctahedronGeometry(0.8, 0), []);
	const data = useMemo(() => {
		return new Array(1).fill().map((_, i) => ({
			x: 0,
			y: 0,
			z: 0,
			s: Math.random() + 5,
		}));
	}, []);
	return data.map((props, i) => (
		<Sphere key={i} {...props} geometry={geometry} />
	));
}

function AddCube() {
	const [geometry] = useState(() => new THREE.BoxGeometry(1, 1), []);
	const data = useMemo(() => {
		return new Array(1).fill().map((_, i) => ({
			x: 0,
			y: 0,
			z: 0,
			s: Math.random() + 10,
		}));
	}, []);
	return data.map((props, i) => (
		<LightSphere key={i} {...props} geometry={geometry} />
	));
}
function Sphere2(props) {
	// This reference will give us direct access to the mesh
	const texture = useLoader(THREE.TextureLoader, sphereTexture);

	const mesh = useRef();
	// Set up state for the hovered and active state
	const [hovered, setHover] = useState(false);
	const [active, setActive] = useState(false);
	// Rotate mesh every frame, this is outside of React without overhead
	useFrame(() => {});
	return (
		<mesh ref={mesh} color="hotpink">
			<sphereGeometry args={[10, 10]} />
			{/*
            /<meshDepthMaterial color={hovered ? 'hotpink' : 'orange'} /> 
*/}
			<meshPhongMaterial
				color={'yellow'}
				emissive={'red'}
				map={texture}
				transparent={true}
				opacity={'0.05'}
			/>
		</mesh>
	);
}
function Box(props) {
	// This reference will give us direct access to the mesh
	const mesh = useRef();
	// Set up state for the hovered and active state
	const [hovered, setHover] = useState(false);
	const [active, setActive] = useState(false);
	// Rotate mesh every frame, this is outside of React without overhead
	useFrame(() => {
		mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
	});
	return (
		<mesh
			{...props}
			ref={mesh}
			scale={active ? 1.5 : 1}
			onClick={(e) => setActive(!active)}
			onPointerOver={(e) => setHover(true)}
			onPointerOut={(e) => setHover(false)}>
			<boxGeometry args={[5, 5, 5]} />
			{/*
            /<meshDepthMaterial color={hovered ? 'hotpink' : 'orange'} /> 
*/}
			<meshPhongMaterial color={'yellow'} opacity={'0.5'} transparent={true} />
		</mesh>
	);
}

function Box2(props) {
	// This reference will give us direct access to the mesh
	const mesh = useRef();
	// Set up state for the hovered and active state
	const [hovered, setHover] = useState(false);
	const [active, setActive] = useState(false);
	// Rotate mesh every frame, this is outside of React without overhead
	useFrame(() => {
		mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
	});
	return (
		<mesh
			{...props}
			ref={mesh}
			scale={active ? 1.5 : 1}
			onClick={(e) => setActive(!active)}
			onPointerOver={(e) => setHover(true)}
			onPointerOut={(e) => setHover(false)}>
			<boxGeometry args={[1, 10, 1]} />
			{/*
            /<meshDepthMaterial color={hovered ? 'hotpink' : 'orange'} /> 
*/}
			<meshPhongMaterial
				color={'blue'}
				opacity={'1'}
				shininess={'50'}
				clipShadows={true}
			/>
		</mesh>
	);
}
export default function MainAnim() {
	return (
		<div class="MainAnim">
			<Canvas linear camera={{ position: [0, 0, 30] }}>
				<Suspense fallback={null}>
					<spotLight />
					<ambientLight />
					<AddCube />
					<RandomSpheres />
					<Sphere2 />
				</Suspense>
			</Canvas>
		</div>
	);
}
