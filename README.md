# 강은석 Back-End Engineer Portfolio

Java, Spring Boot, MSA, DevOps 경험을 정리한 개인 포트폴리오 사이트입니다.

## 실행

```bash
npm install
npm run dev
```

## 블로그 RSS

기본 블로그 주소는 `https://archiventum.tistory.com/`입니다. 브라우저 CORS 정책 때문에 RSS 프록시가 필요하면 `.env.local`에 아래 값을 추가합니다.

```bash
VITE_TISTORY_RSS_URL=https://archiventum.tistory.com/rss
VITE_RSS_PROXY_URL=https://api.allorigins.win/raw?url={url}
```

## 배포

현재 GitHub Pages 주소는 `https://meteoriver.github.io/`입니다. Pages 설정이 브랜치 루트 배포로 되어 있어 빌드 결과물의 `index.html`과 `assets`도 루트에 반영합니다.
