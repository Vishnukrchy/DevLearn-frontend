import React from 'react';
import CourseHeader from '../../components/CourseHeader';
import ContentSection from '../../components/ContentSection';

function HtmlContent() {
  return (
    <div>
      <CourseHeader
        title="HTML Fundamentals"
        description="Learn the essential building blocks of web pages"
      />
      <ContentSection title="Introduction to HTML">
        <div className="prose prose-blue max-w-none">
          <h3>What is HTML?</h3>
          <p>
            HTML (HyperText Markup Language) is the standard markup language for creating web pages.
            It describes the structure of a web page semantically and originally included cues for
            the appearance of the document.
          </p>

          <h3>Basic Structure</h3>
          <pre className="bg-gray-800 text-white p-4 rounded-lg">
            <code>{`<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
  </body>
</html>`}</code>
          </pre>

          <h3>Key Concepts</h3>
          <ul>
            <li>Elements and Tags</li>
            <li>Attributes</li>
            <li>Document Structure</li>
            <li>Semantic HTML</li>
          </ul>
        </div>
      </ContentSection>
    </div>
  );
}

export default HtmlContent;