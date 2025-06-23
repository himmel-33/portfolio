import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Github } from 'lucide-react';
import { Button } from './components/button';
import { useParams } from 'react-router-dom';

const projects = [
	{
		id: 'shop',
		title: '🛒 쇼핑몰 프로젝트',
		description:
			'React, Redux, Zustand, bootstrap CSS 기반의 쇼핑몰 구현. state 상태 관리 도구 비교 및 데이터 바인딩, ajax 요청 및 컴포넌트화를 통한 간결한 코드로 구현.',
		github: 'https://github.com/himmel-33/shop',
		image: '/shopMain.png',
		imageMaxWidth: 800, // 원하는 값(px)
		detail: `
			- 상태 관리: Redux와 Zustand를 비교하며 상품 목록, 장바구니, 사용자 상태를 관리합니다.
			- 비동기 데이터: axios로 상품 데이터를 외부 API에서 받아오고, Redux-thunk로 비동기 로직을 처리합니다.
			- 컴포넌트 구조: 상품 리스트, 상세, 장바구니, 주문 등 각 기능별로 컴포넌트 분리.
			- 라우팅: react-router-dom으로 페이지 이동(메인, 상품상세, 장바구니 등).
			- 스타일링: bootstrap 라이브러리로 반응형 UI 구현.
			- 주요 라이브러리**: react, redux, zustand, react-router-dom, axios, bootstrap.
			- 핵심 로직*: 
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
		imageMaxWidth: 180, // 원하는 값(px)
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

const Projects = () => (
	<div className="p-6 max-w-6xl mx-auto">
		<h2 className="text-2xl font-semibold mb-6">📁 프로젝트</h2>
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{projects.map((project) => (
				<Link
					key={project.id}
					to={`/projects/${project.id}`}
					className="bg-white p-4 shadow-md rounded-xl block hover:bg-blue-50 transition"
				>
					<h3 className="text-xl font-semibold mb-2">{project.title}</h3>
					<p className="text-gray-700 mb-4">{project.description}</p>
				</Link>
			))}
		</div>
	</div>
);

const ProjectDetail = () => {
	const { id } = useParams();
	const project = projects.find((p) => p.id === id);

	if (!project) return <div className="p-6">프로젝트를 찾을 수 없습니다.</div>;

	return (
		<div className="p-6 max-w-3xl mx-auto">
			<h2 className="text-2xl font-bold mb-4">{project.title}</h2>
			{/* 여러 이미지 지원 */}
			{project.images ? (
				<div className="flex gap-4 mb-4 flex-wrap">
					{project.images.map((img, idx) => (
						<img
							key={idx}
							src={img.src}
							alt={img.alt || project.title}
							style={{
								maxWidth: img.maxWidth,
								width: '100%',
								height: 'auto',
								margin: '0 auto',
							}}
							className="rounded shadow block"
						/>
					))}
				</div>
			) : project.image ? (
				<img
					src={project.image}
					alt={project.title}
					style={{
						maxWidth: project.imageMaxWidth,
						width: '100%',
						height: 'auto',
						margin: '0 auto',
					}}
					className="mb-4 rounded shadow block"
				/>
			) : null}
			<div className="mb-4 mt-10" style={{ whiteSpace: 'pre-line' }}>
				{project.detail}
			</div>
			{project.github && (
				<a
					href={project.github}
					target="_blank"
					rel="noopener noreferrer"
				>
					<Button
						variant="outline"
						className="flex items-center gap-2"
					>
						<Github size={16} /> GitHub 보기
					</Button>
				</a>
			)}
		</div>
	);
};

export default function App() {
	return (
		<Router>
			<nav className="bg-white shadow p-4 px-4 md:px-8 rounded-2xl m-4 ml-40 mr-40">
				<div className="flex justify-between items-center max-w-6xl mx-auto">
					<Link to="/" className="text-xl font-bold text-blue-600">
						Portfolio
					</Link>
				</div>
			</nav>
			<div className="px-4 md:px-8">
				<Routes>
					<Route path="/" element={<Projects />} />
					<Route path="/projects/:id" element={<ProjectDetail />} />
				</Routes>
			</div>
		</Router>
	);
}