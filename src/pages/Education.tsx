import React, { useState } from 'react';
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
} from 'lucide-react';

const Education: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'certifications'>(
    'education'
  );

  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(
    null
  );

  const education = [
    {
      degree: 'B.Tech – Automobile Engineering',
      institution: 'Hindustan Institute of Technology and Science',
      location: 'Chennai, India',
      period: '2023 – 2027',
      result: 'Current CGPA: 8.1',
      logo: '/images/education/hitslogo.png',
    },
    {
      degree: 'Class XII',
      institution: 'Narayana College',
      location: 'India',
      period: '2021 – 2023',
      result: '83%',
      logo: '/images/education/narayanalogo.jpg',
    },
  ];

  const certificates = [
    {
      name: 'Launchpad for Indian Motorsports',
      image: '/images/education/3.jpeg',
    },
    {
      name: 'SUPRA SAEINDIA 2025 Student Formula 2025',
      image: '/images/education/1.jpeg',
    },
    {
      name: 'F1 Training Workshop',
      image: '/images/education/4.jpeg',
    },
    {
      name: 'Internship at MGB Motors Nellore',
      image: '/images/education/7.jpeg',
    },
    {
      name: 'Horse Riding – Show Jumping',
      image: '/images/education/5.png',
    },
    {
      name: 'SUPRA SAEINDIA 2024 Student Formula 2024',
      image: '/images/education/2.jpeg',
    },
    {
      name: 'Royal Enfield Training Hub',
      image: '/images/education/9.jpeg',
    },
    {
      name: 'Vespa and Aprilia Internship',
      image: '/images/education/8.jpeg',
    },
    {
      name: '2nd Place – Horse Riding',
      image: '/images/education/6.jpeg',
    },
  ];

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
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Certifications
          </h1>

          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full" />
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="bg-gray-100 dark:bg-gray-900 p-1 rounded-xl shadow-lg flex gap-1">
            {/* Education */}
            <button
              onClick={() => setActiveTab('education')}
              className={`px-5 sm:px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                activeTab === 'education'
                  ? 'bg-white dark:bg-black text-blue-600 dark:text-blue-400 shadow-md'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <GraduationCap size={20} />
              <span>Education</span>
            </button>

            {/* Certifications */}
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-5 sm:px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                activeTab === 'certifications'
                  ? 'bg-white dark:bg-black text-blue-600 dark:text-blue-400 shadow-md'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Award size={20} />
              <span>Certifications</span>
            </button>
          </div>
        </div>

        {/* ================= EDUCATION ================= */}
        {activeTab === 'education' && (
          <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="bg-white dark:bg-gray-900 p-5 sm:p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
                  {/* Logo */}
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 sm:p-4 rounded-2xl flex-shrink-0">
                    <img
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-contain"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>

                    <p className="text-base sm:text-lg text-blue-600 dark:text-blue-400 font-semibold mb-4">
                      {edu.institution}
                    </p>

                    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <MapPin
                          size={17}
                          className="mr-2 flex-shrink-0"
                        />
                        <span className="text-sm sm:text-base">
                          {edu.location}
                        </span>
                      </div>

                      <div className="flex items-center">
                        <Calendar
                          size={17}
                          className="mr-2 flex-shrink-0"
                        />
                        <span className="text-sm sm:text-base">
                          {edu.period}
                        </span>
                      </div>
                    </div>

                    {/* Result */}
                    <div className="mt-5 inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
                      {edu.result}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ================= CERTIFICATIONS ================= */}
        {activeTab === 'certifications' && (
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {certificates.map((certificate, index) => (
                <div
                  key={certificate.image}
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 cursor-pointer group"
                  onClick={() =>
                    setSelectedCertificate(certificate.image)
                  }
                >
                  {/* Certificate Image */}
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 sm:p-4">
                    <img
                      src={certificate.image}
                      alt={certificate.name}
                      className="w-full h-52 sm:h-64 object-contain rounded-xl group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>

                  {/* Certificate Name */}
                  <div className="p-4 sm:p-5">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </span>

                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {certificate.name}
                      </h3>
                    </div>

                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 ml-10">
                      Click to view fullscreen
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ================= FULLSCREEN CERTIFICATE MODAL ================= */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedCertificate(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedCertificate(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-2xl transition-colors"
            aria-label="Close certificate"
          >
            ×
          </button>

          {/* Fullscreen Image */}
          <img
            src={selectedCertificate}
            alt="Certificate fullscreen"
            className="max-w-full max-h-[95vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

function App() {
  return <Education />;
}

export default App;