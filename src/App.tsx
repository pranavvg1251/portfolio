import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Authenticated, Unauthenticated } from "convex/react";
import { SignInForm } from "./SignInForm";
import { SignOutButton } from "./SignOutButton";
import { Toaster } from "sonner";
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Router>
        <Authenticated>
          <Navigation />
          <main className="min-h-screen">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/education" element={<Education />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
            </Routes>
          </main>
        </Authenticated>
        
        <Unauthenticated>
          <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md mx-auto p-8">
              <div className="text-center mb-8">
                {/* <h1 className="text-4xl font-bold text-white mb-4">Portfolio</h1>
                <p className="text-gray-300">Sign in to view the portfolio</p> */}
              </div>
              <SignInForm />
            </div>
          </div>
        </Unauthenticated>
      </Router>
      <Toaster />
    </div>
  );
}
