
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const FAQ = () => {
  // Прокручиваем страницу наверх при монтировании
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqCategories = [
    {
      title: "Общие вопросы",
      items: [
        {
          question: "Что такое eSIM?",
          answer: "eSIM (embedded SIM) — это цифровая SIM-карта, встроенная в устройство. В отличие от физических SIM-карт, eSIM нельзя извлечь из устройства. Вместо этого, вы можете активировать eSIM профили удаленно от различных операторов связи."
        },
        {
          question: "Что такое Switch eSIM адаптер?",
          answer: "Switch eSIM адаптер — это устройство, которое устанавливается в слот для SIM-карты и позволяет использовать технологию eSIM на устройствах, не имеющих встроенной поддержки eSIM. Наш адаптер эмулирует работу встроенного eSIM чипа."
        },
        {
          question: "Какие преимущества даёт использование Switch eSIM?",
          answer: "Использование Switch eSIM предоставляет ряд преимуществ: возможность быстрого переключения между операторами без замены физической SIM-карты, хранение нескольких eSIM профилей одновременно, экономия на роуминге при международных поездках, и возможность использовать eSIM на устройствах без встроенной поддержки."
        },
        {
          question: "Нужно ли менять тарифный план для использования Switch eSIM?",
          answer: "Нет, вам не нужно менять тарифный план. Switch eSIM адаптер работает с любыми тарифными планами, которые поддерживают eSIM технологию. Для активации вам потребуется получить eSIM профиль от вашего оператора связи."
        }
      ]
    },
    {
      title: "Установка и активация",
      items: [
        {
          question: "Как установить Switch eSIM адаптер?",
          answer: "Установка очень проста: 1. Откройте слот для SIM-карты вашего устройства. 2. Вставьте адаптер Switch eSIM в слот (убедитесь, что соблюдаете правильную ориентацию). 3. Закройте слот и включите устройство. 4. Установите наше приложение из App Store или Google Play. 5. Следуйте инструкциям по активации в приложении."
        },
        {
          question: "Требуются ли дополнительные инструменты для установки?",
          answer: "Нет, для установки Switch eSIM адаптера не требуются дополнительные инструменты. Вам понадобится только ключик для открытия слота SIM-карты, который обычно поставляется вместе с вашим устройством."
        },
        {
          question: "Как активировать eSIM профиль на адаптере?",
          answer: "Для активации eSIM профиля вам необходимо: 1. Получить QR-код с профилем eSIM от вашего оператора. 2. Установить наше мобильное приложение. 3. Отсканировать QR-код через приложение. 4. Следовать инструкциям на экране для завершения активации."
        },
        {
          question: "Сколько времени занимает активация?",
          answer: "Обычно весь процесс активации занимает не более 5-10 минут. После сканирования QR-кода и загрузки профиля, адаптер будет готов к использованию."
        }
      ]
    },
    {
      title: "Использование и возможности",
      items: [
        {
          question: "Можно ли использовать несколько eSIM одновременно?",
          answer: "Switch eSIM адаптер может хранить несколько eSIM профилей одновременно, но активным может быть только один профиль. Вы можете быстро переключаться между ними через наше мобильное приложение."
        },
        {
          question: "Влияет ли адаптер на скорость интернета?",
          answer: "Нет, адаптер Switch eSIM не влияет на скорость интернета. Скорость зависит от вашего оператора связи и конкретного тарифного плана."
        },
        {
          question: "Можно ли использовать адаптер в роуминге?",
          answer: "Да, вы можете использовать Switch eSIM адаптер в роуминге. Более того, это одно из главных преимуществ — вы можете приобрести локальный eSIM профиль для страны, куда направляетесь, и существенно сэкономить на роуминге."
        },
        {
          question: "Работает ли адаптер со всеми операторами связи?",
          answer: "Switch eSIM адаптер работает со всеми операторами, которые предлагают услуги eSIM. Список поддерживаемых операторов постоянно расширяется, так что проверьте актуальную информацию на нашем сайте или уточните у своего оператора."
        }
      ]
    },
    {
      title: "Техническая поддержка",
      items: [
        {
          question: "Что делать, если адаптер не работает?",
          answer: "Если адаптер не работает, попробуйте следующие шаги: 1. Проверьте правильность установки адаптера. 2. Перезагрузите устройство. 3. Убедитесь, что ваше устройство присутствует в списке поддерживаемых. 4. Обновите приложение до последней версии. Если проблема не решается, обратитесь в нашу службу поддержки."
        },
        {
          question: "Как обновить программное обеспечение адаптера?",
          answer: "Обновления программного обеспечения адаптера происходят автоматически через наше мобильное приложение. Просто убедитесь, что у вас установлена последняя версия приложения."
        },
        {
          question: "Существует ли гарантия на адаптер?",
          answer: "Да, на все адаптеры Switch eSIM предоставляется гарантия 12 месяцев с момента покупки. Гарантия покрывает производственные дефекты и неисправности, возникшие не по вине пользователя."
        },
        {
          question: "Как связаться со службой поддержки?",
          answer: "Вы можете связаться с нашей службой поддержки по электронной почте support@switchesim.ru или по телефону +7 (800) 123-45-67. Мы также предлагаем онлайн-чат на нашем сайте в разделе 'Контакты'."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <section className="bg-gradient-to-b from-gray-50 to-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl font-bold text-dark mb-4">
                Часто задаваемые вопросы
              </h1>
              <p className="text-gray-600">
                Найдите ответы на часто задаваемые вопросы о технологии eSIM и наших адаптерах
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto mb-12">
              {faqCategories.map((category, categoryIndex) => (
                <div 
                  key={categoryIndex} 
                  className="mb-10 animate-fade-in"
                  style={{ animationDelay: `${0.1 * (categoryIndex + 1)}s` }}
                >
                  <h2 className="text-xl font-semibold text-primary mb-4">
                    {category.title}
                  </h2>
                  <Accordion type="single" collapsible className="w-full">
                    {category.items.map((item, itemIndex) => (
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
              ))}
            </div>
            
            <div className="max-w-3xl mx-auto bg-blue-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-dark mb-3">
                Не нашли ответ на свой вопрос?
              </h3>
              <p className="text-gray-600 mb-4">
                Если вы не нашли ответ на свой вопрос, свяжитесь с нашей службой поддержки.
                Мы всегда готовы помочь вам разобраться с любыми вопросами.
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
