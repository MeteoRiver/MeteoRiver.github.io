import { PageTransition } from '../../components/ui/PageTransition';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { learningNow, principles } from '../../data/profile';

export function AboutPage() {
  return (
    <PageTransition>
      <section className="page-shell">
        <SectionHeader
          eyebrow="About"
          title="문제를 끝까지 연결하는 개발자가 되고 싶습니다."
          description="백엔드 기반을 중심으로 서비스 구조, 배포, 자동화, AI Agent를 함께 공부합니다. 단순히 기능을 구현하는 것보다 왜 필요한지, 운영 중 어떤 문제가 생길지, 다음 사람이 어떻게 이해할지를 중요하게 봅니다."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <article className="rounded-lg border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900">
            <h2 className="text-lg font-semibold text-ink-950 dark:text-white">개발 철학</h2>
            <div className="mt-5 grid gap-3">
              {principles.map((item) => (
                <p key={item} className="rounded-md bg-ink-50 p-4 text-sm leading-6 text-ink-700 dark:bg-ink-800 dark:text-ink-200">
                  {item}
                </p>
              ))}
            </div>
          </article>

          <article className="rounded-lg border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900">
            <h2 className="text-lg font-semibold text-ink-950 dark:text-white">현재 공부 중</h2>
            <div className="mt-5 grid gap-3">
              {learningNow.map((item) => (
                <p key={item} className="rounded-md bg-ink-50 p-4 text-sm leading-6 text-ink-700 dark:bg-ink-800 dark:text-ink-200">
                  {item}
                </p>
              ))}
            </div>
          </article>
        </div>
      </section>
    </PageTransition>
  );
}
