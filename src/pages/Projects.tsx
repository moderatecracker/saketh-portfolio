import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Laptop, Microscope, Lightbulb, Layers } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import ProjectDetailModal from '../components/ProjectDetailModal';
import PublicationCard from '../components/PublicationCard';

interface Project {
  title: string;
  summary: string;
  description: string;
  techStack: string[];
  github: string;
  demo?: string;
  image: string;
  category: string[];
  icon: string;
}

const Projects = () => {
  const [activeTab, setActiveTab] = useState<'projects' | 'publications'>(
    'projects'
  );

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const projects: Project[] = [
    {
      title: 'Access Control Mechanisms for Secure Websites',
      summary:
        'Multi-layered access control system with time-based OTP and PIN protection for enhanced website security.',
      description:
        'This project focuses on implementing an Access Control Mechanism to enhance website security. After logging in, users must complete multi-factor authentication by entering an OTP sent to their mobile. Once logged in, the dashboard displays only specific sections, while others remain locked for added security. Users can unlock these private sections by entering a 4- or 6-digit PIN. To ensure safety, sessions automatically log out after 1 minute of inactivity, and unlocked sections require the PIN again if accessed in a new session, maintaining tight control over sensitive information.',
      techStack: [
        'Python',
        'Flask',
        'SQLite',
        'JavaScript',
        'HTML',
        'CSS',
      ],
      github: 'https://github.com',
      image: '/images/projects/accesscontrolspro.png',
      category: ['Full Stack', 'Security'],
      icon: 'mdi:security-lock',
    },

    {
      title: 'Vision Aid (Magnifier)',
      summary:
        'Web application for visually impaired students with OCR, voice modulation, and live broadcast features.',
      description:
        "The Magnifier project aims to develop a web application tailored for visually impaired students, providing accessibility features that enhance their learning experience. Key features include:\n1. Filters: Customizable display filters for clarity.\n2. OCR: Converts text to voice for ease.\n3. Voice Modulation: Adjustable speech settings.\n4. Zoom Options: Customizable text sizes.\n5. Live Broadcast: Sharing a specific screen so others can see it in real-time. Each viewer can customize how they view it (like zooming in or changing colors), but their changes won't affect what others see or what the person sharing the screen is doing.",
      techStack: [
        'JavaScript',
        'Python',
        'OpenCV',
        'ngrok',
        'HTML',
        'CSS',
      ],
      github: 'https://github.com/setusairam/MAGNIFIER-Project',
      image: '/images/projects/magnifier.png',
      category: ['Full Stack', 'Accessibility'],
      icon: 'mdi:eye',
    },

    {
      title: 'Predicting diabetes using machine learning for health care',
      summary:
        'Machine learning solution for early diabetes prediction using clinical features and optimized models.',
      description:
        'A machine learning solution for early diabetes prediction using key clinical features like glucose levels, blood pressure, BMI, and age. It compares Logistic Regression and Random Forest models, with preprocessing steps such as outlier removal and SMOTE for class balancing. Grid Search CV was used for hyperparameter tuning to optimize model accuracy. The outcome is a reliable diagnostic tool designed to support healthcare professionals in assessing diabetes risk and enabling timely intervention.',
      techStack: [
        'Python',
        'Logistic Regression',
        'Random Forest',
        'Flask',
        'Pandas',
        'NumPy',
        'Scikit-learn',
        'HTML',
        'CSS',
        'JavaScript',
      ],
      github:
        'https://github.com/setusairam/predicting-diabetes-using-ml-for-health-care',
      image: '/images/projects/diabetespred.png',
      category: ['Machine Learning', 'Healthcare'],
      icon: 'solar:health-bold',
    },

    {
      title: 'Hackathon Management System',
      summary:
        'Full-stack hackathon management platform for participant registration, team management, payments, project submissions, attendance, mentoring, judging, and leaderboards.',
      description:
        'A production-ready hackathon management platform designed to manage the complete lifecycle of a hackathon from participant registration to final judging and certificates. The system supports Google and email authentication, participant registration, configurable team management, team verification, payment submission, problem statement selection, project submissions, mentor assignment, QR and manual attendance, announcements, certificates, judge assignments, evaluation rubrics, automated scoring, leaderboards, reports, and role-based administration. Administrators can manage teams, participants, payments, problem statements, submissions, judges, mentors, attendance, certificates, and system settings through a centralized dashboard. The application is built as a React.js and Vite SPA with Firebase Authentication, Firestore, Storage, and Cloud Functions, with secure access control and configurable event settings.',
      techStack: [
        'React.js',
        'Vite',
        'JavaScript',
        'JSX',
        'React Router',
        'Tailwind CSS',
        'Firebase Authentication',
        'Firestore',
        'Firebase Storage',
        'Cloud Functions',
        'React Hook Form',
        'Zod',
        'TanStack Table',
        'Recharts',
        'Framer Motion',
        'QR Code',
        'Firebase Security Rules',
      ],
      github: 'https://github.com',
      image: '/images/projects/hackathon.png',
      category: ['Full Stack', 'SaaS'],
      icon: 'solar:code-square-bold',
    },

    {
      title: 'University Cultural Festival Management System',
      summary:
        'Full-stack university event management platform for cultural festivals, student activities, competitions, digital ticketing, QR attendance, and event administration.',
      description:
        'A production-ready university cultural festival and student event management platform built for universities, student unions, cultural clubs, and event organizers across Europe. The system supports event discovery, participant registration, digital QR ticket generation, event activities, workshops, performances, competitions, judge assignments, scoring, leaderboards, certificates, announcements, attendance tracking, reports, and role-based administration. Participants can register for events, manage their profiles, view tickets, join activities, and check their attendance, while administrators can manage events, participants, tickets, competitions, judges, staff, attendance, certificates, reports, and permissions. The platform uses Firebase Authentication, Firestore, Storage, Cloud Functions, App Check, and Security Rules to provide a secure full-stack architecture with role-based access control and GDPR-oriented privacy features.',
      techStack: [
        'React.js',
        'Vite',
        'JavaScript',
        'JSX',
        'React Router',
        'Tailwind CSS',
        'Firebase Authentication',
        'Firestore',
        'Firebase Storage',
        'Cloud Functions',
        'Firebase App Check',
        'React Hook Form',
        'Zod',
        'TanStack Query',
        'TanStack Table',
        'Recharts',
        'Framer Motion',
        'QR Code',
        'QR Scanner',
      ],
      github: 'https://github.com',
      image: '/images/projects/unifest.png',
      category: ['Full Stack', 'SaaS'],
      icon: 'solar:calendar-bold',
    },

    {
      title: 'Travel Planner (TravelX)',
      summary:
        'Responsive web app for trip planning with smart destination suggestions and curated tourist spots.',
      description:
        'A responsive Travel Planner web application that allows users to input trip details and receive smart travel suggestions. The app includes a curated list of popular tourist destinations and famous spots that are readily accessible under a free plan, providing a seamless and user-friendly experience for organizing trips efficiently.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      github:
        'https://github.com/setusairam/TravelX-Travel-Planner-Frontend',
      image: '/images/projects/travelplanner.png',
      category: ['Frontend', 'Web App'],
      icon: 'mdi:clipboard-check',
    },

    {
      title: 'Blockchain-Based Document Verification System',
      summary:
        'A secure and tamper-proof credential verification platform using Ethereum, IPFS, and SHA-256 hashing.',
      description:
        'A blockchain-powered document verification system that ensures authenticity, immutability, and efficient retrieval of academic and professional credentials. The platform generates SHA-256 hashes, stores documents on IPFS, records metadata on Ethereum smart contracts, and enables instant verification without exposing actual document content. Designed for scalability, decentralization, and privacy preservation.',
      techStack: [
        'Ethereum',
        'Solidity',
        'IPFS',
        'SHA-256',
        'Web3.js',
        'Bootstrap',
      ],
      github:
        'https://github.com/setusairam/Blockchain-Based-Document-Verification-System',
      image: '/images/projects/blockchain-doc-verification.png',
      category: ['Blockchain', 'Security', 'Web App'],
      icon: 'mdi:shield-check',
    },

    {
      title: 'Steganography Tool',
      summary:
        'Python application for concealing and retrieving hidden information within images securely.',
      description:
        'This steganography project presents a Python-based application that conceals and retrieves hidden information within images. It functions as a command-line and GUI tool, allowing users to embed confidential text or files into carrier images without visibly affecting their appearance. Using libraries like Pillow for image processing and Tkinter for the graphical interface, the tool enables users to select images, hide custom messages, and later extract them. This project demonstrates practical implementation of steganographic techniques, offering a simple yet effective solution for secure and discreet data hiding within image files.',
      techStack: ['Python', 'Pillow', 'Tkinter', 'stegano'],
      github: 'https://github.com/setusairam/Steganogrphy-ui',
      image: '/images/projects/steganography.png',
      category: ['Security Tool', 'Desktop App'],
      icon: 'carbon:encryption',
    },

    {
      title: 'Vision Flex',
      summary:
        'Accessible PDF reader with visual filters for individuals with visual impairments and color vision deficiencies.',
      description:
        'Vision Flex is an accessible PDF reader designed to enhance document readability for individuals with visual impairments or specific viewing preferences. Built using HTML, CSS, and JavaScript with the help of PDF.js, it allows users to upload and view PDF files in a user-friendly interface. The application offers a variety of visual filters—including grayscale, inverted colors, sepia tones, and simulated color vision deficiencies like protanopia and tritanopia—to suit different accessibility needs. Additional features include fullscreen mode and future support for PDF editing, making Vision Flex a versatile tool for inclusive digital reading.',
      techStack: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/setusairam9/VisionFlex',
      demo: 'https://setusairam9.github.io/VisionFlex/',
      image: '/images/projects/visionflex.png',
      category: ['Frontend', 'Accessibility'],
      icon: 'mdi:eye',
    },
  ];

  const publications = [
    {
      title: 'Access Control Mechanisms for Secure Websites',
      icon: 'security' as const,
      platform:
        'IEEE Students Conference on Electrical, Electronics and Computer Science (SCEECS)',
      date: '2025',
      description:
        'Developed a multi-layered access control system for web applications to protect user-sensitive data. The system combines time-based OTP authentication for primary login with an additional PIN layer to secure high-sensitivity data within user accounts. This dual-phase architecture enhances data security by applying hierarchical protection based on sensitivity level, while maintaining a smooth user experience (avg. 8s for general access, 12s for PIN-protected info). Demonstrated significant improvement over uniform security systems.',
      link: 'https://ieeexplore.ieee.org/abstract/document/10941623',
    },

    {
      title:
        'FileLedger: Blockchain-Based System for File Authenticity and Tamper Detection',
      icon: 'blockchain' as const,
      platform:
        '2025 International Conference on Future Technologies (ICFT)',
      date: '2026',
      description:
        'This research addresses document tampering and fake credentialing with a blockchain verification system employing Ethereum, IPFS, and SHA-256 hashing, making documents secure, tamper-proof, and instantly verifiable involves using UUIDs and Web3 libraries. It aims to eliminate points of failures using decentralization, this verification mechanism builds a clear, scalable, and fraud-proof digital ecosystem for academic as well as professional verification.',
      link: 'https://ieeexplore.ieee.org/document/11336558',
    },

    {
      title: 'Legacy Sync Asset Distribution Framework',
      icon: 'inheritance' as const,
      platform:
        '2025 International Conference on Future Technologies (ICFT)',
      date: '2026',
      description:
        'Current NFT marketplaces do not handle what happens to digital assets when a user becomes inactive or passes away, which can lead to lost NFTs and inheritance disputes. This research proposes a new NFT marketplace design that automatically manages digital asset inheritance using blockchain technology and smart contracts. The system detects long-term user inactivity and securely redistributes assets through four options: donating to charity, selling assets and giving the money to family, transferring NFTs directly to heirs, or transferring them to a legal representative. Tests on the Ethereum network showed very high accuracy and reliability. Overall, the solution ensures NFTs are not lost, supports legal and transparent inheritance, and can be easily integrated into existing Web3 platforms for long-term digital asset management.',
      link: 'https://ieeexplore.ieee.org/document/11336400',
    },

    {
      title: 'Predicting diabetes using machine learning for health care',
      icon: 'health' as const,
      platform: 'Not Published',
      date: '20XX',
      description:
        'Developed a machine learning system to predict diabetes using key health indicators such as glucose, blood pressure, BMI, and age. Applied data preprocessing steps including outlier removal and class balancing with SMOTE. Implemented and fine-tuned Logistic Regression and Random Forest models using Grid Search CV to evaluate performance. The study demonstrated that machine learning can significantly aid in early diabetes detection, offering healthcare professionals a reliable decision-support tool for timely intervention and improved patient outcomes.',
    },
  ];

  const filters = useMemo(() => {
    const cats = new Set<string>();

    projects.forEach((project) => {
      project.category.forEach((category) => cats.add(category));
    });

    return ['All', ...Array.from(cats).sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }

    return projects.filter((project) =>
      project.category.includes(activeFilter)
    );
  }, [activeFilter]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.32, 0.72, 0, 1] as const,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden">
      {/* Ambient background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute top-32 right-20 w-16 h-16 bg-blue-300 dark:bg-blue-700 rounded-full opacity-30"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute bottom-20 left-32 w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded-full opacity-30"
          animate={{
            scale: [1, 0.8, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <div className="text-center mb-12">
            <motion.h1
              className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
            >
              My Work
            </motion.h1>

            <motion.div
              className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full mb-6"
              initial={{
                width: 0,
              }}
              animate={{
                width: 96,
              }}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
            />

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
                delay: 0.6,
              }}
            >
              Explore my latest projects and publications showcasing
              innovative solutions and technical expertise
            </motion.p>
          </div>

          {/* Tabs */}
          <motion.div
            className="flex justify-center mb-10"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
          >
            <div className="bg-gray-100 dark:bg-gray-900 p-1 rounded-xl shadow-lg flex">
              {/* Projects */}
              <button
                onClick={() => setActiveTab('projects')}
                className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === 'projects'
                    ? 'bg-white dark:bg-black text-blue-600 dark:text-blue-400 shadow-md transform scale-105'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <Laptop size={20} />
                <span>Projects</span>
              </button>

              {/* Research */}
              <button
                onClick={() => setActiveTab('publications')}
                className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === 'publications'
                    ? 'bg-white dark:bg-black text-blue-600 dark:text-blue-400 shadow-md transform scale-105'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <Microscope size={20} />
                <span>Research</span>
              </button>
            </div>
          </motion.div>

          {/* Projects */}
          {activeTab === 'projects' && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              {/* Category filters */}
              <div className="flex flex-wrap justify-center gap-2 mb-10">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                      activeFilter === filter
                        ? 'bg-blue-600 dark:bg-blue-400 text-white dark:text-black border-blue-600 dark:border-blue-400 shadow-md'
                        : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              {/* Project cards */}
              <motion.div
                className="grid lg:grid-cols-3 md:grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.title}
                    variants={itemVariants}
                    layout
                  >
                    <ProjectCard
                      title={project.title}
                      summary={project.summary}
                      techStack={project.techStack}
                      icon={project.icon}
                      category={project.category}
                      github={project.github}
                      demo={project.demo}
                      onClick={() => handleProjectClick(project)}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Project count */}
              <div className="flex items-center justify-center gap-2 mt-10 text-sm text-gray-500 dark:text-gray-400">
                <Layers className="w-4 h-4" />

                <span>
                  Showing {filteredProjects.length} of {projects.length}{' '}
                  projects
                </span>
              </div>
            </motion.div>
          )}

          {/* Publications */}
          {activeTab === 'publications' && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
              variants={containerVariants}
            >
              {publications.map((publication) => (
                <motion.div
                  key={publication.title}
                  variants={itemVariants}
                >
                  <PublicationCard
                    title={publication.title}
                    icon={publication.icon}
                    platform={publication.platform}
                    date={publication.date}
                    description={publication.description}
                    link={publication.link}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.8,
            }}
            className="text-center mt-20 bg-blue-50 dark:bg-blue-900/20 p-12 rounded-2xl border border-blue-200 dark:border-blue-800"
          >
            <motion.div
              initial={{
                scale: 0,
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 1,
              }}
              className="mb-6"
            >
              <div className="w-16 h-16 bg-blue-600 dark:bg-blue-400 rounded-full flex items-center justify-center mx-auto">
                <Lightbulb className="w-8 h-8 text-white dark:text-black" />
              </div>
            </motion.div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in my work?
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always excited to discuss new projects and opportunities.
              Let's collaborate and create something amazing together!
            </p>

            <motion.a
              href="/contact"
              className="inline-block bg-blue-600 dark:bg-blue-400 text-white dark:text-black px-8 py-4 rounded-xl hover:bg-blue-700 dark:hover:bg-blue-500 transition-all duration-300 font-medium shadow-lg"
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              Contact me if you're interested in my work!
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </div>
  );
};

export default Projects;
