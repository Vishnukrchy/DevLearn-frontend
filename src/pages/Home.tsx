import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Layout, Database, BookOpen } from 'lucide-react';

function Home() {
  const categories = [
    {
      title: 'Frontend Development',
      path: '/frontend',
      icon: Layout,
      description: 'Master HTML, CSS, and JavaScript to create beautiful user interfaces.',
      color: 'bg-blue-500',
    },
    {
      title: 'Backend Development',
      path: '/backend',
      icon: Code2,
      description: 'Learn Core Java and Spring Framework for robust server-side applications.',
      color: 'bg-green-500',
    },
    {
      title: 'Database Fundamentals',
      path: '/database',
      icon: Database,
      description: 'Understand database concepts, SQL, and popular database systems.',
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-blue-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Master Web Development
            </h1>
            <p className="mt-3 max-w-md mx-auto text-xl text-indigo-100 sm:text-2xl md:mt-5 md:max-w-3xl">
              Comprehensive resources for frontend, backend, and database development.
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                to="/frontend"
                className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10"
              >
                Start Learning
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Learning Paths
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Choose your path and start your journey in web development
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.path}
                  to={category.path}
                  className="relative group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className={`inline-flex p-3 rounded-lg ${category.color}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-gray-900">
                      {category.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{category.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Our Platform?
            </h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <h3 className="mt-4 text-xl font-semibold">Comprehensive Learning</h3>
              <p className="mt-2 text-gray-600">
                Structured content covering all aspects of web development
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Layout className="h-8 w-8 text-indigo-600" />
              <h3 className="mt-4 text-xl font-semibold">Practical Examples</h3>
              <p className="mt-2 text-gray-600">
                Real-world examples and exercises to reinforce learning
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Code2 className="h-8 w-8 text-indigo-600" />
              <h3 className="mt-4 text-xl font-semibold">Interactive Learning</h3>
              <p className="mt-2 text-gray-600">
                Hands-on coding exercises and quizzes to test your knowledge
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;