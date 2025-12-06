import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Анна К.",
    role: "Предприниматель",
    rating: 5,
    text: "Лучший отдых за последние годы! Забрали прямо от дома, привезли расслабленную и счастливую. Баня — просто космос. Вернусь обязательно.",
    date: "Ноябрь 2024",
  },
  {
    id: 2,
    name: "Михаил С.",
    role: "IT-директор",
    rating: 5,
    text: "Взял бизнес-тариф на день рождения. Персональный консультант, VIP-зона, шикарный массаж. Почувствовал себя в отпуске на Бали, не выезжая из Воронежа.",
    date: "Октябрь 2024",
  },
  {
    id: 3,
    name: "Елена В.",
    role: "Врач",
    rating: 5,
    text: "После тяжёлых дежурств — это именно то, что нужно. Качество еды приятно удивило, йога на рассвете — отдельный вид медитации.",
    date: "Сентябрь 2024",
  },
];

export function ReviewsSection() {
  return (
    <section className="section-padding bg-cream-light">
      <div className="container-premium">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Отзывы
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Что говорят наши гости
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Более 500 довольных клиентов выбрали Reboot Camp Premium 
            для своего идеального дня отдыха.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} variant="elevated" className="relative">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <Quote 
                  size={32} 
                  className="text-primary/20 absolute top-6 right-6" 
                />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-primary fill-primary"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-foreground leading-relaxed mb-6">
                  "{review.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center">
                    <span className="font-heading font-semibold text-primary text-lg">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </div>

                {/* Date */}
                <p className="text-xs text-muted-foreground mt-4">{review.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
