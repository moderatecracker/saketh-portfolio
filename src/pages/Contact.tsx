import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ExternalLink,
  Car,
  Wrench,
  Gauge,
  Trophy,
  BatteryCharging,
  Download,
} from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: '23mu0910003@student.hindustanuniv.ac.in',
      href: 'mailto:23mu0910003@student.hindustanuniv.ac.in',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '9177299984',
      href: 'tel:+919177299984',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chennai, India',
    },
  ];

  const professionalProfiles = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      description: 'Professional profile and career updates',
      url: 'https://linkedin.com/in/siva-saketh-reddy-duvvuru',
      color:
        'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600',
      iconColor: 'text-blue-600 dark:text-blue-400',
    },
  ];

  const interests = [
    {
      name: 'Automobile Design & Development',
      icon: Car,
    },
    {
      name: 'Powertrain',
      icon: Gauge,
    },
    {
      name: 'Vehicle Dynamics',
      icon: Gauge,
    },
    {
      name: 'Motorsport Engineering',
      icon: Trophy,
    },
    {
      name: 'Automotive Service',
      icon: Wrench,
    },
    {
      name: 'EV & Hybrid Technology',
      icon: BatteryCharging,
    },
  ];

  const highlights = [
    {
      value: '2023–2027',
      label: 'B.Tech Automobile Engineering',
    },
    {
      value: '8.1',
      label: 'Current CGPA',
    },
    {
      value: '3 Years',
      label: 'SUPRA SAEINDIA',
    },
    {
      value: '83%',
      label: 'Class XII',
    },
  ];

  const handleResumeDownload = () => {
    // Replace this with your actual resume file path when available.
    window.open('/resume.pdf', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h1>

          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full mb-6" />

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Automobile Engineering student interested in vehicle design,
            motorsport, vehicle dynamics, powertrain and automotive technology.
          </p>
        </div>

        {/* CONTACT INFORMATION */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Contact Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="flex items-center gap-4 p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-md transition-all duration-300 group"
              >
                <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors flex-shrink-0">
                  <info.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                    {info.label}
                  </p>

                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-sm font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {info.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CAREER OBJECTIVE */}
        <section className="mb-14">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                <Car className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Career Objective
              </h2>
            </div>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Motivated Automobile Engineering student with strong interest in
              vehicle design, powertrain, motorsport, vehicle dynamics and
              automotive service. Seeking opportunities to apply practical
              engineering knowledge, teamwork and problem-solving skills to the
              development of efficient and performance-oriented vehicles.
            </p>
          </div>
        </section>

        {/* KEY HIGHLIGHTS */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Key Highlights
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((highlight) => (
              <div
                key={highlight.label}
                className="bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-900/20 dark:to-slate-900/20 p-5 rounded-xl border border-blue-100 dark:border-blue-900 text-center hover:shadow-md transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {highlight.value}
                </div>

                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {highlight.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROFESSIONAL PROFILE */}
        <section className="mb-14">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Professional Profile
            </h2>

            <p className="text-gray-600 dark:text-gray-400">
              Connect with me professionally and explore my background.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {professionalProfiles.map((profile) => (
              <a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${profile.color} p-5 rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm flex-shrink-0">
                    <profile.icon
                      className={`w-6 h-6 ${profile.iconColor}`}
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {profile.name}
                      </h3>

                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {profile.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* AREAS OF INTEREST */}
        <section className="mb-14">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Areas of Interest
            </h2>

            <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {interests.map((interest) => (
              <div
                key={interest.name}
                className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-md transition-all duration-300"
              >
                <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                  <interest.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>

                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {interest.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* RESUME / CTA */}
        <section className="text-center bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-900/20 dark:to-slate-900/20 p-8 sm:p-10 rounded-2xl border border-blue-200 dark:border-blue-800">
          <div className="mb-6">
            <div className="w-14 h-14 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
              <Mail className="w-7 h-7 text-white" />
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Connect
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Interested in automobile engineering, motorsport, vehicle
            development or automotive technology? Feel free to get in touch.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="mailto:23mu0910003@student.hindustanuniv.ac.in"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 dark:bg-blue-500 text-white px-7 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Send me an email
            </a>

            <button
              onClick={handleResumeDownload}
              className="inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-7 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 font-medium shadow-sm"
            >
              <Download className="w-5 h-5" />
              View Resume
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};

function App() {
  return <Contact />;
}

export default App;