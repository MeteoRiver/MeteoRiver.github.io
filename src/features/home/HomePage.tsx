import { ArrowRight, BookOpen, FileText, Github, Mail } from 'lucide-react';
import { ButtonLink } from '../../components/ui/ButtonLink';
import { PageTransition } from '../../components/ui/PageTransition';
import { Tag } from '../../components/ui/Tag';
import { highlights, siteConfig } from '../../data/profile';

const timelineTicks = ['14', '16', '18', '20', '22', '24', '26'];

const timelineItems = [
  {
    label: '화정고등학교',
    mark: '고',
    x: 34,
    y: 88,
    width: 120,
    color: '#67d4e8',
  },
  {
    label: '홍익대학교',
    mark: '대',
    x: 180,
    y: 72,
    width: 254,
    color: '#34b989',
  },
  {
    label: '군 복무',
    mark: '군',
    x: 338,
    y: 56,
    width: 80,
    color: '#82c341',
  },
  {
    label: '백엔드 개발',
    mark: '직',
    x: 438,
    y: 40,
    width: 58,
    color: '#ff6378',
  },
];

export function HomePage() {
  return (
    <PageTransition>
      <section className="page-shell grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div>
          <p className="mb-5 inline-flex rounded-md border border-mint-500/30 bg-mint-500/10 px-3 py-1 text-sm font-medium text-mint-700 dark:text-mint-300">
            Java - Spring Boot - MSA - DevOps
          </p>
          <h1 className="max-w-3xl text-3xl font-semibold leading-tight tracking-normal text-ink-950 dark:text-white sm:text-4xl">
            안녕하세요.
            <span className="block">{siteConfig.headline}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-600 dark:text-ink-300">
            Java/Spring Boot 백엔드 개발자입니다. 프로젝트를 설계하고 진행하며 문제를 끝까지 추적하고, 팀과 소통하며 안정적인 백엔드를 만드는 데 집중합니다.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {siteConfig.focus.split(' / ').map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/projects" icon={<ArrowRight className="h-4 w-4" />}>
              프로젝트 보기
            </ButtonLink>
            <ButtonLink href="/about" icon={<FileText className="h-4 w-4" />}>
              웹 자기소개서
            </ButtonLink>
            <ButtonLink href={siteConfig.blogUrl} external icon={<BookOpen className="h-4 w-4" />}>
              블로그
            </ButtonLink>
            <ButtonLink href="/resume" icon={<FileText className="h-4 w-4" />}>
              웹 이력서
            </ButtonLink>
            <ButtonLink href={`mailto:${siteConfig.email}`} icon={<Mail className="h-4 w-4" />}>
              {siteConfig.email}
            </ButtonLink>
            <ButtonLink href={siteConfig.githubUrl} external icon={<Github className="h-4 w-4" />}>
              GitHub
            </ButtonLink>
          </div>
        </div>

        <aside className="grid gap-4">
          <div className="rounded-lg border border-ink-200 bg-white p-5 dark:border-ink-800 dark:bg-ink-900">
            <div className="mx-auto h-36 w-36 overflow-hidden rounded-lg bg-ink-100 dark:bg-ink-800">
              <img className="h-full w-full object-cover" src="/profile.jpg" alt="강은석 프로필 이미지" />
            </div>
          </div>

          <div className="rounded-lg border border-ink-200 bg-white p-5 dark:border-ink-800 dark:bg-ink-900">
            <p className="text-sm font-medium text-ink-500 dark:text-ink-400">핵심 이력</p>
            <CareerTimeline />
            <div className="mt-4 grid gap-3">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.label} className="flex items-start gap-3 rounded-md bg-ink-50 p-3 dark:bg-ink-800">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-mint-600 dark:text-mint-400" />
                    <div>
                      <p className="text-xs font-medium text-ink-500 dark:text-ink-400">{item.label}</p>
                      <p className="mt-1 text-sm font-semibold text-ink-900 dark:text-white">{item.value}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </aside>
      </section>
    </PageTransition>
  );
}

function CareerTimeline() {
  return (
    <div className="mt-4 rounded-md bg-ink-50 p-3 dark:bg-ink-800">
      <svg
        className="h-auto w-full text-ink-600 dark:text-ink-300"
        viewBox="0 0 520 150"
        role="img"
        aria-label="2014년부터 현재까지의 학력과 경력 타임라인"
      >
        <line x1="24" y1="122" x2="500" y2="122" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1" />

        {timelineTicks.map((year, index) => {
          const x = 24 + index * 79.33;
          return (
            <g key={year}>
              <line x1={x} y1="119" x2={x} y2="125" stroke="currentColor" strokeOpacity="0.32" />
              <text x={x} y="141" textAnchor="middle" className="fill-current text-[11px]">
                '{year}
              </text>
            </g>
          );
        })}

        {timelineItems.map((item) => (
          <g key={item.label}>
            <line x1={item.x} y1={item.y - 30} x2={item.x} y2="122" stroke={item.color} strokeWidth="1.5" />
            <rect x={item.x} y={item.y} width={item.width} height="14" rx="1.5" fill={item.color} opacity="0.94" />
            <rect x={item.x - 7} y={item.y - 38} width="18" height="18" rx="2" fill={item.color} />
            <text x={item.x + 2} y={item.y - 25} textAnchor="middle" fill="white" className="text-[10px] font-semibold">
              {item.mark}
            </text>
            <text x={item.x + 18} y={item.y - 24} className="fill-current text-[12px] font-medium">
              {item.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
