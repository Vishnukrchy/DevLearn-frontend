import React from 'react';
import { BookOpen, Video, Code } from 'lucide-react';
import CourseHeader from '../components/CourseHeader';
import ContentSection from '../components/ContentSection';

function Resources() {
  const resources = [
    {
      title: 'Documentation',
      icon: BookOpen,
      items: [
        { name: 'MDN Web Docs', url: 'https://developer.mozilla.org' },
        { name: 'React Documentation', url: 'https://react.dev' },
        { name: 'Java Documentation', url: 'https://docs.oracle.com/en/java/' },
      ],
    },
    {
      title: 'Video Tutorials',
      icon: Video,
      items: [
        { name: 'Frontend Masters', url: 'https://frontendmasters.com' },
        { name: 'Udemy', url: 'https://udemy.com' },
        { name: 'Coursera', url: 'https://coursera.org' },
      ],
    },
    {
      title: 'Practice Platforms',
      icon: Code,
      items: [
        { name: 'CodePen', url: 'https://codepen.io' },
        { name: 'LeetCode', url: 'https://leetcode.com' },
        { name: 'HackerRank', url: 'https://hackerrank.com' },
      ],
    },
  ];

  return (
    <div>
      <CourseHeader
        title="Learning Resources"
        description="Curated resources to support your learning journey"
      />
      <ContentSection title="Recommended Resources">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.title} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Icon className="h-6 w-6 text-indigo-600" />
                  <h3 className="text-xl font-semibold">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-indigo-600"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </ContentSection>
    </div>
  );
}

export default Resources;