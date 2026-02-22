import Link from 'next/link';

interface ResearchCardProps {
  title: string;
  authors: string;
  abstract: string;
  date: string;
  link: string;
}

export default function ResearchCard({
  title,
  authors,
  abstract,
  date,
  link
}: ResearchCardProps) {
  return (
    <Link href={link}>
      <div className="group bg-card border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 hover:shadow-lg cursor-pointer">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">
              By {authors}
            </p>
          </div>
          <span className="text-xs text-secondary-foreground bg-secondary px-3 py-1 rounded-full whitespace-nowrap ml-4">
            {date}
          </span>
        </div>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {abstract}
        </p>

        <div className="pt-4 border-t border-border">
          <p className="text-sm text-accent group-hover:translate-x-1 transition-transform">
            Read Paper →
          </p>
        </div>
      </div>
    </Link>
  );
}
