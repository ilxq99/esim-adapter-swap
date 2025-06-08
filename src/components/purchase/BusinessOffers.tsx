import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const BusinessOffers = () => {
  const businessAdvantages = [
    "Оптимизация расходов на связь",
    "Централизованное управление eSIM профилями",
    "Снижение затрат на международный роуминг",
    "Персональный менеджер",
    "Расширенная техническая поддержка 24/7",
  ];

  const businessOptions = [
    "Оптовые скидки от 10 устройств",
    "Индивидуальные решения под ваши задачи",
    "Корпоративный портал управления",
    "Брендирование устройств",
    "Программы лояльности",
  ];

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Решения для бизнеса
      </h2>
      <p className="text-gray-600 mb-6">
        Мы предлагаем специальные условия для корпоративных клиентов. Оснастите
        ваши устройства eSIM адаптерами для оптимизации расходов на связь и
        упрощения управления корпоративными тарифами.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Преимущества для бизнеса
          </h3>
          <ul className="space-y-2">
            {businessAdvantages.map((advantage, index) => (
              <li key={index} className="flex items-start">
                <Icon
                  name="Check"
                  className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                />
                <span className="text-gray-600">{advantage}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Доступные опции
          </h3>
          <ul className="space-y-2">
            {businessOptions.map((option, index) => (
              <li key={index} className="flex items-start">
                <Icon
                  name="Check"
                  className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                />
                <span className="text-gray-600">{option}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center">
        <p className="text-gray-600 mb-4">
          Свяжитесь с нашим отделом продаж для получения индивидуального
          коммерческого предложения
        </p>
        <Button size="lg">Получить коммерческое предложение</Button>
      </div>
    </div>
  );
};

export default BusinessOffers;
