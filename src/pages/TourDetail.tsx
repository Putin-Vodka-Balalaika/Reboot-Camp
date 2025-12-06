import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, Clock, Star, Users, Calendar, Check, ArrowLeft, 
  Car, Utensils, Sparkles, Heart 
} from "lucide-react";
import poolImage from "@/assets/service-pool.jpg";
import saunaImage from "@/assets/service-sauna.jpg";
import massageImage from "@/assets/service-massage.jpg";

const toursData: Record<string, {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  duration: string;
  location: string;
  priceFrom: number;
  rating: number;
  reviewsCount: number;
  features: string[];
  schedule: { time: string; activity: string }[];
  included: string[];
}> = {
  "1": {
    id: "1",
    title: "Спа-день в Spa-Province",
    description: "Полный день релакса в премиальном спа-комплексе",
    fullDescription: "Погрузитесь в атмосферу полного расслабления в одном из лучших спа-комплексов Воронежской области. Spa-Province предлагает уникальное сочетание современных спа-технологий и природной красоты. Панорамные окна с видом на лес, термальные зоны, бассейн с подогревом и профессиональные wellness-специалисты сделают этот день незабываемым.",
    image: poolImage,
    gallery: [poolImage, saunaImage, massageImage],
    duration: "12 часов",
    location: "Spa-Province, Воронежская область",
    priceFrom: 7000,
    rating: 4.9,
    reviewsCount: 124,
    features: ["Трансфер", "Бассейн", "Сауна", "Обед"],
    schedule: [
      { time: "10:00", activity: "Выезд от вашего дома" },
      { time: "11:00", activity: "Прибытие в Spa-Province, welcome-drink" },
      { time: "11:30", activity: "Термальная зона: сауна, хаммам" },
      { time: "13:00", activity: "Обед в ресторане комплекса" },
      { time: "14:00", activity: "Бассейн и зона отдыха" },
      { time: "16:00", activity: "Чайная церемония" },
      { time: "17:00", activity: "Свободное время / дополнительные процедуры" },
      { time: "20:00", activity: "Выезд домой" },
      { time: "21:00", activity: "Прибытие домой" },
    ],
    included: [
      "Трансфер от двери до двери",
      "Посещение термальной зоны",
      "Доступ к бассейну",
      "Обед из 3 блюд",
      "Халат и полотенца",
      "Тапочки и шапочка",
      "Чай и травяные напитки",
    ],
  },
  "2": {
    id: "2",
    title: "Русская баня с вениками",
    description: "Аутентичное парение в дровяной бане",
    fullDescription: "Откройте для себя традиции русской бани в аутентичной обстановке. Дровяная печь, берёзовые и дубовые веники, контрастные процедуры и мастер-банщик с многолетним опытом. После парения — чайная церемония с мёдом и травами. Это не просто баня — это ритуал очищения тела и души.",
    image: saunaImage,
    gallery: [saunaImage, poolImage, massageImage],
    duration: "12 часов",
    location: "Spa-Province, Воронежская область",
    priceFrom: 8500,
    rating: 5.0,
    reviewsCount: 89,
    features: ["Трансфер", "Баня", "Веники", "Чай"],
    schedule: [
      { time: "10:00", activity: "Выезд от вашего дома" },
      { time: "11:00", activity: "Прибытие, подготовка бани" },
      { time: "11:30", activity: "Первый заход с берёзовым веником" },
      { time: "12:30", activity: "Контрастные процедуры" },
      { time: "13:00", activity: "Второй заход с дубовым веником" },
      { time: "14:00", activity: "Обед" },
      { time: "15:00", activity: "Отдых, чайная церемония" },
      { time: "16:30", activity: "Финальный заход" },
      { time: "18:00", activity: "Травяной чай с мёдом" },
      { time: "20:00", activity: "Выезд домой" },
    ],
    included: [
      "Трансфер от двери до двери",
      "Аренда бани на группу",
      "Берёзовые и дубовые веники",
      "Услуги банщика",
      "Обед",
      "Чай с травами и мёдом",
      "Халаты и полотенца",
    ],
  },
  "3": {
    id: "3",
    title: "Wellness-перезагрузка",
    description: "Комплексная программа для снятия стресса",
    fullDescription: "Полная перезагрузка тела и разума за один день. Программа начинается с утренней йоги на открытом воздухе, продолжается расслабляющим массажем и завершается медитацией. Здоровое питание, дыхательные практики и время для себя — всё, что нужно для восстановления после рабочей недели.",
    image: massageImage,
    gallery: [massageImage, poolImage, saunaImage],
    duration: "12 часов",
    location: "Spa-Province, Воронежская область",
    priceFrom: 12000,
    rating: 4.8,
    reviewsCount: 67,
    features: ["Трансфер", "Массаж", "Йога", "Питание"],
    schedule: [
      { time: "10:00", activity: "Выезд от вашего дома" },
      { time: "11:00", activity: "Прибытие, травяной чай" },
      { time: "11:30", activity: "Йога-сессия (60 мин)" },
      { time: "12:30", activity: "Здоровый завтрак" },
      { time: "13:30", activity: "Массаж (60 мин)" },
      { time: "15:00", activity: "Обед" },
      { time: "16:00", activity: "Дыхательные практики" },
      { time: "17:00", activity: "Термальная зона" },
      { time: "18:30", activity: "Медитация на закате" },
      { time: "19:30", activity: "Лёгкий ужин" },
      { time: "20:30", activity: "Выезд домой" },
    ],
    included: [
      "Трансфер от двери до двери",
      "Йога-сессия с инструктором",
      "Массаж 60 минут",
      "Трёхразовое здоровое питание",
      "Дыхательные практики",
      "Медитация",
      "Термальная зона",
    ],
  },
};

