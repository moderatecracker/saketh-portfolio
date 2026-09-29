import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  summary: string;
  techStack: string[];
  icon: string;
  category: string[];
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  summary,
  techStack,
  icon,
  category,
  onClick,
}) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
      whileHover={{ y: -5 }}
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <motion.div
            className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Icon icon={icon} className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </motion.div>
          <div className="flex flex-wrap gap-1 justify-end">
            {category.map((cat) => (
              <span
                key={cat}
                className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full text-xs font-medium"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-2">
          {summary}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
          {techStack.length > 4 && (
            <span className="px-2 py-1 text-gray-500 dark:text-gray-400 text-xs">
              +{techStack.length - 4} more
            </span>
          )}
        </div>

        <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:translate-x-2 transition-transform">
          <span>View Details</span>
          <ExternalLink size={14} className="ml-1" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
