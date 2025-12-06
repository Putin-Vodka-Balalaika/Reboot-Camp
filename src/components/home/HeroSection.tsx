import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-spa.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Премиальный спа отдых"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-premium text-center text-primary-foreground pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium">Воронеж • Spa-Province</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6 animate-fade-up stagger-1">
            Перезагрузка
            <br />
            <span className="text-primary">от рутины</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl opacity-90 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up stagger-2">
            Премиальный велнес-отдых с трансфером от двери. 
            Спа, бани, массаж, здоровое питание и восстановление энергии за один день.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up stagger-3">
            <Link to="/tours">
              <Button variant="hero" size="xl">
                Выбрать тур
              </Button>
            </Link>
            <Link to="/pricing">
              <Button 
                variant="hero-outline" 
                size="xl"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                Тарифы от 7 000 ₽
              </Button>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-16 animate-fade-up stagger-4">
            {[
              { value: "12ч", label: "Полный день отдыха" },
              { value: "5★", label: "Рейтинг сервиса" },
              { value: "24/7", label: "Поддержка" },
            ].map((badge) => (
              <div key={badge.label} className="text-center">
                <div className="font-heading text-3xl font-bold text-primary mb-1">
                  {badge.value}
                </div>
                <div className="text-sm opacity-70">{badge.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
