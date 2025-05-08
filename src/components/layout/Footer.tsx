
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Логотип и описание */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-white font-bold text-xl">Switch eSIM</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Революционная технология eSIM адаптеров для устройств без встроенной поддержки eSIM
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Linkedin" className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Навигация */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/devices" className="text-gray-400 hover:text-white transition-colors">
                  Устройства
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-400 hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
              <li>
                <Link to="/buy" className="text-gray-400 hover:text-white transition-colors">
                  Купить
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Контакты */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Icon name="MapPin" className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  123456, Россия, г. Москва,<br />
                  ул. Инновационная, д. 42
                </span>
              </li>
              <li className="flex items-center">
                <Icon name="Phone" className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span className="text-gray-400">+7 (800) 123-45-67</span>
              </li>
              <li className="flex items-center">
                <Icon name="Mail" className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <a href="mailto:info@switchesim.ru" className="text-gray-400 hover:text-white transition-colors">
                  info@switchesim.ru
                </a>
              </li>
            </ul>
          </div>
          
          {/* Подписка */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">Подписка на новости</h3>
            <p className="text-gray-400 text-sm mb-4">
              Подпишитесь на нашу рассылку, чтобы получать последние новости и специальные предложения
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Ваш email"
                className="px-3 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-3 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              >
                Подписаться
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Switch eSIM. Все права защищены.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
