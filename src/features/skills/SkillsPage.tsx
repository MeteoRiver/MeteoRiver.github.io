import { PageTransition } from '../../components/ui/PageTransition';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { skillGroups } from '../../data/profile';

export function SkillsPage() {
  return (
    <PageTransition>
      <section className="page-shell">
        <SectionHeader
          eyebrow="Skills"
          title="Spring 백엔드 구현부터 배포 자동화와 보안 흐름까지 연결해 경험했습니다."
          description="이력서와 포트폴리오에 기반해 실제 프로젝트에서 사용한 기술을 중심으로 정리했습니다."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.title} className="rounded-lg border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900">
              <h2 className="text-xl font-semibold text-ink-950 dark:text-white">{group.title}</h2>
              <p className="mt-2 text-sm leading-6 text-ink-600 dark:text-ink-300">{group.description}</p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {group.items.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex min-h-24 flex-col justify-between rounded-lg border border-ink-200 bg-ink-50 p-4 transition hover:border-mint-500 dark:border-ink-700 dark:bg-ink-950"
                    >
                      <Icon className="h-6 w-6 text-mint-600 dark:text-mint-400" />
                      <span className="text-sm font-semibold text-ink-800 dark:text-ink-100">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