const TourDetail = () => {
  const { id } = useParams<{ id: string }>();
  const tour = id ? toursData[id] : null;

  if (!tour) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold mb-4">Тур не найден</h1>
          <Link to="/tours">
            <Button variant="default">Вернуться к турам</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Image */}
        <div className="relative h-[50vh] md:h-[60vh]">
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
          
          {/* Back Button */}
          <Link 
            to="/tours" 
            className="absolute top-24 left-4 md:left-8 bg-card/90 backdrop-blur-sm rounded-full p-2 shadow-card hover:bg-card transition-colors"
          >
            <ArrowLeft size={20} className="text-foreground" />
          </Link>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="container-premium">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge className="bg-primary text-primary-foreground">
                  {tour.duration}
                </Badge>
                <div className="flex items-center gap-1 bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Star size={14} className="text-primary fill-primary" />
                  <span className="text-sm font-medium">{tour.rating}</span>
                  <span className="text-sm text-muted-foreground">
                    ({tour.reviewsCount} отзывов)
                  </span>
                </div>
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-2">
                {tour.title}
              </h1>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin size={16} />
                <span>{tour.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container-premium py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Description */}
              <section>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                  О туре
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {tour.fullDescription}
                </p>
              </section>

              {/* Features */}
              <section>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                  Что включено
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tour.included.map((item) => (
                    <div key={item} className="flex items-start gap-3 p-4 bg-sage-light rounded-lg">
                      <Check size={18} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Schedule */}
              <section>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                  Расписание дня
                </h2>
                <div className="space-y-0">
                  {tour.schedule.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex gap-4 pb-4 relative"
                    >
                      {/* Timeline */}
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-primary" />
                        {index < tour.schedule.length - 1 && (
                          <div className="w-0.5 h-full bg-border absolute top-3 left-[5px]" />
                        )}
                      </div>
                      {/* Content */}
                      <div className="flex-1 pb-4">
                        <span className="text-sm font-semibold text-primary">
                          {item.time}
                        </span>
                        <p className="text-foreground">{item.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Gallery */}
              <section>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                  Галерея
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {tour.gallery.map((img, index) => (
                    <div key={index} className="aspect-square rounded-xl overflow-hidden">
                      <img
                        src={img}
                        alt={`${tour.title} - фото ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar - Booking Card */}
            <div className="lg:col-span-1">
              <Card variant="elevated" className="sticky top-28">
                <CardContent className="p-6">
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-sm text-muted-foreground">от</span>
                    <span className="font-heading text-4xl font-bold text-foreground">
                      {tour.priceFrom.toLocaleString("ru-RU")}
                    </span>
                    <span className="text-muted-foreground">₽</span>
                    <span className="text-sm text-muted-foreground ml-1">/ чел.</span>
                  </div>

                  {/* Quick Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm">
                      <Clock size={18} className="text-primary" />
                      <span className="text-foreground">{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Users size={18} className="text-primary" />
                      <span className="text-foreground">Группы до 8 человек</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Calendar size={18} className="text-primary" />
                      <span className="text-foreground">Ежедневно</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Car size={18} className="text-primary" />
                      <span className="text-foreground">Трансфер включён</span>
                    </div>
                  </div>

                  <Button variant="hero" className="w-full mb-3">
                    Забронировать
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Heart size={16} />
                    В избранное
                  </Button>

                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Бесплатная отмена за 24 часа
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TourDetail;
