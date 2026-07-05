import { PageTransition } from '../../components/ui/PageTransition';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { careerNarrative, learningNow, principles } from '../../data/profile';

export function AboutPage() {
  return (
    <PageTransition>
      <section className="page-shell">
        <SectionHeader
          eyebrow="About"
          title="소통으로 방향을 맞추고, 책임감 있게 끝까지 다듬는 백엔드 개발자 강은석입니다."
          description="Java와 Spring Boot를 중심으로 인증, 데이터 처리, 배포 자동화, 운영 이슈 해결까지 이어지는 백엔드 경험을 쌓고 있습니다."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <article className="rounded-lg border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900 lg:col-span-3">
            <h2 className="text-lg font-semibold text-ink-950 dark:text-white">일하는 방식</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {careerNarrative.map((item) => (
                <p key={item} className="rounded-md bg-ink-50 p-4 text-sm leading-6 text-ink-700 dark:bg-ink-800 dark:text-ink-200">
                  {item}
                </p>
              ))}
            </div>
          </article>

          <article className="rounded-lg border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900 lg:col-span-1">
            <h2 className="text-lg font-semibold text-ink-950 dark:text-white">개발 가치관</h2>
            <div className="mt-5 grid gap-3">
              {principles.map((item) => (
                <p key={item} className="rounded-md bg-ink-50 p-4 text-sm leading-6 text-ink-700 dark:bg-ink-800 dark:text-ink-200">
                  {item}
                </p>
              ))}
            </div>
          </article>

          <article className="rounded-lg border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900 lg:col-span-2">
            <h2 className="text-lg font-semibold text-ink-950 dark:text-white">현재 집중하는 것</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
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
