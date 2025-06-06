
import { FAQCategory } from '@/types/faq';

export const generalFAQs: FAQCategory = {
  title: "Общие вопросы",
  items: [
    {
      question: "Что такое eSIM?",
      answer:
        "eSIM (embedded SIM) — это цифровая SIM-карта, встроенная в устройство. В отличие от физических SIM-карт, eSIM нельзя извлечь из устройства. Вместо этого, вы можете активировать eSIM профили удаленно от различных операторов связи.",
    },
    {
      question: "Что такое Switch eSIM адаптер?",
      answer:
        "Switch eSIM адаптер — это устройство, которое устанавливается в слот для SIM-карты и позволяет использовать технологию eSIM на устройствах, не имеющих встроенной поддержки eSIM. Наш адаптер эмулирует работу встроенного eSIM чипа.",
    },
    {
      question: "Какие преимущества даёт использование Switch eSIM?",
      answer:
        "Использование Switch eSIM предоставляет ряд преимуществ: возможность быстрого переключения между операторами без замены физической SIM-карты, хранение нескольких eSIM профилей одновременно, экономия на роуминге при международных поездках, и возможность использовать eSIM на устройствах без встроенной поддержки.",
    },
    {
      question:
        "Нужно ли менять тарифный план для использования Switch eSIM?",
      answer:
        "Нет, вам не нужно менять тарифный план. Switch eSIM адаптер работает с любыми тарифными планами, которые поддерживают eSIM технологию. Для активации вам потребуется получить eSIM профиль от вашего оператора связи.",
    },
    {
      question: "Какие операторы связи поддерживают eSIM в России?",
      answer:
        "В России eSIM поддерживают следующие операторы: МТС, Билайн, Мегафон, Tele2, Yota, и ряд виртуальных операторов. Список постоянно расширяется, поэтому рекомендуем уточнить актуальную информацию у вашего оператора.",
    },
    {
      question: "Можно ли использовать Switch eSIM за границей?",
      answer:
        "Да, Switch eSIM адаптер работает по всему миру. Вы можете использовать eSIM профили операторов любой страны, что особенно удобно для путешественников, так как позволяет избежать высоких расходов на роуминг.",
    },
    {
      question: "Безопасны ли eSIM и Switch eSIM адаптеры?",
      answer:
        "Да, eSIM технология обеспечивает высокий уровень безопасности. Switch eSIM адаптеры используют современные методы шифрования и защиты данных. В некоторых случаях eSIM даже безопаснее физических SIM-карт, так как их нельзя физически украсть или скопировать.",
    },
  ],
};
