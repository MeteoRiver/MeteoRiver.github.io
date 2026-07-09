import { Download, FileText, Mail } from 'lucide-react';
import { ButtonLink } from '../../components/ui/ButtonLink';
import { PageTransition } from '../../components/ui/PageTransition';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { Tag } from '../../components/ui/Tag';
import {
  projects,
  resumeSections,
  siteConfig,
  skillGroups,
} from '../../data/profile';

export function ResumePage() {
  const skills = skillGroups.flatMap((group) => group.items.map((item) => item.name));
  const handlePrintResume = () => {
    window.print();
  };

  return (
    <PageTransition>
      <section className="page-shell">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Resume"
            title="이력서"
            description="경력, 학력, 교육, 자격, 수상 이력"
          />
          <div className="flex flex-wrap gap-3">
            <ButtonLink
              href={`mailto:${siteConfig.email}`}
              variant="primary"
              icon={<Mail className="h-4 w-4" />}
            >
              연락하기
            </ButtonLink>
            <button
              className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-ink-200 bg-white px-4 text-sm font-medium text-ink-950 transition hover:border-ink-300 hover:bg-ink-50 dark:border-ink-700 dark:bg-ink-900 dark:text-white dark:hover:bg-ink-800"
              type="button"
              onClick={handlePrintResume}
            >
              <Download className="h-4 w-4" />
              이력서 다운로드
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="grid gap-5">
            {resumeSections.map((section) => (
              <section
                key={section.title}
                className="rounded-lg border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900"
              >
                <h2 className="text-lg font-semibold text-ink-950 dark:text-white">
                  {section.title}
                </h2>
                <div className="mt-5 grid gap-4">
                  {section.items.map((item) => (
                    <article
                      key={`${section.title}-${item.title}`}
                      className="border-l-2 border-mint-500 pl-4"
                    >
                      <h3 className="font-semibold text-ink-900 dark:text-white">{item.title}</h3>
                      <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">{item.meta}</p>
                      <p className="mt-2 text-sm leading-6 text-ink-600 dark:text-ink-300">
                        {item.description}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
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

        <PrintableResume />
      </section>
    </PageTransition>
  );
}

function PrintableResume() {
  return (
    <section className="resume-print-document">
      <header className="print-header">
        <div>
          <p className="print-eyebrow">Back-End Engineer</p>
          <h1>이력서</h1>
          <p className="print-name-sub">{siteConfig.name} | Back-End Engineer</p>
        </div>
      </header>

      <section className="print-intro">
        <img src="/profile.jpg" alt="" />
        <div>
          <section className="print-block">
            <h2>Contact & Channels</h2>
            <ul>
              <li>Github - {siteConfig.githubUrl}</li>
              <li>Tech Blog - {siteConfig.blogUrl}</li>
              <li>Email - {siteConfig.email}</li>
            </ul>
          </section>

          <section className="print-block">
            <h2>Backend Developer</h2>
            <h3>문제의 기준을 정리하고 운영 가능한 구조를 고민하는 개발자</h3>
            <ul>
              <li>문제의 원인과 영향 범위를 먼저 정리하고 해결 방향을 선택합니다.</li>
              <li>구현 편의성뿐 아니라 유지보수성, 운영 흐름, 데이터 정합성을 함께 고려합니다.</li>
              <li>팀원이 납득할 수 있도록 변경 이유와 예상 영향을 문서화하거나 작은 단위로 검증합니다.</li>
            </ul>
          </section>
        </div>
      </section>

      <section className="print-timeline-section">
        <h2>경력</h2>
        {resumeSections[0]?.items.map((item) => (
          <article key={item.title} className="print-timeline-row">
            <time>{item.meta}</time>
            <div>
              <p className="print-company">{item.title}</p>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="print-timeline-section">
        <h2>프로젝트</h2>
        {projects.map((project) => (
          <article key={project.id} className="print-project-row">
            <time>{project.period}</time>
            <div className="print-project-body">
              <div className="print-project-heading">
                <div>
                  <h3>{project.title}</h3>
                  <p className="print-project-meta">{project.techStack.join(', ')}</p>
                </div>
              </div>
              <p className="print-project-summary">{project.summary}</p>
              <ul>
                <li>
                  <strong>Problem</strong>
                  <span>{project.problem}</span>
                </li>
                <li>
                  <strong>Solution</strong>
                  <span>{project.solution}</span>
                </li>
                <li>
                  <strong>Retrospective</strong>
                  <span>{project.retrospective}</span>
                </li>
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="print-timeline-section print-compact-section">
        <h2>기술 스택</h2>
        {skillGroups.map((group) => (
          <article key={group.title} className="print-timeline-row">
            <time>{group.title}</time>
            <div>
              <p>{group.items.map((item) => item.name).join(', ')}</p>
            </div>
          </article>
        ))}
      </section>

      {resumeSections.slice(1).map((section) => (
        <section key={section.title} className="print-timeline-section print-compact-section">
          <h2>{section.title}</h2>
          {section.items.map((item) => (
            <article key={`${section.title}-${item.title}`} className="print-timeline-row">
              <time>{item.meta}</time>
              <div>
                <p className="print-company">{item.title}</p>
                {item.description ? <p>{item.description}</p> : null}
              </div>
            </article>
          ))}
        </section>
      ))}

      <footer className="print-footer">{siteConfig.name}</footer>
    </section>
  );
}
