import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const plans = [
  {
    id: "minimum",
    name: "Минимум",
    price: 7000,
    description: "Базовый отдых для восстановления сил после рабочей недели",
    features: [
      "Трансфер туда и обратно",
      "Посещение бани/сауны (3 часа)",
      "Доступ к бассейну",
      "Лёгкий обед",
      "Зона отдыха с шезлонгами",
      "Халат и полотенца",
    ],
    notIncluded: [
      "Массаж",
      "Персональный консультант",
      "VIP-зона",
    ],
    popular: false,
  },
  {
    id: "standard",
    name: "Стандарт",
    price: 10000,
    description: "Оптимальный выбор для полного расслабления и восстановления",
    features: [
      "Всё из тарифа «Минимум»",
      "Массаж 30 минут",
      "Полноценный обед + ужин",
      "Травяной чай и закуски весь день",
      "Йога-сессия с инструктором",
      "Халат, тапочки и шапочка",
      "Доступ к хаммаму",
    ],
    notIncluded: [
      "Персональный консультант",
      "VIP-зона",
    ],
    popular: true,
  },
  {
    id: "business",
    name: "Бизнес",
    price: 23000,
    description: "Премиальный опыт без компромиссов для тех, кто ценит лучшее",
    features: [
      "Всё из тарифа «Стандарт»",
      "Индивидуальный трансфер (бизнес-класс)",
      "Spa-программа 90 минут (на выбор)",
      "Дегустационный сет от шеф-повара",
      "Персональный wellness-консультант",
      "VIP-зона отдыха с приватностью",
      "Подарочный набор косметики",
      "Доступ к премиум-саунам",
      "Приоритетное бронирование",
    ],
    notIncluded: [],
    popular: false,
  },
];

const faqs = [
  {
    question: "Как работает трансфер?",
    answer: "Мы забираем вас от дома в Воронеже в 10:00 и привозим обратно к 21:00. Комфортабельный транспорт с кондиционером.",
  },
  {
    question: "Можно ли отменить бронирование?",
    answer: "Да, бесплатная отмена возможна за 24 часа до начала тура. При отмене менее чем за 24 часа удерживается 50% стоимости.",
  },
  {
    question: "Что взять с собой?",
    answer: "Только хорошее настроение! Халаты, полотенца, тапочки — всё предоставляется. Рекомендуем взять купальник.",
  },
  {
    question: "Подходит ли для группы?",
    answer: "Да, мы принимаем группы до 8 человек. Для больших групп — свяжитесь с нами для индивидуального расчёта.",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-28 pb-20">
        <div className="container-premium">
          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
              Тарифы
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Прозрачные цены, никаких сюрпризов
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Выберите уровень комфорта, который подходит именно вам. 
              Все тарифы включают трансфер и полный день отдыха.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                variant={plan.popular ? "premium" : "elevated"}
                className={cn(
                  "relative flex flex-col",
                  plan.popular && "border-primary md:scale-105 md:-my-4 z-10"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wide">
                      Рекомендуем
                    </span>
                  </div>
                )}

                <CardHeader className="text-center pb-0 pt-8">
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 min-h-[40px]">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="font-heading text-5xl font-bold text-foreground">
                      {plan.price.toLocaleString("ru-RU")}
                    </span>
                    <span className="text-muted-foreground">₽</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">за человека</p>
                </CardHeader>

                <CardContent className="flex-1 pt-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check size={18} className="text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-4 pb-8">
                  <Link to="/tours" className="w-full">
                    <Button
                      variant={plan.popular ? "default" : "outline"}
                      className="w-full group"
                      size="lg"
                    >
                      Выбрать тур
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Comparison Note */}
          <div className="text-center mb-20">
            <p className="text-muted-foreground">
              Не уверены, какой тариф выбрать?{" "}
              <a href="tel:+79001234567" className="text-primary hover:underline">
                Позвоните нам
              </a>
              {" "}— поможем определиться.
            </p>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-10">
              Частые вопросы
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <Card key={faq.question} variant="default" className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
