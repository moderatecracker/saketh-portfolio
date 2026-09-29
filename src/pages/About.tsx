import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Download } from 'lucide-react';

const About: React.FC = () => {
  const skillCategories = [
    {
      title: 'Python Development',
      icon: 'logos:python',
      skills: [
        { name: 'Python', icon: 'akar-icons:python-fill' },
        { name: 'Django', icon: 'akar-icons:django-fill' },
        { name: 'Flask', icon: 'bxl:flask-old' },
        { name: 'NumPy', icon: 'devicon-plain:numpy' },
        { name: 'Pandas', icon: 'simple-icons:pandas' },
        { name: 'Git', icon: 'bi:git' },
        { name: 'Docker', icon: 'bxl:docker' },
        { name: 'SQL Lite', icon: 'devicon-plain:sqlite' }
        
      ]
    },
    {
      title: 'Data Analytics',
      icon: 'mdi:chart-line',
      skills: [
        { name: 'Python', icon: 'akar-icons:python-fill' },
        { name: 'My SQL', icon: 'griddy-icons:sql' },
        { name: 'Postgre SQL', icon: 'devicon-plain:postgresql' },
        { name: 'Power BI', icon: 'arcticons:microsoft-power-bi' },
        { name: 'Excel', icon: 'healthicons:excel-logo' },
        { name: 'Tableau', icon: 'cib:tableau' },
        { name: 'Matplotlib', icon: 'devicon-plain:matplotlib' },
        { name: 'Seaborn', icon: 'devicon-plain:seaborn' }
      ]
    },
    {
      title: 'Java Full Stack',
      icon: 'devicon:java',
      skills: [
        { name: 'JAVA', icon: 'bxl:java' },
        { name: 'HTML', icon: 'griddy-icons:html-5' },
        { name: 'CSS', icon: 'flowbite:css-solid' },
        { name: 'JavaScript', icon: 'fa-brands:js' },
        { name: 'Bootstrap', icon: 'akar-icons:bootstrap-fill' },
        { name: 'React', icon: 'akar-icons:react-fill' },
        { name: 'AWS', icon: 'bxl:aws' },
        { name: 'Eclipse IDE', icon: 'devicon-plain:eclipse' }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: 'mdi:wrench',
      skills: [
        { name: 'GIT', icon: 'bi:git' },
        { name: 'Github', icon: 'lineicons:github' },
        { name: 'Linux', icon: 'cib:linux' },
        { name: 'Ubuntu', icon: 'bi:ubuntu' },
        { name: 'Canva', icon: 'bxl:canva' },
        { name: 'MongoDB', icon: 'flowbite:mongo-db-solid' },
        { name: 'Jupyter', icon: 'carbon:logo-jupyter' },
        { name: 'VS Code', icon: 'mdi:microsoft-visual-studio-code' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: 'mdi:github', url: 'https://github.com/setusairam' },
    { name: 'LinkedIn', icon: 'mdi:linkedin', url: 'https://www.linkedin.com/in/setusairam-y/' },
    { name: 'Twitter', icon: 'mdi:twitter', url: 'https://x.com/itsSSR_10' },
  ];

  const handleResumeDownload = () => {
    window.open('https://drive.google.com/file/d/1BEyzwLM9qKpG5BBLuSKl1myKHkyeQbSv/view?usp=sharing', '_blank');
  };

  const professionalTitles = [
    'Developer'
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-10 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-30"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-32 right-20 w-16 h-16 bg-blue-300 dark:bg-blue-700 rounded-full opacity-30"
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-32 w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded-full opacity-30"
          animate={{ 
            scale: [1, 0.8, 1],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-40 right-10 w-18 h-18 bg-blue-400 dark:bg-blue-600 rounded-full opacity-30"
          animate={{ 
            y: [0, 15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Geometric shapes */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-8 h-8 bg-blue-300 dark:bg-blue-700 transform rotate-45 opacity-20"
          animate={{ 
            rotate: [45, 225, 405],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-3/4 right-1/3 w-6 h-6 bg-blue-400 dark:bg-blue-600 transform rotate-12 opacity-20"
          animate={{ 
            rotate: [12, 192, 372],
            y: [0, -25, 0]
          }}
          transition={{ 
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Hero Section */}
          <div className="grid lg:grid-cols-3 gap-8 items-center mb-16">
            <div className="lg:col-span-2 order-2 lg:order-1">
              <motion.h1 
                className="text-4xl font-bold text-gray-900 dark:text-white mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Hi, I'm Yarlagadda Setu Sai Ram
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
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {title}
                      </motion.span>
                      {index < professionalTitles.length - 1 && (
                        <span className="text-blue-400 dark:text-blue-500 font-bold">•</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </motion.div>

              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-300 mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                A passionate and creative professional with a strong foundation 
                in modern development practices, data analytics, and digital design. 
                I enjoy building secure and scalable solutions that solve real-world problems and 
                thrive in collaborative, fast-paced environments that encourage innovation and continuous learning.
              </motion.p>
              
              <motion.div 
                className="flex items-center space-x-4 mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 1.0 + index * 0.1 }}
                  >
                    <Icon icon={link.icon} className="w-6 h-6" />
                  </motion.a>
                ))}
              </motion.div>

              <motion.button
                onClick={handleResumeDownload}
                className="bg-blue-600 dark:bg-blue-400 text-white dark:text-black px-6 py-3 rounded-xl hover:bg-blue-700 dark:hover:bg-blue-500 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                <span>Download Resume</span>
              </motion.button>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-blue-200 dark:border-blue-800">
                  <img
                    src="/images/profile/setu4.png"
                    alt="Setu Sai Ram - Portfolio"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div 
                  className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </div>

          {/* Skills Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="text-center mb-10">
              <motion.span
                className="inline-block text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-2"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                Skills
              </motion.span>
              <motion.h2
                className="text-4xl font-bold text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                Technologies I Work With
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((category, catIndex) => (
                <motion.div
                  key={category.title}
                  className="group relative bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-xl dark:hover:shadow-blue-900/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white inline-block pb-2 border-b-2 border-blue-500 dark:border-blue-400 px-4">
                      {category.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-4 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="flex flex-col items-center gap-2 cursor-default"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: catIndex * 0.1 + skillIndex * 0.04 }}
                        whileHover={{ scale: 1.1, y: -3 }}
                      >
                        <Icon icon={skill.icon} className="w-8 h-8 text-blue-600 dark:text-blue-400" />
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

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center bg-gray-50 dark:bg-gray-900 p-8 rounded-lg border border-gray-200 dark:border-gray-800"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Want to collaborate?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's work together to bring your ideas to life!
            </p>
            <motion.a
              href="/contact"
              className="inline-block bg-blue-600 dark:bg-blue-400 text-white dark:text-black px-8 py-3 rounded-md hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
