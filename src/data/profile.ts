import {
  Award,
  BookOpen,
  Braces,
  Building2,
  Cloud,
  Code2,
  Container,
  Database,
  Github,
  KeyRound,
  Mail,
  Network,
  Server,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import type {
  BlogPost,
  NavItem,
  Project,
  ResumeSection,
  SkillGroup,
  SocialLink,
} from '../types/site';

export const siteConfig = {
  name: '강은석',
  title: 'Back-End Engineer',
  headline: '백엔드 개발자 강은석입니다.',
  focus: 'Java / Spring Boot / Authentication',
  email: 'dmseordl@naver.com',
  githubUrl: 'https://github.com/MeteoRiver',
  blogUrl: 'https://archiventum.tistory.com/',
  domain: 'https://meteoriver.github.io',
};

export const navItems: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Resume', href: '/resume' },
];

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: siteConfig.githubUrl, icon: Github },
  { label: 'Blog', href: siteConfig.blogUrl, icon: BookOpen },
  { label: 'Email', href: `mailto:${siteConfig.email}`, icon: Mail },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    description:
      '',
    items: [
      { name: 'Java', icon: Code2 },
      { name: 'Spring Boot', icon: Server },
      { name: 'Spring MVC', icon: Braces },
      { name: 'Spring Security', icon: ShieldCheck },
      { name: 'Spring Data JPA', icon: Database },
    ],
  },
  {
    title: 'Data & Messaging',
    description:
      '',
    items: [
      { name: 'MySQL', icon: Database },
      { name: 'Redis', icon: Database },
      { name: 'MongoDB', icon: Database },
      { name: 'PostgreSQL', icon: Database },
      { name: 'MariaDB', icon: Database },
      { name: 'Flyway', icon: Workflow },
    ],
  },
  {
    title: 'Cloud & DevOps',
    description:
      '',
    items: [
      { name: 'Docker', icon: Container },
      { name: 'Jenkins', icon: Workflow },
      { name: 'Nginx', icon: Network },
      { name: 'Naver Cloud', icon: Cloud },
    ],
  },
  {
    title: 'Architecture & Security',
    description:
      '',
    items: [
      { name: 'Spring Cloud', icon: Cloud },
      { name: 'Eureka', icon: Network },
      { name: 'WebFlux', icon: Workflow },
      { name: 'JWT', icon: KeyRound },
      { name: 'OAuth2', icon: ShieldCheck },
      { name: 'Cryptography Basics', icon: KeyRound },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'paranmanzang',
    title: '독서 소모임 공간 관리 시스템',
    summary:
      '독서 소모임을 위한 공간 대여, 결제, 채팅 서비스를 MSA와 비동기 구조로 구현한 프로젝트입니다.',
    description:
      '사용자와 판매자가 공간을 등록하고 예약/결제할 수 있으며, 소모임원 간 채팅까지 지원하는 독서 소모임 공간 대여 서비스입니다. Spring Cloud 기반 MSA 구조와 Docker/Jenkins 배포 파이프라인을 경험했습니다.',
    problem:
      '공간 대여 서비스는 사용자, 판매자, 결제, 채팅 등 도메인이 분리되어 있고 인증과 데이터 저장소 요구가 달라 단일 구조로 관리하기 어려웠습니다.',
    solution:
      'Config Server, Eureka, Gateway를 중심으로 서비스를 분리하고, JWT/OAuth2 인증, MySQL/MongoDB/Redis 저장소, WebFlux 기반 비동기 흐름을 적용했습니다. Jenkins와 Docker Hub를 연동해 자동 빌드/배포를 구성했습니다.',
    architecture: [
      'Spring Cloud MSA',
      'Eureka Service Discovery',
      'Gateway API Routing',
      'Docker/Jenkins CI/CD',
    ],
    retrospective:
      'MSA는 기술 선택보다 서비스 경계와 운영 흐름을 이해하는 일이 더 중요하다는 점을 배웠습니다. 배포 자동화와 인증 흐름을 직접 다루며 백엔드 운영 관점의 감각을 넓혔습니다.',
    techStack: [
      'Java',
      'Spring Boot',
      'Spring Cloud',
      'JPA',
      'MongoDB',
      'Redis',
      'Docker',
      'Jenkins',
    ],
    githubUrl: 'https://github.com/MeteoRiver/paran_msa',
    period: '2024.08 - 2024.11',
  },
  {
    id: 'lodging-commander',
    title: '호텔 예약 프로그램',
    summary: '호텔 숙박 예약과 결제를 제공하는 Spring Boot 기반 숙박 서비스입니다.',
    description:
      '호텔 등록, 예약, 결제, 지도 주소 검색을 포함한 숙박 서비스입니다. Spring Security, JWT, OAuth2 인증과 MySQL/Redis 기반 데이터 처리를 담당했습니다.',
    problem:
      '숙박 서비스는 예약 데이터, 사용자 인증, 외부 지도 API, 결제 흐름이 함께 얽혀 있어 안정적인 계층 분리와 인증 처리가 필요했습니다.',
    solution:
      'Spring MVC 구조로 API를 설계하고, Spring Security와 JWT/OAuth2로 인증/인가를 구현했습니다. 지도 API와 주소 검색을 연동해 호텔 위치 정보를 사용자 흐름에 연결했습니다.',
    architecture: [
      'Spring Boot Monolith',
      'Spring Security Auth',
      'MySQL/Redis Data Layer',
      'React Client',
    ],
    retrospective:
      '짧은 기간의 프로젝트였지만 인증 흐름과 외부 API 연동, 예약 도메인의 상태 관리를 실제 서비스 형태로 연결해보는 경험을 했습니다.',
    techStack: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'OAuth2',
      'MySQL',
      'Redis',
      'Docker',
    ],
    githubUrl: 'https://github.com/MeteoRiver/LodgingCommander',
    period: '2024.06 - 2024.08',
  },
  {
    id: 'semo-crypto',
    title: '암호화 테스트 서비스',
    summary:
      '업무 프로젝트에서 키 발급, 인코딩, 암호 알고리즘 검증을 다루는 암호화 테스트 서비스입니다.',
    description:
      'Hash, ECC, RSA 기능을 계층형 구조로 모듈화하고 BouncyCastle 기반 Crypto Provider를 추상화해 알고리즘 확장 가능성을 고려한 서비스입니다.',
    problem:
      '암호 알고리즘 검증은 잘못된 곡선 입력, 인코딩 오류, 키 포맷 차이 등 예외 케이스가 많아 일관된 구조와 검증 흐름이 필요했습니다.',
    solution:
      'Controller, Service, Crypto Layer로 책임을 나누고 ECC 공개키 압축/비압축 포맷, ECDSA 전자서명 검증, RSA-OAEP 암복호화, 처리 시간 측정 기능을 구현했습니다.',
    architecture: [
      'Controller Layer',
      'Service Layer',
      'Crypto Provider Abstraction',
      'Common Exception Handling',
    ],
    retrospective:
      '보안 도메인은 구현 자체보다 명확한 입력 검증, 실패 처리, 알고리즘 교체가 가능한 구조가 중요하다는 점을 체감했습니다.',
    techStack: ['Java', 'Spring Boot', 'BouncyCastle', 'ECDSA', 'RSA-OAEP', 'REST API'],
    githubUrl: siteConfig.githubUrl,
    period: '2025.08 - 2025.10',
  },
  {
    id: 'docs-refactor',
    title: '사내 문서 관리 프로그램',
    summary:
      '업무, 거래명세서, 입금계산서, 세금 흐름을 상태 기반 프로세스로 정리한 시스템 리팩토링입니다.',
    description:
      '분산된 업무 흐름을 거래명세서 중심 상태 기반 프로세스로 통합하고, 댓글/파일 첨부/메일 알림/통계/권한 구조를 개선했습니다.',
    problem:
      '업무 단위가 분산되어 데이터 관계가 복잡하고, 권한 단계와 삭제 정책이 명시적이지 않아 유지보수와 이력 추적이 어려웠습니다.',
    solution:
      '도메인 구조와 연관관계를 재설계하고 명시적 권한 컬럼, Soft Delete, Flyway 마이그레이션, RestAssured 통합 테스트를 도입했습니다. 파일 업로드 제한과 상대 경로 보존 문제를 운영 환경 기준으로 개선했습니다.',
    architecture: [
      'Domain Refactoring',
      'State Based Process',
      'Flyway Migration',
      'RestAssured Integration Test',
    ],
    retrospective:
      '기존 기능을 유지하면서 구조를 바꾸는 일은 새 기능 개발보다 더 많은 맥락 이해가 필요했습니다. 데이터 정합성과 운영 이슈를 함께 보는 관점을 배웠습니다.',
    techStack: ['Java', 'Spring Boot', 'JPA', 'Docker', 'Flyway', 'RestAssured'],
    githubUrl: siteConfig.githubUrl,
    period: '2025.10 - 2026.01',
  },
  {
    id: 'passwordless-auth-platform',
    title: 'Passwordless Authentication Platform',
    summary:
      '모바일 앱, 인증 서버, 서비스 제공자 서버, SDK를 연동해 QR/Push 기반 비밀번호 없는 인증 흐름을 구현한 내부 프로젝트입니다.',
    description:
      '서비스 서버가 인증 로직을 직접 구현하지 않아도 되도록 인증 서버, 서비스 제공자 서버, 모바일 인증 앱, SDK의 역할을 분리한 인증 플랫폼입니다. QR 인증과 Push 인증 흐름을 중심으로 요청 검증, 암복호화, 사용자 인증 단계를 설계했습니다.',
    problem:
      '서비스마다 인증 로직을 직접 구현하면 사용자 식별 정보와 인증 요청이 여러 서버를 오가며 보안 경계가 흐려질 수 있었습니다. 인증 책임을 분리하면서도 서버 간 요청을 신뢰할 수 있는 구조가 필요했습니다.',
    solution:
      '인증 서버와 서비스 제공자 서버 사이에 SDK 기반 연동 구조를 두고, QR/Push 인증 요청 흐름을 구현했습니다. 요청에는 Nonce, Timestamp, 서명 검증을 적용하고 주요 payload는 JWE 기반으로 보호했습니다. 모바일 앱에서는 Keystore와 생체/PIN 인증을 활용해 사용자 인증 단계를 분리했습니다.',
    architecture: [
      'Auth Server',
      'Service Provider Server',
      'Client SDK',
      'Mobile Authentication App',
    ],
    retrospective:
      '인증 기능은 단순 로그인 구현보다 서버 간 신뢰 경계, 요청 무결성, 키 관리, 사용자 경험이 함께 맞물리는 문제라는 점을 배웠습니다. 암호화 알고리즘 자체보다 안전한 흐름과 실패 처리 설계가 더 중요하다는 관점을 얻었습니다.',
    techStack: [
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'Flyway',
      'Caffeine Cache',
      'Firebase FCM',
      'React',
      'Android',
      'SDK',
      'JWE',
    ],
    period: '2026.02.19 - 2026.03.27',
  },
  {
    id: 'race-timing-management-system',
    title: 'Race Timing Management System',
    summary:
      'RFID 리더기에서 수집되는 경기 기록 데이터를 기반으로 대회 운영, 참가자 관리, 결과 집계, 통계 기능을 제공하는 내부 시스템입니다.',
    description:
      '대회, 종목, 참가자, 타이밍 포인트, 스플릿, 리더기 설정, 결과 데이터를 하나의 운영 흐름으로 다루는 기록 관리 시스템입니다. 현장 운영자가 사용하는 워크벤치와 참가자 기록 조회 흐름을 함께 고려해 API와 관리 화면을 구성했습니다.',
    problem:
      '대회 운영에서는 참가자 정보, RFID 리더기 설정, 구간 기록, 순위, 통계가 강하게 연결됩니다. 리더기에서 들어오는 원천 데이터를 안정적으로 저장하고, 운영자가 조회/수정/추출할 수 있는 관리 기능과 결과 제공 구조가 필요했습니다.',
    solution:
      '대회, 종목, 그룹, 참가자, 리더기, 타이밍 포인트, 스플릿을 도메인 단위로 나누고 Spring Boot 기반 API를 구성했습니다. RFID raw data를 결과 데이터로 가공하고, 리더보드/구간별 통계/성별 분석/결과 다운로드 기능을 제공했습니다. 논리삭제 정책, 권한별 개인정보 조회 제한, 이메일 인증, JWT 인증, Flyway 마이그레이션도 함께 정리했습니다.',
    architecture: [
      'Event Management API',
      'RFID Data Ingestion',
      'Result Aggregation',
      'Statistics Dashboard',
    ],
    retrospective:
      '운영 시스템은 기능 수보다 데이터 정합성과 예외 흐름이 더 중요했습니다. 현장 데이터가 늦게 들어오거나 누락될 수 있다는 전제를 두고 결과 수정, 감사 로그, 권한 제어를 함께 설계하는 경험을 했습니다.',
    techStack: [
      'Java 21',
      'Spring Boot',
      'Spring Security',
      'JPA',
      'MariaDB',
      'Flyway',
      'JWT',
      'React',
      'TypeScript',
      'React Query',
      'ECharts',
    ],
    period: '2026.04 - 진행중',
  },
  {
    id: 'iot-smart-system',
    title: 'IoT Smart System',
    summary: 'OpenCV, Firebase, Android, Arduino를 연동한 인공지능 기반 스마트 IoT 시스템입니다.',
    description:
      '카메라 영상을 실시간 처리하고 결과를 Arduino로 전달해 스마트 공기청정기 동작을 제어하는 학부 종합설계 프로젝트입니다.',
    problem:
      '영상 처리 결과를 모바일 앱, Firebase, Arduino 장치와 연결해야 해 하드웨어와 소프트웨어 간 안정적인 데이터 흐름이 필요했습니다.',
    solution:
      'Android Studio와 Java로 앱을 구현하고 Firebase로 업로드 결과와 장치 제어 흐름을 연결했습니다. Arduino는 C++ 기반으로 제어 로직을 구현했습니다.',
    architecture: ['Android App', 'Firebase Integration', 'OpenCV Processing', 'Arduino Control'],
    retrospective:
      '소프트웨어가 실제 장치 동작으로 이어지는 경험을 통해 입력, 처리, 출력 흐름을 끝까지 검증하는 습관을 익혔습니다.',
    techStack: ['Java', 'Android Studio', 'Firebase', 'Arduino', 'C++', 'OpenCV'],
    githubUrl: siteConfig.githubUrl,
    period: '2021.02 - 2021.08',
  },
].sort((a, b) => b.period.localeCompare(a.period));

