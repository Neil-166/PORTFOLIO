import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'netflix-clone', title: 'Netflix Clone', eyebrow: 'Streaming interface', gradient: 'from-rose-500 via-red-500 to-amber-400',
    summary: 'A cinematic, responsive streaming experience with polished browsing flows.',
    description: 'A front-end exploration of the streaming experience, designed around discovery, visual hierarchy, and a fluid browsing rhythm across every screen size.',
    screenshot: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=85', stack: ['React', 'TypeScript', 'Tailwind CSS', 'TMDB API'],
    features: ['Responsive show discovery interface', 'Dynamic rows and detail overlays', 'Search and genre-led browsing', 'Accessible keyboard interactions'],
    challenges: ['Keeping dense content scannable on small screens', 'Designing cinematic motion without compromising performance'],
    learnings: ['Component composition at scale', 'Managing async content states', 'Using visual rhythm to guide discovery'],
    improvements: ['Personalized watchlist', 'Trailer playback', 'Server-side content caching'], github: 'https://github.com/Neil-166',
  },
  {
    slug: 'zomato-clone', title: 'Zomato Clone', eyebrow: 'Local discovery', gradient: 'from-orange-400 via-pink-500 to-rose-500',
    summary: 'A food discovery product focused on appetite, proximity, and clear choice.',
    description: 'A visual recreation of a food discovery workflow, combining a strong responsive layout with practical UI patterns for exploration, filtering, and restaurant detail.',
    screenshot: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1600&q=85', stack: ['React', 'JavaScript', 'CSS', 'REST APIs'],
    features: ['Location-aware restaurant feed', 'Cuisine and rating filters', 'Restaurant detail views', 'Mobile-first bottom navigation'],
    challenges: ['Organizing high-information restaurant cards', 'Balancing image-led layouts with readable data'],
    learnings: ['Filter state architecture', 'Responsive layout systems', 'Product-focused empty states'],
    improvements: ['Live delivery tracking', 'Reservation flow', 'Saved collections'], github: 'https://github.com/Neil-166',
  },
  {
    slug: 'student-management-system', title: 'Student Management System', eyebrow: 'Campus operations', gradient: 'from-cyan-400 via-blue-500 to-violet-500',
    summary: 'A practical dashboard for managing student information with clarity and control.',
    description: 'A structured management interface for the core academic workflow: student records, attendance, performance, and day-to-day administration.',
    screenshot: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=85', stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    features: ['Student record management', 'Attendance and performance tracking', 'Role-aware dashboard patterns', 'Data summaries and reports'],
    challenges: ['Keeping CRUD flows safe and straightforward', 'Presenting dense academic data at a glance'],
    learnings: ['API design fundamentals', 'Form validation', 'Dashboard information architecture'],
    improvements: ['Parent portal', 'Exportable reports', 'Notifications engine'], github: 'https://github.com/Neil-166',
  },
];
