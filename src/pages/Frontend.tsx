import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Code2, Palette, Layout } from 'lucide-react';
import CourseHeader from '../components/CourseHeader';
import ContentSection from '../components/ContentSection';
import TopicCard from '../components/TopicCard';
import HtmlContent from './frontend/HtmlContent';
import CssContent from './frontend/CssContent';
import JavaScriptContent from './frontend/JavaScriptContent';

function FrontendOverview() {
  const topics = [
    {
      title: 'HTML Fundamentals',
      description: 'Learn the building blocks of web pages with semantic HTML5.',
      path: '/frontend/html',
      icon: Layout,
    },
    {
      title: 'CSS Mastery',
      description: 'Style your web pages with modern CSS techniques.',
      path: '/frontend/css',
      icon: Palette,
    },
    {
      title: 'JavaScript Essentials',
      description: 'Add interactivity and dynamic behavior to your websites.',
      path: '/frontend/javascript',
      icon: Code2,
    },
  ];

  return (
    <div>
      <CourseHeader
        title="Frontend Development"
        description="Master the art of creating beautiful and interactive user interfaces"
      />
      <ContentSection title="Core Topics">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <TopicCard key={topic.path} {...topic} />
          ))}
        </div>
      </ContentSection>
    </div>
  );
}

function Frontend() {
  return (
    <Routes>
      <Route index element={<FrontendOverview />} />
      <Route path="html/*" element={<HtmlContent />} />
      <Route path="css/*" element={<CssContent />} />
      <Route path="javascript/*" element={<JavaScriptContent />} />
    </Routes>
  );
}

export default Frontend;