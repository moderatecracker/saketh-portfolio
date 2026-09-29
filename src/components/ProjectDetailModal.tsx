import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';
import { Icon } from '@iconify/react';
import { useEffect } from 'react';

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    summary: string;
    description: string;
    techStack: string[];
    github: string;
    image: string;
    category: string[];
    demo?: string;
  } | null;
}

const ProjectDetailModal = ({ isOpen, onClose, project }: ProjectDetailModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="bg-white dark:bg-gray-900 w-full sm:w-full sm:max-w-2xl sm:rounded-2xl rounded-t-2xl shadow-2xl max-h-[90vh] sm:max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-4 sm:p-6 flex justify-between items-center z-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white pr-8">
                Project Details
              </h2>
              <button
                onClick={onClose}
                className="absolute right-4 top-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X size={24} className="text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            <div className="p-4 sm:p-6">
              <div className="flex flex-col gap-6">
                <div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 sm:h-80 object-cover rounded-xl"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2">
                      {project.category.map((cat) => (
                        <span
                          key={cat}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Overview
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed whitespace-pre-wrap">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Links
                    </h4>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                      >
                        <Github size={20} />
                        <span>GitHub</span>
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                        >
                          <ExternalLink size={20} />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailModal;