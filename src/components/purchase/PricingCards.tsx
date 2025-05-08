import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export type PricingTier = {
  name: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
};

interface PricingCardsProps {
  pricingTiers: PricingTier[];
}

const PricingCards = ({ pricingTiers }: PricingCardsProps) => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingTiers.map((tier, index) => (
          <div
            key={index}
            className="animate-fade-in"
            style={{ animationDelay: `${0.1 * (index + 1)}s` }}
          >
            <Card
              className={`h-full flex flex-col ${tier.popular ? "border-primary shadow-md relative" : ""}`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                    Популярный выбор
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle>{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-6">
                  <span className="text-3xl font-bold">{tier.price} ₽</span>
                </div>
                <ul className="space-y-2">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Icon
                        name="Check"
                        className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                      />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${tier.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                >
                  Купить сейчас
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 p-6 rounded-xl">
        <h3 className="text-lg font-semibold text-dark mb-3">
          Не уверены, какой адаптер подойдет для вашего устройства?
        </h3>
        <p className="text-gray-600 mb-4">
          Проверьте совместимость вашего устройства с нашими адаптерами или
          свяжитесь с нами для консультации.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild variant="outline">
            <Link to="/devices">Проверить совместимость</Link>
          </Button>
          <Button asChild>
            <Link to="/contacts">Получить консультацию</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
