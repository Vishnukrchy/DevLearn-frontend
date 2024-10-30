import React from 'react';

interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
}

function ContentSection({ title, children }: ContentSectionProps) {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
        {children}
      </div>
    </section>
  );
}

export default ContentSection;