'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

interface Crane3DModelProps {
  className?: string;
  isScrollSection?: boolean;
  onViewChange?: (view: string) => void;
}

export default function Crane3DModel({ className = '', isScrollSection = false, onViewChange }: Crane3DModelProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const craneRef = useRef<THREE.Group | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const animationRef = useRef<number | null>(null);
  const [isMouseOver, setIsMouseOver] = useState(false);

  // Simple function to change camera view
  const changeView = useCallback((view: string) => {
    if (!cameraRef.current || !controlsRef.current) return;
    
    onViewChange?.(view);
    
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    
    // Disable controls temporarily during view change
    controls.enabled = false;
    
    switch (view) {
      case 'front':
        camera.position.set(0, 40, 100);
        break;
      case 'side':
        camera.position.set(100, 40, 0);
        break;
      case 'top':
        camera.position.set(0, 120, 0);
        break;
      case 'detail':
        camera.position.set(40, 35, 40);
        break;
    }
    
    camera.lookAt(0, 20, 0);
    
    // Re-enable controls after a short delay
    setTimeout(() => {
      if (isMouseOver) {
        controls.enabled = true;
      }
    }, 1000);
  }, [onViewChange, isMouseOver]);

  // Expose functions globally
  useEffect(() => {
    (window as Window & { changeCraneView?: (view: string) => void }).changeCraneView = changeView;
  }, [changeView]);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup with gradient background
    const scene = new THREE.Scene();
    
    // Create a beautiful blue sky with clouds
    const skyCanvas = document.createElement('canvas');
    skyCanvas.width = 512;
    skyCanvas.height = 512;
    const skyContext = skyCanvas.getContext('2d');
    
    if (skyContext) {
      // Create gradient background - BLUE SKY
      const gradient = skyContext.createLinearGradient(0, 0, 0, 512);
      gradient.addColorStop(0, '#1E90FF');   // Dodger blue at top
      gradient.addColorStop(0.3, '#87CEEB'); // Sky blue
      gradient.addColorStop(0.7, '#B0E2FF'); // Light sky blue
      gradient.addColorStop(1, '#E0F6FF');   // Very light blue at bottom
      
      skyContext.fillStyle = gradient;
      skyContext.fillRect(0, 0, 512, 512);
      
      // Add some white clouds
      skyContext.fillStyle = 'rgba(255, 255, 255, 0.9)';
      
      // Cloud 1
      skyContext.beginPath();
      skyContext.arc(100, 150, 30, 0, Math.PI * 2);
      skyContext.arc(130, 150, 35, 0, Math.PI * 2);
      skyContext.arc(160, 150, 30, 0, Math.PI * 2);
      skyContext.arc(130, 130, 25, 0, Math.PI * 2);
      skyContext.fill();
      
      // Cloud 2
      skyContext.beginPath();
      skyContext.arc(350, 200, 25, 0, Math.PI * 2);
      skyContext.arc(375, 200, 30, 0, Math.PI * 2);
      skyContext.arc(400, 200, 25, 0, Math.PI * 2);
      skyContext.arc(375, 180, 20, 0, Math.PI * 2);
      skyContext.fill();
      
      // Cloud 3
      skyContext.beginPath();
      skyContext.arc(200, 100, 20, 0, Math.PI * 2);
      skyContext.arc(220, 100, 25, 0, Math.PI * 2);
      skyContext.arc(240, 100, 20, 0, Math.PI * 2);
      skyContext.arc(220, 85, 15, 0, Math.PI * 2);
      skyContext.fill();
      
      // Cloud 4 (smaller, more distant)
      skyContext.fillStyle = 'rgba(255, 255, 255, 0.7)';
      skyContext.beginPath();
      skyContext.arc(450, 120, 15, 0, Math.PI * 2);
      skyContext.arc(465, 120, 18, 0, Math.PI * 2);
      skyContext.arc(480, 120, 15, 0, Math.PI * 2);
      skyContext.arc(465, 110, 12, 0, Math.PI * 2);
      skyContext.fill();
      
      // Cloud 5 (very distant)
      skyContext.fillStyle = 'rgba(255, 255, 255, 0.5)';
      skyContext.beginPath();
      skyContext.arc(80, 80, 12, 0, Math.PI * 2);
      skyContext.arc(90, 80, 15, 0, Math.PI * 2);
      skyContext.arc(100, 80, 12, 0, Math.PI * 2);
      skyContext.arc(90, 72, 10, 0, Math.PI * 2);
      skyContext.fill();
    }
    
    const skyTexture = new THREE.CanvasTexture(skyCanvas);
    skyTexture.wrapS = THREE.RepeatWrapping;
    skyTexture.wrapT = THREE.RepeatWrapping;
    skyTexture.repeat.set(2, 1);
    scene.background = skyTexture;
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      25,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );

    if (isScrollSection) {
      camera.position.set(0, 40, 100);
    } else {
      camera.position.set(2, 8, 6);
    }
    camera.lookAt(0, 20, 0);
    cameraRef.current = camera;

    // OrbitControls setup
    const controls = new OrbitControls(camera, mountRef.current);
    controls.enabled = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 20;
    controls.maxDistance = 300;
    controls.maxPolarAngle = Math.PI / 2;
    controls.target.set(0, 20, 0);
    controlsRef.current = controls;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Realistic lighting setup
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    // Sun light (main directional light)
    const sunLight = new THREE.DirectionalLight(0xffffff, 1.2);
    sunLight.position.set(50, 100, 50);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 4096;
    sunLight.shadow.mapSize.height = 4096;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 500;
    sunLight.shadow.camera.left = -200;
    sunLight.shadow.camera.right = 200;
    sunLight.shadow.camera.top = 200;
    sunLight.shadow.camera.bottom = -200;
    sunLight.shadow.bias = -0.0001;
    scene.add(sunLight);

    // Fill light (softer)
    const fillLight = new THREE.DirectionalLight(0x87ceeb, 0.4);
    fillLight.position.set(-30, 30, -30);
    scene.add(fillLight);

    // Ground/Floor
    const groundGeometry = new THREE.PlaneGeometry(200, 200);
    const groundMaterial = new THREE.MeshLambertMaterial({ 
      color: 0x8B4513, // Saddle brown
      side: THREE.DoubleSide
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.5;
    ground.receiveShadow = true;
    scene.add(ground);

    // Concrete/asphalt texture for ground
    const concreteGeometry = new THREE.PlaneGeometry(150, 150);
    const concreteMaterial = new THREE.MeshLambertMaterial({ 
      color: 0x696969, // Dim gray
      side: THREE.DoubleSide
    });
    const concrete = new THREE.Mesh(concreteGeometry, concreteMaterial);
    concrete.rotation.x = -Math.PI / 2;
    concrete.position.y = -0.4;
    concrete.receiveShadow = true;
    scene.add(concrete);

    // Add some ground details (lines, markings)
    const lineGeometry = new THREE.PlaneGeometry(100, 0.5);
    const lineMaterial = new THREE.MeshLambertMaterial({ 
      color: 0xFFFFFF,
      side: THREE.DoubleSide
    });
    
    // Center line
    const centerLine = new THREE.Mesh(lineGeometry, lineMaterial);
    centerLine.rotation.x = -Math.PI / 2;
    centerLine.position.set(0, -0.3, 0);
    scene.add(centerLine);
    
    // Side lines
    const sideLine1 = new THREE.Mesh(lineGeometry, lineMaterial);
    sideLine1.rotation.x = -Math.PI / 2;
    sideLine1.position.set(0, -0.3, 50);
    scene.add(sideLine1);
    
    const sideLine2 = new THREE.Mesh(lineGeometry, lineMaterial);
    sideLine2.rotation.x = -Math.PI / 2;
    sideLine2.position.set(0, -0.3, -50);
    scene.add(sideLine2);

    // Create building
    const buildingGroup = new THREE.Group();
    
    const buildingMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x4a5568,
      shininess: 30
    });
    
    const windowMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x87ceeb,
      shininess: 100,
      transparent: true,
      opacity: 0.7
    });
    
    const buildingGeometry = new THREE.BoxGeometry(20, 60, 15);
    const building = new THREE.Mesh(buildingGeometry, buildingMaterial);
    building.position.set(30, 30, 0);
    building.castShadow = true;
    building.receiveShadow = true;
    buildingGroup.add(building);
    
    for (let floor = 0; floor < 12; floor++) {
      for (let window = 0; window < 3; window++) {
        const windowGeometry = new THREE.BoxGeometry(1.5, 2, 0.1);
        const windowMesh = new THREE.Mesh(windowGeometry, windowMaterial);
        windowMesh.position.set(
          30 + (window - 1) * 4,
          5 + floor * 5,
          7.6
        );
        windowMesh.castShadow = true;
        buildingGroup.add(windowMesh);
        
        const windowBack = windowMesh.clone();
        windowBack.position.z = -7.6;
        buildingGroup.add(windowBack);
      }
    }
    
    const entranceGeometry = new THREE.BoxGeometry(4, 6, 2);
    const entrance = new THREE.Mesh(entranceGeometry, buildingMaterial);
    entrance.position.set(30, 3, 8.5);
    entrance.castShadow = true;
    buildingGroup.add(entrance);
    
    scene.add(buildingGroup);

    // Create crane group
    const crane = new THREE.Group();
    craneRef.current = crane;

    // Materials
    const darkBlueMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x1A237E,
      shininess: 100,
      specular: 0x444444
    });
    
    const orangeMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xFF6F00,
      shininess: 80,
      specular: 0x666666
    });
    
    const steelMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x666666,
      shininess: 120,
      specular: 0x888888
    });
    
    const rubberMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x1a1a1a,
      shininess: 10
    });

    // Trailer base
    const trailerGeometry = new THREE.BoxGeometry(8, 0.5, 4);
    const trailer = new THREE.Mesh(trailerGeometry, darkBlueMaterial);
    trailer.position.y = 0.25;
    trailer.castShadow = true;
    trailer.receiveShadow = true;
    crane.add(trailer);

    // Wheels
    const wheelGeometry = new THREE.CylinderGeometry(0.8, 0.8, 0.3, 16);
    for (let i = 0; i < 4; i++) {
      const wheel = new THREE.Mesh(wheelGeometry, rubberMaterial);
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(
        (i < 2 ? -2 : 2),
        0.8,
        (i % 2 === 0 ? -1.5 : 1.5)
      );
      wheel.castShadow = true;
      crane.add(wheel);
    }

    // Stabilizer outriggers
    const outriggerGeometry = new THREE.BoxGeometry(0.2, 0.2, 3);
    for (let i = 0; i < 4; i++) {
      const outrigger = new THREE.Mesh(outriggerGeometry, orangeMaterial);
      outrigger.position.set(
        (i < 2 ? -3 : 3),
        0.1,
        (i % 2 === 0 ? -2 : 2)
      );
      outrigger.castShadow = true;
      crane.add(outrigger);
    }

    // Main mast base
    const mastBaseGeometry = new THREE.BoxGeometry(1.5, 1, 1.5);
    const mastBase = new THREE.Mesh(mastBaseGeometry, darkBlueMaterial);
    mastBase.position.y = 0.75;
    mastBase.castShadow = true;
    mastBase.receiveShadow = true;
    crane.add(mastBase);

    // Telescopic mast sections (extended)
    for (let i = 0; i < 4; i++) {
      const sectionGeometry = new THREE.BoxGeometry(1.2 - i * 0.1, 8, 1.2 - i * 0.1);
      const section = new THREE.Mesh(sectionGeometry, darkBlueMaterial);
      section.position.y = 4.5 + i * 8;
      section.castShadow = true;
      crane.add(section);
    }

    // Hydraulic piston
    const pistonGeometry = new THREE.CylinderGeometry(0.1, 0.1, 32, 8);
    const piston = new THREE.Mesh(pistonGeometry, steelMaterial);
    piston.position.y = 16;
    piston.castShadow = true;
    crane.add(piston);

    // Platform
    const platformGeometry = new THREE.BoxGeometry(3, 0.2, 2);
    const platform = new THREE.Mesh(platformGeometry, darkBlueMaterial);
    platform.position.set(0, 32.5, 0);
    platform.castShadow = true;
    platform.receiveShadow = true;
    crane.add(platform);

    // Platform guard rails
    const railGeometry = new THREE.BoxGeometry(0.1, 1, 0.1);
    for (let i = 0; i < 4; i++) {
      const rail = new THREE.Mesh(railGeometry, orangeMaterial);
      rail.position.set(
        (i < 2 ? -1.4 : 1.4),
        33,
        (i % 2 === 0 ? -0.9 : 0.9)
      );
      rail.castShadow = true;
      crane.add(rail);
    }

    // Safety stripes on platform
    const stripeGeometry = new THREE.BoxGeometry(2.8, 0.05, 0.3);
    for (let i = 0; i < 3; i++) {
      const stripe = new THREE.Mesh(stripeGeometry, orangeMaterial);
      stripe.position.set(0, 32.6, -0.5 + i * 0.5);
      crane.add(stripe);
    }

    // Control panel
    const controlPanelGeometry = new THREE.BoxGeometry(0.8, 0.6, 0.3);
    const controlPanel = new THREE.Mesh(controlPanelGeometry, steelMaterial);
    controlPanel.position.set(2, 1.5, 0);
    controlPanel.castShadow = true;
    crane.add(controlPanel);

    // Remote control
    const remoteGeometry = new THREE.BoxGeometry(0.3, 0.2, 0.1);
    const remote = new THREE.Mesh(remoteGeometry, orangeMaterial);
    remote.position.set(3, 2, 0);
    remote.castShadow = true;
    crane.add(remote);

    // Add crane to scene
    scene.add(crane);

    // Mouse event handlers
    const handleMouseEnter = () => {
      setIsMouseOver(true);
      if (controlsRef.current) {
        controlsRef.current.enabled = true;
      }
    };

    const handleMouseLeave = () => {
      setIsMouseOver(false);
      if (controlsRef.current) {
        controlsRef.current.enabled = false;
      }
    };

    mountRef.current.addEventListener('mouseenter', handleMouseEnter);
    mountRef.current.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      if (controlsRef.current) {
        controlsRef.current.update();
      }
      
      // Gentle platform movement
      platform.position.y = 32.5 + Math.sin(Date.now() * 0.001) * 0.1;
      
      // Subtle crane rotation only when not using mouse controls
      if (isScrollSection && !isMouseOver) {
        crane.rotation.y += 0.002;
      }
      
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current || !renderer) return;
      
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Store refs for cleanup
    const currentMountRef = mountRef.current;
    const currentRenderer = renderer;

    return () => {
      window.removeEventListener('resize', handleResize);
      if (currentMountRef) {
        currentMountRef.removeEventListener('mouseenter', handleMouseEnter);
        currentMountRef.removeEventListener('mouseleave', handleMouseLeave);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (currentMountRef && currentRenderer.domElement) {
        currentMountRef.removeChild(currentRenderer.domElement);
      }
      currentRenderer.dispose();
    };
  }, [isScrollSection, changeView, isMouseOver]);

  return (
    <div 
      ref={mountRef} 
      className={`w-full h-full ${className}`}
      style={{ minHeight: isScrollSection ? '500px' : '400px' }}
    />
  );
} 