
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQItem } from '@/types/faq';

interface FAQCategoryProps {
  title: string;
  items: FAQItem[];
  categoryIndex: number;
}

const FAQCategory: React.FC<FAQCategoryProps> = ({ title, items, categoryIndex }) => {
  return (
    <div
      className="mb-10 animate-fade-in"
      style={{ animationDelay: `${0.1 * (categoryIndex + 1)}s` }}
    >
      <h2 className="text-xl font-semibold text-primary mb-4">
        {title}
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, itemIndex) => (
          <AccordionItem
            key={itemIndex}
            value={`${categoryIndex}-${itemIndex}`}
          >
            <AccordionTrigger className="text-left font-medium">
              {item.question}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-600">{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQCategory;
