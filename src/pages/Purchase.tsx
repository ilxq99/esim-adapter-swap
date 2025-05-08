
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from '@/components/ui/icon';
import { useEffect } from 'react';

type PricingTier = {
  name: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
};

const Purchase = () => {
  // Прокручиваем страницу наверх при монтировании
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pricingTiers: PricingTier[] = [
    {
      name: "Starter",
      description: "Для личного использования",
      price: "1 990",
      features: [
        "1 адаптер Switch eSIM",
        "Поддержка до 5 eSIM профилей",
        "Базовая техническая поддержка",
        "1 год гарантии",
      ],
    },
    {
      name: "Pro",
      description: "Для активных путешественников",
      price: "3 490",
      features: [
        "1 адаптер Switch eSIM Pro",
        "Поддержка до 10 eSIM профилей",
        "Приоритетная техническая поддержка",
        "2 года гарантии",
        "Бесплатная доставка по России",
      ],
      popular: true,
    },
    {
      name: "Family",
      description: "Для всей семьи",
      price: "6 990",
      features: [
        "3 адаптера Switch eSIM",
        "Поддержка до 10 eSIM профилей каждый",
        "Приоритетная техническая поддержка",
        "2 года гарантии",
        "Бесплатная доставка по России",
        "Скидка 15% на следующую покупку",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <section className="bg-gradient-to-b from-gray-50 to-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl font-bold text-dark mb-4">
                Приобрести eSIM адаптеры
              </h1>
              <p className="text-gray-600">
                Выберите подходящий вариант адаптера Switch eSIM для ваших потребностей
              </p>
            </div>
            
            <Tabs defaultValue="individual" className="max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="individual">Для частных лиц</TabsTrigger>
                <TabsTrigger value="business">Для бизнеса</TabsTrigger>
              </TabsList>
              
              <TabsContent value="individual" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {pricingTiers.map((tier, index) => (
                    <div 
                      key={index} 
                      className="animate-fade-in"
                      style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                    >
                      <Card className={`h-full flex flex-col ${tier.popular ? 'border-primary shadow-md relative' : ''}`}>
                        {tier.popular && (
                          <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                            <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                              Популярный выбор
                            </span>
                          </div>
                        )}
                        <CardHeader>
                          <CardTitle>{tier.name}</CardTitle>
                          <CardDescription>{tier.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <div className="mb-6">
                            <span className="text-3xl font-bold">{tier.price} ₽</span>
                          </div>
                          <ul className="space-y-2">
                            {tier.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start">
                                <Icon name="Check" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                                <span className="text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button 
                            className={`w-full ${tier.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                          >
                            Купить сейчас
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  ))}
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-dark mb-3">
                    Не уверены, какой адаптер подойдет для вашего устройства?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Проверьте совместимость вашего устройства с нашими адаптерами или свяжитесь с нами для консультации.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild variant="outline">
                      <a href="/devices">Проверить совместимость</a>
                    </Button>
                    <Button asChild>
                      <a href="/contacts">Получить консультацию</a>
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="business">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-bold text-dark mb-4">
                    Решения для бизнеса
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Мы предлагаем специальные условия для корпоративных клиентов. Оснастите ваши устройства eSIM адаптерами для оптимизации расходов на связь и упрощения управления корпоративными тарифами.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="text-lg font-semibold text-dark mb-3">
                        Преимущества для бизнеса
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Icon name="Check" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">Оптимизация расходов на связь</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">Централизованное управление eSIM профилями</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">Снижение затрат на международный роуминг</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">Персональный менеджер</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">Расширенная техническая поддержка 24/7</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="text-lg font-semibold text-dark mb-3">
                        Доступные опции
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Icon name="Check" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">Оптовые скидки от 10 устройств</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">Индивидуальные решения под ваши задачи</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">Корпоративный портал управления</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">Брендирование устройств</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">Программы лояльности</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-gray-600 mb-4">
                      Свяжитесь с нашим отделом продаж для получения индивидуального коммерческого предложения
                    </p>
                    <Button size="lg">
                      Получить коммерческое предложение
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="max-w-5xl mx-auto mt-16">
              <h2 className="text-2xl font-bold text-dark mb-6 text-center">
                Часто задаваемые вопросы о покупке
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-dark mb-3">
                    Какие способы оплаты доступны?
                  </h3>
                  <p className="text-gray-600">
                    Мы принимаем все основные кредитные карты (VISA, MasterCard, МИР), 
                    электронные платежи (Apple Pay, Google Pay, SberPay), а также банковские переводы для корпоративных клиентов.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-dark mb-3">
                    Как долго осуществляется доставка?
                  </h3>
                  <p className="text-gray-600">
                    Стандартная доставка по России занимает 2-5 рабочих дней. 
                    Для Москвы и Санкт-Петербурга доступна экспресс-доставка в течение 24 часов.
                    Международная доставка занимает от 7 до 14 рабочих дней.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-dark mb-3">
                    Можно ли вернуть адаптер?
                  </h3>
                  <p className="text-gray-600">
                    Да, вы можете вернуть адаптер в течение 14 дней с момента получения, 
                    если он находится в неповрежденном состоянии и в оригинальной упаковке. 
                    Обратите внимание, что стоимость доставки при возврате не возмещается.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-dark mb-3">
                    Есть ли у вас точки продаж?
                  </h3>
                  <p className="text-gray-600">
                    Да, наши адаптеры можно приобрести в фирменных магазинах в Москве и Санкт-Петербурге, 
                    а также у наших партнеров в крупных городах России. 
                    Адреса магазинов можно найти в разделе "Контакты".
                  </p>
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

export default Purchase;
