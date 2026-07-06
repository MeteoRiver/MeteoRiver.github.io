import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  external?: boolean;
  icon?: React.ReactNode;
};

const variants = {
  primary:
    'bg-ink-950 text-white hover:bg-ink-800 dark:bg-white dark:text-ink-950 dark:hover:bg-ink-200',
  secondary:
    'border border-ink-200 bg-white text-ink-950 hover:border-ink-300 hover:bg-ink-50 dark:border-ink-700 dark:bg-ink-900 dark:text-white dark:hover:bg-ink-800',
  ghost: 'text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-800',
};

export function ButtonLink({
  href,
  children,
  variant = 'secondary',
  external = false,
  icon,
}: ButtonLinkProps) {
  const className = `focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition ${variants[variant]}`;
  const isMailLink = href.startsWith('mailto:');

  if (external || isMailLink) {
    return (
      <a className={className} href={href} target={isMailLink ? undefined : '_blank'} rel={isMailLink ? undefined : 'noreferrer'}>
        {icon}
        {children}
        {external ? <ArrowUpRight className="h-4 w-4" aria-hidden="true" /> : null}
      </a>
    );
  }

  return (
    <Link className={className} to={href}>
      {icon}
      {children}
    </Link>
  );
}
