import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Github } from 'lucide-react'; //?? 해결해야됨
import { Button } from './components/button';
import { useParams } from 'react-router-dom';
import { useRef } from 'react';
import { projects } from './data/projects'; // 프로젝트 데이터 임포트

const Projects = () => {
  // 카드별로 ref를 배열로 관리
  const cardRefs = useRef([]);

  // 카드 마우스 무브 핸들러
  const handleMouseMove = (e, idx) => {
    const card = cardRefs.current[idx];
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // 카드에 3D 틸트 효과
    card.style.transform = `rotateY(${x / 20}deg) rotateX(${-y / 20}deg) scale(1.04)`;
    card.style.boxShadow = `${-x / 8}px ${y / 8}px 32px 0 rgba(0,0,0,0.12)`;
  };

  // 마우스가 카드에서 나가면 원상복구
  const handleMouseLeave = (idx) => {
    const card = cardRefs.current[idx];
    card.style.transform = '';
    card.style.boxShadow = '';
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">📁 프로젝트</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            ref={el => cardRefs.current[idx] = el}
            className="bg-white p-4 shadow-md rounded-xl block hover:bg-blue-50 transition duration-300"
            onMouseMove={e => handleMouseMove(e, idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
            style={{ willChange: 'transform' }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
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