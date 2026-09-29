import React, { useState } from 'react';
import { GraduationCap, Award, Calendar, MapPin, BookOpen, Trophy, ExternalLink } from 'lucide-react';

const Education: React.FC = () => {
  //const [activeTab, setActiveTab] = useState<'education' | 'certifications' | 'achievements'>('education');
  const [activeTab, setActiveTab] = useState<'education' | 'certifications'>('education');

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Kalasalingam Academy of Research and Education',
      location: 'Srivilliputtur, India',
      period: 'Sep 2022 – May 2026',
      cgpa: '8.82/10.0',
      description: 'Specialized in Cyber Security. This Journey was a transformative journey filled with innovation, leadership, and community-building. I balanced academics with real-world projects and active participation in student chapters.',
      coursework: [
        'Data Security',
        'Operating Systems',
        'Databases',
        'Software Engineering',
        'Data Structures',
        'Computer Networks'
      ],
      achievements: [
        'Organized 20+ Major Technical Events including with 5+ Hackathons',
        'Actively Participated in Co Curricular and Extra Curricular Activities',
        'Published multiple research papers'
      ],
      logo: '/images/education/karelogo.png'
    },
    {
      degree: 'Intermediate Education',
      institution: 'Viswasai Jr College',
      location: 'Nellore, India',
      period: 'Jun 2020 - Aug 2022',
      percentage: '86%',
      description: 'Completed 11th and 12th grade with a strong focus on Mathematics, Physics, and Chemistry, laying a solid foundation in core technical subjects. Strengthened analytical and problem-solving abilities while building proficiency in English, leadership, and scientific reasoning.',
      coursework: [
        'Mathematics',
        'Physics',
        'Chemistry',
        'English'
      ],
      achievements: [
        'Qualified for JEE Advanced Exam',
        'Managed Both Co Curricular and Education'
      ],
      logo: '/images/education/veslogo.jpg'
    }
  ];

  const certifications = [
    {
      name: 'Software Development Lifecycle (SDLC)',
      platform: 'Udemy',
      year: '2026',
      logo: '/images/education/udemylogo.png',
      skills: ['SDLC', 'Agile Methodologies', 'SCRUM', 'XP'],
      link: 'https://www.udemy.com/certificate/UC-f1067cba-5631-4047-8066-874068a416bc/'
    },
    {
      name: 'Tools of the Trade: Linux and SQL',
      platform: 'Google - Coursera',
      year: '2025',
      logo: '/images/education/googlelogo.jpg',
      skills: [
        'Command-Line Interface',
        'Database Management',
        'Bash (Scripting Language)',
        'Operating Systems',
        'Relational Databases',
        'Unix',
        'Linux Commands',
        'Authentications'
      ],
      link: 'https://coursera.org/share/7b4313c2c101981c54f9b92676f2b4d6'
    },
    {
      name: 'Bootstrap 5',
      platform: 'Udemy',
      year: '2026',
      logo: '/images/education/udemylogo.png',
      skills: [ 'Custom Bootstrap', 'Utilities', 'Components', 'Layout', 'Widgets'],
      link: ' https://www.udemy.com/certificate/UC-40f03668-599f-43f5-9c89-2061f78b4f3c'
    },
    {
      name: 'Ignite India - Enterprenurship Development Program',
      platform: 'Wadhwani Foundation',
      year: '2025',
      logo: '/images/education/Wadhwanilogo.png',
      skills: ['Entrepreneurial Skills', 'Innovation', 'Idea Development', 'Business Planning', 'Leadership'],
      link: 'https://web.certificate.wfglobal.org/en/certificate?certificateId=68ff09d8340b394e18efd33f'
    },
    {
      name: "Winter School on Data Structures and Algorithms for Strings, with Applications to Search Engines",
      platform: "ACM India",
      year: "2024",
      logo: "/images/education/ACMIndiaLogo.jpg",
      skills: ["Data Structures", "Algorithms", "String Processing", "Search Engine Technologies", "Computational Thinking"],
      link: "#"
    },
    {
      name: 'Business writing & Communication',
      platform: 'Linkedin Learning',
      year: '2026',
      logo: '/images/education/linkedinfull.jpg',
      skills: ['Communication', 'Business Writing', 'Professional Writing', 'Professional Communication'],
      link: '#'
    },
    {
      name: 'Wireshark Master',
      platform: 'Udemy',
      year: '2024',
      logo: '/images/education/udemylogo.png',
      skills: ['Wireshark Tool', 'Packet Tracing', 'Packet Sniffing'],
      link: 'https://www.udemy.com/certificate/UC-0386db2a-d0a4-4d66-a4df-588b171043ee/'
    },
    {
      name: 'Introduction to Cyber Security',
      platform: 'Cisco Networking Academy',
      year: '2023',
      logo: '/images/education/ciscologo1.jpg',
      skills: ['Cyber Best Practices', 'Cybersecurity', 'Network Vulnerabilities', 'Privacy And Data Confidentiality', 'Threat Detection'],
      link: 'https://www.credly.com/badges/5cfbb274-9114-4fc6-aed1-fed62302a439'
    }
  ];

  const getTabIcon = (tab: string) => {
    switch (tab) {
      case 'education':
        return <GraduationCap size={20} />;
      case 'certifications':
        return <Award size={20} />;
      case 'achievements':
        return <Trophy size={20} />;
      default:
        return <GraduationCap size={20} />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const handleCertificationClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 dark:bg-blue-900 rounded-full opacity-20 animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20" />
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-blue-300 dark:bg-blue-700 rounded-full opacity-20" />
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-400 dark:bg-blue-600 rounded-full opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Achievements
          </h1>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full" />
        </div>

        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="bg-gray-100 dark:bg-gray-900 p-1 rounded-xl shadow-lg flex flex-col sm:flex-row gap-1 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                activeTab === 'education'
                  ? 'bg-white dark:bg-black text-blue-600 dark:text-blue-400 shadow-md'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {getTabIcon('education')}
              <span>Education</span>
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                activeTab === 'certifications'
                  ? 'bg-white dark:bg-black text-blue-600 dark:text-blue-400 shadow-md'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {getTabIcon('certifications')}
              <span>Certifications</span>
            </button>
          </div>
        </div>

        {activeTab === 'education' && (
          <div className="space-y-6 sm:space-y-8">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="bg-white dark:bg-gray-900 p-4 sm:p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 sm:p-4 rounded-2xl w-fit">
                    <img
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col space-y-3 mb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-base sm:text-lg text-blue-600 dark:text-blue-400 font-semibold">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <MapPin size={16} className="mr-2 flex-shrink-0" />
                          <span className="text-sm">{edu.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <Calendar size={16} className="mr-2 flex-shrink-0" />
                          <span className="text-sm">{edu.period}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm sm:text-base">
                      {edu.description}
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center text-sm sm:text-base">
                          <BookOpen size={16} className="mr-2 flex-shrink-0" />
                          Key Coursework
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course) => (
                            <span
                              key={course}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs sm:text-sm rounded-full"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center text-sm sm:text-base">
                          <Trophy size={16} className="mr-2 flex-shrink-0" />
                          Achievements
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i} className="text-xs sm:text-sm">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'certifications' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 cursor-pointer group"
                onClick={() => handleCertificationClick(cert.link)}
              >
                <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 mb-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-xl overflow-hidden w-fit">
                    <img
                      src={cert.logo}
                      alt={`${cert.platform} logo`}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {cert.name}
                        </h3>
                        <p className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-medium">
                          {cert.platform}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                          Completed: {cert.year}
                        </p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                        <ExternalLink size={16} className="text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2 text-sm sm:text-base">Skills Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

function App() {
  return <Education />;
}

export default App;
