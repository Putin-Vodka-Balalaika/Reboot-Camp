import { Clock, MapPin, Users, Shield, Car, Leaf } from "lucide-react";

const benefits = [
  {
    icon: Car,
    title: "Трансфер от двери",
    description: "Заберём и привезём обратно. Никаких забот о транспорте.",
  },
  {
    icon: Clock,
    title: "12 часов отдыха",
    description: "Полный день с 10:00 до 21:00 — достаточно для полной перезагрузки.",
  },
  {
    icon: MapPin,
    title: "Spa-Province",
    description: "Премиальный комплекс в окружении природы под Воронежем.",
  },
  {
    icon: Users,
    title: "Индивидуальный подход",
    description: "Программа адаптируется под ваши предпочтения и цели.",
  },
  {
    icon: Shield,
    title: "Безопасность",
    description: "Проверенные локации, застрахованный трансфер, медицинская поддержка.",
  },
  {
    icon: Leaf,
    title: "Эко-продукты",
    description: "Органическое питание из локальных фермерских хозяйств.",
  },
];

export function BenefitsSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-premium">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Почему мы
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Всё включено для вашего комфорта
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Мы берём на себя все заботы — вам остаётся только расслабиться 
            и получить удовольствие от отдыха.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group text-center p-8 rounded-2xl bg-card shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-sage-light mb-6 transition-colors duration-300 group-hover:bg-primary">
                <benefit.icon 
                  size={28} 
                  className="text-primary transition-colors duration-300 group-hover:text-primary-foreground" 
                />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
