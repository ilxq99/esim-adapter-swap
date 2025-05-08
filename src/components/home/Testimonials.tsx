
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from '@/components/ui/icon';

const Testimonials = () => {
  const testimonials = [
    {
      content: "Благодаря Switch eSIM я смог использовать eSIM на своем старом iPhone. Теперь не нужно менять физические SIM-карты во время путешествий!",
      author: "Александр К.",
      position: "Предприниматель",
      avatar: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
    },
    {
      content: "Установила адаптер на планшет, теперь он всегда онлайн без Wi-Fi. Очень удобно для работы, когда часто приходится быть в разъездах.",
      author: "Екатерина М.",
      position: "Дизайнер",
      avatar: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
    },
    {
      content: "Отличная альтернатива покупке нового устройства! Теперь мой планшет поддерживает eSIM, и это заметно удобнее обычных SIM-карт.",
      author: "Дмитрий В.",
      position: "IT-специалист",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
    },
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-dark mb-4">Отзывы клиентов</h2>
          <p className="text-gray-600">
            Узнайте, что говорят о Switch eSIM наши довольные пользователи
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="mb-4 text-primary">
                <Icon name="Quote" className="h-8 w-8" />
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                  <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-dark">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
