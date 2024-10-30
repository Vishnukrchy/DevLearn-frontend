import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface TopicCardProps {
  title: string;
  description: string;
  path: string;
  icon: LucideIcon;
}

function TopicCard({ title, description, path, icon: Icon }: TopicCardProps) {
  return (
    <Link
      to={path}
      className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
    >
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <Icon className="h-6 w-6 text-blue-500" />
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </Link>
  );
}

export default TopicCard;