import { Routes, Route, Navigate } from 'react-router-dom';
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
      <Authenticated>
        <Navigation />
        <main className="min-h-screen">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </main>
      </Authenticated>

      <Unauthenticated>
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-full max-w-md mx-auto p-8">
            <SignInForm />
          </div>
        </div>
      </Unauthenticated>

      <Toaster />
    </div>
  );
}
