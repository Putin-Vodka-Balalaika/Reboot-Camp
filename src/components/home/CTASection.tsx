import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-premium relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Готовы к перезагрузке?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed">
            Забронируйте свой день отдыха сейчас и получите скидку 10% 
            на первый тур. Ближайшие свободные даты — уже на этой неделе.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/tours">
              <Button
                size="xl"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-elevated group"
              >
                Забронировать тур
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <a href="tel:+79001234567">
              <Button
                size="xl"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Phone size={18} />
                Позвонить нам
              </Button>
            </a>
          </div>

          {/* Trust Signal */}
          <p className="text-sm text-primary-foreground/70 mt-8">
            Бесплатная отмена за 24 часа • Безопасная оплата • Гарантия качества
          </p>
        </div>
      </div>
    </section>
  );
}
