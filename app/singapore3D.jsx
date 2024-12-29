'use client';

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { useEffect, useRef } from 'react';

const Singapore3D = () => {
  const canvasRef = useRef(null); // Reference to canvas DOM element

  useEffect(() => {
    if (!canvasRef.current) return; // Early return if canvas ref is not available

    // Scene setup
    const scene = new THREE.Scene();
    const textureLoader = new THREE.TextureLoader();
    const gradientTexture = textureLoader.load('/singapore_three_scene/scene_background.jpg'); // Your gradient texture file
    scene.background = gradientTexture;
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Lights setup
    const sunLight = new THREE.DirectionalLight(0xffffff, 2);
    const hemiLight = new THREE.HemisphereLight(0x87ceeb, 0xffffff, 1.5);
    sunLight.position.set(0, 200, 100);
    sunLight.castShadow = true;

    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 500;

    scene.add(hemiLight);
    scene.add(sunLight);

    // Camera and OrbitControls setup
    camera.position.set(0, 0, 100);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.5;
    controls.screenSpacePanning = false;
    controls.enableZoom = false; // Disable zooming with OrbitControls

    // Load 3D Model
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('/singapore_three_scene/scene.gltf', (gltf) => {
      const model = gltf.scene;
      scene.add(model);
      model.scale.set(0.1, 0.1, 0.1);
      model.position.set(-100, -150, 20);
    });

    // Zoom control
    let targetZoom = camera.zoom;
    const zoomSpeed = 0.05;

    // Resize listener for responsive canvas
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // Zoom functionality
    renderer.domElement.addEventListener('wheel', (event) => {
      if (event.ctrlKey) {
        const zoomFactor = 0.85;
        if (event.deltaY < 0) {
          targetZoom /= zoomFactor;
        } else if (event.deltaY > 0) {
          targetZoom *= zoomFactor;
        }

        targetZoom = THREE.MathUtils.clamp(targetZoom, 0.5, 5);
        event.preventDefault();
      }
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update controls for smooth interaction
      controls.update();

      // Interpolating the zoom
      camera.zoom += (targetZoom - camera.zoom) * zoomSpeed;
      camera.updateProjectionMatrix();

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef}></canvas>; // Use canvasRef to refer to the canvas element
};

export default Singapore3D;
