
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DeviceInfoSection = () => {
  return (
    <div className="mt-8">
      <div className="bg-blue-50 p-6 rounded-xl shadow-sm mb-8">
        <h3 className="text-lg font-semibold text-dark mb-3">
          Не нашли своё устройство?
        </h3>
        <p className="text-gray-600 mb-4">
          Этот список не является исчерпывающим. Скачайте наше приложение Switch eSIM, 
          чтобы проверить совместимость вашего устройства в реальном времени.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button>Скачать приложение</Button>
          <Button asChild variant="outline">
            <Link to="/contacts">Связаться с нами</Link>
          </Button>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold text-dark mb-3">
          Нужна помощь с выбором?
        </h3>
        <p className="text-gray-600 mb-4">
          Наши специалисты готовы помочь вам с выбором подходящего eSIM адаптера
          и ответить на все ваши вопросы.
        </p>
        <Button asChild variant="secondary">
          <Link to="/faq">Перейти в FAQ</Link>
        </Button>
      </div>
    </div>
  );
};

export default DeviceInfoSection;
