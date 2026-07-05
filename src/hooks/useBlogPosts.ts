import { useEffect, useMemo, useState } from 'react';
import { fallbackBlogPosts } from '../data/profile';
import type { BlogPost } from '../types/site';

type BlogState = {
  posts: BlogPost[];
  isLoading: boolean;
  error: string | null;
  source: 'rss' | 'fallback';
};

const RSS_URL = import.meta.env.VITE_TISTORY_RSS_URL as string | undefined;
const RSS_PROXY_URL = import.meta.env.VITE_RSS_PROXY_URL as string | undefined;

function getTextContent(item: Element, selector: string) {
  return item.querySelector(selector)?.textContent?.trim() ?? '';
}

function parseTags(item: Element) {
  return Array.from(item.querySelectorAll('category'))
    .map((category) => category.textContent?.trim())
    .filter((tag): tag is string => Boolean(tag));
}

function parseRss(xmlText: string): BlogPost[] {
  const xml = new DOMParser().parseFromString(xmlText, 'text/xml');
  const items = Array.from(xml.querySelectorAll('item'));

  return items.slice(0, 10).map((item) => {
    const description = getTextContent(item, 'description').replace(/<[^>]*>/g, '').slice(0, 150);
    const publishedAt = getTextContent(item, 'pubDate');

    return {
      title: getTextContent(item, 'title'),
      url: getTextContent(item, 'link'),
      publishedAt: publishedAt ? new Date(publishedAt).toISOString().slice(0, 10) : '',
      tags: parseTags(item),
      summary: description,
    };
  });
}

export function useBlogPosts() {
  const [state, setState] = useState<BlogState>({
    posts: fallbackBlogPosts,
    isLoading: Boolean(RSS_URL),
    error: null,
    source: 'fallback',
  });

  const rssEndpoint = useMemo(() => {
    if (!RSS_URL) return null;
    if (!RSS_PROXY_URL) return RSS_URL;
    return RSS_PROXY_URL.replace('{url}', encodeURIComponent(RSS_URL));
  }, []);

  useEffect(() => {
    if (!rssEndpoint) return;

    const controller = new AbortController();

    async function loadPosts() {
      try {
        const response = await fetch(rssEndpoint!, { signal: controller.signal });
        if (!response.ok) throw new Error('RSS 응답을 가져오지 못했습니다.');

        const text = await response.text();
        const posts = parseRss(text).filter((post) => post.title && post.url);

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
          error: '티스토리 RSS 연결 전까지 예시 글을 표시합니다.',
          source: 'fallback',
        });
      }
    }

    void loadPosts();

    return () => controller.abort();
  }, [rssEndpoint]);

  return state;
}
