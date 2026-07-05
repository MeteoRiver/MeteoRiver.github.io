import {
  BookOpen,
  Bot,
  Braces,
  Cloud,
  Code2,
  Container,
  Database,
  Github,
  Globe,
  Layers3,
  Linkedin,
  Mail,
  Network,
  Server,
  TerminalSquare,
  Workflow,
} from 'lucide-react';
import type { BlogPost, NavItem, Project, ResumeSection, SkillGroup, SocialLink } from '../types/site';

export const siteConfig = {
  name: '강은석',
  title: 'Developer Hub',
  headline: '백엔드와 AI Agent를 공부하는 개발자 강은석입니다.',
  focus: 'Java / Spring Boot / AI Agent / Docker',
  email: 'hello@gdeom.dev',
  githubUrl: 'https://github.com/gdeom',
  blogUrl: 'https://gdeom.tistory.com',
  resumePdfUrl: '/resume.pdf',
  domain: 'https://gdeom.dev',
};

export const navItems: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' },
];

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: siteConfig.githubUrl, icon: Github },
  { label: 'Blog', href: siteConfig.blogUrl, icon: BookOpen },
  { label: 'Email', href: `mailto:${siteConfig.email}`, icon: Mail },
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: Linkedin },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    description: '도메인 모델링, API 설계, 데이터 흐름을 안정적으로 다루는 영역입니다.',
    items: [
      { name: 'Java', icon: Code2 },
      { name: 'Spring Boot', icon: Server },
      { name: 'JPA', icon: Layers3 },
      { name: 'MySQL', icon: Database },
    ],
  },
  {
    title: 'Frontend',
    description: '포트폴리오와 데모를 직접 표현하기 위한 인터페이스 역량입니다.',
    items: [
      { name: 'React', icon: Braces },
      { name: 'TypeScript', icon: TerminalSquare },
    ],
  },
  {
    title: 'DevOps',
    description: '배포 자동화와 운영 환경을 이해하며 서비스를 끝까지 연결합니다.',
    items: [
      { name: 'Docker', icon: Container },
      { name: 'GitHub Actions', icon: Workflow },
      { name: 'Linux', icon: TerminalSquare },
      { name: 'GCP', icon: Cloud },
    ],
  },
  {
    title: 'AI',
    description: '에이전트가 도구를 쓰고 상태를 이어가는 구조에 관심이 있습니다.',
    items: [
      { name: 'LangGraph', icon: Network },
      { name: 'MCP', icon: Globe },
      { name: 'Agentic Workflow', icon: Bot },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'agent-workflow-lab',
    title: 'Agent Workflow Lab',
    summary: 'LangGraph와 MCP를 이용해 반복 업무를 에이전트 플로우로 실험하는 연구형 프로젝트',
    description:
      'AI Agent가 외부 도구를 호출하고 작업 상태를 이어가며 사용자 요청을 처리하는 방식을 작은 실험 단위로 검증합니다.',
    problem:
      '단순 챗봇은 장기 작업, 도구 호출, 실패 복구를 다루기 어렵기 때문에 실제 업무 자동화에는 구조적인 한계가 있습니다.',
    solution:
      '상태 그래프를 중심으로 노드를 분리하고, MCP 도구 호출 계층을 별도로 두어 관찰 가능성과 재사용성을 높였습니다.',
    architecture: ['React 데모 화면', 'Spring Boot API', 'LangGraph Orchestrator', 'MCP Tool Server'],
    retrospective:
      '에이전트의 품질은 모델 성능만이 아니라 상태 설계, 도구 계약, 실패 시 재시도 정책에서 크게 갈린다는 점을 배웠습니다.',
    techStack: ['Java', 'Spring Boot', 'LangGraph', 'MCP', 'Docker'],
    githubUrl: 'https://github.com/gdeom',
    status: 'In Progress',
  },
  {
    id: 'portfolio-hub',
    title: 'Developer Hub',
    summary: '프로젝트, 이력서, 티스토리 블로그를 연결하는 개인 개발자 허브',
    description:
      '채용 담당자와 협업자가 3분 안에 기술 방향, 프로젝트, 꾸준한 학습 기록을 파악할 수 있도록 설계한 포트폴리오입니다.',
    problem:
      '이력서, GitHub, 블로그가 흩어져 있으면 개발자의 방향성과 최근 활동을 빠르게 파악하기 어렵습니다.',
    solution:
      '포트폴리오를 중심에 두고 티스토리 RSS, 프로젝트 상세, 이력서 다운로드를 한 흐름 안에 배치했습니다.',
    architecture: ['Vite Static App', 'React Router Pages', 'Tistory RSS Integration', 'GitHub Pages Deploy'],
    retrospective:
      '정적 사이트라도 데이터와 화면을 분리하면 향후 GitHub 활동, 코딩테스트, 서비스 링크를 자연스럽게 확장할 수 있습니다.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'GitHub Actions'],
    githubUrl: 'https://github.com/gdeom',
    demoUrl: 'https://gdeom.dev',
    status: 'Completed',
  },
  {
    id: 'spring-api-starter',
    title: 'Spring API Starter',
    summary: '인증, 예외 처리, 배포 자동화를 포함한 백엔드 API 스타터 템플릿',
    description:
      '새로운 백엔드 프로젝트를 빠르게 시작하기 위해 공통 설정과 운영에 필요한 기본기를 모듈화합니다.',
    problem:
      '매번 인증, 전역 예외, 로깅, 배포 설정을 반복해서 구성하면 실험 속도가 느려집니다.',
    solution:
      '공통 관심사를 템플릿화하고 Docker 및 GitHub Actions 기반의 기본 배포 흐름을 포함했습니다.',
    architecture: ['Spring Boot', 'MySQL', 'Docker Compose', 'GitHub Actions'],
    retrospective:
      '반복되는 설정을 줄이는 것은 단순 편의가 아니라 더 자주 실험하고 더 빠르게 학습하기 위한 기반입니다.',
    techStack: ['Java', 'Spring Boot', 'JPA', 'MySQL', 'Docker'],
    githubUrl: 'https://github.com/gdeom',
    status: 'Planning',
  },
];

