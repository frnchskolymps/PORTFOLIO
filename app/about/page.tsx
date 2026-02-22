import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Mail, Linkedin, Paperclip} from 'lucide-react';

export default function About() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/frnchskolymps',
      username: '@frnchskolymps'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/francheska-olympia/',
      username: 'Francheska Olympia'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:olympia.francheska.2@gmail.com',
      username: 'olympia.francheska.2@gmail.com'
    },
    {
      name: 'Resume',
      icon: Paperclip,
      url: 'https://drive.google.com/file/d/1d6NaEQnxAneKRBCsY_TuepH7sreFFvOj/view?usp=sharing',
      username: 'My Resume'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground animate-page-in">
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-text-balance mb-12">About Me</h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1 flex flex-col items-center">
            <Image
              src="/images/self2.jpeg"
              alt="Profile photo"
              width={300}
              height={300}
              className="rounded-lg shadow-lg border border-border object-cover w-full aspect-square mb-6"
            />
            
            <div className="w-full">
              <h3 className="text-lg text-primary font-semibold mb-4 text-center">Francheska L. Olympia</h3>
              <div className="space-y-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card hover:bg-secondary hover:border-primary transition-all duration-300 hover:animate-float group"
                    >
                      <Icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-foreground">{social.name}</span>
                        <span className="text-xs text-muted-foreground">{social.username}</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 prose prose-lg max-w-none space-y-6 text-foreground">
            <p>
              A computer science graduate passionate about learning and exploring technology, striving to contribute meaningfully to the field
            </p>
            <div className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-2xl font-semibold mb-4">Education</h2>
              <p className="text-xl text-muted-foreground mb-2">
                National University <span className='text-sm text-muted-foreground'>(2023 - May 2026)</span>
              </p>
              <p className='text-sm text-muted-foreground mb-2 font-semibold'>
                Bachelor of Science in Computer Science with Specialization in Machine Learning <br />
                <span className='text-xs text-muted-foreground italic'>Dean's List</span>
              </p>
              <hr></hr>
              <p className="text-xl text-muted-foreground mb-2 mt-4">
                Polytechnic University of the Philippines <span className='text-sm text-muted-foreground'>(2019 - 2022)</span>
              </p>
              <p className='text-sm text-muted-foreground mb-2 font-semibold'>
                Diploma in Information Communication Technology <br />
                <span className='text-xs text-muted-foreground italic'>President's List, Dean's List</span>
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-2xl font-semibold mb-4">Skills</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Programming</li>
                <li>Web Development</li>
                <li>Databases and Query Languages</li>
                <li>Big Data and Cloud Computing</li>
                <li>Machine Learning</li>
                <li>UI/UX Design</li>
                <li>Tools and Version Controls</li>
                <li>Leadership and Organizational Skills</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-2xl font-semibold mb-4">Experience</h2>
              <p className="text-xl text-muted-foreground mb-2">
                Supervalue Inc. (SM Supermarket) <span className='text-sm text-muted-foreground'>(April 2025 - July 2025)</span>
              </p>
              <p className='text-sm text-muted-foreground mb-2 font-semibold'>
                POS Support Intern <br />
              </p>
              <hr></hr>
              <p className="text-xl text-muted-foreground mb-2 mt-4">
                Stratpoint Technologies <span className='text-sm text-muted-foreground'>(April 2022 - September 2022)</span>
              </p>
              <p className='text-sm text-muted-foreground mb-2 font-semibold'>
                Data Engineer Intern <br />
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
