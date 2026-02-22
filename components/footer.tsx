import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card mt-20">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-foreground mb-4">Portfolio</h3>
            <p className="text-sm text-muted-foreground">
              A showcase of my projects.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</Link></li>
              <li><Link href="/research" className="text-muted-foreground hover:text-foreground transition-colors">Research</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:olympia.francheska.2@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">Email</a></li>
              <li><a href="https://www.linkedin.com/in/francheska-olympia/" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com/frnchskolymps" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://drive.google.com/file/d/1-md8-1ZIpHlUC-5HCFNNScwXQaz75rPh/view?usp=sharing" className="text-muted-foreground hover:text-foreground transition-colors">Resume</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Francheska L. Olympia
          </p>
        </div>
      </div>
    </footer>
  );
}
