// Image paths for the portfolio
export const IMAGES = {
  // Profile images
  profile: {
    avatar: '/images/profile/setu2.jpg',
    hero: '/images/profile/setu2.jpg',
  },
  
  // Project screenshots
  projects: {
    ecommerce: '/images/projects/project-1.jpg',
    taskManagement: '/images/projects/project-2.jpg',
    dataVisualization: '/images/projects/project-3.jpg',
    mobileBanking: '/images/projects/project-4.jpg',
    aiChat: '/images/projects/project-5.jpg',
    portfolio: '/images/projects/project-6.jpg',
  },
  
  // Company logos
  companies: {
    techcorp: '/images/companies/techcorp.jpg',
    digitalInnovations: '/images/companies/digital-innovations.jpg',
    startupxyz: '/images/companies/startupxyz.jpg',
    google: '/images/companies/google.jpg',
    microsoft: '/images/companies/microsoft.jpg',
    netflix: '/images/companies/netflix.jpg',
  },
  
  // Education logos
  education: {
    stanford: '/images/education/stanford.jpg',
    berkeley: '/images/education/berkeley.jpg',
  },
  
  // Fallback images (using Pexels as backup)
  fallback: {
    profile: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    project: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    company: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    education: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
  }
} as const;

// Helper function to get image with fallback
export const getImageSrc = (imagePath: string, fallbackPath: string): string => {
  return imagePath || fallbackPath;
};

// Type definitions for better TypeScript support
export type ImageCategory = keyof typeof IMAGES;
export type ProfileImage = keyof typeof IMAGES.profile;
export type ProjectImage = keyof typeof IMAGES.projects;
export type CompanyImage = keyof typeof IMAGES.companies;
export type EducationImage = keyof typeof IMAGES.education;