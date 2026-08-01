import type { RoadmapItem } from '@/types';

export const journey = [
  {
    date: '2025',
    title: 'Started B.Tech in Computer Science',
    copy: 'Began the four-year CSE program at ABES Engineering College, Ghaziabad.',
  },
  {
    date: '2025–26',
    title: 'Building foundations',
    copy: 'Learning core programming, data structures, and starting web development with HTML, CSS, JavaScript, and React.',
  },
  {
    date: 'Now',
    title: 'Deepening DSA & full-stack skills',
    copy: 'Practicing problem solving on LeetCode and CodeChef while building portfolio projects.',
  },
  {
    date: '2029',
    title: 'Expected graduation',
    copy: 'Completing B.Tech CSE and pursuing software engineering internships and roles.',
  },
];

export const roadmap: RoadmapItem[] = [
  { title: 'DSA', status: 'In Progress', accent: 'from-blue-400 to-cyan-300', detail: 'Strengthening problem-solving patterns through consistent practice on LeetCode and CodeChef.', lessons: ['Arrays, strings & hashing', 'Recursion and backtracking', 'Trees, graphs & dynamic programming'] },
  { title: 'React', status: 'In Progress', accent: 'from-cyan-400 to-blue-500', detail: 'Building responsive, composable user interfaces with modern React patterns.', lessons: ['Component architecture', 'State and effects', 'React Router'] },
  { title: 'Backend', status: 'Early Stage', accent: 'from-violet-400 to-purple-500', detail: 'Learning how APIs, authentication, and services fit together.', lessons: ['RESTful API design', 'Node.js and Express', 'Authentication basics'] },
  { title: 'Databases', status: 'Early Stage', accent: 'from-emerald-400 to-teal-400', detail: 'Modeling data and learning when different storage tools fit.', lessons: ['MongoDB document modeling', 'SQL foundations', 'Indexes and query thinking'] },
  { title: 'System Design', status: 'Exploring', accent: 'from-pink-400 to-rose-400', detail: 'Exploring the building blocks behind scalable software — early stage.', lessons: ['Caching concepts', 'Load balancing basics', 'Trade-off communication'] },
  { title: 'DevOps', status: 'Exploring', accent: 'from-amber-300 to-orange-400', detail: 'Developing a practical release mindset from local builds to deployment.', lessons: ['CI/CD concepts', 'Deployment platforms', 'Environment configuration'] },
];

export const goals = [
  { horizon: 'Now → 2026', title: 'Ship consistently', copy: 'Turn ideas into polished, deployed projects while building stronger DSA habits.', status: 'In motion' },
  { horizon: '2026 → 2027', title: 'Earn a meaningful internship', copy: 'Contribute to an engineering team and learn production practices firsthand.', status: 'Target' },
  { horizon: '2027 → 2029', title: 'Grow into a software engineer', copy: 'Build systems that pair technical depth with empathy for the user.', status: 'North star' },
];

export const galleryImages = [
  { src: '/images/projects/netflix-clone-placeholder.svg', alt: 'Netflix Clone project — replace with actual screenshot', height: 'tall' },
  { src: '/images/projects/zomato-clone-placeholder.svg', alt: 'Zomato Clone project — replace with actual screenshot', height: 'short' },
  { src: '/images/projects/student-management-placeholder.svg', alt: 'Student Management System — replace with actual screenshot', height: 'medium' },
];
