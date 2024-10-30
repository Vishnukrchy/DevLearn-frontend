import React from 'react';

interface CourseHeaderProps {
  title: string;
  description: string;
}

function CourseHeader({ title, description }: CourseHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white">{title}</h1>
        <p className="mt-2 text-xl text-blue-100">{description}</p>
      </div>
    </div>
  );
}

export default CourseHeader;