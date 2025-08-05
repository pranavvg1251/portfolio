import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { useState, useMemo } from 'react';
import { Vector3 } from 'three';

function SkillCloud({ skills }: { skills: string[] }) {
  const positions = useMemo(() => {
    return skills.map(() => [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10
    ] as [number, number, number]);
  }, [skills]);

  return (
    <>
      {skills.map((skill, index) => (
        <Text
          key={skill}
          position={positions[index]}
          fontSize={0.5}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {skill}
        </Text>
      ))}
    </>
  );
}

function Scene3D({ skills }: { skills: string[] }) {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      <SkillCloud skills={skills} />
      
      <OrbitControls />
    </Canvas>
  );
}

export default function Skills() {
  const [viewMode, setViewMode] = useState<'list' | 'cloud'>('list');
  const [selectedCategory, setSelectedCategory] = useState('languages');

  const skillsData = {
    languages: [
      'Python', 'Java', 'Swift', 'TypeScript', 'JavaScript',
      'HTML5', 'CSS3', 'R', 'SQL', 'MATLAB', 'C++'
    ],
    frameworks: [
      'Node.js','Angular','React','Flask', 'Express.js','Django', 'numPy', 'pandas'
    ],
    databases: [
      'MongoDB', 'PostgreSQL', 'MySQL', 'Firebase','SQLite', 'DynamoDB'
    ],
    cloud: [
      'GCP', 'Docker', 'AWS', 'Netlify',
      'Figma'
    ],
    technologies: [
      'Linux', 'iOS', 'Android', 'Git', 'Tableau', 'PyTorch', 'Jira'                   
    ],
    tools: [
      'Jenkins', 'SageMaker', 'GitLab',
    ],
  };

  const categories = Object.keys(skillsData) as Array<keyof typeof skillsData>;
  const allSkills = Object.values(skillsData).flat();

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-bold mb-8 text-center">Skills</h1>
        
        <div className="flex justify-center mb-8">
          <div className="flex gap-4">
            <button
              onClick={() => setViewMode('list')}
              className={`px-6 py-2 rounded-lg transition-colors ${
                viewMode === 'list'
                  ? 'bg-white text-black'
                  : 'border border-white text-white hover:bg-white hover:text-black'
              }`}
            >
              List View
            </button>
            <button
              onClick={() => setViewMode('cloud')}
              className={`px-6 py-2 rounded-lg transition-colors ${
                viewMode === 'cloud'
                  ? 'bg-white text-black'
                  : 'border border-white text-white hover:bg-white hover:text-black'
              }`}
            >
              3D Cloud
            </button>
          </div>
        </div>

        {viewMode === 'list' ? (
          <div>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg capitalize transition-colors ${
                    selectedCategory === category
                      ? 'bg-white text-black'
                      : 'border border-gray-600 text-gray-300 hover:border-white hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold mb-6 capitalize text-center">
                {selectedCategory} Skills
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skillsData[selectedCategory as keyof typeof skillsData].map((skill, index) => (
                  <div
                    key={index}
                    className="p-4 border border-gray-700 rounded-lg text-center hover:border-white transition-colors"
                  >
                    <span className="text-lg">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="h-[600px]">
            <Scene3D skills={allSkills} />
          </div>
        )}
      </div>
    </div>
  );
}
