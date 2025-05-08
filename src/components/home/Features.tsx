
import Icon from '@/components/ui/icon';

const Features = () => {
  const features = [
    {
      title: "Установка за минуты",
      description: "Просто вставьте адаптер Switch eSIM в слот для SIM-карты вашего устройства и активируйте его через приложение.",
      icon: "Clock"
    },
    {
      title: "До 10 eSIM профилей",
      description: "Храните несколько eSIM профилей одновременно и мгновенно переключайтесь между ними без физической замены карт.",
      icon: "Layers"
    },
    {
      title: "Работает с любым оператором",
      description: "Switch eSIM совместим со всеми основными операторами связи, поддерживающими eSIM технологию.",
      icon: "Globe"
    },
    {
      title: "Экономия на роуминге",
      description: "Путешествуйте и используйте локальные тарифы без смены SIM-карты. Забудьте о высоких расходах на роуминг.",
      icon: "Plane"
    },
    {
      title: "Широкая совместимость",
      description: "Наш адаптер совместим с множеством устройств — смартфонами, планшетами и другими гаджетами с SIM-слотом.",
      icon: "Smartphone"
    },
    {
      title: "Безопасность данных",
      description: "Все ваши данные надежно защищены современными методами шифрования. Ваша конфиденциальность — наш приоритет.",
      icon: "Shield"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-dark mb-4">Преимущества Switch eSIM</h2>
          <p className="text-gray-600">
            Switch eSIM адаптер — это революционное решение, которое открывает новые возможности для ваших устройств
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow animate-fade-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Icon name={feature.icon} className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
