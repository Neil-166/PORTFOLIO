import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CursorSpotlight } from '@/components/layout/CursorSpotlight';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { ToastRegion } from '@/components/ui/ToastRegion';
import { BackToTop } from '@/components/ui/BackToTop';

export function SiteLayout() {
  return (
    <div className="relative overflow-x-clip">
      <div className="grain" aria-hidden="true" />
      <ScrollProgress />
      <CursorSpotlight />
      <Navbar />
      <Outlet />
      <Footer />
      <BackToTop />
      <ToastRegion />
    </div>
  );
}
