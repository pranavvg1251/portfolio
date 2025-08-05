import { Canvas } from '@react-three/fiber';
import { Text3D, Center } from '@react-three/drei';
import { useRef } from 'react';
import { OrbitControls, Box, Cylinder } from '@react-three/drei';
import { Mesh } from 'three';

function FloatingCube() {
  const meshRef = useRef<Mesh>(null);

  return (
    <mesh
      ref={meshRef}
      position={[2, 0, 0]}
      rotation={[0, 0, 0]}
      onClick={() => {
        if (meshRef.current) {
          meshRef.current.rotation.x += 0.5;
          meshRef.current.rotation.y += 0.5;
        }
      }}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="white" wireframe />
    </mesh>
  );
}
function ExperienceBox({ position, onClick }: { position: [number, number, number], onClick: () => void }) {
  const meshRef = useRef<Mesh>(null);

  return (
    <Box
      ref={meshRef}
      position={position}
      args={[1, 1, 1]}
      onClick={onClick}
    >
      <meshStandardMaterial color="white" wireframe />
    </Box>
  );
}

function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      <ExperienceBox position={[-2, 1, 0]} onClick={() => {}} />
      <ExperienceBox position={[2, -1, 0]} onClick={() => {}} />
      <Cylinder position={[0, 0, 0]} args={[0.5, 0.5, 2]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="white" wireframe />
      </Cylinder>
      
      <OrbitControls />
    </Canvas>
  );
}

export default function Home() {
  const handleResumeClick = () => {
    // Add your resume link here
    window.open('https://drive.google.com/file/d/1a1X51oj7624fNtcYv8Wko0_EURp0pEDl/view?usp=sharing', '_blank');
  };

  const handleLinkedInClick = () => {
    // Add your LinkedIn profile link here
    window.open('https://www.linkedin.com/in/pranav-gangurde/', '_blank');
  };

  return (
    <div className="min-h-screen pt-16 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-6xl lg:text-8xl font-bold mb-6">
            Pranav Gangurde
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Software Development Engineer
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={handleResumeClick}
              className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              View Resume
            </button>
            <button
              onClick={handleLinkedInClick}
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors"
            >
              LinkedIn
            </button>
          </div>
        </div>
        
        <div className="h-96 lg:h-[500px]">
          <Scene3D />
        </div>
      </div>
    </div>
  );
}
