export const projects = [
  {
    id: 'shop',
    title: '🛒 쇼핑몰 프로젝트',
    description:
      'React, Redux, Zustand, bootstrap CSS 기반의 쇼핑몰 구현. state 상태 관리 도구 비교 및 데이터 바인딩, ajax 요청 및 컴포넌트화를 통한 간결한 코드로 구현.',
    github: 'https://github.com/himmel-33/shop',
    image: '/shopMain.png',
    imageMaxWidth: 800,
    detail: `
      - 상태 관리: Redux와 Zustand를 비교하며 상품 목록, 장바구니, 사용자 상태를 관리합니다.
      - 비동기 데이터: axios로 상품 데이터를 외부 API에서 받아오고, Redux-thunk로 비동기 로직을 처리
      - 컴포넌트 구조: 상품 리스트, 상세, 장바구니, 주문 등 각 기능별로 컴포넌트 분리.
      - 라우팅: react-router-dom으로 페이지 이동(메인, 상품상세, 장바구니 등).
      - 스타일링: bootstrap 라이브러리로 반응형 UI 구현.
      - 주요 라이브러리**: react, redux, zustand, react-router-dom, axios, bootstrap.
      - 핵심 로직: 
      - 상품 목록/상세/장바구니 및 state상태를 Redux와 Zustand로 각각 구현.
      - 장바구니 담기/빼기, 수량 변경, 주문 처리 등 상태 변화가 즉시 반영.
      - 상품 데이터는 useEffect로 최초 로딩 시 fetch.
    `,
  },
  {
    id: 'chat',
    title: '💬 채팅 서버 프로젝트',
    description:
      'React + Express → Go로 마이그레이션한 WebSocket 기반 실시간 채팅 서버 구축. socket.io(gorilla/websocket)를 활용한 실시간 통신 구현',
    github: 'https://github.com/himmel-33/chat',
    images: [
      { src: '/chatting.png', maxWidth: 800, alt: '채팅 메시지 예시' },
    ],
    detail: `
      - 실시간 채팅: WebSocket 기반으로 실시간 메시지 송수신.
      - 백엔드: 
      - 초기에는 Express + socket.io로 구현, 이후 Go(gorilla/websocket)로 마이그레이션.
      - 서버는 클라이언트 연결 관리, 메시지 브로드캐스트, 사용자 입장/퇴장 이벤트 처리.
      - 프론트엔드: 
      - React에서 WebSocket 연결 및 메시지 렌더링.
      - useEffect로 소켓 연결/해제 관리, useState로 메시지 목록 관리.
      - 주요 라이브러리: react, socket.io-client, gorilla/websocket(Go), express.
      - 핵심 로직:
      - 클라이언트에서 메시지 입력 → 서버로 전송 → 서버가 모든 클라이언트에 브로드캐스트.
      - 서버는 연결된 소켓 목록을 관리하며, 연결/해제 시 이벤트 발생.
      - Go 버전에서는 채널과 고루틴을 활용해 동시성 처리.
    `,
  },
  {
    id: 'law',
    title: '📚 한눈에 보는 법률 정보 앱 (진행 중)',
    description:
      'React Native 기반 법안/법령 통합 열람 앱. API 요청 json 데이터를 정규화 작업  및 AI를 활용한 데이터 요약 기능',
    github: 'https://github.com/himmel-33/L-project',
    images: [
      { src: '/lawMain.png', maxWidth: 180, alt: '앱 메인' },
      { src: '/lawDetail.png', maxWidth: 180, alt: '앱 상세' },
      { src: '/lawShowMore.png', maxWidth: 180, alt: '앱 더보기' },
      { src: '/lawMypage.png', maxWidth: 180, alt: '앱 마이페이지' },
      { src: '/lawDarkmode.png', maxWidth: 180, alt: '앱 다크모드' },
    ],
    imageMaxWidth: 180,
    detail: `
      - 플랫폼: React Native 기반 모바일 앱.
      - 데이터 구조: 법령/조문/항/호 등 계층적 JSON 데이터를 파싱 및 정규화하여 DB에 저장.
      - 주요 기능:
      - 법률/법안 통합 검색 및 열람.
      - API로 받아온 법령 데이터를 정규화(normalization)하여 효율적으로 관리.
      - AI(예: OpenAI API)로 법령 요약 기능 제공.
      - 다크모드, 마이페이지, 더보기 등 다양한 화면 제공.
      - 주요 라이브러리: react-native, axios, react-navigation, expo, openai.
      - 핵심 로직:
      - 계단식 JSON 데이터를 파싱해 DB에 저장(법령-조문-항-호 구조).
      - 클라이언트에서 검색/필터링/요약 등 다양한 기능 제공.
      - 외부 api 및 openai api 요청 효율적으로 처리.
      - Expo-CLI 개발로 ios, 안드로이드, 웹 3가지 동시개발.
    `,
  },
];