export const fallbackBlogPosts: BlogPost[] = [
  {
    title: 'Spring Boot 프로젝트에서 예외 처리를 정리하는 방법',
    url: siteConfig.blogUrl,
    publishedAt: '2026-06-20',
    tags: ['Spring Boot', 'Backend'],
    summary: '컨트롤러, 서비스, 공통 응답 구조를 기준으로 예외 처리를 일관되게 설계한 기록입니다.',
  },
  {
    title: 'AI Agent를 공부하며 정리한 LangGraph 핵심 개념',
    url: siteConfig.blogUrl,
    publishedAt: '2026-06-05',
    tags: ['AI Agent', 'LangGraph'],
    summary: '상태 그래프, 노드, 엣지, 도구 호출 흐름을 작은 예제로 이해한 내용을 정리했습니다.',
  },
  {
    title: 'Docker Compose로 로컬 개발 환경 맞추기',
    url: siteConfig.blogUrl,
    publishedAt: '2026-05-28',
    tags: ['Docker', 'DevOps'],
    summary: 'MySQL과 애플리케이션 서버를 같은 규칙으로 실행해 팀 환경 차이를 줄인 경험입니다.',
  },
];

export const resumeSections: ResumeSection[] = [
  {
    title: '학력',
    items: [
      {
        title: 'Computer Science',
        meta: '학사 과정 또는 최종 학력 입력',
        description: '자료구조, 데이터베이스, 운영체제, 네트워크 등 백엔드 기반 과목을 중심으로 학습했습니다.',
      },
    ],
  },
  {
    title: '활동',
    items: [
      {
        title: 'Backend & AI Agent Study',
        meta: '2026 - Present',
        description: 'Spring Boot 기반 API와 AI Agent 워크플로우를 꾸준히 학습하고 블로그에 기록합니다.',
      },
    ],
  },
  {
    title: '자격증',
    items: [
      {
        title: '자격증 정보를 추가하세요',
        meta: '취득일',
        description: '정보처리기사, SQLD, 클라우드 관련 자격증 등 필요 항목을 확장할 수 있습니다.',
      },
    ],
  },
];

export const learningNow = [
  'Spring Boot 기반 API 설계와 운영 친화적인 예외 처리',
  'LangGraph, MCP를 활용한 Agentic Workflow',
  'Docker와 GitHub Actions를 이용한 재현 가능한 배포',
  '기술 블로그를 통한 학습 과정의 문서화',
];

export const principles = [
  '작게 만들고 빠르게 검증합니다.',
  '기능보다 먼저 문제와 사용 흐름을 이해합니다.',
  '코드는 다음 작업자가 읽을 수 있는 형태를 지향합니다.',
  '배포와 운영까지 이어지는 개발 경험을 중요하게 봅니다.',
];

export const quickStats = [
  { label: 'Focus', value: 'Backend + AI' },
  { label: 'Main Stack', value: 'Java / Spring' },
  { label: 'Learning Log', value: 'Tistory RSS' },
];
