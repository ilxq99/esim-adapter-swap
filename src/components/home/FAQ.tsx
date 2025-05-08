
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const FAQ = () => {
  const faqs = [
    {
      question: "Что такое eSIM адаптер?",
      answer: "eSIM адаптер - это устройство, позволяющее использовать технологию eSIM на устройствах, которые изначально не поддерживают эту функцию. Он устанавливается в слот для SIM-карты вашего устройства и эмулирует работу встроенного eSIM чипа."
    },
    {
      question: "С какими устройствами совместим Switch eSIM?",
      answer: "Switch eSIM совместим с большинством смартфонов, планшетов и других устройств, имеющих слот для SIM-карты. Полный список поддерживаемых устройств вы можете найти в разделе 'Поддерживаемые устройства'."
    },
    {
      question: "Как установить eSIM адаптер?",
      answer: "Установка проста: откройте слот для SIM-карты, вставьте наш адаптер вместо физической SIM-карты, следуйте инструкциям по активации через мобильное приложение. Подробная инструкция поставляется вместе с адаптером."
    },
    {
      question: "Можно ли использовать несколько eSIM одновременно?",
      answer: "Да, наши адаптеры позволяют хранить несколько eSIM профилей и быстро переключаться между ними через мобильное приложение без физической замены SIM-карт."
    },
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-dark mb-4">Часто задаваемые вопросы</h2>
            <p className="text-gray-600">
              Ответы на самые популярные вопросы о наших eSIM адаптерах
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="animate-fade-in" 
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">Остались вопросы? Ознакомьтесь с полным списком вопросов и ответов</p>
            <Button asChild variant="outline">
              <Link to="/faq">Все вопросы и ответы</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
