import { FileText } from 'lucide-react';
import { ButtonLink } from '../../components/ui/ButtonLink';
import { PageTransition } from '../../components/ui/PageTransition';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { Tag } from '../../components/ui/Tag';
import { careerNarrative, projects, resumeSections, skillGroups } from '../../data/profile';

export function ResumePage() {
  const skills = skillGroups.flatMap((group) => group.items.map((item) => item.name));

  return (
    <PageTransition>
      <section className="page-shell">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Resume"
            title="이력서의 내용을 웹 페이지 안에서 바로 읽을 수 있게 정리했습니다."
            description="경력, 교육, 자격, 수상, 프로젝트 경험을 백엔드 개발자로 성장해 온 흐름에 맞춰 담았습니다."
          />
          <ButtonLink href="/contact" variant="primary" icon={<FileText className="h-4 w-4" />}>
            연락하기
          </ButtonLink>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="grid gap-5">
            <section className="rounded-lg border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900">
              <h2 className="text-lg font-semibold text-ink-950 dark:text-white">소개</h2>
              <div className="mt-5 grid gap-3">
                {careerNarrative.map((item) => (
                  <p key={item} className="rounded-md bg-ink-50 p-4 text-sm leading-6 text-ink-700 dark:bg-ink-800 dark:text-ink-200">
                    {item}
                  </p>
                ))}
              </div>
            </section>

            {resumeSections.map((section) => (
              <section key={section.title} className="rounded-lg border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900">
                <h2 className="text-lg font-semibold text-ink-950 dark:text-white">{section.title}</h2>
                <div className="mt-5 grid gap-4">
                  {section.items.map((item) => (
                    <article key={`${section.title}-${item.title}`} className="border-l-2 border-mint-500 pl-4">
                      <h3 className="font-semibold text-ink-900 dark:text-white">{item.title}</h3>
                      <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">{item.meta}</p>
                      <p className="mt-2 text-sm leading-6 text-ink-600 dark:text-ink-300">{item.description}</p>
                    </article>
                  ))}
                </div>
              </section>
            ))}

            <section className="rounded-lg border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900">
              <h2 className="text-lg font-semibold text-ink-950 dark:text-white">프로젝트 경험</h2>
              <div className="mt-5 grid gap-4">
                {projects.map((project) => (
                  <article key={project.id}>
                    <h3 className="font-semibold text-ink-900 dark:text-white">{project.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-ink-600 dark:text-ink-300">{project.summary}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="h-fit rounded-lg border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-mint-600 dark:text-mint-400" />
              <h2 className="text-lg font-semibold text-ink-950 dark:text-white">기술 스택</h2>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </PageTransition>
  );
}
