interface NavLink {
    label: string;
    path: string;
    description?: string;
  }
  
  interface SocialLinks {
    github: string;
    linkedin: string;
  }
  
  export const navigationLinks: NavLink[] = [
    {
      label: 'Home',
      path: '/',
      description: 'Welcome to my personal portfolio website',
    },
    {
      label: 'About',
      path: '/about',
      description: 'Learn more about me and my background',
    },
    {
      label: 'Services',
      path: '/services',
      description: 'Services I offer to my clients',
    },
    {
      label: 'Projects',
      path: '/projects',
      description: 'Browse through my recent projects',
    },
    {
      label: 'Contact',
      path: '/contact',
      description: 'Get in touch with me for your next project',
    },
  ];
  
  export const resourceLinks: NavLink[] = [
    {
      label: 'Certificate',
      path: '/certificate',
      description: 'View my professional certifications',
    },
    {
      label: 'Stack',
      path: '/stack',
      description: 'Technologies and tools I use in my projects',
    },
  ];
  
  export const socialLinks: SocialLinks = {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
  };
  
  // Combine all links for sitemap
  export const allLinks = [...navigationLinks, ...resourceLinks];