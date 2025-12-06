import { Card, CardContent } from "@/components/ui/card";
import saunaImage from "@/assets/service-sauna.jpg";
import massageImage from "@/assets/service-massage.jpg";
import foodImage from "@/assets/service-food.jpg";
import poolImage from "@/assets/service-pool.jpg";
import exerciseImage from "@/assets/service-exercise.jpg";

const services = [
  {
    id: 1,
    title: "Спа & Бассейн",
    description: "Расслабление в термальных зонах с видом на природу",
    image: poolImage,
  },
  {
    id: 2,
    title: "Русская баня",
    description: "Традиционное парение с вениками и контрастными процедурами",
    image: saunaImage,
  },
  {
    id: 3,
    title: "Массаж",
    description: "Профессиональные оздоровительные и расслабляющие массажи",
    image: massageImage,
  },
  {
    id: 4,
    title: "Здоровое питание",
    description: "Сбалансированные блюда из свежих локальных продуктов",
    image: foodImage,
  },
  {
    id: 5,
    title: "Лёгкие упражнения",
    description: "Йога, растяжка и дыхательные практики на свежем воздухе",
    image: exerciseImage,
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding bg-cream-light">
      <div className="container-premium">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Что вас ждёт
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Комплексное восстановление
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Каждый тур включает полный набор услуг для перезагрузки тела и разума. 
            От утреннего трансфера до вечернего возвращения — всё продумано до мелочей.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.id}
              variant="elevated"
              className={`group overflow-hidden ${
                index === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <CardContent className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <h3 className="font-heading text-2xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm opacity-90">{service.description}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
