'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'text-primary' : 'text-muted-foreground hover:text-foreground';
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        <Link href="/" className="text-lg sm:text-xl md:text-xl font-bold text-secondary hover:animate-float">
          Cheska Olympia
        </Link>
        
        <ul className="flex gap-3 sm:gap-4 md:gap-8 items-center text-xs sm:text-sm md:text-base">
          <li>
            <Link href="/" className={`transition-colors hover:animate-float ${isActive('/')}`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={`transition-colors hover:animate-float ${isActive('/about')}`}>
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className={`transition-colors hover:animate-float ${isActive('/projects')}`}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/research" className={`transition-colors hover:animate-float ${isActive('/research')}`}>
              Research
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
