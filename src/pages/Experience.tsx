import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Calendar,
  Wrench,
  Car,
  Trophy,
} from 'lucide-react';

interface ExperienceItem {
  title: string;
  organization: string;
  location?: string;
  period: string;
  description: string;
  achievements: string[];
  icon: React.ReactNode;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: 'Automobile Service Internship',
      organization: 'Vespa & Aprilia Service Centre',
      location: 'Chennai',
      period: 'Internship',
      description:
        'Gained practical exposure to two-wheeler servicing, vehicle inspection, preventive maintenance and fault diagnosis in an automotive service environment.',

      achievements: [
        'Gained hands-on exposure to two-wheeler servicing and maintenance procedures.',
        'Observed engine and CVT/transmission service procedures.',
        'Learned practical inspection and maintenance procedures for braking and suspension systems.',
        'Gained exposure to automotive electrical-system inspection and servicing.',
        'Developed familiarity with workshop tools, service processes and customer-vehicle inspection.',
      ],

      icon: <Wrench className="w-7 h-7" />,
    },

    {
      title: 'SUPRA SAEINDIA Team Member',
      organization: 'University SUPRA SAEINDIA Team',
      period: '3 Years',
      description:
        'Active member of the university SUPRA SAEINDIA team, contributing to Formula-style race-car development, team operations and competition preparation.',

      achievements: [
        'Contributed to student Formula-style race-car development and team activities.',
        'Gained exposure to vehicle systems, design discussions, manufacturing and testing.',
        'Participated in competition preparation and technical team activities.',
        'Handled team accounts and student contributions.',
        'Supported cost tracking, budgeting and documentation activities.',
        'Collaborated with multidisciplinary team members under design, cost, schedule and competition constraints.',
      ],

      icon: <Trophy className="w-7 h-7" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden">

      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

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

        <motion.div
          className="absolute bottom-40 right-10 w-16 h-16 bg-blue-400 dark:bg-blue-600 rounded-full opacity-20"
          animate={{
            y: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute top-1/4 left-1/4 w-8 h-8 bg-blue-300 dark:bg-blue-700 rotate-45 opacity-20"
          animate={{
            rotate: [45, 225, 405],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

      </div>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">

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

          {/* =================================================
              HEADER
          ================================================= */}

          <div className="text-center mb-14">

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              className="mb-5"
            >

              <div className="w-16 h-16 bg-blue-600 dark:bg-blue-400 rounded-full flex items-center justify-center mx-auto shadow-lg">

                <Car
                  className="w-8 h-8 text-white dark:text-black"
                />

              </div>

            </motion.div>


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
              Experience
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
              Practical automotive experience through service,
              vehicle engineering and SUPRA SAEINDIA activities.
            </motion.p>

          </div>


          {/* =================================================
              EXPERIENCE TIMELINE
          ================================================= */}

          <section className="relative">

            {/* Timeline line */}

            <div className="absolute left-7 md:left-8 top-0 bottom-0 w-1 bg-blue-600 dark:bg-blue-400 rounded-full" />


            <div className="space-y-10">

              {experiences.map((experience, index) => (

                <motion.div
                  key={experience.title}
                  className="relative flex items-start gap-5 md:gap-6"
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                >

                  {/* Timeline Icon */}

                  <motion.div
                    className="relative z-10 flex-shrink-0 w-14 h-14 md:w-16 md:h-16 bg-white dark:bg-gray-900 border-4 border-blue-600 dark:border-blue-400 rounded-full shadow-lg flex items-center justify-center text-blue-600 dark:text-blue-400"
                    whileHover={{
                      scale: 1.1,
                    }}
                  >
                    {experience.icon}
                  </motion.div>


                  {/* Experience Card */}

                  <motion.div
                    className="flex-1 bg-white dark:bg-gray-900/70 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 md:p-7 shadow-lg hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300"
                    whileHover={{
                      y: -4,
                    }}
                  >

                    {/* Header */}

                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">

                      <div>

                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {experience.title}
                        </h2>

                        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                          {experience.organization}
                        </p>

                      </div>


                      <div className="flex flex-col gap-2 md:items-end">

                        {experience.location && (
                          <div className="flex items-center text-gray-600 dark:text-gray-400">

                            <MapPin
                              size={16}
                              className="mr-2 text-blue-600 dark:text-blue-400"
                            />

                            <span className="text-sm">
                              {experience.location}
                            </span>

                          </div>
                        )}


                        <div className="flex items-center text-gray-600 dark:text-gray-400">

                          <Calendar
                            size={16}
                            className="mr-2 text-blue-600 dark:text-blue-400"
                          />

                          <span className="text-sm">
                            {experience.period}
                          </span>

                        </div>

                      </div>

                    </div>


                    {/* Description */}

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {experience.description}
                    </p>


                    {/* Achievements */}

                    <div>

                      <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Key Contributions
                      </h3>

                      <ul className="space-y-2">

                        {experience.achievements.map(
                          (achievement, achievementIndex) => (

                            <motion.li
                              key={achievementIndex}
                              className="flex items-start text-gray-600 dark:text-gray-300"
                              initial={{
                                opacity: 0,
                                x: -10,
                              }}
                              whileInView={{
                                opacity: 1,
                                x: 0,
                              }}
                              viewport={{
                                once: true,
                              }}
                              transition={{
                                duration: 0.3,
                                delay:
                                  index * 0.15 +
                                  achievementIndex * 0.05,
                              }}
                            >

                              <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1.5">
                                •
                              </span>

                              <span className="leading-relaxed">
                                {achievement}
                              </span>

                            </motion.li>

                          )
                        )}

                      </ul>

                    </div>

                  </motion.div>

                </motion.div>

              ))}

            </div>

          </section>


          {/* =================================================
              SUMMARY
          ================================================= */}

          <motion.div
            className="mt-16 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-8 text-center"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >

            <div className="w-14 h-14 mx-auto mb-5 bg-blue-600 dark:bg-blue-400 rounded-full flex items-center justify-center">

              <Car
                className="w-7 h-7 text-white dark:text-black"
              />

            </div>


            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Automotive Engineering Experience
            </h2>


            <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed">
              My practical experience combines automotive service,
              vehicle inspection, maintenance, Formula-style race-car
              development and team operations through my involvement
              with SUPRA SAEINDIA.
            </p>

          </motion.div>

        </motion.div>

      </div>

    </div>
  );
};

export default Experience;