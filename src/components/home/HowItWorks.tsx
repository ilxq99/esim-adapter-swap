import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Установка адаптера",
      description:
        "Откройте слот SIM-карты вашего устройства с помощью ключа и аккуратно вставьте адаптер Switch eSIM.",
    },
    {
      number: "02",
      title: "Подключение профиля",
      description:
        "Скачайте приложение Switch eSIM, отсканируйте QR-код вашего оператора и активируйте eSIM профиль.",
    },
    {
      number: "03",
      title: "Настройка и активация",
      description:
        "Следуйте инструкциям в приложении для завершения настройки. Теперь ваше устройство готово к использованию с eSIM!",
    },
    {
      number: "04",
      title: "Управление профилями",
      description:
        "Добавляйте, переключайте и управляйте несколькими eSIM профилями прямо в приложении без смены физических карт.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-dark mb-4">
            Как это работает
          </h2>
          <p className="text-gray-600">
            Использование Switch eSIM - это просто. Следуйте этим шагам, чтобы
            начать пользоваться преимуществами eSIM технологии на любом
            устройстве
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative animate-fade-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-full">
                <div className="absolute -top-4 left-4 bg-teal-600 text-white text-xl font-bold rounded-full w-8 h-8 flex items-center justify-center">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-dark mb-2 mt-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-dark mb-4">Готовы начать?</h3>
          <p className="text-gray-600 mb-6">
            Приобретите адаптер Switch eSIM прямо сейчас и откройте новые
            возможности для ваших устройств
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/buy">Купить адаптер</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/faq">Подробнее в FAQ</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
