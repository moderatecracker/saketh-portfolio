import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Car,
  Cog,
  BatteryCharging,
  Gauge,
  Layers,
  Lightbulb,
} from 'lucide-react';

interface Project {
  title: string;
  summary: string;
  description: string;
  technologies: string[];
  category: string[];
  icon: React.ReactNode;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const [activeFilter, setActiveFilter] =
    useState<string>('All');

  const projects: Project[] = [
    {
      title: 'E-Bicycle with Regenerative Braking',

      summary:
        'Concept development of an electric bicycle with regenerative braking for improved energy utilisation.',

      description:
        'Worked on an E-Bicycle concept incorporating regenerative braking to recover energy during braking and improve overall energy utilisation. The project focused on understanding the principles of electric mobility, regenerative braking, energy recovery and battery charging. The study explored how braking energy that would normally be lost as heat can be converted into useful electrical energy and stored for later use.',

      technologies: [
        'Electric Mobility',
        'Regenerative Braking',
        'Battery Systems',
        'Energy Recovery',
        'Vehicle Dynamics',
      ],

      category: [
        'Electric Vehicles',
        'Vehicle Dynamics',
      ],

      icon: (
        <BatteryCharging className="w-7 h-7" />
      ),
    },

    {
      title: 'Automatic Chain Tensioner',

      summary:
        'Mechanical mechanism concept for maintaining suitable chain tension and reducing manual adjustment.',

      description:
        'Developed a mechanism concept for maintaining appropriate chain tension during operation. The project focused on reducing the need for frequent manual chain adjustment while maintaining reliable operation. Engineering considerations included mechanism design, component interaction, manufacturability, reliability and practical automotive applications.',

      technologies: [
        'Mechanical Design',
        'Mechanism Design',
        'Component Design',
        'Manufacturing',
        'Reliability',
      ],

      category: [
        'Mechanical Design',
        'Automotive',
      ],

      icon: (
        <Cog className="w-7 h-7" />
      ),
    },

    {
      title: 'Vehicle Braking & Energy Recovery Study',

      summary:
        'Study of braking-energy losses and potential recovery strategies for lightweight electric mobility.',

      description:
        'Studied the energy losses associated with conventional vehicle braking and explored potential energy recovery strategies. The project focused on regenerative braking, vehicle deceleration, energy conversion and battery storage. The study provided an understanding of how braking systems can be integrated with energy recovery technologies to improve vehicle efficiency, particularly in lightweight electric mobility applications.',

      technologies: [
        'Vehicle Dynamics',
        'Braking Systems',
        'Regenerative Braking',
        'Energy Recovery',
        'Electric Vehicles',
      ],

      category: [
        'Vehicle Dynamics',
        'Electric Vehicles',
      ],

      icon: (
        <Gauge className="w-7 h-7" />
      ),
    },

    {
      title: 'Automotive Component Design Study',

      summary:
        'Engineering design study focused on material selection, manufacturability, reliability and weight reduction.',

      description:
        'Applied engineering design considerations to the development of automotive components. The study focused on selecting suitable materials, considering manufacturability, improving reliability and reducing component weight while maintaining functional requirements. The project provided practical exposure to the engineering decision-making involved in developing efficient and performance-oriented vehicle components.',

      technologies: [
        'Automotive Design',
        'CAD Modelling',
        'Material Selection',
        'Manufacturing',
        'Reliability',
        'Weight Reduction',
      ],

      category: [
        'Automotive Design',
        'Mechanical Design',
      ],

      icon: (
        <Car className="w-7 h-7" />
      ),
    },
  ];

  const filters = useMemo(() => {
    const categories = new Set<string>();

    projects.forEach((project) => {
      project.category.forEach((category) => {
        categories.add(category);
      });
    });

    return ['All', ...Array.from(categories).sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }

    return projects.filter((project) =>
      project.category.includes(activeFilter)
    );
  }, [activeFilter]);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
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

