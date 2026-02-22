'use client';

import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  screenshot?: string;
  onClick: () => void;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  image,
  onClick
}: ProjectCardProps) {
  return (
    <button
      onClick={onClick}
      className="group h-full bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg cursor-pointer flex flex-col text-left"
    >
      {image && (
        <div className="relative w-full h-48 overflow-hidden bg-secondary/20">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-auto">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-sm text-accent group-hover:translate-x-1 transition-transform">
            View Project →
          </p>
        </div>
      </div>
    </button>
  );
}
