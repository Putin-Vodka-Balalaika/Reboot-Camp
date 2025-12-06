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
    description: "Базовый отдых для восстановления сил",
    features: [
      "Трансфер туда и обратно",
      "Посещение бани/сауны",
      "Доступ к бассейну",
      "Лёгкий обед",
      "Зона отдыха",
    ],
    popular: false,
  },
  {
    id: "standard",
    name: "Стандарт",
    price: 10000,
    description: "Оптимальный выбор для полного расслабления",
    features: [
      "Всё из тарифа «Минимум»",
      "Массаж 30 минут",
      "Полноценный обед + ужин",
      "Травяной чай и закуски",
      "Йога-сессия",
      "Халат и тапочки",
    ],
    popular: true,
  },
  {
    id: "business",
    name: "Бизнес",
    price: 23000,
    description: "Премиальный опыт без компромиссов",
    features: [
      "Всё из тарифа «Стандарт»",
      "Индивидуальный трансфер",
      "Spa-программа 90 минут",
      "Дегустационный сет",
      "Персональный wellness-консультант",
      "VIP-зона отдыха",
      "Подарочный набор",
    ],
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-premium">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Тарифы
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Выберите свой уровень комфорта
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Три формата отдыха — от базового до премиального. 
            Каждый включает трансфер и полный день восстановления.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              variant={plan.popular ? "premium" : "default"}
              className={cn(
                "relative flex flex-col",
                plan.popular && "border-primary md:scale-105 md:-my-4 z-10"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wide">
                    Популярный
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-0">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
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

              <CardFooter className="pt-4">
                <Link to="/tours" className="w-full">
                  <Button
                    variant={plan.popular ? "default" : "outline"}
                    className="w-full group"
                    size="lg"
                  >
                    Выбрать
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
