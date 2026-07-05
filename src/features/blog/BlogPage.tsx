import { BookOpen, Rss } from 'lucide-react';
import { ButtonLink } from '../../components/ui/ButtonLink';
import { PageTransition } from '../../components/ui/PageTransition';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { Tag } from '../../components/ui/Tag';
import { siteConfig } from '../../data/profile';
import { useBlogPosts } from '../../hooks/useBlogPosts';

export function BlogPage() {
  const { posts, isLoading, error, source } = useBlogPosts();

  return (
    <PageTransition>
      <section className="page-shell">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Blog"
            title="블로그는 티스토리를 유지하고 최신 글만 연결합니다."
            description="홈페이지는 포트폴리오 허브 역할에 집중하고, 학습 기록은 티스토리 원문으로 이동합니다."
          />
          <ButtonLink href={siteConfig.blogUrl} external icon={<BookOpen className="h-4 w-4" />}>
            전체 글 보기
          </ButtonLink>
        </div>

        <div className="mt-8 flex min-h-12 items-center gap-3 rounded-lg border border-ink-200 bg-white px-4 text-sm text-ink-600 dark:border-ink-800 dark:bg-ink-900 dark:text-ink-300">
          <Rss className="h-4 w-4 text-mint-600 dark:text-mint-400" />
          {isLoading ? '티스토리 RSS를 불러오는 중입니다.' : source === 'rss' ? '티스토리 RSS에서 최신 글을 표시 중입니다.' : error ?? 'RSS 주소 연결 전 예시 글을 표시합니다.'}
        </div>

        <div className="mt-6 grid gap-4">
          {posts.map((post) => (
            <a
              key={`${post.title}-${post.publishedAt}`}
              className="focus-ring rounded-lg border border-ink-200 bg-white p-5 transition hover:-translate-y-1 hover:border-mint-500 hover:shadow-soft dark:border-ink-800 dark:bg-ink-900"
              href={post.url}
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <h2 className="text-lg font-semibold text-ink-950 dark:text-white">{post.title}</h2>
                <time className="shrink-0 text-sm text-ink-500 dark:text-ink-400">{post.publishedAt}</time>
              </div>
              <p className="mt-3 text-sm leading-6 text-ink-600 dark:text-ink-300">{post.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.slice(0, 4).map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
