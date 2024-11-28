import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Code2, ExternalLink } from 'lucide-react';
  //  Footer
function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-indigo-400" />
              <span className="text-white font-bold text-xl">DevLearn</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Empowering developers with comprehensive web development education.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/frontend" className="text-gray-400 hover:text-white">
                  Frontend
                </Link>
              </li>
              <li>
                <Link to="/backend" className="text-gray-400 hover:text-white">
                  Backend
                </Link>
              </li>
              <li>
                <Link to="/database" className="text-gray-400 hover:text-white">
                  Database
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-white">
                  Learning Resources and Guides
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Vishnukrchy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/VishnuK74610781?s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/vishnu-kumar-2235971a7/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://vishnukrchy.github.io/Portfolio/#home"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <ExternalLink className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} DevLearn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
