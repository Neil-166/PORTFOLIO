import { FaArrowLeft } from 'react-icons/fa6';
import { Seo } from '@/components/ui/Seo';
import { PageShell } from '@/components/ui/PageShell';
import { Section } from '@/components/ui/Section';
import { ButtonLink } from '@/components/ui/Button';
export default function NotFound() { return <><Seo title="Page not found" /><PageShell><Section><div className="grid min-h-[55vh] place-items-center text-center"><div><p className="font-display text-8xl font-bold text-brand/25">404</p><h1 className="mt-2 font-display text-3xl font-bold text-ink">This path hasn’t been built yet.</h1><p className="mt-3 text-muted">Let’s get you back to familiar ground.</p><ButtonLink to="/" className="mx-auto mt-7"><FaArrowLeft /> Back home</ButtonLink></div></div></Section></PageShell></>; }
