import { PageTransition } from '../../components/ui/PageTransition';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { skillGroups } from '../../data/profile';

export function SkillsPage() {
  return (
    <PageTransition>
      <section className="page-shell">
        <SectionHeader
          eyebrow="Skills"
          title="기술은 카테고리보다 연결 방식이 더 중요하다고 생각합니다."
          description="백엔드 구현, 프론트 표현, 배포 자동화, AI Agent 실험을 하나의 제품 흐름으로 연결하는 데 관심이 있습니다."
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
