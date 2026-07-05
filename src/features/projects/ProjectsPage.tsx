import { ExternalLink, Github } from 'lucide-react';
import { ButtonLink } from '../../components/ui/ButtonLink';
import { PageTransition } from '../../components/ui/PageTransition';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { Tag } from '../../components/ui/Tag';
import { projects } from '../../data/profile';

export function ProjectsPage() {
  return (
    <PageTransition>
      <section className="page-shell">
        <SectionHeader
          eyebrow="Projects"
          title="프로젝트는 결과보다 문제 해결 과정을 보여주는 공간입니다."
          description="각 프로젝트는 소개, 문제점, 해결 과정, 아키텍처, 회고를 기록할 수 있도록 설계했습니다."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex min-h-[300px] flex-col rounded-lg border border-ink-200 bg-white p-5 transition hover:-translate-y-1 hover:border-mint-500 hover:shadow-soft dark:border-ink-800 dark:bg-ink-900"
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-lg font-semibold text-ink-950 dark:text-white">{project.title}</h2>
                <span className="rounded-md bg-ink-100 px-2 py-1 text-xs font-medium text-ink-600 dark:bg-ink-800 dark:text-ink-300">
                  {project.status}
                </span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-6 text-ink-600 dark:text-ink-300">{project.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <ButtonLink href={`/projects/${project.id}`} variant="primary">
                  상세 보기
                </ButtonLink>
                <ButtonLink href={project.githubUrl} external icon={<Github className="h-4 w-4" />}>
                  GitHub
                </ButtonLink>
                {project.demoUrl ? (
                  <ButtonLink href={project.demoUrl} external icon={<ExternalLink className="h-4 w-4" />}>
                    Demo
                  </ButtonLink>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
