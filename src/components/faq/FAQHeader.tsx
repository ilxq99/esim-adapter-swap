
import React from 'react';

interface FAQHeaderProps {
  title: string;
  description: string;
}

const FAQHeader: React.FC<FAQHeaderProps> = ({ title, description }) => {
  return (
    <div className="max-w-3xl mx-auto text-center mb-12">
      <h1 className="text-3xl font-bold text-dark mb-4">
        {title}
      </h1>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default FAQHeader;
