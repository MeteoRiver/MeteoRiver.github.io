import { Github, Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navItems, siteConfig } from '../../data/profile';

type AppLayoutProps = {
  children: React.ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.theme = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-ink-50 text-ink-950 transition-colors dark:bg-ink-950 dark:text-ink-50">
      <header className="sticky top-0 z-40 border-b border-ink-200/70 bg-ink-50/86 backdrop-blur-xl dark:border-ink-800 dark:bg-ink-950/86">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <Link className="focus-ring rounded-md text-sm font-semibold" to="/" aria-label="홈으로 이동">
            {siteConfig.name}
            <span className="ml-2 text-ink-500 dark:text-ink-400">/ {siteConfig.title}</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="주요 메뉴">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `focus-ring rounded-md px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'bg-ink-950 text-white dark:bg-white dark:text-ink-950'
                      : 'text-ink-600 hover:bg-ink-100 hover:text-ink-950 dark:text-ink-300 dark:hover:bg-ink-800 dark:hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              className="focus-ring hidden h-10 w-10 items-center justify-center rounded-md border border-ink-200 bg-white text-ink-700 transition hover:bg-ink-100 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-200 dark:hover:bg-ink-800 sm:inline-flex"
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub 열기"
            >
              <Github className="h-4 w-4" />
            </a>
            <button
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink-200 bg-white text-ink-700 transition hover:bg-ink-100 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-200 dark:hover:bg-ink-800"
              type="button"
              onClick={() => setDarkMode((value) => !value)}
              aria-label={darkMode ? '라이트 모드로 변경' : '다크 모드로 변경'}
              title={darkMode ? '라이트 모드' : '다크 모드'}
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink-200 bg-white text-ink-700 transition hover:bg-ink-100 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-200 dark:hover:bg-ink-800 md:hidden"
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="메뉴 열기"
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <nav className="border-t border-ink-200 bg-white px-5 py-3 dark:border-ink-800 dark:bg-ink-900 md:hidden">
            <div className="mx-auto grid max-w-6xl gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    `focus-ring rounded-md px-3 py-3 text-sm font-medium ${
                      isActive
                        ? 'bg-ink-950 text-white dark:bg-white dark:text-ink-950'
                        : 'text-ink-700 dark:text-ink-200'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </nav>
        ) : null}
      </header>

      {children}

      <footer className="border-t border-ink-200 dark:border-ink-800">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-ink-500 dark:text-ink-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 {siteConfig.name}. Back-End Engineer Portfolio.</p>
          <p>{siteConfig.domain}</p>
        </div>
      </footer>
    </div>
  );
}
