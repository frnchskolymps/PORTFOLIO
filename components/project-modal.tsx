'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  screenshots: string[];
  link?: string;
}

export default function ProjectModal({
  isOpen,
  onClose,
  title,
  description,
  technologies,
  image,
  screenshots,
  link
}: ProjectModalProps) {
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);

  if (!isOpen) return null;

  const handleNextScreenshot = () => {
    if (currentScreenshotIndex < screenshots.length - 1) {
      setCurrentScreenshotIndex(currentScreenshotIndex + 1);
    }
  };

  const handlePrevScreenshot = () => {
    if (currentScreenshotIndex > 0) {
      setCurrentScreenshotIndex(currentScreenshotIndex - 1);
    }
  };

  const currentScreenshot = screenshots[currentScreenshotIndex];
  const hasMultipleScreenshots = screenshots.length > 1;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <div 
        className="relative bg-card border border-border rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto z-50 animate-page-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors z-10"
        >
          <X className="w-6 h-6 text-foreground" />
        </button>

        <div className="relative w-full h-64 overflow-hidden bg-secondary/20">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-8 space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-3">{title}</h2>
            <p className="text-lg text-muted-foreground">{description}</p>
          </div>

          {link && (
            <div className="border-t border-border pt-6">
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium hover:animate-float"
              >
                <span>Go to Link</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          )}

          <div className="border-t border-border pt-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">Project Screenshots</h3>
              {hasMultipleScreenshots && (
                <span className="text-sm text-muted-foreground">
                  {currentScreenshotIndex + 1} / {screenshots.length}
                </span>
              )}
            </div>
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden border border-border">
              <Image
                src={currentScreenshot}
                alt={`${title} screenshot ${currentScreenshotIndex + 1}`}
                fill
                className="object-cover"
              />
              
              {hasMultipleScreenshots && (
                <>
                  <button
                    onClick={handlePrevScreenshot}
                    disabled={currentScreenshotIndex === 0}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-black/50 hover:bg-black/70 transition-colors disabled:opacity-30 disabled:cursor-not-allowed z-10"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  <button
                    onClick={handleNextScreenshot}
                    disabled={currentScreenshotIndex === screenshots.length - 1}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-black/50 hover:bg-black/70 transition-colors disabled:opacity-30 disabled:cursor-not-allowed z-10"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
