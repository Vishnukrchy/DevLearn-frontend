import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import CourseHeader from '../components/CourseHeader';
import ContentSection from '../components/ContentSection';

function About() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-indigo-100 min-h-screen">
      <CourseHeader
        title="About DevLearn"
        description="Our mission and vision for web development education"
      />
      <ContentSection title="Our Story">
        <div className="prose prose-blue max-w-none mb-10">
          <p>
            DevLearn was created with a simple mission: to provide
            comprehensive, high-quality web development education that bridges
            the gap between theory and practical application.
          </p>

          <h3>Our Vision</h3>
          <p>
            We believe in making web development education accessible,
            practical, and engaging. Our platform combines structured learning
            paths with hands-on exercises to ensure you gain real-world
            development skills.
          </p>

          <h3>Meet the Developer</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg p-6 shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
              <img
                src="src/assets/pesonal/pesonalImage.jpeg"
                alt="Vishnu Kumar"
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-indigo-200 shadow-lg"
              />
              <h4 className="text-xl font-bold text-center text-indigo-700">Vishnu Kumar</h4>
              <p className="text-gray-500 text-center font-medium">Software Developer</p>
              <p className="text-gray-600 text-center mt-2 px-2">
                Experienced in Java, Spring Boot, and backend API development, with a passion for delivering scalable solutions in web and mobile app development.
              </p>
              <div className="flex justify-center space-x-6 mt-6">
                <a href="https://github.com/Vishnukrchy" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/vishnu-kumar-2235971a7/" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="mailto:vishnukrkamat@gmail.com" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
    </div>
  );
}

export default About;
