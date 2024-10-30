import React from 'react';
import CourseHeader from '../../components/CourseHeader';
import ContentSection from '../../components/ContentSection';

function JavaScriptContent() {
  return (
    <div>
      <CourseHeader
        title="JavaScript Essentials"
        description="Add interactivity and dynamic behavior to your websites"
      />
      <ContentSection title="Introduction to JavaScript">
        <div className="prose prose-blue max-w-none">
          <h3>What is JavaScript?</h3>
          <p>
            JavaScript is a programming language that enables interactive web pages. It is an essential
            part of web applications and can be used on both the client-side and server-side.
          </p>

          <h3>Basic Syntax</h3>
          <pre className="bg-gray-800 text-white p-4 rounded-lg">
            <code>{`// Variables and Data Types
let message = 'Hello, World!';
const pi = 3.14159;

// Functions
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Arrays and Objects
const numbers = [1, 2, 3, 4, 5];
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};`}</code>
          </pre>

          <h3>Key Concepts</h3>
          <ul>
            <li>Variables and Data Types</li>
            <li>Functions and Scope</li>
            <li>DOM Manipulation</li>
            <li>Events and Event Handling</li>
          </ul>
        </div>
      </ContentSection>
    </div>
  );
}

export default JavaScriptContent;