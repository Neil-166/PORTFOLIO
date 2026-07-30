import type { RoadmapItem } from '@/types';

export const journey = [
  { date: '2025', title: 'Began B.Tech in Computer Science', copy: 'Started the four-year CSE journey at ABES Engineering College, Ghaziabad.' },
  { date: 'Now', title: 'Building in public', copy: 'Deepening fundamentals through products, DSA practice, and deliberate experiments.' },
  { date: 'Next', title: 'Internship-ready systems builder', copy: 'Turning learning into high-leverage work with a product engineering team.' },
];

export const roadmap: RoadmapItem[] = [
  { title: 'DSA', completion: 62, accent: 'from-blue-400 to-cyan-300', detail: 'Strengthening problem-solving patterns through consistent, deliberate practice.', lessons: ['Arrays, strings & hashing', 'Recursion and backtracking', 'Trees, graphs & dynamic programming'] },
  { title: 'React', completion: 74, accent: 'from-cyan-400 to-blue-500', detail: 'Building responsive, composable user interfaces with modern React patterns.', lessons: ['Component architecture', 'State and effects', 'Performance and accessibility'] },
  { title: 'Backend', completion: 48, accent: 'from-violet-400 to-purple-500', detail: 'Learning how dependable APIs, authentication, and services fit together.', lessons: ['RESTful API design', 'Node and Express', 'Authentication basics'] },
  { title: 'Databases', completion: 45, accent: 'from-emerald-400 to-teal-400', detail: 'Modeling data carefully and learning when different storage tools fit.', lessons: ['MongoDB document modeling', 'SQL foundations', 'Indexes and query thinking'] },
  { title: 'System Design', completion: 25, accent: 'from-pink-400 to-rose-400', detail: 'Exploring the building blocks behind scalable, resilient software.', lessons: ['Caching and queues', 'Load balancing', 'Trade-off communication'] },
  { title: 'DevOps', completion: 22, accent: 'from-amber-300 to-orange-400', detail: 'Developing a practical release mindset from local builds to deployment.', lessons: ['CI/CD concepts', 'Deployment platforms', 'Environment configuration'] },
  { title: 'AI / ML', completion: 18, accent: 'from-indigo-400 to-fuchsia-400', detail: 'Establishing a strong Python and mathematics foundation for intelligent products.', lessons: ['Python foundations', 'Data preparation', 'ML concepts'] },
];

export const goals = [
  { horizon: 'Now → 2026', title: 'Ship consistently', copy: 'Turn ideas into polished, deployed projects while building stronger DSA habits.', status: 'In motion' },
  { horizon: '2026 → 2027', title: 'Earn a meaningful internship', copy: 'Contribute to a fast-moving engineering team and learn production practices firsthand.', status: 'Target' },
  { horizon: '2027 → 2029', title: 'Grow into a product engineer', copy: 'Build systems that pair technical depth with genuine empathy for the user.', status: 'North star' },
];

export const testimonials = [
  { quote: 'Neil brings a rare mix of curiosity and follow-through. He asks sharper questions every time he builds.', name: 'Project collaborator', role: 'Peer perspective', initials: 'PC' },
  { quote: 'The work feels intentional: clean interfaces, clear thinking, and a visible willingness to learn the hard parts.', name: 'Mentor perspective', role: 'Engineering guidance', initials: 'MP' },
  { quote: 'A dependable teammate who cares about the details without losing sight of the problem in front of the user.', name: 'Team perspective', role: 'Build partner', initials: 'TP' },
];

export const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85', alt: 'Circuit board details', height: 'tall' },
  { src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=900&q=85', alt: 'Laptop workspace', height: 'short' },
  { src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=85', alt: 'Code projection', height: 'medium' },
  { src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=85', alt: 'Creative collaboration', height: 'medium' },
  { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85', alt: 'Developer desk', height: 'tall' },
  { src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85', alt: 'Person at a laptop', height: 'short' },
];
