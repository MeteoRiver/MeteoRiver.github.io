import { AnimatePresence } from 'framer-motion';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { AboutPage } from './features/about/AboutPage';
import { BlogPage } from './features/blog/BlogPage';
import { HomePage } from './features/home/HomePage';
import { ProjectDetailPage } from './features/projects/ProjectDetailPage';
import { ProjectsPage } from './features/projects/ProjectsPage';
import { ResumePage } from './features/resume/ResumePage';
import { SkillsPage } from './features/skills/SkillsPage';

export function App() {
  const location = useLocation();

  return (
    <AppLayout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </AppLayout>
  );
}
