import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { Button } from './components/button';
import { useParams } from 'react-router-dom';
import { useRef } from 'react';
import { projects } from './data/projects'; // 프로젝트 데이터 임포트

const Projects = () => {
  // 카드별로 ref를 배열로 관리
  const cardRefs = useRef([]);

  // 카드 마우스 무브 핸들러
  const handleMouseMove = (e, idx) => {
    const card = cardRefs.current[idx]; // 가져온 실제 DOM 요소
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = -1/6 * x + 20;
    const rotateX = 1/10 * y - 20;

    // 카드 3D 틸트
    card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.02)`;
    card.style.boxShadow = `${-x / 8}px ${y / 8}px 32px 0 rgba(0,0,0,0.3)`;

    // 빛 반사 효과 (글로시)
    if (card.gloss) {
      card.gloss.style.background = `
        radial-gradient(
          circle at ${x}px ${y}px,
          rgba(255,255,255,0.35) 0px,
          rgba(255,255,255,0.15) 40px,
          rgba(255,255,255,0.0) 120px
        )
      `;
    }
  };

  // 마우스가 카드에서 나가면 원상복구
  const handleMouseLeave = (idx) => {
    const card = cardRefs.current[idx];
    card.style.transform = '';
    card.style.boxShadow = '';
    if (card.gloss) {
      card.gloss.style.background = '';
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center" style={{ perspective: '500px' }} >
        {projects.map((project, idx) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            ref={el => cardRefs.current[idx] = el}
            className="relative p-4 shadow-md rounded-xl block transition duration-300 w-70 h-100 overflow-hidden"
            onMouseMove={e => handleMouseMove(e, idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
            style={{
              willChange: 'transform',
              backgroundImage: 'url(backgroundCard.png)', // 각 카드에 배경 적용
              backgroundSize: 'cover',                  // 카드 전체에 꽉 차게
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            {/* 카드 내용 */}
			<h3 className="text-black text-3xl">{project.title}</h3>
            <img
              src={project.image ? project.image : project.images[0].src}
              alt={project.title}
              className="w-full h-40 object-contain mb-2 rounded"
            />
            <p className="text-black text-xl">{project.description}</p>
            <div
              className="pointer-events-none absolute top-0 left-0 w-full h-full"
              ref={el => (cardRefs.current[idx] && (cardRefs.current[idx].gloss = el))}
              style={{ zIndex: 10 }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

const ProjectDetail = () => {
	const { id } = useParams();
	const project = projects.find((p) => p.id === id);

	if (!project) return <div className="p-6">프로젝트를 찾을 수 없습니다.</div>;

	return (
		<div className="p-6 max-w-3xl mx-auto">
			<h2 className="text-4xl text-white mb-4">{project.title}</h2>
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
					className="mb-2 rounded shadow block"
				/>
			) : null}
			<div className="mb-4 text-xl text-white" style={{ whiteSpace: 'pre-line' }}>
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
						<FaGithub size={16} /> GitHub 보기
					</Button>
				</a>
			)}
		</div>
	);
};

export default function App() {
	return (
		<div className="bg-realstone min-h-screen">
			<Router>
				<div className="p-8 flex justify-between items-center max-w-6xl mx-auto">
					<div className="text-5xl text-white"
					style={{
							fontFamily: "'pokemon dppt','press start 2p'",
							textShadow: '2px 2px 0 #222, 4px 4px 0 #444',
    						letterSpacing: '2px',
						}}>
						이진구가 잡은 프로젝트 도감
					</div>
				</div>
				<div className="flex justify-center mb-8">
					<Link to="/">
						<span className="retro-wave">▶ 태초마을로</span>
					</Link>					
				</div>
				<div className="px-4 md:px-8">
					<Routes>
						<Route path="/" element={<Projects />} />
						<Route path="/projects/:id" element={<ProjectDetail />} />
					</Routes>
				</div>
			</Router>
		</div>
		
	);
}