import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      title: "Установка за минуты",
      description:
        "Просто вставьте адаптер Switch eSIM в слот для SIM-карты вашего устройства и активируйте его через приложение.",
      icon: "Clock",
    },
    {
      title: "До 10 eSIM профилей",
      description:
        "Храните несколько eSIM профилей одновременно и мгновенно переключайтесь между ними без физической замены карт.",
      icon: "Layers",
    },
    {
      title: "Работает с любым оператором",
      description:
        "Switch eSIM совместим со всеми основными операторами связи, поддерживающими eSIM технологию.",
      icon: "Globe",
    },
    {
      title: "Экономия на роуминге",
      description:
        "Путешествуйте и используйте локальные тарифы без смены SIM-карты. Забудьте о высоких расходах на роуминг.",
      icon: "Plane",
    },
    {
      title: "Широкая совместимость",
      description:
        "Наш адаптер совместим с множеством устройств — смартфонами, планшетами и другими гаджетами с SIM-слотом.",
      icon: "Smartphone",
    },
    {
      title: "Безопасность данных",
      description:
        "Все ваши данные надежно защищены современными методами шифрования. Ваша конфиденциальность — наш приоритет.",
      icon: "Shield",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            ✨ Преимущества
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Почему выбирают{" "}
            <span className="bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
              Switch eSIM
            </span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Революционное решение, которое открывает новые возможности для ваших
            устройств и экономит ваши деньги
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-primary/20 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-indigo-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={feature.icon} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
