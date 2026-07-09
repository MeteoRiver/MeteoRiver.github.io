import { PageTransition } from '../../components/ui/PageTransition';
import { SectionHeader } from '../../components/ui/SectionHeader';

const workingProcess = [
  {
    title: '문제의 원인과 영향 범위를 먼저 정리합니다',
    body: '문제를 바로 고치기보다 왜 문제가 되었는지, 어떤 사용자 흐름과 데이터에 영향을 주는지 먼저 확인합니다. 원인과 영향 범위가 정리되어야 해결 방향도 흔들리지 않는다고 생각합니다.',
  },
  {
    title: '해결책은 유지보수성과 운영 흐름을 함께 봅니다',
    body: '구현이 빠른 방법만 선택하기보다 이후 변경이 쉬운지, 운영 중 예외를 다룰 수 있는지 함께 봅니다. 기능을 완성하는 것만큼 팀이 계속 이해하고 수정할 수 있는 구조가 중요하다고 생각합니다.',
  },
  {
    title: '팀원이 납득할 수 있도록 근거를 남깁니다',
    body: '의견을 전달할 때는 단순히 더 나은 방식이라고 말하기보다, 변경 이유와 예상되는 영향을 문서나 작은 검증 단위로 설명하려고 합니다. 팀이 같은 기준을 공유해야 구현 속도와 결과물이 함께 좋아진다고 믿습니다.',
  },
  {
    title: '결과와 한계를 다음 프로젝트에 반영합니다',
    body: '구현 후에는 잘된 점뿐 아니라 부족했던 점도 함께 정리합니다. 완성된 기능보다 다음에 더 나은 결정을 할 수 있는 경험을 남기는 개발자가 되고 싶습니다.',
  },
];

export function AboutPage() {
  return (
    <PageTransition>
      <section className="page-shell">
        <SectionHeader
          eyebrow="About"
          title="자기소개"
          description="원인과 영향 범위를 먼저 정리하고, 팀이 납득할 수 있는 해결 방향을 찾습니다."
          titleClassName="text-2xl font-semibold tracking-normal text-ink-950 dark:text-white sm:text-3xl"
        />

        <div className="mt-10 rounded-lg border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900">
          <p className="text-lg leading-8 text-ink-800 dark:text-ink-100">
            저는 기능을 많이 구현했다는 사실보다, 문제를 왜 문제로 봤고 어떤 기준으로 해결책을 선택했는지를 중요하게 생각합니다.
          </p>
          <p className="mt-4 text-base leading-8 text-ink-600 dark:text-ink-300">
            프로젝트를 진행할 때는 문제의 원인과 영향 범위를 먼저 정리하고, 해결책을 선택할 때는 구현 편의성보다 유지보수성과 운영 흐름을 함께 봅니다.
          </p>
        </div>

        <div className="mt-6 grid gap-4">
          {workingProcess.map((item, index) => (
            <ProcessStep key={item.title} index={index + 1} title={item.title}>
              {item.body}
            </ProcessStep>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}

function ProcessStep({
  children,
  index,
  title,
}: {
  children: React.ReactNode;
  index: number;
  title: string;
}) {
  return (
    <article className="grid gap-4 rounded-lg border border-ink-200 bg-white p-5 dark:border-ink-800 dark:bg-ink-900 sm:grid-cols-[4rem_1fr]">
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-mint-500/10 text-sm font-semibold text-mint-700 dark:text-mint-300">
        {String(index).padStart(2, '0')}
      </div>
      <div>
        <h2 className="text-lg font-semibold text-ink-950 dark:text-white">{title}</h2>
        <p className="mt-3 text-sm leading-7 text-ink-700 dark:text-ink-200">{children}</p>
      </div>
    </article>
  );
}
