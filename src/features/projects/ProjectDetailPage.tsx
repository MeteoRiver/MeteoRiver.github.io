import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { ButtonLink } from '../../components/ui/ButtonLink';
import { PageTransition } from '../../components/ui/PageTransition';
import { Tag } from '../../components/ui/Tag';
import { projects } from '../../data/profile';

export function ProjectDetailPage() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <PageTransition>
        <section className="page-shell">
          <h1 className="section-title">프로젝트를 찾을 수 없습니다.</h1>
          <div className="mt-6">
            <ButtonLink href="/projects" variant="primary">
              프로젝트 목록으로
            </ButtonLink>
          </div>
        </section>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <section className="page-shell">
        <Link className="focus-ring inline-flex items-center gap-2 rounded-md text-sm font-medium text-ink-600 hover:text-ink-950 dark:text-ink-300 dark:hover:text-white" to="/projects">
          <ArrowLeft className="h-4 w-4" />
          프로젝트 목록
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
          <article>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-mint-600 dark:text-mint-400">
              {project.period}
            </p>
            <h1 className="text-3xl font-semibold tracking-normal text-ink-950 dark:text-white sm:text-4xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-ink-600 dark:text-ink-300">{project.description}</p>

            <div className="mt-10 grid gap-5">
              <DetailBlock title="문제 정의" body={project.problem} />
              <DetailBlock title="해결 과정" body={project.solution} />
              <section className="rounded-lg border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900">
                <h2 className="text-lg font-semibold text-ink-950 dark:text-white">구조</h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {project.architecture.map((item, index) => (
                    <div key={item} className="rounded-md bg-ink-50 p-4 text-sm font-medium text-ink-700 dark:bg-ink-800 dark:text-ink-200">
                      {index + 1}. {item}
                    </div>
                  ))}
                </div>
              </section>
              <DetailBlock title="배운 점" body={project.retrospective} />
            </div>
          </article>

          <aside className="h-fit rounded-lg border border-ink-200 bg-white p-5 dark:border-ink-800 dark:bg-ink-900">
            <h2 className="text-sm font-semibold text-ink-950 dark:text-white">사용 기술</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
            <div className="mt-6 grid gap-2">
              {project.githubUrl ? (
                <ButtonLink href={project.githubUrl} external icon={<Github className="h-4 w-4" />}>
                  GitHub
                </ButtonLink>
              ) : null}
              {project.demoUrl ? (
                <ButtonLink href={project.demoUrl} external icon={<ExternalLink className="h-4 w-4" />}>
                  Demo
                </ButtonLink>
              ) : null}
            </div>
          </aside>
        </div>
      </section>
    </PageTransition>
  );
}

function DetailBlock({ title, body }: { title: string; body: string }) {
  return (
    <section className="rounded-lg border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900">
      <h2 className="text-lg font-semibold text-ink-950 dark:text-white">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-ink-600 dark:text-ink-300">{body}</p>
    </section>
  );
}