export const fallbackBlogPosts: BlogPost[] = [
  {
    title: 'Spring Security와 JWT 인증 흐름 정리',
    url: siteConfig.blogUrl,
    publishedAt: 'Latest',
    tags: ['Spring Security', 'JWT'],
    summary: '백엔드 인증/인가를 공부하며 토큰 기반 인증 흐름과 보안 고려사항을 정리합니다.',
  },
  {
    title: 'Docker와 Jenkins로 배포 자동화하기',
    url: siteConfig.blogUrl,
    publishedAt: 'Archive',
    tags: ['Docker', 'Jenkins', 'DevOps'],
    summary: '프로젝트에서 경험한 컨테이너 빌드, 이미지 배포, CI/CD 파이프라인 구성을 기록합니다.',
  },
  {
    title: 'MSA 프로젝트에서 서비스 경계 나누기',
    url: siteConfig.blogUrl,
    publishedAt: 'Archive',
    tags: ['MSA', 'Spring Cloud'],
    summary: 'Eureka, Gateway, Config Server를 사용하며 배운 서비스 분리와 운영 흐름을 정리합니다.',
  },
];

export const resumeSections: ResumeSection[] = [
  {
    title: '업무 경험',
    items: [
      {
        title: '뮤토스마트 Backend Developer',
        meta: '2025.07 - Present',
        description:
          '인증/암호화 흐름 설계 및 구현, Java/Spring 기반 백엔드 업무를 설계 및 수행하고 있습니다.',
      },
    ],
  },
  {
    title: '교육',
    items: [
      {
        title: '네이버 클라우드 데브옵스 13기',
        meta: '2024.04 - 2024.11',
        description:
          'Java, Spring Boot, Spring Security, JPA, Spring Cloud, Docker, Jenkins, MySQL, Eureka를 학습하고 팀 프로젝트에 적용했습니다.',
      },
      {
        title: '항해99 클럽 스터디 3기',
        meta: '2024.07 - 2024.08',
        description: 'Java 기반 알고리즘 문제 해결 능력을 꾸준히 강화했습니다.',
      },
    ],
  },
  {
    title: '학력',
    items: [
      {
        title: '홍익대학교 세종캠퍼스 소프트웨어융합학과',
        meta: '2018.03 - 2024.08 | GPA 3.83 / 4.5 ',
        description:
          'Java, 데이터베이스, 웹 개발, IoT 종합설계 프로젝트를 중심으로 소프트웨어 개발 기초를 쌓았습니다.',
      },
      {
        title: '화정고등학교',
        meta: '2017.02 졸업',
        description: '',
      },
    ],
  },
  {
    title: '자격 및 수상',
    items: [
      {
        title: '정보처리기사',
        meta: '2022.11',
        description: '한국산업인력공단 주관 정보처리기사 자격을 취득했습니다.',
      },
      {
        title: 'NCA / NCP',
        meta: '2024.11 - 2024.12',
        description: '네이버 클라우드 관련 자격을 취득하며 클라우드 기반 운영 지식을 보완했습니다.',
      },
      {
        title: 'SQLD',
        meta: '2025.04',
        description: 'KDATA 데이터자격검정 SQLD 자격을 취득했습니다.',
      },
      {
        title: '리눅스 마스터 2급',
        meta: '2026.01',
        description: '한국정보통신진흥협회 리눅스 마스터 2급 자격을 취득했습니다.',
      },
      {
        title: '소프트웨어융합학과 학술제 최우수상',
        meta: '2021.11',
        description:
          '홍익대학교 소프트웨어융합학과 학술제에서 종합설계 프로젝트로 최우수상을 수상했습니다.',
      },
    ],
  },
];

