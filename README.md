# 강은석 Developer Hub

React, TypeScript, Vite, Tailwind CSS 기반 개인 포트폴리오 허브입니다.

## 실행

```bash
npm install
npm run dev
```

## 블로그 RSS 연결

티스토리 RSS 주소를 `.env.local`에 넣으면 Blog 페이지가 최신 글을 표시합니다.

```bash
VITE_TISTORY_RSS_URL=https://gdeom.tistory.com/rss
VITE_RSS_PROXY_URL=https://api.allorigins.win/raw?url={url}
```

프록시는 티스토리 RSS의 브라우저 CORS 정책에 따라 필요할 수 있습니다.

## 배포

`main` 브랜치에 push하면 GitHub Actions가 빌드 결과물을 GitHub Pages로 배포합니다.
개인 도메인을 연결할 경우 `public/sitemap.xml`, `public/robots.txt`, `index.html`의 도메인을 함께 갱신하세요.
