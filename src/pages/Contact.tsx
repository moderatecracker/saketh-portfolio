import React from 'react';
import {
  Terminal,
  TrendingUp,
  Mic,
  Trophy,
  Code2,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
  BookOpen,
  FileText,
  Award,
  Code,
  Sparkles,
  GraduationCap,
  PenTool,
  Calendar,
  Users,
} from 'lucide-react';

const Contact: React.FC = () => {
  // ============================================================
  // PROFESSIONAL PROFILES
  // ============================================================
  const professionalProfiles = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      description: 'Professional profile, networking & career updates',
      url: 'https://www.linkedin.com/in/setusairam-y/',
      color:
        'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600',
      iconColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      name: 'GitHub',
      icon: Github,
      description: 'Projects, repositories & open-source work',
      url: 'https://github.com/setusairam',
      color:
        'bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500',
      iconColor: 'text-gray-700 dark:text-gray-300',
    },
    {
      name: 'KARE Alumni',
      icon: Users,
      description:
        'Kalasalingam Academy of Research and Education Almaconnect',
      url: 'https://kalasalingam.almaconnect.com/profiles/y-setu-sai-ram',
      color:
        'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800 hover:border-indigo-400 dark:hover:border-indigo-600',
      iconColor: 'text-indigo-600 dark:text-indigo-400',
    },
  ];

  // ============================================================
  // CONTACT INFORMATION
  // ============================================================
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'setusairam5@gmail.com',
      href: 'mailto:setusairam5@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7XXXX XXX25',
      href: 'mailto:setusairam5@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bengaluru, Karnataka, India',
      href: 'https://www.google.com/maps/place/Bengaluru,+Karnataka/@12.9882597,77.4571531,11z/data=!3m1!4b1!4m6!3m5!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!8m2!3d12.9628957!4d77.57754!16zL20vMDljMTc?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D',
    },
  ];

  // ============================================================
  // ACADEMIC PROFILES
  // LinkedIn removed because it is already in Professional Profiles
  // ============================================================
  const academicProfiles = [
    {
      name: 'Google Scholar',
      icon: GraduationCap,
      description: 'Research publications & citations',
      url: 'https://scholar.google.com/citations?hl=en&user=tOWoREwAAAAJ',
      color:
        'bg-slate-50 dark:bg-slate-900/20 border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600',
    },
    {
      name: 'ResearchGate',
      icon: FileText,
      description: 'Academic collaboration platform',
      url: 'https://www.researchgate.net/profile/Setu-Yarlagadda',
      color:
        'bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800 hover:border-teal-400 dark:hover:border-teal-600',
    },
    {
      name: 'ORCID',
      icon: Award,
      description: 'Research contributor identifier',
      url: 'https://orcid.org/0009-0003-1463-424X',
      color:
        'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600',
    },
    {
      name: 'Scopus',
      icon: BookOpen,
      description: 'Scopus Author ID',
      url: 'https://www.scopus.com/authid/detail.uri?authorId=59738942300',
      color:
        'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800 hover:border-orange-400 dark:hover:border-orange-600',
    },
  ];

  // ============================================================
  // BLOGS / WRITING
  // ============================================================
  const blogs = [
    {
      name: 'Substack',
      icon: PenTool,
      description:
        'A space for honest reflections on life, ambition, growth, and the moments that make it worth living.',
      url: 'https://setusairam.substack.com/',
      color:
        'bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700',
    },
    {
      name: 'Technical Blog',
      icon: BookOpen,
      description: 'In-depth technical tutorials and breakdowns.',
      url: 'https://thedataandtech.blogspot.com/',
      color:
        'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
    },
    {
      name: 'Dev.to',
      icon: Code,
      description: 'Quick tips, code snippets, and developer insights.',
      url: 'https://dev.to/setusairam',
      color:
        'bg-slate-50 dark:bg-slate-900/20 border-slate-200 dark:border-slate-800',
    },
  ];

  // ============================================================
  // CODING PLATFORMS
  // ============================================================
  const codingPlatforms = [
    {
      name: 'LeetCode',
      icon: Code2,
      description: 'Data Structures & Algorithms practice',
      url: 'https://leetcode.com/YOUR_USERNAME',
      color:
        'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 hover:border-yellow-400 dark:hover:border-yellow-600',
    },
    {
      name: 'HackerRank',
      icon: Terminal,
      description: 'Problem solving & skill certifications',
      url: 'https://www.hackerrank.com/YOUR_USERNAME',
      color:
        'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600',
    },
    {
      name: 'CodeChef',
      icon: Trophy,
      description: 'Competitive programming contests',
      url: 'https://www.codechef.com/users/YOUR_USERNAME',
      color:
        'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800 hover:border-orange-400 dark:hover:border-orange-600',
    },
  ];

  // ============================================================
  // STATS
  // ============================================================
  const stats = [
    { label: 'Technical Blogs', value: '5+', icon: FileText },
    { label: 'Research Publications', value: '3', icon: GraduationCap },
    { label: 'Technical Events Conducted', value: '40+', icon: Calendar },
    { label: 'Major Projects', value: '7+', icon: Sparkles },
    { label: 'Public Speaking Sessions', value: '5', icon: Mic },
    { label: 'Failures Turned Lessons', value: '∞', icon: TrendingUp },
  ];

  // ============================================================
  // INTERESTS
  // ============================================================
  const interests = [
    'Machine Learning',
    'Data Science',
    'Cybersecurity',
    'Analytics',
    'Backend Development',
    'Design',
    'DevOps',
  ];

  // ============================================================
  // RESUME
  // ============================================================
  const handleResumeDownload = () => {
    window.open(
      'https://drive.google.com/file/d/1EOmXg02lqi5epZhs69g63qzGzkPDtBq2/view?usp=sharing',
      '_blank'
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h1>

          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full mb-6"></div>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and exciting projects.
            Let's connect and discuss how we can work together!
          </p>
        </div>

        {/* =====================================================
            CONTACT INFORMATION
        ====================================================== */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Contact Information
          </h2>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-md transition-all duration-300 group"
              >
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors flex-shrink-0">
                  <info.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                    {info.label}
                  </p>

                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-sm font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors truncate block"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {info.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            PROFESSIONAL PROFILES
            LinkedIn + GitHub + KARE Alumni
        ====================================================== */}
        <section className="mb-16">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Professional Profiles
              </h2>
            </div>

            <p className="text-gray-600 dark:text-gray-400">
              Connect with me and explore my professional journey.
            </p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
            {professionalProfiles.map((profile) => (
              <a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${profile.color} p-5 rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group`}
              >
                <div className="flex items-start gap-4">

                  {/* Profile Icon */}
                  <div className="w-11 h-11 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm flex-shrink-0">
                    <profile.icon
                      className={`w-6 h-6 ${profile.iconColor}`}
                    />
                  </div>

                  {/* Profile Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {profile.name}
                      </h3>

                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0" />
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {profile.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* =====================================================
            RESEARCH & WRITING
        ====================================================== */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Research & Writing
            </h2>

            <p className="text-gray-600 dark:text-gray-400">
              Academic profiles and technical writing platforms.
            </p>
          </div>

          {/* =================================================
              ACADEMIC PROFILES
          ================================================== */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Academic Profiles
            </h3>

            <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
              {academicProfiles.map((profile) => (
                <a
                  key={profile.name}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${profile.color} p-5 rounded-xl border-2 transition-all duration-300 hover:shadow-md group`}
                >
                  <div className="flex items-start gap-3">

                    <div className="mt-0.5 flex-shrink-0">
                      <profile.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {profile.name}
                        </h4>

                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors flex-shrink-0" />
                      </div>

                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {profile.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* =================================================
              WRITING
          ================================================== */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
              <PenTool className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Writing
            </h3>

            <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
              {blogs.map((blog) => (
                <a
                  key={blog.name}
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${blog.color} p-5 rounded-xl border-2 transition-all duration-300 hover:shadow-md group hover:border-blue-400 dark:hover:border-blue-600`}
                >
                  <div className="flex items-start gap-3">

                    <div className="mt-0.5 flex-shrink-0">
                      <blog.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {blog.name}
                        </h4>

                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors flex-shrink-0" />
                      </div>

                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {blog.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* =================================================
              KEY HIGHLIGHTS
          ================================================== */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Key Highlights
            </h3>

            <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-900/20 dark:to-slate-900/20 p-5 rounded-xl border-2 border-blue-100 dark:border-blue-900 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-md group text-center"
                >
                  <stat.icon className="w-7 h-7 text-blue-600 dark:text-blue-400 mb-3 mx-auto group-hover:scale-110 transition-transform" />

                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>

                  <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            RESEARCH & TECHNICAL INTERESTS
        ====================================================== */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Research & Technical Interests
            </h2>

            <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {interests.map((interest) => (
              <span
                key={interest}
                className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-300 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 text-sm font-medium hover:scale-105 cursor-default"
              >
                {interest}
              </span>
            ))}
          </div>
        </section>

        {/* =====================================================
            CALL TO ACTION
        ====================================================== */}
        <section className="text-center bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-900/20 dark:to-slate-900/20 p-10 rounded-2xl border border-blue-200 dark:border-blue-800">
          <div className="mb-6">
            <div className="w-14 h-14 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
              <Mail className="w-7 h-7 text-white" />
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to start a conversation?
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you have a project in mind, want to discuss opportunities,
            or just want to say hello, I'd love to hear from you. Let's create
            something amazing together!
          </p>

          <a
            href="mailto:setusairam5@gmail.com"
            className="inline-block bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Send me an email
          </a>
        </section>
      </div>
    </div>
  );
};

function App() {
  return <Contact />;
}

export default App;