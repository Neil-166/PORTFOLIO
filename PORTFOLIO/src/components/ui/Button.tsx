import type { AnchorHTMLAttributes, ButtonHTMLAttributes, MouseEvent, PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

type BaseProps = PropsWithChildren<{ variant?: 'primary' | 'secondary' | 'ghost'; className?: string }>;
type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { to?: string };

const styles = { primary: 'btn-primary', secondary: 'btn-secondary', ghost: 'btn-ghost' };
function addRipple(event: MouseEvent<HTMLElement>) {
  const button = event.currentTarget;
  const size = Math.max(button.clientWidth, button.clientHeight);
  const ripple = document.createElement('span');
  const bounds = button.getBoundingClientRect();
  ripple.className = 'button-ripple';
  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${event.clientX - bounds.left - size / 2}px`;
  ripple.style.top = `${event.clientY - bounds.top - size / 2}px`;
  button.appendChild(ripple);
  window.setTimeout(() => ripple.remove(), 620);
}

export function Button({ variant = 'primary', className, children, onClick, ...props }: ButtonProps) {
  return <motion.span whileTap={{ scale: 0.97 }} className="inline-flex"><button className={cn('btn-base', styles[variant], className)} onClick={(event) => { addRipple(event); onClick?.(event); }} {...props}>{children}</button></motion.span>;
}
export function ButtonLink({ variant = 'primary', className, children, to, onClick, ...props }: LinkProps) {
  const classes = cn('btn-base', styles[variant], className);
  if (to) return <motion.span whileTap={{ scale: 0.97 }} className="inline-flex"><Link className={classes} to={to} onClick={(event) => { addRipple(event); onClick?.(event); }}>{children}</Link></motion.span>;
  return <motion.span whileTap={{ scale: 0.97 }} className="inline-flex"><a className={classes} onClick={(event) => { addRipple(event); onClick?.(event); }} {...props}>{children}</a></motion.span>;
}