      {/* =====================================================
          BACKGROUND
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

        <motion.div
          className="absolute top-3/4 right-1/3 w-6 h-6 bg-blue-400 dark:bg-blue-600 rotate-12 opacity-20"
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


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">

        {/* =====================================================
            HEADER
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
          }}
        >

          <div className="text-center mb-12">

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
              My Projects
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
              Academic and engineering projects focused on
              automobile design, vehicle dynamics, braking systems
              and electric mobility.
            </motion.p>

          </div>


          {/* =====================================================
              FILTERS
          ===================================================== */}

          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-10"
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

          </motion.div>


          {/* =====================================================
              PROJECT CARDS
          ===================================================== */}

          <motion.div
            className="grid lg:grid-cols-2 gap-6"
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

                <motion.div
                  onClick={() => {
                    setSelectedProject(project);
                  }}
                  className="group cursor-pointer h-full bg-white dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 rounded-2xl p-7 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-xl dark:hover:shadow-blue-900/20 transition-all duration-300"
                  whileHover={{
                    y: -5,
                  }}
                >

                  {/* Project icon */}

                  <div className="flex items-start gap-5">

                    <motion.div
                      className="flex-shrink-0 w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                      }}
                    >
                      {project.icon}
                    </motion.div>


                    <div className="flex-1">

                      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h2>


                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                        {project.summary}
                      </p>


                      {/* Categories */}

                      <div className="flex flex-wrap gap-2 mb-5">

                        {project.category.map((category) => (

                          <span
                            key={category}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                          >
                            {category}
                          </span>

                        ))}

                      </div>


                      {/* Technologies */}

                      <div className="flex flex-wrap gap-2">

                        {project.technologies.map((technology) => (

                          <span
                            key={technology}
                            className="text-xs text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 rounded-md px-2 py-1"
                          >
                            {technology}
                          </span>

                        ))}

                      </div>

                    </div>

                  </div>


                  {/* View details */}

                  <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">

                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      View Project Details →
                    </span>

                  </div>

                </motion.div>

              </motion.div>

            ))}

          </motion.div>


          {/* =====================================================
              PROJECT COUNT
          ===================================================== */}

          <div className="flex items-center justify-center gap-2 mt-10 text-sm text-gray-500 dark:text-gray-400">

            <Layers className="w-4 h-4" />

            <span>
              Showing {filteredProjects.length} of{' '}
              {projects.length} projects
            </span>

          </div>


          {/* =====================================================
              CTA
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

                <Lightbulb
                  className="w-8 h-8 text-white dark:text-black"
                />

              </div>

            </motion.div>


            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in my work?
            </h2>


            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm interested in automobile design, powertrain,
              vehicle dynamics, motorsport engineering,
              automotive service and electric mobility.
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
              Get in Touch
            </motion.a>

          </motion.div>

        </motion.div>

      </div>


      {/* =====================================================
          PROJECT DETAIL MODAL
      ===================================================== */}

      {selectedProject && (

        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          onClick={() => setSelectedProject(null)}
        >

          <motion.div
            className="w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8"
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            onClick={(event) => event.stopPropagation()}
          >

            {/* Modal header */}

            <div className="flex items-start justify-between gap-5 mb-6">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  {selectedProject.icon}
                </div>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedProject.title}
                </h2>

              </div>


              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-2xl"
                aria-label="Close"
              >
                ×
              </button>

            </div>


            {/* Categories */}

            <div className="flex flex-wrap gap-2 mb-6">

              {selectedProject.category.map((category) => (

                <span
                  key={category}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                >
                  {category}
                </span>

              ))}

            </div>


            {/* Description */}

            <div className="mb-6">

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Project Overview
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {selectedProject.description}
              </p>

            </div>


            {/* Technologies */}

            <div>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Areas & Technologies
              </h3>

              <div className="flex flex-wrap gap-2">

                {selectedProject.technologies.map(
                  (technology) => (

                    <span
                      key={technology}
                      className="px-3 py-2 rounded-lg text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      {technology}
                    </span>

                  )
                )}

              </div>

            </div>


            {/* Close button */}

            <button
              onClick={() => setSelectedProject(null)}
              className="mt-8 w-full bg-blue-600 dark:bg-blue-400 text-white dark:text-black py-3 rounded-xl font-medium hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors"
            >
              Close
            </button>

          </motion.div>

        </motion.div>

      )}

    </div>
  );
};

export default Projects;
