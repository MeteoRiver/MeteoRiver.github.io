import { useEffect, useState } from 'react';
import { fallbackBlogPosts } from '../data/profile';
import type { BlogPost } from '../types/site';

type BlogState = {
  posts: BlogPost[];
  isLoading: boolean;
  error: string | null;
  source: 'rss' | 'fallback';
};

const STATIC_POSTS_URL = '/blog-posts.json';

export function useBlogPosts() {
  const [state, setState] = useState<BlogState>({
    posts: fallbackBlogPosts,
    isLoading: true,
    error: null,
    source: 'fallback',
  });

  useEffect(() => {
    const controller = new AbortController();

    async function loadPosts() {
      try {
        const response = await fetch(STATIC_POSTS_URL, { signal: controller.signal });
        if (!response.ok) throw new Error('블로그 글 목록을 가져오지 못했습니다.');

        const posts = ((await response.json()) as BlogPost[]).filter((post) => post.title && post.url);

        setState({
          posts: posts.length > 0 ? posts : fallbackBlogPosts,
          isLoading: false,
          error: null,
          source: posts.length > 0 ? 'rss' : 'fallback',
        });
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return;
        setState({
          posts: fallbackBlogPosts,
          isLoading: false,
          error: '블로그 글 목록을 가져오지 못해 임시 글을 표시합니다.',
          source: 'fallback',
        });
      }
    }

    void loadPosts();

    return () => controller.abort();
  }, []);

  return state;
}
