import { render } from 'react-dom';
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { Box3, BoxGeometry, SphereGeometry } from 'three';
import React, { useRef, useState, useMemo, useEffect } from 'react';
import * as THREE from 'three';
extend({ EffectComposer, RenderPass, UnrealBloomPass });
let boxColor = 'red';

function Sphere({ geometry, x, y, z, s }) {
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
			<meshPhongMaterial color={boxColor} roughness={1} />
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
	const [geometry] = useState(() => new THREE.BoxGeometry(1, 1), []);
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

function SphereCircle() {
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
function Box1(props) {
	// This reference will give us direct access to the mesh
	const mesh = useRef();
	// Set up state for the hovered and active state
	const [hovered, setHover] = useState(false);
	const [active, setActive] = useState(false);
	// Rotate mesh every frame, this is outside of React without overhead
	useFrame(() => {
		mesh.current.rotation.y = mesh.current.rotation.y += 0.01;
	});
	return (
		<mesh
			{...props}
			ref={mesh}
			scale={active ? 1 : 1}
			onClick={(e) => setActive(!active)}
			onPointerOver={(e) => setHover(true)}
			onPointerOut={(e) => setHover(false)}>
			<sphereGeometry args={[1, 1]} />
			{/*
            /<meshDepthMaterial color={hovered ? 'hotpink' : 'orange'} /> 
*/}
			<meshPhongMaterial
				transparent={true}
				opacity={'0.3'}
				reflectivity={'0'}
				color={'blue'}
			/>
		</mesh>
	);
}
function Sphere2(props) {
	// This reference will give us direct access to the mesh
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
				transparent={true}
				opacity={'0.05'}
			/>
		</mesh>
	);
}
function Sphere3(props) {
	// This reference will give us direct access to the mesh
	const mesh = useRef();
	// Set up state for the hovered and active state
	const [hovered, setHover] = useState(false);
	const [active, setActive] = useState(false);
	// Rotate mesh every frame, this is outside of React without overhead
	useFrame(() => {
		mesh.current.position.x = -50;
	});
	return (
		<mesh
			{...props}
			ref={mesh}
			scale={active ? 1 : 1}
			onClick={(e) => setActive(!active)}
			onPointerOver={(e) => setHover(true)}
			reflectivity={'1'}
			onPointerOut={(e) => setHover(false)}>
			<sphereGeometry args={[8, 8]} />

			{/*
            /<meshDepthMaterial color={hovered ? 'hotpink' : 'orange'} /> 
*/}
			<meshPhongMaterial color={'yellow'} />
		</mesh>
	);
}

function Bloom({ children }) {
	const { gl, camera, size } = useThree();
	const [scene, setScene] = useState();
	const composer = useRef();
	useEffect(
		() => void scene && composer.current.setSize(size.width, size.height),
		[size]
	);
	useFrame(() => scene && composer.current.render(), 1);
	return (
		<>
			<scene ref={setScene}>{children}</scene>
			<effectComposer ref={composer} args={[gl]}>
				<renderPass attachArray="passes" scene={scene} camera={camera} />
				<unrealBloomPass attachArray="passes" args={[undefined, 1.5, 1, 0]} />
			</effectComposer>
		</>
	);
}

function Main({ children }) {
	const scene = useRef();
	const { gl, camera } = useThree();
	useFrame(() => {
		gl.autoClear = false;
		gl.clearDepth();
		gl.render(scene.current, camera);
	}, 2);
	return <scene ref={scene}>{children}</scene>;
}

export default function Cubes() {
	return (
		<div class="MainAnim">
			<Canvas linear camera={{ position: [0, 0, 30] }}>
				<Main>
					<spotLight />
					<ambientLight />
					<AddCube />
				</Main>

				<Bloom>
					<spotLight />
					<ambientLight intensity={0.8} />
					<RandomSpheres />
					<Sphere2 />
				</Bloom>
			</Canvas>
		</div>
	);
}
