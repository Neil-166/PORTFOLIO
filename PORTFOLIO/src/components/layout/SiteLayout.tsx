import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CursorSpotlight } from '@/components/layout/CursorSpotlight';
import { ToastRegion } from '@/components/ui/ToastRegion';

export function SiteLayout() {
  return <div className="relative overflow-x-clip"><CursorSpotlight /><Navbar /><Outlet /><Footer /><ToastRegion /></div>;
}
