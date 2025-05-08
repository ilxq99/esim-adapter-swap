
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from '@/components/ui/icon';
import { useEffect } from 'react';

const Contacts = () => {
  // Прокручиваем страницу наверх при монтировании
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    alert('Ваше сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <section className="bg-gradient-to-b from-gray-50 to-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <h1 className="text-3xl font-bold text-dark mb-4">
                    Свяжитесь с нами
                  </h1>
                  <p className="text-gray-600 mb-8">
                    У вас есть вопросы о наших eSIM адаптерах? Заполните форму, и мы свяжемся с вами в ближайшее время.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Имя
                        </label>
                        <Input
                          id="name"
                          placeholder="Введите ваше имя"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Введите ваш email"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Тема
                      </label>
                      <Input
                        id="subject"
                        placeholder="Укажите тему сообщения"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Сообщение
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Введите ваше сообщение"
                        rows={5}
                        required
                        className="min-h-[120px]"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full md:w-auto">
                      Отправить сообщение
                    </Button>
                  </form>
                </div>
                
                <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h2 className="text-xl font-semibold text-dark mb-6">
                      Контактная информация
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="mt-1 mr-3 bg-primary/10 p-2 rounded-full">
                          <Icon name="Mail" className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">Электронная почта</h3>
                          <p className="mt-1 text-gray-600">info@switchesim.ru</p>
                          <p className="mt-1 text-gray-600">support@switchesim.ru</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="mt-1 mr-3 bg-primary/10 p-2 rounded-full">
                          <Icon name="Phone" className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">Телефон</h3>
                          <p className="mt-1 text-gray-600">+7 (800) 123-45-67</p>
                          <p className="mt-1 text-gray-600">+7 (495) 123-45-67 (Москва)</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="mt-1 mr-3 bg-primary/10 p-2 rounded-full">
                          <Icon name="MapPin" className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">Адрес</h3>
                          <p className="mt-1 text-gray-600">
                            123456, Россия, г. Москва,<br />
                            ул. Инновационная, д. 42, офис 301
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="mt-1 mr-3 bg-primary/10 p-2 rounded-full">
                          <Icon name="Clock" className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">Время работы</h3>
                          <p className="mt-1 text-gray-600">
                            Понедельник - Пятница: 9:00 - 18:00<br />
                            Суббота, Воскресенье: Выходной
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <h3 className="text-sm font-medium text-gray-900 mb-3">Мы в социальных сетях</h3>
                      <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-primary">
                          <Icon name="Facebook" className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary">
                          <Icon name="Instagram" className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary">
                          <Icon name="Twitter" className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary">
                          <Icon name="Linkedin" className="h-6 w-6" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contacts;
