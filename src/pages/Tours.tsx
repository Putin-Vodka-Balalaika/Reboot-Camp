import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TourCard } from "@/components/tours/TourCard";
import { Button } from "@/components/ui/button";
import { Filter, SlidersHorizontal } from "lucide-react";

const tours = [
  {
    id: "1",
    title: "Спа-день в Spa-Province",
    description: "Полный день релакса в премиальном спа-комплексе. Бассейн, сауна, хаммам, и зона отдыха с панорамными окнами.",
    image: "/src/assets/service-pool.jpg",
    duration: "12 часов",
    location: "Spa-Province, Воронежская область",
    priceFrom: 7000,
    rating: 4.9,
    reviewsCount: 124,
    features: ["Трансфер", "Бассейн", "Сауна", "Обед"],
  },
  {
    id: "2",
    title: "Русская баня с вениками",
    description: "Аутентичное парение в дровяной бане с берёзовыми и дубовыми вениками. Включает чайную церемонию.",
    image: "/src/assets/service-sauna.jpg",
    duration: "12 часов",
    location: "Spa-Province, Воронежская область",
    priceFrom: 8500,
    rating: 5.0,
    reviewsCount: 89,
    features: ["Трансфер", "Баня", "Веники", "Чай"],
  },
  {
    id: "3",
    title: "Wellness-перезагрузка",
    description: "Комплексная программа: йога, массаж, здоровое питание и медитация. Идеально для снятия стресса.",
    image: "/src/assets/service-massage.jpg",
    duration: "12 часов",
    location: "Spa-Province, Воронежская область",
    priceFrom: 12000,
    rating: 4.8,
    reviewsCount: 67,
    features: ["Трансфер", "Массаж", "Йога", "Питание"],
  },
];

const Tours = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-28 pb-20">
        <div className="container-premium">
          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
              Наши туры
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Выберите свой идеальный день отдыха
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Все туры включают трансфер от двери до двери. 
              Выезд в 10:00, возвращение в 21:00.
            </p>
          </div>

          {/* Filters Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 p-4 bg-card rounded-xl shadow-soft">
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Найдено {tours.length} тура
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm">
                <SlidersHorizontal size={16} />
                Фильтры
              </Button>
            </div>
          </div>

          {/* Tours Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          {/* Info Banner */}
          <div className="mt-16 p-8 bg-sage-light rounded-2xl text-center">
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
              Не нашли подходящий тур?
            </h3>
            <p className="text-muted-foreground mb-6">
              Мы можем составить индивидуальную программу под ваши пожелания
            </p>
            <Button variant="default">
              Связаться с нами
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tours;
