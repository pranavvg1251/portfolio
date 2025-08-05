import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, Cylinder } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';

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
    <Canvas camera={{ position: [0, 0, 6] }}>
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

export default function Experience() {
  const experienceData = [
    {
      title: "Software Engineer",
      company: "Wireless Devices and Systems Group (USC)",
      period: "June 2024 - Present",
      description: "•	Design a scalable data-processing Python pipeline to preprocess 100K+ data points of Wireless InSite simulations\n•	Build and train a deep learning autoencoder using PyTorch and multi-GPU clusters, enabling unsupervised analysis of high-dimensional datasets\n•	Implement an end-to-end CI/CD pipeline with Docker for model deployment, reducing production cycles to <3 day\n•	Devise an automated unit and integration test suite using Docker, pytest, and AWS CodeBuild, accelerating model validation and feedback efficiency",
      technologies: ["React", "TypeScript", "Node.js", "AWS"]
    },
    {
      title: "Software Engineer",
      company: "Hospione Healthcare Pvt. Ltd.",
      period: "June 2022 - June 2023",
      description: "•	Led a team of 4 to develop a scalable cloud-native full-stack web application using React, Node.js, Amazon Web Services (AWS) S3 and EC2\n•	Refactored legacy backend into modular services using Node.js and Express, reducing API response times by 35% and boosting deployment frequency by 2x\n•	Created Python scripts to automate data preprocessing and generate client-specific insights, reducing analysis time by 60%\n•	Engineered CI/CD workflows for data pipelines with Docker, pytest, and AWS CodeBuild, reducing deployment failures by 40%",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"]
    },
    {
      title: "Software Development Engineer Intern",
      company: "Paarsh Infotech Pvt. Ltd.",
      period: "December 2021 - May 2022",
      description: "•	Built a real-time video conferencing platform using React, VideoSDK, and Express, reducing connection latency for end users\n•	Strategized in Agile sprints, leading code reviews and test coordination, accelerating feature release velocity by 20%\n•	Developed modular React components with Redux and Material UI, cutting UI development time by 50% across projects",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          <div>
            <h1 className="text-5xl font-bold mb-8">Experience</h1>
            
            <div className="space-y-8">
              {experienceData.map((exp, index) => (
                <div key={index} className="border border-gray-700 p-6 rounded-lg hover:border-white transition-colors">
                  <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                  <p className="text-gray-300 text-lg mb-2">{exp.company}</p>
                  <p className="text-gray-400 mb-4">{exp.period}</p>
                  <div className="text-gray-300 mb-4 space-y-1">
  {exp.description.split('\n').map((line, idx) => (
    <p key={idx}>{line}</p>
  ))}
</div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white text-black text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* <div className="h-96 lg:h-[600px]">
            <Scene3D />
          </div> */}
        </div>
      </div>
    </div>
  );
}
