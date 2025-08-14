import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Box } from '@react-three/drei';
import { useRef, useState } from 'react';
import { Mesh } from 'three';

function EducationSphere({ position, onClick }: { position: [number, number, number], onClick: () => void }) {
  const meshRef = useRef<Mesh>(null);

  return (
    <Sphere
      ref={meshRef}
      position={position}
      args={[0.5, 32, 32]}
      onClick={onClick}
    >
      <meshStandardMaterial color="white" wireframe />
    </Sphere>
  );
}

function Scene3D() {
  const [selectedEducation, setSelectedEducation] = useState<number | null>(null);

  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      <EducationSphere 
        position={[-2, 1, 0]} 
        onClick={() => setSelectedEducation(0)}
      />
      <EducationSphere 
        position={[2, -1, 0]} 
        onClick={() => setSelectedEducation(1)}
      />
      <EducationSphere 
        position={[0, 2, -1]} 
        onClick={() => setSelectedEducation(2)}
      />
      
      <OrbitControls />
    </Canvas>
  );
}

export default function Education() {
  const educationData = [
    {
      degree: "Master of Science in Computer Science",
      school: "University of Southern California",
      year: "August 2023 - May 2025",
    },
    {
      degree: "Bacelor of Engineering in Information Technology",
      school: "University of Mumbai",
      year: "July 2018 - May 2022",
    },
    
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-5xl font-bold mb-8">Education</h1>
            
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div key={index} className="border-l-2 border-white pl-6 pb-8">
                  <div className="bg-white w-4 h-4 rounded-full -ml-8 mb-4"></div>
                  <h3 className="text-2xl font-semibold mb-2">{edu.degree}</h3>
                  <p className="text-gray-300 text-lg mb-2">{edu.school}</p>
                  <p className="text-gray-400 mb-3">{edu.year}</p>
                  {/* <p className="text-gray-300">{edu.description}</p> */}
                </div>
              ))}
            </div>
          </div>
          
          <div className="h-96 lg:h-[600px]">
            <Scene3D />
          </div>
        </div>
      </div>
    </div>
  );
}
