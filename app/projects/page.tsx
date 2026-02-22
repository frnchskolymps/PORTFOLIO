'use client';

import { useState } from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ProjectCard from '@/components/project-card';
import ProjectModal from '@/components/project-modal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Thesis: TND Assessment Platform',
      description: '(NOVEMBER 2024 - MARCH 2025) In collaboration with 4 other members for our Thesis project, is an insight-driven assessment platform that provides feedbacks from the assessment answered by students.',
      technologies: ['Figma','Next.js', 'Supabase', 'Fine-tuned LLM', 'Machine Learning', 'Data Science'],
      image: '/images/tnd1.png',
      screenshots: ['/images/tnd2.png', '/images/tnd3.png', '/images/tnd4.png', '/images/tnd5.png'],
      link: 'https://assessment-platform-six.vercel.app'
    },
    {
      title: 'AnnTok Staycation - Booking Website',
      description: '(NOVEMBER 2023 - MARCH 2024) A staycation booking website in collaboration with other 4 members for our Software Engineering course. The website allows users to book staycation packages, view available rooms, and manage their bookings.',
      technologies: ['Tailwind CSS', 'Next.js', 'Supabase', 'Figma'],
      image: '/images/anntok1.png',
      screenshots: ['/images/anntok2.png', '/images/anntok3.png', '/images/anntok4.png', '/images/anntok5.png'],
    },
    {
      title: 'YOLO-based Model Waste Classifier',
      description: '(JUNE 2025) A Deep Learning model trained in collaboration with other 4 members to detect waste based on their classifications (Leaf, Paper, Glass, Metal, Plastic) in real-time. The focus of this project is the training and effectivity of the model',
      technologies: ['Python', 'Machine Learning'],
      image: '/images/yolo1.png',
      screenshots: ['/images/yolo2.png', '/images/yolo3.png', '/images/yolo4.png'],
    },
  ];

  const currentProject = selectedProject !== null ? projects[selectedProject] : null;

  return (
    <div className="min-h-screen bg-background text-foreground animate-page-in">
      <Navigation />
      <main className="max-w-5xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-text-balance mb-4">School Projects</h1>
        <p className="text-lg text-muted-foreground mb-12">
          A collection of projects made during my time in university.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project}
              onClick={() => setSelectedProject(index)}
            />
          ))}
        </div>
      </main>
      <Footer />

      {currentProject && (
        <ProjectModal
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
          title={currentProject.title}
          description={currentProject.description}
          technologies={currentProject.technologies}
          image={currentProject.image}
          screenshots={currentProject.screenshots}
          link={currentProject.link}
        />
      )}
    </div>
  );
}
