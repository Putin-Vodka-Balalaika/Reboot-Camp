import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  User, Calendar, Clock, MapPin, Settings, LogOut,
  CreditCard, Bell, Star
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const bookings = [
  {
    id: "1",
    tour: "Спа-день в Spa-Province",
    date: "15 декабря 2024",
    status: "confirmed",
    price: 10000,
  },
  {
    id: "2",
    tour: "Русская баня с вениками",
    date: "28 ноября 2024",
    status: "completed",
    price: 8500,
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-cream-light">
      <Header />
      
      <main className="pt-28 pb-20">
        <div className="container-premium">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="font-heading text-3xl font-bold text-foreground mb-2">
              Добро пожаловать, Анна!
            </h1>
            <p className="text-muted-foreground">
              Управляйте своими бронированиями и настройками профиля
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card variant="elevated">
                <CardContent className="p-6">
                  {/* Avatar */}
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-sage-light flex items-center justify-center mb-3">
                      <span className="font-heading text-3xl font-semibold text-primary">А</span>
                    </div>
                    <h3 className="font-heading text-lg font-semibold">Анна Козлова</h3>
                    <p className="text-sm text-muted-foreground">anna@email.com</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-sage-light rounded-lg">
                      <div className="font-heading text-2xl font-bold text-primary">3</div>
                      <div className="text-xs text-muted-foreground">Поездки</div>
                    </div>
                    <div className="text-center p-3 bg-sage-light rounded-lg">
                      <div className="font-heading text-2xl font-bold text-primary">2</div>
                      <div className="text-xs text-muted-foreground">Отзыва</div>
                    </div>
                  </div>

                  {/* Quick Links */}
                  <nav className="space-y-1">
                    {[
                      { icon: User, label: "Профиль" },
                      { icon: Calendar, label: "Бронирования" },
                      { icon: Star, label: "Отзывы" },
                      { icon: Bell, label: "Уведомления" },
                      { icon: Settings, label: "Настройки" },
                    ].map((item) => (
                      <button
                        key={item.label}
                        className="w-full flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                      >
                        <item.icon size={18} />
                        {item.label}
                      </button>
                    ))}
                  </nav>

                  <div className="mt-6 pt-6 border-t border-border">
                    <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-destructive hover:bg-destructive/10 rounded-lg transition-colors">
                      <LogOut size={18} />
                      Выйти
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="bookings" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="bookings">Мои бронирования</TabsTrigger>
                  <TabsTrigger value="profile">Профиль</TabsTrigger>
                  <TabsTrigger value="reviews">Отзывы</TabsTrigger>
                </TabsList>

                {/* Bookings Tab */}
                <TabsContent value="bookings" className="space-y-4">
                  {bookings.length > 0 ? (
                    bookings.map((booking) => (
                      <Card key={booking.id} variant="default">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="font-heading text-lg font-semibold">
                                  {booking.tour}
                                </h3>
                                <Badge
                                  variant={booking.status === "confirmed" ? "default" : "secondary"}
                                >
                                  {booking.status === "confirmed" ? "Подтверждено" : "Завершено"}
                                </Badge>
                              </div>
                              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Calendar size={14} />
                                  {booking.date}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock size={14} />
                                  10:00 — 21:00
                                </span>
                                <span className="flex items-center gap-1">
                                  <CreditCard size={14} />
                                  {booking.price.toLocaleString("ru-RU")} ₽
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              {booking.status === "confirmed" && (
                                <>
                                  <Button variant="outline" size="sm">
                                    Изменить
                                  </Button>
                                  <Button variant="destructive" size="sm">
                                    Отменить
                                  </Button>
                                </>
                              )}
                              {booking.status === "completed" && (
                                <Button variant="default" size="sm">
                                  Оставить отзыв
                                </Button>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    <Card variant="default">
                      <CardContent className="p-12 text-center">
                        <Calendar size={48} className="mx-auto text-muted-foreground mb-4" />
                        <h3 className="font-heading text-xl font-semibold mb-2">
                          Нет бронирований
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          Вы ещё не забронировали ни одного тура
                        </p>
                        <Link to="/tours">
                          <Button variant="default">
                            Выбрать тур
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>

                {/* Profile Tab */}
                <TabsContent value="profile">
                  <Card variant="default">
                    <CardHeader>
                      <CardTitle>Личные данные</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">Имя</Label>
                          <Input id="firstName" defaultValue="Анна" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Фамилия</Label>
                          <Input id="lastName" defaultValue="Козлова" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" defaultValue="anna@email.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Телефон</Label>
                          <Input id="phone" type="tel" defaultValue="+7 (900) 123-45-67" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="dob">Дата рождения</Label>
                          <Input id="dob" type="date" />
                        </div>
                      </div>
                      <Button variant="default">
                        Сохранить изменения
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Reviews Tab */}
                <TabsContent value="reviews">
                  <Card variant="default">
                    <CardContent className="p-12 text-center">
                      <Star size={48} className="mx-auto text-muted-foreground mb-4" />
                      <h3 className="font-heading text-xl font-semibold mb-2">
                        Ваши отзывы появятся здесь
                      </h3>
                      <p className="text-muted-foreground">
                        После завершения тура вы сможете оставить отзыв
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
