import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 bg-teal-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Готовы перейти на технологию будущего?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Приобретите адаптер Switch eSIM сегодня и откройте для себя все
            преимущества eSIM технологии на любом устройстве.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-primary hover:bg-white"
            >
              <Link to="/purchase">Приобрести адаптер</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-blue-500 text-white border-blue-500 hover:bg-blue-600 hover:border-blue-600"
            >
              <Link to="/devices">Проверить совместимость</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
