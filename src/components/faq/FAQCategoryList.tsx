
import React from 'react';
import { FAQCategory as FAQCategoryType } from '@/types/faq';
import FAQCategory from './FAQCategory';

interface FAQCategoryListProps {
  categories: FAQCategoryType[];
}

const FAQCategoryList: React.FC<FAQCategoryListProps> = ({ categories }) => {
  return (
    <div className="max-w-3xl mx-auto mb-12">
      {categories.map((category, categoryIndex) => (
        <FAQCategory
          key={categoryIndex}
          title={category.title}
          items={category.items}
          categoryIndex={categoryIndex}
        />
      ))}
    </div>
  );
};

export default FAQCategoryList;
