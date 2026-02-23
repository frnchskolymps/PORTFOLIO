import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/5 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-balance text-foreground">
              Hello! I am <span className="text-primary">Francheska L. Olympia</span>
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-muted-foreground">But you can call me</h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-balance text-primary">
              Cheska
            </h1>
            <p className="text-xl text-muted-foreground text-text-pretty">
              Welcome to my portfolio website, where I share information about myself and my projects.
            </p>
          </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/projects" className="px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold">
            View Projects
          </Link>
          <Link href="/research" className="px-8 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors font-semibold">
            Research Papers
          </Link>
        </div>
        </div>

        <div>
          <Image
            src="/images/self1.jpg"
            alt="Portfolio hero image - creative workspace"
            width={500}
            height={500}
            className="rounded-lg shadow-xl border border-border object-cover w-full aspect-square"
            priority
          />
        </div>
      </div>
    </section>
  );
}
