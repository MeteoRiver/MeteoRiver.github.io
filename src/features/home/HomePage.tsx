import { ArrowRight, BookOpen, FileText, Github, Mail } from 'lucide-react';
import { ButtonLink } from '../../components/ui/ButtonLink';
import { PageTransition } from '../../components/ui/PageTransition';
import { Tag } from '../../components/ui/Tag';
import { highlights, siteConfig } from '../../data/profile';

export function HomePage() {
  return (
    <PageTransition>
      <section className="page-shell grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div>
          <p className="mb-5 inline-flex rounded-md border border-mint-500/30 bg-mint-500/10 px-3 py-1 text-sm font-medium text-mint-700 dark:text-mint-300">
            Java - Spring Boot - MSA - DevOps
          </p>
          <h1 className="max-w-3xl text-3xl font-semibold leading-tight tracking-normal text-ink-950 dark:text-white sm:text-4xl">
            안녕하세요.
            <span className="block">{siteConfig.headline}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-600 dark:text-ink-300">
            Java/Spring Boot 백엔드 개발자입니다. 프로젝트를 설계하고 진행하며 문제를 끝까지 추적하고, 팀과 소통하며 안정적인 백엔드를 만드는 데 집중합니다.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {siteConfig.focus.split(' / ').map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/projects" icon={<ArrowRight className="h-4 w-4" />}>
              프로젝트 보기
            </ButtonLink>
            <ButtonLink href="/about" icon={<FileText className="h-4 w-4" />}>
              웹 자기소개서
            </ButtonLink>
            <ButtonLink href={siteConfig.blogUrl} external icon={<BookOpen className="h-4 w-4" />}>
              블로그
            </ButtonLink>
            <ButtonLink href="/resume" icon={<FileText className="h-4 w-4" />}>
              웹 이력서
            </ButtonLink>
            <ButtonLink href={`mailto:${siteConfig.email}`} icon={<Mail className="h-4 w-4" />}>
              {siteConfig.email}
            </ButtonLink>
            <ButtonLink href={siteConfig.githubUrl} external icon={<Github className="h-4 w-4" />}>
              GitHub
            </ButtonLink>
          </div>
        </div>

        <aside className="rounded-lg border border-ink-200 bg-white p-5 dark:border-ink-800 dark:bg-ink-900">
          <p className="text-sm font-medium text-ink-500 dark:text-ink-400">핵심 이력</p>
          <div className="mt-4 grid gap-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.label} className="flex items-start gap-3 rounded-md bg-ink-50 p-3 dark:bg-ink-800">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-mint-600 dark:text-mint-400" />
                  <div>
                    <p className="text-xs font-medium text-ink-500 dark:text-ink-400">{item.label}</p>
                    <p className="mt-1 text-sm font-semibold text-ink-900 dark:text-white">{item.value}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </aside>
      </section>
    </PageTransition>
  );
}