export const careerNarrative = [
  '의견이 다른 사람들과도 대화를 통해 목표를 맞추고, 효율성과 안정성 사이의 균형점을 찾는 일을 중요하게 생각합니다.',
  '학부 프로젝트와 팀 프로젝트에서 갈등을 조율하며 기능 완성도와 팀의 속도를 함께 지키는 경험을 쌓았습니다.',
  '맡은 일의 끝을 구현에서 멈추지 않고 배포, 운영, 장애 가능성, 데이터 정합성까지 이어서 바라보려고 합니다.',
];

export const learningNow = [
  'Spring Boot 기반 인증/인가, 예외 처리, 계층형 API 설계를 더 견고하게 다듬고 있습니다.',
  'MSA, Spring Cloud, Gateway, Eureka를 활용한 서비스 분리와 운영 흐름을 학습하고 있습니다.',
  'Docker, Jenkins, GitHub Actions를 통해 반복 가능한 배포 환경을 만드는 데 관심이 있습니다.',
  '암호화, 전자서명, 요청 무결성 검증처럼 보안과 백엔드가 만나는 지점을 업무에서 익히고 있습니다.',
];

export const principles = [
  '좋은 서비스는 소통과 협업에서 시작한다고 믿습니다.',
  '맡은 일은 끝까지 책임지고, 문제가 생기면 빠르게 원인을 찾고 개선합니다.',
  '기능 구현뿐 아니라 배포, 운영, 역할 분담까지 이어지는 개발 경험을 중요하게 봅니다.',
  '지속적인 학습과 기록을 통해 어제보다 나은 백엔드 개발자로 성장하려 합니다.',
];

export const quickStats = [
  { label: 'Role', value: 'Back-End Engineer' },
  { label: 'Main Stack', value: 'Java / Spring Boot' },
  { label: 'Project Focus', value: 'MSA / Auth / DevOps' },
  { label: 'Experience', value: 'Team Projects + Backend Work' },
];

export const highlights = [
  { label: 'Education', value: '홍익대학교 소프트웨어융합학과', icon: Award },
  { label: 'Cloud Training', value: '네이버 클라우드 데브옵스 13기', icon: Cloud },
  { label: 'Current Work', value: '뮤토스마트 Backend Developer', icon: Building2 },
];
