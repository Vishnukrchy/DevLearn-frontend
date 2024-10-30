import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Server, Coffee } from 'lucide-react';
import CourseHeader from '../components/CourseHeader';
import ContentSection from '../components/ContentSection';
import TopicCard from '../components/TopicCard';

function BackendOverview() {
  const topics = [
    {
      title: 'Core Java',
      description: 'Master Java programming fundamentals and OOP concepts.',
      path: '/backend/java',
      icon: Coffee,
    },
    {
      title: 'Spring Framework',
      description: 'Build robust applications with Spring and Spring Boot.',
      path: '/backend/spring',
      icon: Server,
    },
  ];

  return (
    <div>
      <CourseHeader
        title="Backend Development"
        description="Build powerful server-side applications with Java and Spring"
      />
      <ContentSection title="Core Topics">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topics.map((topic) => (
            <TopicCard key={topic.path} {...topic} />
          ))}
        </div>
      </ContentSection>
    </div>
  );
}

function Backend() {
  return (
    <Routes>
      <Route index element={<BackendOverview />} />
    </Routes>
  );
}

export default Backend;