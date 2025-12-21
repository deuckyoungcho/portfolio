const iconBase = "/icons";

export const skills: Record<string, { label: string; icon: string }> = {
  // 1. 언어 및 기본 기술
  html: {
    label: "HTML",
    icon: iconBase + "/html.webp",
  },
  css: {
    label: "CSS",
    icon: iconBase + "/css.png",
  },
  javascript: {
    label: "JavaScript",
    icon: iconBase + "/javascript.webp",
  },
  typescript: {
    label: "TypeScript",
    icon: iconBase + "/typescript.png",
  },

  // 2. 주요 프론트엔드 프레임워크/라이브러리
  react: {
    label: "React",
    icon: iconBase + "/react.png",
  },
  reactRouter: {
    label: "React Router v7",
    icon: iconBase + "/react-router.png",
  },

  // 3. 상태 관리 및 데이터 통신
  zustand: {
    label: "Zustand",
    icon: iconBase + "/zustand.ico",
  },
  mobx: {
    label: "MobX",
    icon: iconBase + "/mobx.webp",
  },
  axios: {
    label: "Axios",
    icon: iconBase + "/axios.ico",
  },
  websocket: {
    label: "WebSocket",
    icon: iconBase + "/websocket.png",
  },

  // 4. 스타일링 및 UI 라이브러리
  tailwind: {
    label: "Tailwind CSS",
    icon: iconBase + "/tailwind.png",
  },
  styledComponents: {
    label: "Styled Components",
    icon: iconBase + "/styled-components.png",
  },
  mui: {
    label: "MUI",
    icon: iconBase + "/mui.ico",
  },
  shadcn: {
    label: "Shadcn",
    icon: iconBase + "/shadcn.ico",
  },
  antDesign: {
    label: "Ant Design",
    icon: iconBase + "/ant-design.png",
  },

  // 5. 폼 관리 및 기타 프론트엔드 유틸리티
  reactHookForm: {
    label: "React Hook Form",
    icon: iconBase + "/react-hook-form.png",
  },
  chartjs: {
    label: "Chart.JS",
    icon: iconBase + "/chartjs.ico",
  },
  jquery: {
    label: "jQuery",
    icon: iconBase + "/jquery.ico",
  },
  topjs: {
    label: "Top.js",
    icon: iconBase + "/top.png",
  },

  // 6. 개발 도구 및 환경 설정
  vite: {
    label: "Vite",
    icon: iconBase + "/vite.svg",
  },
  webpack: {
    label: "Webpack",
    icon: iconBase + "/webpack.ico",
  },
  pnpm: {
    label: "Pnpm",
    icon: iconBase + "/pnpm.png",
  },
  yarn: {
    label: "Yarn",
    icon: iconBase + "/yarn.ico",
  },
  monorepo: {
    label: "Monorepo",
    icon: iconBase + "/pnpm.png",
  },
  storybook: {
    label: "Storybook",
    icon: iconBase + "/storybook.svg",
  },
  typedoc: {
    label: "TypeDoc",
    icon: iconBase + "/typedoc.ico",
  },
  verdaccio: {
    label: "Verdaccio",
    icon: iconBase + "/verdaccio.svg",
  },

  // 7. 백엔드/데이터베이스 (Backend/Database - Full-Stack)
  nodejs: {
    label: "Node.JS",
    icon: iconBase + "/nodejs.png",
  },
  express: {
    label: "Express",
    icon: iconBase + "/express.png",
  },
  mysql: {
    label: "MySQL",
    icon: iconBase + "/mysql.ico",
  },
};
