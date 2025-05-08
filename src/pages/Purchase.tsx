import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect } from "react";
import PricingCards, { PricingTier } from "@/components/purchase/PricingCards";
import BusinessOffers from "@/components/purchase/BusinessOffers";
import PurchaseFAQ from "@/components/purchase/PurchaseFAQ";
import PageHeader from "@/components/purchase/PageHeader";

const Purchase = () => {
  // Прокручиваем страницу наверх при монтировании
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pricingTiers: PricingTier[] = [
    {
      name: "Switch eSIM Pro",
      description: "Для активных пользователей",
      price: "2 990",
      features: [
        "1 адаптер Switch eSIM Pro",
        "Поддержка до 5 eSIM профилей",
        "Базовая техническая поддержка",
        "1 год гарантии",
        "Бесплатная доставка по России",
      ],
    },
    {
      name: "Switch eSIM MAX",
      description: "Для путешественников и профессионалов",
      price: "4 990",
      features: [
        "1 адаптер Switch eSIM MAX",
        "Поддержка до 10 eSIM профилей",
        "Приоритетная техническая поддержка",
        "2 года расширенной гарантии",
        "Бесплатная доставка по России",
        "Эксклюзивный премиум-дизайн",
        "Дополнительные аксессуары в комплекте",
      ],
      popular: true,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <section className="bg-gradient-to-b from-gray-50 to-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <PageHeader
              title="Приобрести eSIM адаптеры"
              description="Выберите подходящий вариант адаптера Switch eSIM для ваших потребностей"
            />

            <Tabs defaultValue="individual" className="max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="individual">Для частных лиц</TabsTrigger>
                <TabsTrigger value="business">Для бизнеса</TabsTrigger>
              </TabsList>

              <TabsContent value="individual">
                <PricingCards pricingTiers={pricingTiers} />
              </TabsContent>

              <TabsContent value="business">
                <BusinessOffers />
              </TabsContent>
            </Tabs>

            <PurchaseFAQ />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Purchase;
