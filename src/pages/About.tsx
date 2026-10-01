import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Download } from 'lucide-react';

const About: React.FC = () => {
  const skillCategories = [
    {
      title: 'Automobile Engineering',
      icon: 'mdi:car-cog',
      skills: [
        { name: 'IC Engines', icon: 'mdi:engine-outline' },
        { name: 'Transmission', icon: 'mdi:car-shift-pattern' },
        { name: 'Braking', icon: 'mdi:car-brake-alert' },
        { name: 'Steering', icon: 'mdi:steering' },
        { name: 'Suspension', icon: 'mdi:car-side' },
        { name: 'Vehicle Dynamics', icon: 'mdi:car-speed-limiter' },
        { name: 'Powertrain', icon: 'mdi:engine' },
        { name: 'Automotive Systems', icon: 'mdi:car-cog' },
      ],
    },
    {
      title: 'Design & Analysis',
      icon: 'mdi:vector-square',
      skills: [
        { name: 'CAD Modelling', icon: 'mdi:cube-outline' },
        { name: 'Component Design', icon: 'mdi:cog-outline' },
        { name: 'Simulation', icon: 'mdi:chart-bell-curve' },
        { name: 'Material Selection', icon: 'mdi:layers-triple' },
        { name: 'Manufacturing', icon: 'mdi:factory' },
        { name: 'Reliability', icon: 'mdi:shield-check' },
        { name: 'Weight Reduction', icon: 'mdi:weight-kilogram' },
        { name: 'Documentation', icon: 'mdi:file-document-outline' },
      ],
    },
    {
      title: 'EV & Hybrid Technology',
      icon: 'mdi:car-electric',
      skills: [
        { name: 'EV Technology', icon: 'mdi:car-electric' },
        { name: 'Hybrid Vehicles', icon: 'mdi:car-hatchback' },
        { name: 'Regenerative Braking', icon: 'mdi:car-brake-parking' },
        { name: 'Battery Systems', icon: 'mdi:battery-high' },
        { name: 'Energy Management', icon: 'mdi:lightning-bolt' },
        { name: 'Energy Recovery', icon: 'mdi:sync' },
        { name: 'Electric Mobility', icon: 'mdi:scooter-electric' },
        { name: 'Power Electronics', icon: 'mdi:flash' },
      ],
    },
    {
      title: 'Automotive & Professional',
      icon: 'mdi:wrench-cog',
      skills: [
        { name: 'Vehicle Inspection', icon: 'mdi:car-search' },
        { name: 'Troubleshooting', icon: 'mdi:car-wrench' },
        { name: 'Maintenance', icon: 'mdi:car-cog' },
        { name: 'Workshop Practice', icon: 'mdi:garage' },
        { name: 'SUPRA SAEINDIA', icon: 'mdi:racing-helmet' },
        { name: 'Team Coordination', icon: 'mdi:account-group' },
        { name: 'Cost Tracking', icon: 'mdi:cash-multiple' },
        { name: 'Budgeting', icon: 'mdi:calculator-variant' },
      ],
    },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'mdi:linkedin',
      url: 'https://linkedin.com/in/siva-saketh-reddy-duvvuru',
    },
  ];

  const handleResumeDownload = () => {
    window.open('#', '_blank');
  };

  const professionalTitles = [
    'Automobile Engineering Student',
    'Motorsport Enthusiast',
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden">

      {/* Background decorative elements */}
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
          className="absolute bottom-40 right-10 w-18 h-18 bg-blue-400 dark:bg-blue-600 rounded-full opacity-30"
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

        {/* Geometric shapes */}

        <motion.div
          className="absolute top-1/4 left-1/4 w-8 h-8 bg-blue-300 dark:bg-blue-700 transform rotate-45 opacity-20"
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

        <motion.div
          className="absolute top-3/4 right-1/3 w-6 h-6 bg-blue-400 dark:bg-blue-600 transform rotate-12 opacity-20"
          animate={{
            rotate: [12, 192, 372],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          {/* =====================================================
              HERO SECTION
          ===================================================== */}

          <div className="grid lg:grid-cols-3 gap-8 items-center mb-16">

            {/* LEFT SIDE */}

            <div className="lg:col-span-2 order-2 lg:order-1">

              <motion.h1
                className="text-4xl font-bold text-gray-900 dark:text-white mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Hi, I'm Siva Saketh Reddy
              </motion.h1>

              {/* Professional Titles */}

              <motion.div
                className="mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex flex-wrap items-center gap-2">

                  {professionalTitles.map((title, index) => (
                    <React.Fragment key={title}>

                      <motion.span
                        className="text-xl font-semibold text-blue-600 dark:text-blue-400"
                        initial={{
                          opacity: 0,
                          scale: 0.8,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          duration: 0.4,
                          delay: 0.4 + index * 0.1,
                        }}
                        whileHover={{
                          scale: 1.05,
                        }}
                      >
                        {title}
                      </motion.span>

                      {index < professionalTitles.length - 1 && (
                        <span className="text-blue-400 dark:text-blue-500 font-bold">
                          •
                        </span>
                      )}

                    </React.Fragment>
                  ))}

                </div>
              </motion.div>

              {/* CAREER OBJECTIVE */}

              <motion.p
                className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.6,
                }}
              >
                Motivated Automobile Engineering student with strong interest
                in vehicle design, powertrain, motorsport, vehicle dynamics
                and automotive service. Seeking opportunities to apply
                practical engineering knowledge, teamwork and problem-solving
                skills to the development of efficient and
                performance-oriented vehicles.
              </motion.p>

              {/* SOCIAL */}

              <motion.div
                className="flex items-center space-x-4 mb-6"
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.8,
                }}
              >

                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    whileHover={{
                      scale: 1.2,
                      rotate: 5,
                    }}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: 1.0 + index * 0.1,
                    }}
                  >
                    <Icon
                      icon={link.icon}
                      className="w-6 h-6"
                    />
                  </motion.a>
                ))}

              </motion.div>

              {/* RESUME BUTTON */}

              <motion.button
                onClick={handleResumeDownload}
                className="bg-blue-600 dark:bg-blue-400 text-white dark:text-black px-6 py-3 rounded-xl hover:bg-blue-700 dark:hover:bg-blue-500 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
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
                  delay: 1.2,
                }}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                <Download size={20} />
                <span>Download Resume</span>
              </motion.button>

            </div>

            {/* =====================================================
                PROFILE IMAGE
            ===================================================== */}

            <div className="order-1 lg:order-2 flex justify-center">

              <motion.div
                className="relative"
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                }}
              >

                <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-blue-200 dark:border-blue-800">

                  <img
                    src="/images/profile/profile.jpeg"
                    alt="Siva Saketh Reddy - Automobile Engineering Student"
                    className="w-full h-full object-cover"
                  />

                </div>

                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />

                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                  }}
                />

              </motion.div>

            </div>

          </div>


          {/* =====================================================
              SKILLS SECTION
          ===================================================== */}

          <motion.section
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
              delay: 0.2,
            }}
            className="mb-16"
          >

            <div className="text-center mb-10">

              <motion.span
                className="inline-block text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-2"
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                }}
              >
                Technical Skills
              </motion.span>

              <motion.h2
                className="text-4xl font-bold text-gray-900 dark:text-white"
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.1,
                }}
              >
                Engineering Skills
              </motion.h2>

            </div>


            {/* SKILL CARDS */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {skillCategories.map((category, catIndex) => (

                <motion.div
                  key={category.title}
                  className="group relative bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-xl dark:hover:shadow-blue-900/20 transition-all duration-300"
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: catIndex * 0.1,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                >

                  {/* CATEGORY TITLE */}

                  <div className="flex justify-center items-center gap-3 text-center mb-6">

                    <Icon
                      icon={category.icon}
                      className="w-6 h-6 text-blue-600 dark:text-blue-400"
                    />

                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white inline-block pb-2 border-b-2 border-blue-500 dark:border-blue-400 px-4">
                      {category.title}
                    </h3>

                  </div>


                  {/* SKILLS */}

                  <div className="grid grid-cols-4 gap-4">

                    {category.skills.map((skill, skillIndex) => (

                      <motion.div
                        key={skill.name}
                        className="flex flex-col items-center gap-2 cursor-default"
                        initial={{
                          opacity: 0,
                          scale: 0.8,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.3,
                          delay:
                            catIndex * 0.1 +
                            skillIndex * 0.04,
                        }}
                        whileHover={{
                          scale: 1.1,
                          y: -3,
                        }}
                      >

                        <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-gray-800 flex items-center justify-center">

                          <Icon
                            icon={skill.icon}
                            className="w-7 h-7 text-blue-600 dark:text-blue-400"
                          />

                        </div>

                        <span className="text-xs font-medium text-gray-600 dark:text-gray-400 text-center">
                          {skill.name}
                        </span>

                      </motion.div>

                    ))}

                  </div>

                </motion.div>

              ))}

            </div>

          </motion.section>


          {/* =====================================================
              SHORT PROFESSIONAL SUMMARY
          ===================================================== */}

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
              delay: 0.6,
            }}
            className="text-center bg-gray-50 dark:bg-gray-900 p-8 rounded-lg border border-gray-200 dark:border-gray-800"
          >

            <Icon
              icon="mdi:racing-helmet"
              className="w-10 h-10 mx-auto mb-4 text-blue-600 dark:text-blue-400"
            />

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Automobile Engineering | Motorsport | Vehicle Technology
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
              Passionate about automobile design, powertrain systems,
              vehicle dynamics, motorsport engineering, automotive service
              and the future of electric and hybrid mobility.
            </p>

            <motion.a
              href="/contact"
              className="inline-block bg-blue-600 dark:bg-blue-400 text-white dark:text-black px-8 py-3 rounded-md hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              Contact Me
            </motion.a>

          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default About;