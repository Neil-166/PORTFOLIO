import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { PageLoader } from '@/components/ui/PageLoader';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { destroySmoothScroll, initSmoothScroll } from '@/lib/smoothScroll';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Skills = lazy(() => import('@/pages/Skills'));
const Projects = lazy(() => import('@/pages/Projects'));
const ProjectDetail = lazy(() => import('@/pages/ProjectDetail'));
const Coding = lazy(() => import('@/pages/Coding'));
const Roadmap = lazy(() => import('@/pages/Roadmap'));
const Explorer = lazy(() => import('@/pages/Explorer'));
const Blog = lazy(() => import('@/pages/Blog'));
const Article = lazy(() => import('@/pages/Article'));
const Certifications = lazy(() => import('@/pages/Certifications'));
const Gallery = lazy(() => import('@/pages/Gallery'));
const Goals = lazy(() => import('@/pages/Goals'));
const Testimonials = lazy(() => import('@/pages/Testimonials'));
const Contact = lazy(() => import('@/pages/Contact'));
const NotFound = lazy(() => import('@/pages/NotFound'));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/coding" element={<Coding />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/explorer" element={<Explorer />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<Article />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

function SmoothScroll() {
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    initSmoothScroll(reducedMotion);
    return () => destroySmoothScroll();
  }, [reducedMotion]);
  return null;
}

export function App() {
  return (
    <BrowserRouter>
      <SmoothScroll />
      <ScrollToTop />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
