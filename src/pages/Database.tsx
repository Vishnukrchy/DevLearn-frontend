import React from 'react';
import { Database as DbIcon } from 'lucide-react';
import CourseHeader from '../components/CourseHeader';
import ContentSection from '../components/ContentSection';

function Database() {
  return (
    <div>
      <CourseHeader
        title="Database Fundamentals"
        description="Learn database concepts, SQL, and popular database systems"
      />
      <ContentSection title="Introduction to Databases">
        <div className="prose prose-blue max-w-none">
          <h3>What are Databases?</h3>
          <p>
            A database is an organized collection of structured information or data,
            typically stored electronically in a computer system.
          </p>

          <h3>Key Concepts</h3>
          <ul>
            <li>Relational vs NoSQL Databases</li>
            <li>SQL Fundamentals</li>
            <li>Database Design</li>
            <li>Data Modeling</li>
          </ul>
        </div>
      </ContentSection>
    </div>
  );
}

export default Database;