import { Link } from 'react-router-dom';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { socialLinks } from '@/lib/constants';

const explore = [
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Coding', href: '/coding' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'Contact', href: '/contact' },
];

export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
          <div>
            <Link to="/" className="font-display text-xl font-bold text-ink">Neil<span className="text-brand">.</span></Link>
            <p className="mt-2 text-sm text-muted">Learning, building, and growing one commit at a time.</p>
            <p className="mt-5 text-xs text-muted/70">© {new Date().getFullYear()} Neil Dua.</p>
          </div>
          <div className="flex gap-2">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex min-h-11 items-center gap-2 rounded-xl border border-line px-3 py-2 text-sm text-muted transition hover:border-brand/40 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                aria-label={label}
              >
                <Icon aria-hidden="true" />
                <span className="hidden sm:inline">{label}</span>
                <FaArrowUpRightFromSquare className="text-[10px] opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
        <nav aria-label="Portfolio pages" className="mt-8 flex flex-wrap gap-x-5 gap-y-3 border-t border-line pt-6">
          {explore.map((item) => (
            <Link key={item.href} to={item.href} className="text-xs font-semibold text-muted transition hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
