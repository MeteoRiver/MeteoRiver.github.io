import { ArrowUpRight } from 'lucide-react';
import { PageTransition } from '../../components/ui/PageTransition';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { siteConfig, socialLinks } from '../../data/profile';

export function ContactPage() {
  return (
    <PageTransition>
      <section className="page-shell">
        <SectionHeader
          eyebrow="Contact"
          title="프로젝트, 협업, 채용 관련 연락을 환영합니다."
          description="GitHub에서 코드를 확인하고, 티스토리에서 학습 기록을 살펴본 뒤 이메일로 편하게 연락할 수 있습니다."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                className="focus-ring group rounded-lg border border-ink-200 bg-white p-5 transition hover:-translate-y-1 hover:border-mint-500 hover:shadow-soft dark:border-ink-800 dark:bg-ink-900"
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
              >
                <div className="flex items-center justify-between gap-3">
                  <Icon className="h-6 w-6 text-mint-600 dark:text-mint-400" />
                  <ArrowUpRight className="h-4 w-4 text-ink-400 transition group-hover:text-mint-600" />
                </div>
                <h2 className="mt-5 text-lg font-semibold text-ink-950 dark:text-white">{link.label}</h2>
                <p className="mt-2 break-words text-sm text-ink-600 dark:text-ink-300">
                  {link.label === 'Email' ? siteConfig.email : link.href.replace(/^https?:\/\//, '')}
                </p>
              </a>
            );
          })}
        </div>
      </section>
    </PageTransition>
  );
}
