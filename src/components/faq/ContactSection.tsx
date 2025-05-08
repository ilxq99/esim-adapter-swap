
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ContactSection: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto bg-blue-50 p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold text-dark mb-3">
        Не нашли ответ на свой вопрос?
      </h3>
      <p className="text-gray-600 mb-4">
        Если вы не нашли ответ на свой вопрос, свяжитесь с нашей службой
        поддержки. Мы всегда готовы помочь вам разобраться с любыми
        вопросами.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex-grow">
          <p className="text-sm text-gray-500">Служба поддержки:</p>
          <p className="font-medium">support@switchesim.ru</p>
          <p className="font-medium">+7 (800) 123-45-67</p>
        </div>
        <div>
          <Button asChild>
            <Link to="/contacts">Связаться с нами</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
