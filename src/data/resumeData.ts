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
  summary: {
    title:
      "9년의 경험을 바탕으로 기술적 복잡도를 낮추고 서비스의 가치를 높이는 프론트엔드 개발자 입니다.",
    paragraphs: [
      "저는 9년간 프론트엔드 기술을 중심으로 제품의 완성도를 높이고 최적의 사용자 경험을 제공하기 위해 고민해 왔습니다. 단순히 기능을 구현하는 것을 넘어 <b>디자인 시스템 구축을 통한 UI 표준화</b>, 서비스 특성에 맞춰 <b>SEO 및 초기 진입 경험을 개선하기 위한 SSR(React Router v7) 도입</b>, 그리고 <b>슈퍼앱 플랫폼 코어 SDK 개발 리딩</b>까지, 기술이 실제 서비스의 경쟁력이 되는 과정을 주도해 왔습니다.",
      "특히 제품의 초기 설계 단계부터 기획 및 디자인 파트와 긴밀하게 소통하며 전체 프론트엔드 구조를 견고히 다지는 데 강점이 있습니다. <b>MUI와 Zustand를 활용한 확장성 있는 어드민 웹 애플리케이션을 구축</b>하고, <b>Verdaccio를 이용한 내부 npm 서버 및 Storybook 환경을 구성</b>하여 팀 전체의 개발 생산성을 개선하는 등 효율적인 개발 환경을 만드는 데 집중해 왔습니다.",
      "9년간 쌓아온 탄탄한 기술 스택과 문제 해결에 대한 적극적인 자세를 바탕으로, 복잡도가 높은 프로젝트에서도 기술적 중심을 잡고 실질적인 성과를 만들어내는 데 자부심을 느낍니다.",
    ],
  },
  experience: [
    {
      id: "exp-0",
      company: "라젠카에이아이",
      period: "2025.01 - 2025.11 (10개월)",
      role: "프론트엔드 개발 | 팀장",
      logo: "/logo/razenca.png",
      projects: [
        {
          id: "proj-0-0",
          title: "메디슨 어드민 웹 어플리케이션 개발",
          period: "2025.01 - 2025.11",
          images: Array(6)
            .fill(null)
            .map((_, index) => screenshotBase + `/admin_0${index + 1}.png`),
          summary:
            "React/TS, MUI, Zustand를 활용한 어드민 웹 어플리케이션 개발 및 CMS 시스템 구현",
          description: [
            "요양기관 데이터 수집을 위한 Open API, Node.js 크롤링 로직 구현",
            "Tiptap Editor 커스터마이징을 통해 컨텐츠 관리 시스템(CMS) 개발",
            "관리자 역할 기반 접근 제어(RBAC) 시스템 적용",
            "백엔드 개발자와 API 인터페이스 설계",
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
          id: "proj-0-1",
          title: "메디슨 고객용 웹 어플리케이션 개발",
          period: "2025.01 - 2025.11",
          images: Array(5)
            .fill(null)
            .map((_, index) => screenshotBase + `/medison_0${index + 1}.png`),
          summary:
            "React Router 프레임워크(Remix) 기반 고객용 웹 어플리케이션 프론트엔드 개발 및 디자인 시스템 구축",
          description: [
            "기획/디자이너와 협업하여 일관된 디자인 시스템(Tailwind CSS, Shadcn) 적용",
            "React Router 프레임워크의 SSR 기능을 활용하여 SEO 대응",
            "컴포넌트 문서화를 위한 Storybook 구축",
            "공통 로직 공유를 위한 Verdaccio(사내저장소) 구축",
            "채널톡, 전자서명모듈, 공인인증서 모듈 등 다양한 서드파티 모듈 연동",
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
      id: "exp-1",
      company: "티맥스에이앤씨",
      logo: "/logo/tmaxanc.png",
      period: "2016.04 - 2024.12 (8년 9개월)",
      role: "프론트엔드 개발 | 팀원",
      projects: [
        {
          id: "proj-1-0",
          title: "슈퍼앱 SDK 개발",
          period: "2023.07 - 2024.11",
          images: Array(3)
            .fill(null)
            .map((_, index) => screenshotBase + `/superapp_0${index + 1}.png`),
          summary: "SuperOS(Native) 기능 제공 및 SuperApp 관리를 위한 SDK 개발",
          description: [
            "플랫폼, 앱스토어, 앱 간의 통신을 위한 프로토콜 설계 및 개발 리드",
            "SuperOS(Native) 기능 및 앱 관리 기능을 래핑하여 SDK로 제공",
            "Typedoc를 활용하여 API 문서 자동화",
            "앱 라이프사이클 콜백 설계 및 구현",
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
          id: "proj-1-1",
          title:
            "대규모 공공기관 통합 협업 플랫폼 구축 (서울시교육청, 농어촌공사, 육군본부)",
          period: "2022.12 - 2024.07",
          images: Array(3)
            .fill(null)
            .map((_, index) => screenshotBase + `/sen_0${index + 1}.png`),
          summary:
            "React 기반의 슈퍼앱 플랫폼 프론트엔드 개발 및 주요 고객사 시스템 맞춤 적용",
          description: [
            "플랫폼 프론트엔드 베이스 아키텍처 설계 및 구현",
            "웹, 웹뷰 기반의 모바일 웹, 데스크탑 앱 각 버전 구현",
            "고객사 요구에 맞춰 새로운 UI/UX 디자인 적용",
            "SDK 적용, 통신 프로토콜(WebSocket) 전환 및 고도화",
          ],
          stack: [
            "react",
            "typescript",
            "mobx",
            "styledComponents",
            "websocket",
            "vite",
            "pnpm",
            "monorepo",
          ],
        },
        {
          id: "proj-1-2",
          title: "푸디스트 성공식당 커뮤니티 B2C 서비스 구축",
          period: "2023.05 - 2023.08",
          images: Array(4)
            .fill(null)
            .map((_, index) => screenshotBase + `/foodist_0${index + 1}.png`),
          summary: "채팅, 게시판, 정보 페이지 등을 포함한 B2C 서비스 개발",
          description: [
            "플랫폼 및 앱 연동 파트 프론트엔드 개발",
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
          id: "proj-1-3",
          title: "슈퍼앱 플랫폼 프론트엔드 개발",
          period: "2022.02 - 2024.12",
          images: Array(3)
            .fill(null)
            .map((_, index) => screenshotBase + `/superapp_0${index + 1}.png`),
          summary:
            "앱을 동적으로 실행하고 관리하는 슈퍼앱 플랫폼 프론트엔드 개발",
          description: [
            "Iframe 기반의 앱 매니저, 렌더링 엔진 설계 및 구현",
            "앱과 플랫폼 간의 통신 프로토콜 설계 및 구현",
            "레거시(Yarn, Webpack) 환경을 Pnpm, Vite 기반으로 마이그레이션하여 개발 효율을 개선",
            "Monorepo 도입하여 Core(앱 관리 로직), UI(React 컴포넌트), SDK(플랫폼-앱 통신) 모듈 분리",
            "서울시교육청, 육군본부, 미래앤, 포스코, 농어촌공사, 푸디스트 등의 다수 프로젝트 참여",
            "사업별 개발, 운영, 테스트 환경 통합 접속 포탈 개발을 통한 조직 내 업무 편의성 증대",
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
          id: "proj-1-4",
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
            "대화방, 친구 관련, 통합 알림센터 등 다수의 컴포넌트 개발",
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
          id: "proj-1-5",
          title: "TeeSpace 협업 플랫폼 프론트엔드 개발 리딩",
          period: "2019.01 - 2021.03",
          images: Array(3)
            .fill(null)
            .map((_, index) => screenshotBase + `/teespace_0${index + 1}.png`),
          summary:
            "초기 협업 플랫폼의 프론트엔드 팀장, 핵심 모듈(톡/드라이브/노트) 설계",
          description: [
            "플랫폼 프론트엔드 아키텍처 설계 및 구현",
            "채팅, 드라이브, 노트 등 핵심 모듈의 안정적인 통합",
            "Top.js, Jquery 기반의 레거시 프론트엔드를 React로 전환",
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
            "jquery",
            "topjs",
          ],
        },
        {
          id: "proj-1-6",
          title: "ProNet 프론트엔드 개발",
          period: "2018.03 - 2019.01",
          summary: "네트워크 데이터 시각화 및 관리를 위한 웹 어플리케이션 개발",
          images: Array(3)
            .fill(null)
            .map((_, index) => screenshotBase + `/pronet_0${index + 1}.png`),
          description: [
            "Cloud 네트워크 데이터 시각화, 관리를 위한 웹 어플리케이션 개발",
            "HTML, JavaScript(vanilla), CSS, TOP.js(JS 기반 웹 프레임워크), Jquery를 사용하여 필요기능 직접 구현",
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
      id: "exp-2",
      company: "사이드 프로젝트",
      period: "2023.10 - 2023.11 (2개월)",
      role: "프리랜서",
      projects: [
        {
          id: "proj-2-0",
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
            "Express 서버를 활용하여 입고, 재고, 판매추이 등의 Rest API 구현",
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
