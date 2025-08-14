import { Canvas } from '@react-three/fiber';
import { OrbitControls, Torus, Octahedron } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';

function ProjectShape({ position, shape }: { position: [number, number, number], shape: 'torus' | 'octahedron' }) {
  const meshRef = useRef<Mesh>(null);

  const handleClick = () => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.5;
      meshRef.current.rotation.y += 0.5;
    }
  };

  if (shape === 'torus') {
    return (
      <Torus
        ref={meshRef}
        position={position}
        args={[1, 0.3, 16, 100]}
        onClick={handleClick}
      >
        <meshStandardMaterial color="white" wireframe />
      </Torus>
    );
  }

  return (
    <Octahedron
      ref={meshRef}
      position={position}
      args={[1]}
      onClick={handleClick}
    >
      <meshStandardMaterial color="white" wireframe />
    </Octahedron>
  );
}

function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      <ProjectShape position={[-2, 1, 0]} shape="torus" />
      <ProjectShape position={[2, -1, 0]} shape="octahedron" />
      <ProjectShape position={[0, 2, -1]} shape="torus" />
      
      <OrbitControls />
    </Canvas>
  );
}

export default function Projects() {
  const projectsData = [
    {
      title: "Retrieval-Augmented Generation (RAG) System",
      description: "•	 Developed a Retrieval-Augmented Generation (RAG) pipeline using LangChain, Gemini, HuggingFace embeddings, and a PyTorch-based transformer, achieving 95% accuracy on domain-specific queries\n•	 Accelerated embedding generation with CUDA-optimized PyTorch models, reducing response latency by 60%",
      technologies: ["Python", "PyTorch", "LangChain", "Gemini"],
      github: "#",
      demo: "#"
    },
    {
      title: "Drug Classification System",
      description: "•	 Designed and deployed a drug classification model using scikit-learn and PyTorch, achieving 95% accuracy and 0.94 F1 score through optimized feature selection, model evaluation, and hyperparameter tuning on structured biomedical datasets\n•	 Built an MLOps pipeline integrating GitHub Actions, Gradio, and CML for continuous integration and model deployment",
      technologies: ["Python", "PyTorch", "NumPy"],
      github: "#",
      demo: "#"
    },
    {
      title: "Full-Stack Expenses Tracker App",
      description: "•	 Developed a full-stack web application with a modular React frontend and Node.js + Express backend integrated with GraphQL\n•	 Architected a CI/CD pipeline in Jenkins and Docker for code checkout, build, test, and Docker image publishing to Docker Hub",
      technologies: ["React", "Node.js", "GraphQL"],
      github: "#",
      demo: "#"
    },
    {
      title: "Expenses Tracker",
      description: "•	 Developed a Go-based expense tracker application with features for adding, updating, and summarizing expenses\n•	 Built a CI/CD pipeline with GitHub Actions to automate Docker image builds and push to Docker Hub, streamlining deploymentthrough consistent container image versioning",
      technologies: ["Go", "Docker", "Github Actions"],
      github: "#",
      demo: "#"
    },
    {
      title: "Simulation Data Analysis Tool",
      description: "•	Automated data preprocessing and feature extraction pipelines in Python, cutting preparation time by 60% on large datasets\n•	Conducted PyTorch model hyperparameter tuning across 400K+ entries, improving prediction precision and overall model performance",
      technologies: ["Python", "PyTorch", "NumPy"],
      github: "#",
      demo: "#"
    },
    {
      title: "Stock Trading System",
      description: "•	Initiated a full-stack trading web app using Angular, Node.js, and MongoDB, implementing efficient API routing and caching to deliver low-latency response times and 99% uptime\n•	Scaled the platform to a Swift-based iOS app, maintaining consistent load times under 1 second across mobile devices",
      technologies: ["Angular", "Node.js", "MongoDB", "Swift"],
      github: "#",
      demo: "#"
    },
    {
      title: "Recruitment Portal with Keyword Detection",
      description: "•	Implemented a Python-based NER model for keyword extraction in resumes, achieving 97% accuracy and improving recruiter filtering precision\n•	Built a decentralized resume storage system using Web3.js, Ethereum, and React, enabling secure, tamper-proof resume uploads",
      technologies: ["Python", "React", "Web3.js"],
      github: "#",
      demo: "#"
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-5xl font-bold mb-8">Projects</h1>
            
            <div className="grid gap-6">
              {projectsData.map((project, index) => (
                <div key={index} className="border border-gray-700 p-6 rounded-lg hover:border-white transition-colors">
                  <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                  {/* <p className="text-gray-300 mb-4">{project.description}</p> */}
                  <div className="text-gray-300 mb-4 space-y-1">
                    {project.description.split('\n').map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white text-black text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {/* <a
                      href={project.github}
                      className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition-colors"
                    >
                      Link
                    </a> */}
                    {/* <a
                      href={project.demo}
                      className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors"
                    >
                      Live Demo
                    </a> */}
                  </div>
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
