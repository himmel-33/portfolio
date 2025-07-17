## React + Vite로 만든 포트폴리오

### 구조 : 데이터와 컴포넌트 분리 후 App.jsx 에 포트폴리오 표현

### 디자인: tailwindcss/vite 라이브러리로 커스텀 디자인 및 포트폴리오 카드를 각 3D 틸트 효과 적용
#### 3D틸트 : 마우스 이벤트 핸들러로 transform 의 rotateY,X 값을 (20 -20)deg 사이로 조정
#### custom-color : index.css파일에 tailwind 커스텀 컬러 저장 후 원하는 색 가져와서 적용