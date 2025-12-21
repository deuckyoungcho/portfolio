const screenshotBase = "/screenshots";
const iconBase = "/icons";
const logoBase = "/logo";

export const company: Record<string, { label: string; logo: string }> = {
  razenca: {
    label: "라젠카에이아이",
    logo: logoBase + "/razenca.png",
  },
};

export const resumeData = {
  name: "조득용",
  title: "프론트엔드 개발자",
  yearsOfExperience: "9년차",
  profilePicture: "/photo.jpg",
  contact: {
    email: "cps3upp@gmail.com",
    phone: "+821062715105",
    // github: "cps3upp",
  },
  summary: `9년차 프론트엔드 엔지니어로서 React, TypeScript 기반의 웹 서비스 개발을 주도해 왔습니다.
대규모 슈퍼앱 플랫폼의 코어 SDK 및 공통 모듈 개발을 리딩했으며, 최근 스타트업에서는 Tailwind CSS, Remix를 활용하여 고성능 고객용/어드민 웹 애플리케이션 아키텍처를 성공적으로 구축했습니다.
디자이너와 협력하여 디자인 시스템 초기 구축 및 적용을 주도했으며, 백엔드 개발자와 API 설계에 적극 참여하여 견고한 시스템 아키텍처 구축에 기여했습니다.
문제해결 능력과 함께 사용자 경험을 최우선으로 고려하는 개발자가 되는 것을 목표합니다.`,
  experience: [
    {
      company: "라젠카에이아이",
      period: "2025.01 - 2025.11 (10개월)",
      role: "프론트엔드 개발 | 팀장",
      logo: "/logo/razenca.png",
      projects: [
        {
          title: "메디슨 어드민 웹페이지 개발",
          period: "2025.01 - 2025.11",
          images: Array(6)
            .fill(null)
            .map((_, index) => screenshotBase + `/admin_0${index + 1}.png`),
          summary:
            "React/TS, MUI, Zustand를 활용한 어드민 웹페이지 개발 및 CMS 시스템 구현",
          description: [
            "Zustand, React Hook Form, MUI를 활용한 어드민 프론트엔드 개발",
            "백엔드 개발자와 API 인터페이스 설계",
            "데이터 수집을 위한 Open API, Node.js 크롤링 로직 구현",
            "Tiptap Editor 커스터마이징을 통해 컨텐츠 관리 시스템(CMS) 개발",
            "관리자 역할 기반 접근 제어(RBAC) 시스템 적용",
          ],
          stack: [
            "react",
            "typescript",
            "zustand",
            "mui",
            "chartjs",
            "reactHookForm",
            "nodejs",
            "vite",
            "pnpm",
          ],
        },
        {
          title: "메디슨 고객용 웹페이지 개발",
          period: "2025.01 - 2025.11",
          images: Array(5)
            .fill(null)
            .map((_, index) => screenshotBase + `/medison_0${index + 1}.png`),
          summary:
            "React Router 프레임워크(Remix) 기반 고객용 웹사이트 프론트엔드 개발 및 디자인 시스템 구축",
          description: [
            "React Router 프레임워크와 TypeScript 환경에서 고객용 웹 애플리케이션 프론트엔드 개발",
            "React Router의 SSR(Server Side Rendering) 기능을 활용하여 SEO 대응 기반 마련",
            "기획/디자이너와 협업하여 일관된 디자인 시스템(Tailwind CSS, Shadcn) 적용",
            "컴포넌트 문서화를 위한 Storybook 구축",
            "공통 로직 공유를 위한 Verdaccio(사내저장소) 구축",
          ],
          stack: [
            "react",
            "reactRouter",
            "tailwind",
            "shadcn",
            "reactHookForm",
            "storybook",
            "verdaccio",
            "vite",
            "pnpm",
          ],
        },
      ],
    },
    {
      company: "티맥스에이앤씨",
      period: "2016.04 - 2024.12 (8년 9개월)",
      role: "프론트엔드 개발 | 팀원",
      projects: [
        {
          title: "슈퍼앱 SDK 개발",
          period: "2023.07 - 2024.11",
          images: Array(3)
            .fill(null)
            .map((_, index) => screenshotBase + `/superapp_0${index + 1}.png`),
          summary: "SuperOS(Native) 기능 제공 및 SuperApp 관리를 위한 SDK 개발",
          description: [
            "플랫폼, 앱스토어, 앱 간의 통신을 위한 프로토콜 설계 리드",
            "SuperOS(Native) 기능 및 앱 관리 기능을 래핑하여 SDK로 제공",
            "Typedoc를 활용하여 API 문서 자동화",
            "웹소켓 통신을 위한 자체 프로토콜(SAP) 헬퍼 라이브러리 개발",
          ],
          stack: [
            "react",
            "typescript",
            "typedoc",
            "mobx",
            "websocket",
            "vite",
            "pnpm",
          ],
        },
        {
          title:
            "대규모 공공기관 통합 협업 플랫폼 구축 (서울시교육청, 농어촌공사, 육군본부)",
          period: "2022.12 - 2024.07",
          images: Array(3)
            .fill(null)
            .map((_, index) => screenshotBase + `/sen_0${index + 1}.png`),
          summary:
            "React 기반의 통합 플랫폼 솔루션 프론트엔드 개발 및 주요 고객사 시스템 맞춤 적용",
          description: [
            "React 기반 플랫폼 프론트엔드 아키텍처 설계 및 구현",
            "WebSocket 통신 시스템 고도화",
            "고객사 요구에 맞춰 새로운 UI/UX 디자인 적용",
          ],
          stack: [
            "react",
            "typescript",
            "mobx",
            "styledComponents",
            "websocket",
            "vite",
            "pnpm",
          ],
        },
        {
          title: "푸디스트 성공식당 커뮤니티 B2C 서비스 구축",
          period: "2023.05 - 2023.08",
          images: Array(4)
            .fill(null)
            .map((_, index) => screenshotBase + `/foodist_0${index + 1}.png`),
          summary: "채팅, 게시판, 정보 페이지 등을 포함한 B2C 서비스 개발",
          description: [
            "플랫폼 파트 및 앱 연동 파트 프론트엔드 개발",
            "기존 Core(App Manager) 경량화",
            "고객사 요구에 맞춰 새로운 UI/UX 디자인 적용",
          ],
          stack: [
            "react",
            "typescript",
            "mobx",
            "styledComponents",
            "websocket",
            "vite",
            "pnpm",
          ],
        },

        {
          title: "슈퍼앱 플랫폼 프론트엔드 개발",
          period: "2022.02 - 2024.12",
          images: Array(3)
            .fill(null)
            .map((_, index) => screenshotBase + `/superapp_0${index + 1}.png`),
          summary:
            "웹 앱을 동적으로 실행하고 관리하는 슈퍼앱 플랫폼 프론트엔드 개발",
          description: [
            "웹 앱을 동적으로 실행하고 관리하는  슈퍼앱 플랫폼 프론트엔드 구조 설계 및 구현",
            "레거시(Yarn, Webpack) 환경을 Pnpm, Vite 기반으로 마이그레이션하여 개발 효율을 개선",
            "Monorepo 도입하여 Core(앱 관리 로직), UI(React 컴포넌트), SDK(플랫폼-앱 통신) 모듈 분리",
          ],
          stack: [
            "react",
            "typescript",
            "styledComponents",
            "mobx",
            "websocket",
            "mui",
            "vite",
            "yarn",
            "pnpm",
            "monorepo",
          ],
        },
        {
          title: "WAPL 협업 플랫폼 프론트엔드 개발",
          period: "2021.03 - 2022.02",
          images: Array(3)
            .fill(null)
            .map((_, index) => screenshotBase + `/wapl_0${index + 1}.png`),
          summary: "WAPL 플랫폼 UI/UX 전면 리뉴얼 및 협업 모듈 통합",
          description: [
            "새로운 디자인에 맞춰 플랫폼의 UI/UX를 전면 리뉴얼, 반응형 웹 구현",
            "채팅, 노트, 미팅 등의 독립 모듈들을 플랫폼에 안정적으로 통합",
            "다국어(i18n) 및 테마(다크/라이트/시스템) 기능 구현",
          ],
          stack: [
            "react",
            "javascript",
            "styledComponents",
            "antDesign",
            "mobx",
            "axios",
          ],
        },
        {
          title: "TeeSpace 협업 플랫폼 프론트엔드 개발 리딩",
          period: "2019.01 - 2021.03",
          images: Array(3)
            .fill(null)
            .map((_, index) => screenshotBase + `/teespace_0${index + 1}.png`),
          summary:
            "초기 협업 플랫폼의 프론트엔드 팀장, 핵심 모듈(톡/드라이브/노트) 설계",
          description: [
            "플랫폼 프론트엔드 베이스 아키텍처 설계 및 구현",
            "채팅, 드라이브, 노트 등 핵심 모듈의 안정적인 통합",
          ],
          stack: [
            "react",
            "javascript",
            "styledComponents",
            "antDesign",
            "mobx",
            "axios",
            "websocket",
            "yarn",
            "webpack",
          ],
        },
        {
          title: "ProNet 프론트엔드 개발",
          period: "2018.03 - 2019.01",
          summary: "네트워크 데이터 시각화 및 관리를 위한 웹 어플리케이션 개발",
          images: Array(3)
            .fill(null)
            .map((_, index) => screenshotBase + `/pronet_0${index + 1}.png`),
          description: [
            "Cloud 네트워크 데이터를 기반으로 시각화 및 관리하는 웹 어플리케이션 개발",
            "HTML, JavaScript(vanilla), CSS, TOP.js(JS 기반 웹 프레임워크)를 사용하여 필요기능 직접 구현.",
          ],
          stack: [
            "html",
            "css",
            "javascript",
            "axios",
            "jquery",
            "chartjs",
            "topjs",
          ],
        },
      ],
    },
    {
      company: "사이드 프로젝트",
      period: "2023.10 - 2023.11 (2개월)",
      role: "프리랜서",
      projects: [
        {
          title: "쿠팡 납품업체 재고 관리 시스템 개발",
          period: "2023.10 - 2023.11",
          images: Array(3)
            .fill(null)
            .map((_, index) => screenshotBase + `/echo_0${index + 1}.jpg`),
          summary:
            "React와 Node.js(Express)를 사용한 재고 관리 시스템의 프론트엔드/서버 개발.",
          description: [
            "React, Node.js (Express)를 사용하여 재고 관리 시스템의 프론트엔드 및 서버 일부 개발",
            "Excel 파일 파싱, 데이터 렌더링 및 Excel 내보내기 기능 구현",
            "Express 서버를 활용하여 REST API 구현",
          ],
          stack: ["react", "mui", "axios", "nodejs", "express", "mysql"],
        },
      ],
    },
  ],
  education: [
    {
      school: "숭실대학교",
      major: "정보통신전자공학과",
      period: "2009.03 - 2016.02",
      icon: iconBase + "/soongsil.png",
      url: "https://ssu.ac.kr/",
    },
    {
      school: "선린인터넷고등학교",
      major: "인터넷정보통신과",
      period: "2006.03 - 2009.02",
      icon: iconBase + "/sunrin.svg",
      url: "https://sunrint.sen.hs.kr/",
    },
  ],
  awards: [
    {
      title: "티맥스 우수사원상",
      date: "2022.09",
      description: "2022년 2분기 우수사원상 수상",
    },
  ],
};
