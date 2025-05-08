
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FAQHeader from "@/components/faq/FAQHeader";
import FAQCategoryList from "@/components/faq/FAQCategoryList";
import ContactSection from "@/components/faq/ContactSection";
import { faqCategories } from "@/data/faqData";

const FAQ = () => {
  // Прокручиваем страницу наверх при монтировании
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <section className="bg-gradient-to-b from-gray-50 to-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FAQHeader 
              title="Часто задаваемые вопросы"
              description="Найдите ответы на часто задаваемые вопросы о технологии eSIM и наших адаптерах"
            />
            
            <FAQCategoryList categories={faqCategories} />
            
            <ContactSection />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
