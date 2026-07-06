import { PageTransition } from '../../components/ui/PageTransition';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { careerNarrative, learningNow, principles } from '../../data/profile';

export function AboutPage() {
  return (
    <PageTransition>
      <section className="page-shell">
        <SectionHeader
          eyebrow="About"
          title="소통으로 방향을 맞추고, 맡은 일은 끝까지 책임지는 백엔드 개발자 강은석입니다."
          description="Java와 Spring Boot를 중심으로 인증, 데이터 처리, 배포 자동화, 운영 이슈 해결까지 이어지는 백엔드 경험을 쌓고 있습니다."
          titleClassName="text-2xl font-semibold tracking-normal text-ink-950 dark:text-white sm:text-3xl"
        />

        <div className="mt-10 grid gap-10">
          <section>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="section-title">일하는 방식</h2>
                <p className="section-lead">협업과 책임감을 중심으로 개발 흐름을 만들어갑니다.</p>
              </div>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {careerNarrative.map((item, index) => (
                <InfoCard key={item} index={index + 1}>
                  {item}
                </InfoCard>
              ))}
            </div>
          </section>

          <section>
            <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
              <h2 className="section-title">개발 가치관</h2>
              <h2 className="section-title">현재 집중하는 것</h2>
            </div>
            <div className="mt-6 grid gap-4">
              {principles.map((principle, index) => (
                <div key={principle} className="grid items-stretch gap-4 lg:grid-cols-[0.95fr_1.05fr]">
                  <InfoCard index={index + 1}>{principle}</InfoCard>
                  {learningNow[index] ? <InfoCard index={index + 1}>{learningNow[index]}</InfoCard> : null}
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </PageTransition>
  );
}

function CardNumber({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-mint-500/10 text-sm font-semibold text-mint-700 dark:text-mint-300">
      {children}
    </span>
  );
}

function InfoCard({ children, index }: { children: React.ReactNode; index: number }) {
  return (
    <article className="h-full rounded-lg border border-ink-200 bg-white p-5 dark:border-ink-800 dark:bg-ink-900">
      <CardNumber>{index}</CardNumber>
      <p className="mt-4 text-sm leading-7 text-ink-700 dark:text-ink-200">{children}</p>
    </article>
  );
}
