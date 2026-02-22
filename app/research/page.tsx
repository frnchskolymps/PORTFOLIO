import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ResearchCard from '@/components/research-card';

export default function Research() {
  const papers = [
    {
      title: 'Performance Comparison of SVM RBF Kernel: With and Without Feature Engineering for Vehicle Detection',
      authors: 'Francheska L. Olympia, Renz Andrei C. Alis, Denmar Yzelle V. Saralde',
      abstract: 'This paper presents the development of an automated vehicle classification system using Machine Learning techniques.',
      date: 'November 2024',
      link: 'https://github.com/frnchskolymps/CCMACLRL_PROJECT_COM222/blob/main/FINAL_PROJECT_ML_Alis%2C%20Olympia%2C%20Saralde.pdf'
    },
    {
      title: 'Clustering Games Based on Preferences and Playtime: Insights for Game Developers',
      authors: 'Francheska L. Olympia, Renz Andrei C. Alis, Denmar Yzelle V. Saralde',
      abstract: 'This study addresses the challenge of understanding the preferences of diverse players in the rapidly growing gaming industry by applying machine learning clustering techniques to segment players based on their in-game behavior.',
      date: 'March 2025',
      link: 'https://github.com/frnchskolymps/CCADMACL_PROJECT_COM222/blob/main/SUPER%20DUPER%20LATEST%20PAPER.pdf'
    },
    {
      title: 'YOLO-Based Real-Time Waste Classification with Dual Input',
      authors: 'Francheska L. Olympia, Renz Andrei C. Alis, Denmar Yzelle V. Saralde, Charles Angelo R. Racho',
      abstract: 'This study presents a real-time object detection model based on a YOLO-inspired Convolutional Neural Network (CNN) architecture for classifying waste into five categories.',
      date: 'June 2025',
      link: 'https://github.com/frnchskolymps/CCDEPLRL_COM222ML_PROJECT/blob/main/FINAL%20PAPER%20-%20DEEP_LEARNING.pdf'
    },
    {
      title: 'The Influence of Daily Activities, Mood, and Sleep on Music Genre Selection: A Personal Data Analysis',
      authors: 'Francheska L. Olympia',
      abstract: 'This study investigates the factors influencing music genre selection, focusing on daily activities, mood levels, and sleep duration, using a personally logged data collection over a three-month period.',
      date: 'February 2026',
      link: 'https://github.com/frnchskolymps/CCDATSCL_PROJECT/blob/main/DataSci_FinalPaper.pdf'
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground animate-page-in">
      <Navigation />
      <main className="max-w-5xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-text-balance mb-4">Research Papers</h1>
        <p className="text-lg text-muted-foreground mb-12">
          A collection of academic research papers and studies I've contributed to, 
          exploring various topics in computer science and technology.
        </p>
        
        <div className="space-y-6">
          {papers.map((paper, index) => (
            <ResearchCard key={index} {...paper} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
