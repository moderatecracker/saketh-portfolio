import React, { useState } from 'react';
import {
  ExternalLink,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Users,
} from 'lucide-react';

type TabKey = 'professional' | 'internships' | 'leadership';
interface ProfessionalExperience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  companyLogo: string;
}

interface InternshipExperience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  companyLogo: string;
}

interface LeadershipRole {
  title: string;
  organization: string;
  period: string;
  description: string;
  logo: string;
  website: string;
  achievements: string[];
}

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('leadership');

  const professionalExperience: ProfessionalExperience[] = [
    // {
    //   title: 'Software Engineer - I',
    //   company: 'Deloitte USI',
    //   location: 'Bangalore, India',
    //   period: 'Oct 2026 - Present',
    //   description: 'Joined Deloitte USI as a Software Engineer - I, contributing to innovative projects and delivering high-quality software solutions.',
    //   achievements: [
    //     'Just Getting Started',
    //   ],
    //   technologies: ['Java', 'React', 'Bootstrap', 'JavaScript', 'AWS'],
    //   companyLogo: '/images/companies/deloittelogo.jpeg',
    // },
  ];

  const internships: InternshipExperience[] = [
    {
      title: 'Software Team Lead',
      company:
        'EPICS Indiana School for the Blind and Visually Impaired (ISBVI)',
      location: 'Remote',
      period: 'Feb 2024 - May 2025',
      description:
        'Collaborative Project between Purdue University and Kalasalingam University. This project aims to develop a web application tailored for visually impaired students, providing accessibility features that enhance their learning experience.',
      achievements: [
        'Filters: Customizable display filters for clarity',
        'OCR: Converts text to voice for ease',
        'Voice Modulation: Adjustable speech settings',
        'Zoom Options: Customizable text sizes',
        'Live Broadcast: Sharing a specific screen so others can see it in real-time. Each viewer can customize how they view it (like zooming in or changing colors), but their changes won\u2019t affect what others see or what the person sharing the screen is doing.',
      ],
      technologies: ['Python', 'Raspberry Pi', 'Web Development', 'ngrok'],
      companyLogo: '/images/companies/epicslogo.jpg',
    },
  ];

  const leadershipRoles: LeadershipRole[] = [
    {
      title: 'President',
      organization: 'ACM Student Chapter KARE',
      period: 'Mar 2025 - Apr 2026',
      description:
        'Led technical workshops and hackathons, organized coding competitions, and mentored fellow students in programming concepts.',
      logo: '/images/companies/kareacmlogo.jpg',
      website: 'https://kare.acm.org',
      achievements: [
        'Spearheaded major technical events including Disfrutar 2k24, CodeSprint 100, and 15+ events.',
        'Mentored and trained new core team members to ensure leadership continuity.',
        'Played a strategic role in planning event roadmaps, handling logistics, and increasing student participation.',
        'Coordinated industry expert talks and webinars on Generative AI, Data Science, and Conversational AI.',
      ],
    },
    {
      title: 'Lead',
      organization: 'Placement and Career Tutelage KARE',
      period: 'Jan 2025 - Apr 2026',
      description:
        'Managed development projects, coordinated team activities, and facilitated knowledge sharing sessions on emerging technologies.',
      logo: '/images/companies/pactkarelogo.png',
      website: 'https://pact4u.vercel.app/',
      achievements: [
        'Made PACT as the Face of conducting placement activities in School of computing at KARE.',
        'Organized and coordinated activities including mock interviews, group discussions, resource sharing, training, and mentoring for the students, aiming to ignite the spark of success in their placement and career journeys.',
        'Led a team successfully execute events, promoting teamwork and improving the operational efficiency.',
        'Collaborated with alumni and making this grow more.',
      ],
    },
    {
      title: 'Design Head',
      organization: 'Vishaka Cultural Club',
      period: 'Mar 2025 - Apr 2026',
      description:
        'Contributing to various open-source projects, maintaining documentation, and helping newcomers get started with open source.',
      logo: '/images/companies/vishakaclublogo.jpg',
      website: 'https://github.com',
      achievements: [
        'Designed posters, banners, and social media creatives for event promotions.',
        'Played a vital role in branding efforts that increased event visibility and student engagement.',
        'Increased the reach and made the events successful',
        'Designs played a vital role in promotions',
      ],
    },
    {
      title: 'Blogger and Graphic Designer',
      organization: 'ACM Student Chapter KARE',
      period: 'Dec 2023 - Mar 2025',
      description:
        'Contributing to various open-source projects, maintaining documentation, and helping newcomers get started with open source.',
      logo: '/images/companies/kareacmlogo.jpg',
      website: 'https://kare.acm.org',
      achievements: [
        'Published a Magazine with 60+ Interactive content on Our Chapter',
        'Contributed to social media strategy by creating content that boosted event registrations and page impressions by 3x during key campaigns',
        'Designed event posters, certificates, and promotional creatives for 15+ flagship ACM events, ensuring strong visual identity and brand consistency',
      ],
    },
    {
      title: 'Technical Lead',
      organization: 'ScoreCraft',
      period: 'Sep 2024 - May 2025',
      description:
        'Led the technical operations of the club, ensuring smooth execution of quizzes, competitions, and hackathons with a focus on security and efficiency.',
      logo: '/images/companies/scorecraftlogo.jpg',
      website: 'https://scorecraft.org',
      achievements: [
        'Organized and managed technical infrastructure for GATE competitions, quizzes, and hackathons with 200+ participants',
        'Ensured secure platforms and smooth technical workflows during hackathons, minimizing downtime and errors',
        'Developed guidelines and support systems for participants to improve competition experience',
        'Collaborated with team members to design and implement fair evaluation mechanisms',
        'Provided technical mentorship to participants, fostering problem-solving and innovation',
      ],
    },
  ];

  const getTabIcon = (tab: TabKey) => {
    switch (tab) {
      case 'professional':
        return <Briefcase size={20} />;
      case 'internships':
        return <GraduationCap size={20} />;
      case 'leadership':
        return <Users size={20} />;
      default:
        return <Briefcase size={20} />;
    }
  };

  type AnyExperience = ProfessionalExperience | InternshipExperience | LeadershipRole;

  const getCurrentData = (): AnyExperience[] => {
    switch (activeTab) {
      case 'professional':
        return professionalExperience;
      case 'internships':
        return internships;
      case 'leadership':
        return leadershipRoles;
      default:
        return leadershipRoles;
    }
  };

  const getLogo = (exp: AnyExperience): string =>
    'companyLogo' in exp ? exp.companyLogo : exp.logo;

  const getOrgName = (exp: AnyExperience): string =>
    'company' in exp ? exp.company : exp.organization;

  const getLocation = (exp: AnyExperience): string | undefined =>
    'location' in exp ? exp.location : undefined;

  const getWebsite = (exp: AnyExperience): string | undefined =>
    'website' in exp ? exp.website : undefined;

  const getTechnologies = (exp: AnyExperience): string[] | undefined =>
    'technologies' in exp ? exp.technologies : undefined;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 dark:bg-blue-900 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-blue-300 dark:bg-blue-700 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-400 dark:bg-blue-600 rounded-full opacity-20 animate-spin"></div>

        {/* Vector shapes */}
        <div className="absolute top-1/3 left-1/5 w-12 h-12 bg-blue-200 dark:bg-blue-800 transform rotate-45 opacity-15 animate-spin"></div>
        <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-blue-300 dark:bg-blue-700 rounded-full opacity-15 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="fade-in">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 slide-down">
              Experience
            </h1>
            <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full expand-line"></div>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12 slide-up">
            <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-xl shadow-lg flex flex-wrap justify-center">
              <button
                onClick={() => setActiveTab('professional')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 m-1 ${
                  activeTab === 'professional'
                    ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-md transform scale-105'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {getTabIcon('professional')}
                <span>Professional</span>
              </button>
              <button
                onClick={() => setActiveTab('internships')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 m-1 ${
                  activeTab === 'internships'
                    ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-md transform scale-105'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {getTabIcon('internships')}
                <span>Internships</span>
              </button>
              <button
                onClick={() => setActiveTab('leadership')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 m-1 ${
                  activeTab === 'leadership'
                    ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-md transform scale-105'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {getTabIcon('leadership')}
                <span>Volunteering</span>
              </button>
            </div>
          </div>

          {/* Content Section */}
          <section>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-600 dark:bg-blue-400 rounded-full timeline-line"></div>

              <div className="space-y-12">
                {getCurrentData().map((exp, index) => (
                  <div
                    key={`${exp.title}-${getOrgName(exp)}-${index}`}
                    className="relative flex items-start space-x-6 experience-item"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Timeline dot */}
                    <div
                      className={`relative z-10 flex items-center justify-center ${
                        activeTab === 'leadership' ? 'w-20 h-20' : 'w-16 h-16'
                      } bg-white dark:bg-gray-900 border-4 border-blue-600 dark:border-blue-400 rounded-full shadow-lg timeline-dot hover:scale-110 transition-transform duration-300`}
                    >
                      <img
                        src={getLogo(exp)}
                        alt={`${getOrgName(exp)} logo`}
                        className={`${
                          activeTab === 'leadership' ? 'w-12 h-12' : 'w-10 h-10'
                        } rounded-full object-cover`}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src =
                            'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop';
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:-translate-y-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {exp.title}
                          </h3>
                          <div className="flex items-center space-x-2">
                            <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                              {getOrgName(exp)}
                            </p>
                            {getWebsite(exp) && (
                              <a
                                href={getWebsite(exp)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:scale-110"
                              >
                                <ExternalLink size={16} />
                              </a>
                            )}
                          </div>
                        </div>
                        <div className="mt-2 md:mt-0 space-y-1">
                          {getLocation(exp) && (
                            <div className="flex items-center text-gray-600 dark:text-gray-400">
                              <MapPin size={16} className="mr-2" />
                              <span className="text-sm">{getLocation(exp)}</span>
                            </div>
                          )}
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <Calendar size={16} className="mr-2" />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {exp.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                          Key Achievements:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="achievement-item"
                              style={{ animationDelay: `${i * 0.1}s` }}
                            >
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {getTechnologies(exp) && (
                        <div className="flex flex-wrap gap-2">
                          {getTechnologies(exp)!.map((tech, techIndex) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full tech-tag hover:scale-105 transition-transform duration-200"
                              style={{ animationDelay: `${techIndex * 0.1}s` }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <style>{`
        .fade-in { animation: fadeIn 0.6s ease-out; }
        .slide-down { animation: slideDown 0.6s ease-out 0.2s both; }
        .slide-up { animation: slideUp 0.6s ease-out 0.3s both; }
        .expand-line { animation: expandLine 0.8s ease-out 0.4s both; }
        .timeline-line { animation: drawLine 1.5s ease-out 0.5s both; }
        .timeline-dot { animation: popIn 0.5s ease-out both; }
        .experience-item { animation: slideInLeft 0.6s ease-out both; }
        .achievement-item { animation: fadeInLeft 0.3s ease-out both; }
        .tech-tag { animation: scaleIn 0.3s ease-out both; }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes expandLine { from { width: 0; } to { width: 6rem; } }
        @keyframes drawLine { from { height: 0; } to { height: 100%; } }
        @keyframes popIn { from { opacity: 0; transform: scale(0); } to { opacity: 1; transform: scale(1); } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fadeInLeft { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0); } to { opacity: 1; transform: scale(1); } }
      `}</style>
    </div>
  );
};

export default Experience;
