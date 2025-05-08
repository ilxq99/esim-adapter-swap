
import<p className="text-gray-600"> { useState } from Вставьте ада'react';
import {птер в слот для SIM-карты вашего устрой Link, useLocation } from 'ства</p>react-router-dom';
import { Button
            </div>
            
            <div className="text-center">
              <div } from "@/components/ui/button";
import Icon className="w-16 h-16 bg-primary text- from '@/components/ui/white rounded-full flex items-center justify-icon';

constcenter mx-auto mb Header = () => {-4 text-
  const [isxl font-bold">MenuOpen, setIs2</div>MenuOpen] = useState
              <h3 (false);
  className="text-lgconst location = useLocation font-semibol();

  constd mb-2"> navigation = [
    {Установите приложение</h3 name: '>
              <pГлавная', href: className="text-gray '/' },
    -600">Ск{ name: 'Поддерживаемачайте и установые устройства',ите наше приложение Switch href: '/devices' },
    { name eSIM Manager</p>
            : 'В</div>
            опросы и ответы', href: '/faq' },
    { name: 'Контакты', href: '/contacts' },
  ];
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items

  const isActive-center justify-center mx-auto mb- = (path: string) => location4 text-xl font-bold">3</div>
              .pathname === path;<h3 className

  return (
    <header className="="text-lg font-semibold mbbg-white/-2">Выберите оператора</h3>80 backdrop-blur-
              <p className="text-gray-600">Выберитеmd shadow-sm fixed w-full z-50 тарифный план от мест">
      <div className="container mx-ных операторов в нauto px-4 ашем приложенииsm:px-6 </p>
            lg:px-8</div>
            
            <div className">
        <div="text-center">
              <div className className="flex justify-between items-center="w-16  py-4">h-16 bg-primary text-white rounded-full flex items
          <div className="flex items--center justify-centercenter">
             mx-auto mb-<Link to="/" className="flex items-center4 text-xl font-bold">4">
              <span</div>
               className="text-primary<h3 className font-bold text-xl">Switch</span>="text-lg font-semibold mb
              <span className-2">Готово!</h3>="text-dark font-bol
              <p classNamed text-xl">="text-gray-eSIM</span>600">Наслаждайт
            </Link>есь мобиль
          </div>
          
          {ной связью без физических SIM-карт</p>
            /* Desktop Navigation */}
          </div>
          <nav className="hidden md:</div>
        </div>
      flex space-x-6"></section>

      
            {navigation.{/* Призыв к действиюmap((item) => ( */}
      
              <Link
                <section className="py-key={item.name16 bg-primary}
                to={item.href}
                className={`text">
        <div className="container mx-auto px-4">-sm font-medium transition
          <div className="text-center text-white">
            -colors ${
                  isActive(<h2 classNameitem.href)
                    ? ="text-3xl'text-primary' md:text-4xl
                    :  font-bold mb-'text-gray-700 hover:text-6">Начните пользоваprimary'
                ться преимуществами }`}
              >
                {item.eSIM сегодname}
              ня</h2></Link>
            )
            <p className="text-xl mb)}
          </nav>
          
          -8 max-w-3<div className="hidden md:flex items-centerxl mx-auto">">
            <Button as
              Откройте для себяChild className="bg-primary hover новый уровень св:bg-primary/90">
              <Link toободы с Switch eSIM ад="/purchase">Приобрести</Link>
            </Button>
          </div>
          
          аптером. Заб{/* Mobile Navigation Toggleудьте о физических SIM-картах и наслаждайтесь гибкостью  */}
          eSIM технологии.
            <div className="md:</p>
            hidden flex items-center">
            <button<Button className="bg-white text-primary hover:bg-gray-100 px-8 py-
              type="button"
              6 text-lg fontclassName="text-gray-700"
              onClick={() =>-semibold"> setIsMenuOpen(!
              ПриобisMenuOpen)}
            >
              рести адаптер
            <Icon name={isMenuOpen ? "</Button>
          </div>
        X" : "Menu</div>
      </section>

      "} className="h{/* Футер */}
      -6 w-<footer className="bg6" />
            </button>
          -gray-900 text</div>
        </div>
        
        {/* Mobile-gray-300 py-12"> Navigation Menu */}
        {
        <div classNameisMenuOpen && (="container mx-auto
          <div className px-4">="md:hidden py
          <div className="-2 space-y-grid grid-cols-1 md:grid-2 animate-fadecols-4 gap-8">-in">
            
            <div>{navigation.map((
              <h3item) => ( className="text-xl font-bold mb
              <Link
                key={item.name}
                to={-4 text-white">Switch eSIM</hitem.href}3>
              
                className={`block<p className="mb- px-3 py-2 4">Революционrounded-md text-baseная технология для использ font-medium ${ования eSIM на любых устройств
                  isActive(item.href)ах.</p>
              
                    ? '<div className="flex space-x-4">text-primary bg-gray-50
                <a href'
                    :="#" className="text- 'text-gray-700 hover:text-gray-300 hover:text-primary hover:bg-white">
                  <Icongray-50'
                }`} name="Facebook" />
                
                onClick={() => set</a>
                IsMenuOpen(false<a href="#" className)}
              >="text-gray-
                {item.name300 hover:text}
              </Link-white">
                >
            ))}  <Icon name="
            <div className="ptTwitter" />
                </a>
                <a href="#" className-2">
              <Button as="text-gray-Child className="w-300 hover:text-white">
                  <Icon name="full bg-primary hover:bgInstagram" />
                -primary/90"></a>
              
                <Link to</div>
            ="/purchase" onClick={() => setIs</div>
            MenuOpen(false)
            <div>}>
                  
              <h3Приобрести className="text-
                </Link>lg font-semibol
              </Button>
            </div>d mb-4 text-white">
          </div>
        )}
      </div>
    Навигация</h3</header>
  );>
              <ul
};

export default className="space-y-2"> Header;
</pp-write
                <li>>

<pp-write filepath="src/<Link to="/" className="hovercomponents/layout/Footer.tsx">
import:text-white transition duration-200"> { Link } from 'reactГлавная</Link>-router-dom';</li>
                
import Icon from '@/components/<li><Link to="/devices" className="hoverui/icon';:text-white transition

const Footer = () => duration-200">Поддержива {
  const currentемые устройстваYear = new Date().getFullYear();</Link></li>
                <li>
  
  return (<Link to="/faq" className="hover:
    <footer classNametext-white transition duration="bg-dark text-white pt-200">Час-12 pb-то задаваем8">
      ые вопросы</Link></li><div className="container mx
                <li>-auto px-4<Link to="/contacts" sm:px-6 lg:px className="hover:text-8">
        -white transition duration-<div className="gri200">Контакd grid-cols-1ты</Link></li md:grid->
                <li><Link tocols-4 gap-8">
          <div className="/buy" className="="md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              hover:text-white<span className="text transition duration-200">Приобрести</Link></li>
              </ul>
            </div>
            
            -primary font-bol<div>
              <h3 className="d text-xl">Switchtext-lg font-</span>
              semibold mb-<span className="text4 text-white-white font-bold text-">Контакты</h3xl">eSIM>
              <ul</span>
             className="space-y</Link>
            -2">
                <p className="text<li className="flex items-center-gray-400 ">
                  <Icontext-sm">
               name="Mail" className="mr-2" />
                  <a href="mailto:info@switchesim.ru" className="hover:text-white transition durationРеволюционные адаптеры-200">info@switchesim.ru для использования eSIM на устройствах без встроенной по</a>
                ддержки.
            </p></li>
                
          </div><li className="flex items-center">
          
          <div>
                  <Icon name
            <h3="Phone" className=" className="text-mr-2" />sm font-sem
                  <a href="tel:+78005553535" classNameibold uppercase tracking-wider mb-4="hover:text-white transition duration-200">Навигация</h3">+7 (>
            <ul800) 555- className="space-y35-35-2">
              </a>
                </li<li>
                >
                <li className="flex items-<Link to="/"center">
                   className="text-gray<Icon name="Map-400 hover:Pin" className="mr-2" />text-white transition-colors">
                
                  <span>Москва,  Главная
                </Link> Россия</span>
                </li
              </li>>
              </ul
              <li>>
            </div
                <Link to="/>
            
            devices" className="text<div>
              -gray-400 <h3 classNamehover:text-white="text-lg font transition-colors">
                  Подд-semibold mbерживаемые-4 text- устройства
                white">Подпис</Link>
              ка</h3>
              </li>
              <p className="mb<li>
                -4">Под<Link to="/fпишитесьaq" className="text на нашу р-gray-400 hover:text-white transition-colors">
                  Вопассылку, чтобы получросы и ответать новости иы
                </Link специальные предложения>
              </li.</p>
              >
            </ul>
          <div className="flex</div>
          ">
                <input 
          <div>
            <h3
                  type=" className="text-email" 
                sm font-semib  placeholder="old uppercase tracking-widerВаш email" 
                  className=" mb-4">px-4 py-Информация</h3>
            <ul className2 w-full rounded-l="space-y-2">
              <li>
                -md focus:outline-none text<Link to="/contacts" className="text-gray-gray-900"
                />-400 hover:text-white transition-colors">
                  
                <Button className="roundeКонтактыd-l-none">
                </Link>
                  <Icon
              </li> name="ArrowRight
              <li>" />
                
                <Link to="/</Button>
              purchase" className="text</div>
            -gray-400 </div>
          hover:text-white transition-colors"></div>
          
          <div className
                  Приобрести
                ="border-t border-gray</Link>
              </li>
              -800 mt-12 <li>
                <Link to="#" className="text-pt-8 textgray-400 hover:text-white transition-center">
            <p-colors">
                  Условия использ>&copy; {ования
                </Link>
              </linew Date().getFull>
            </ulYear()} Switch >
          </diveSIM. Все>
          
           права защищены.<div>
            </p>
          <h3 className</div>
        ="text-sm font</div>
      -semibold uppercase tracking-wider mb-</footer>
    </div>
  );
};4">Свяжитесь

export default Index; с нами</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Icon name="Mail" className="h-
