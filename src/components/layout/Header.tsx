import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-lg shadow-sm z-50 border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Логотип */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center group">
              <div className="h-10 w-10 rounded-xl bg-teal-600 flex items-center justify-center mr-3 group-hover:scale-105 transition-transform duration-200">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-teal-600 font-bold text-xl">
                Switch eSIM
              </span>
            </Link>
          </div>

          {/* Основная навигация (десктоп) */}
          <nav className="hidden md:flex space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Главная
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/devices">
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Устройства
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/faq">
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      FAQ
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contacts">
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Контакты
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Кнопка купить (десктоп) */}
          <div className="hidden md:flex items-center">
            <Button
              asChild
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              <Link to="/buy">Купить</Link>
            </Button>
          </div>

          {/* Кнопка мобильного меню */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-gray-500 hover:text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Открыть меню</span>
              {mobileMenuOpen ? (
                <Icon name="X" className="h-6 w-6" />
              ) : (
                <Icon name="Menu" className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 pt-2 pb-4 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Главная
            </Link>
            <Link
              to="/devices"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Устройства
            </Link>
            <Link
              to="/faq"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              to="/contacts"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Контакты
            </Link>
            <div className="pt-2">
              <Button asChild className="w-full justify-center">
                <Link to="/buy" onClick={() => setMobileMenuOpen(false)}>
                  Купить
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
