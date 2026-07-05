import { ArrowRight, BookOpen, FileText, Github } from 'lucide-react';
import { ButtonLink } from '../../components/ui/ButtonLink';
import { PageTransition } from '../../components/ui/PageTransition';
import { Tag } from '../../components/ui/Tag';
import { projects, quickStats, siteConfig, skillGroups } from '../../data/profile';

export function HomePage() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <PageTransition>
      <section className="page-shell grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
        <div>
          <p className="mb-5 inline-flex rounded-md border border-mint-500/30 bg-mint-500/10 px-3 py-1 text-sm font-medium text-mint-700 dark:text-mint-300">
            Backend · AI Agent · Developer Hub
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-ink-950 dark:text-white sm:text-5xl">
            안녕하세요.
            <span className="block">{siteConfig.headline}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-600 dark:text-ink-300">
            포트폴리오, 프로젝트 기록, 티스토리 학습 로그, 이력서를 한 곳에서 확인할 수 있는
            개발자 허브입니다.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {siteConfig.focus.split(' / ').map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/projects" variant="primary" icon={<ArrowRight className="h-4 w-4" />}>
              Projects
            </ButtonLink>
            <ButtonLink href={siteConfig.blogUrl} external icon={<BookOpen className="h-4 w-4" />}>
              Blog
            </ButtonLink>
            <ButtonLink href="/resume" icon={<FileText className="h-4 w-4" />}>
              Resume
            </ButtonLink>
            <ButtonLink href={siteConfig.githubUrl} external icon={<Github className="h-4 w-4" />}>
              GitHub
            </ButtonLink>
          </div>
        </div>

        <aside className="grid gap-4">
          <div className="rounded-lg border border-ink-200 bg-white p-5 shadow-soft dark:border-ink-800 dark:bg-ink-900">
            <p className="text-sm font-medium text-ink-500 dark:text-ink-400">현재 관심 분야</p>
            <div className="mt-4 grid gap-3">
              {quickStats.map((stat) => (
                <div key={stat.label} className="flex items-center justify-between gap-4">
                  <span className="text-sm text-ink-500 dark:text-ink-400">{stat.label}</span>
                  <strong className="text-right text-sm text-ink-950 dark:text-white">{stat.value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-ink-200 bg-white p-5 dark:border-ink-800 dark:bg-ink-900">
            <p className="text-sm font-medium text-ink-500 dark:text-ink-400">대표 기술</p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {skillGroups.flatMap((group) => group.items).slice(0, 8).map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="flex min-h-12 items-center gap-2 rounded-md bg-ink-50 px-3 text-sm font-medium text-ink-700 dark:bg-ink-800 dark:text-ink-100"
                  >
                    <Icon className="h-4 w-4 text-mint-600 dark:text-mint-400" />
                    {skill.name}
                  </div>
                );
              })}
            </div>
          </div>
        </aside>
      </section>

      <section className="border-y border-ink-200 bg-white dark:border-ink-800 dark:bg-ink-900/60">
        <div className="page-shell">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-lead">허브의 중심이 되는 프로젝트와 학습 실험입니다.</p>
            </div>
            <ButtonLink href="/projects" variant="ghost">
              전체 프로젝트 보기
            </ButtonLink>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                className="rounded-lg border border-ink-200 bg-ink-50 p-5 transition hover:-translate-y-1 hover:border-mint-500 hover:shadow-soft dark:border-ink-800 dark:bg-ink-950"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-ink-950 dark:text-white">{project.title}</h3>
                  <span className="rounded-md bg-mint-500/10 px-2 py-1 text-xs font-medium text-mint-700 dark:text-mint-300">
                    {project.status}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-ink-600 dark:text-ink-300">{project.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
