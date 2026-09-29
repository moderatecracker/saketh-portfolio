import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  Blocks,
  FileKey2,
  Brain,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { useState } from 'react';

interface PublicationCardProps {
  title: string;
  platform: string;
  date: string;
  description: string;
  link?: string;
  icon?: 'security' | 'blockchain' | 'inheritance' | 'health';
}

const PublicationCard: React.FC<PublicationCardProps> = ({
  title,
  platform,
  date,
  description,
  link,
  icon = 'security',
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const summary = description.split('.')[0] + '.';

  // Select icon based on publication type
  const publicationIcons = {
    security: ShieldCheck,
    blockchain: Blocks,
    inheritance: FileKey2,
    health: Brain,
  };

  const Icon = publicationIcons[icon];

  return (
    <motion.div
      className="bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-all duration-300"
      layout
    >
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-3">
          <motion.div
            className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </motion.div>

          <span className="text-sm text-gray-500 dark:text-gray-400">
            {platform} • {date}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          {title}
        </h3>

        <AnimatePresence mode="wait">
          {!isExpanded ? (
            <motion.p
              key="summary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4"
            >
              {summary}
            </motion.p>
          ) : (
            <motion.p
              key="full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4"
            >
              {description}
            </motion.p>
          )}
        </AnimatePresence>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium"
          >
            <span>{isExpanded ? 'Show Less' : 'Read More'}</span>

            {isExpanded ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </button>

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span className="text-sm">View Publication</span>
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PublicationCard;
