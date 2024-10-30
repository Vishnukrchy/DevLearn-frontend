import React from 'react';
import CourseHeader from '../../components/CourseHeader';
import ContentSection from '../../components/ContentSection';

function CssContent() {
  return (
    <div>
      <CourseHeader
        title="CSS Mastery"
        description="Style your web pages with modern CSS techniques"
      />
      <ContentSection title="Introduction to CSS">
        <div className="prose prose-blue max-w-none">
          <h3>What is CSS?</h3>
          <p>
            CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation
            of a document written in HTML. CSS describes how elements should be rendered on screen,
            on paper, in speech, or on other media.
          </p>

          <h3>Basic Syntax</h3>
          <pre className="bg-gray-800 text-white p-4 rounded-lg">
            <code>{`/* Selector */
.button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}`}</code>
          </pre>

          <h3>Key Concepts</h3>
          <ul>
            <li>Selectors and Properties</li>
            <li>Box Model</li>
            <li>Layout Systems (Flexbox, Grid)</li>
            <li>Responsive Design</li>
          </ul>
        </div>
      </ContentSection>
    </div>
  );
}

export default CssContent;