
interface FAQItem {
  question: string;
  answer: string;
}

const PurchaseFAQ = () => {
  const faqItems: FAQItem[] = [
    {
      question: "Какие способы оплаты доступны?",
      answer: "Мы принимаем все основные кредитные карты (VISA, MasterCard, МИР), электронные платежи (Apple Pay, Google Pay, SberPay), а также банковские переводы для корпоративных клиентов."
    },
    {
      question: "Как долго осуществляется доставка?",
      answer: "Стандартная доставка по России занимает 2-5 рабочих дней. Для Москвы и Санкт-Петербурга доступна экспресс-доставка в течение 24 часов. Международная доставка занимает от 7 до 14 рабочих дней."
    },
    {
      question: "Можно ли вернуть адаптер?",
      answer: "Да, вы можете вернуть адаптер в течение 14 дней с момента получения, если он находится в неповрежденном состоянии и в оригинальной упаковке. Обратите внимание, что стоимость доставки при возврате не возмещается."
    },
    {
      question: "Есть ли у вас точки продаж?",
      answer: "Да, наши адаптеры можно приобрести в фирменных магазинах в Москве и Санкт-Петербурге, а также у наших партнеров в крупных городах России. Адреса магазинов можно найти в разделе 'Контакты'."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto mt-16">
      <h2 className="text-2xl font-bold text-dark mb-6 text-center">
        Часто задаваемые вопросы о покупке
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqItems.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-dark mb-3">
              {item.question}
            </h3>
            <p className="text-gray-600">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PurchaseFAQ;
