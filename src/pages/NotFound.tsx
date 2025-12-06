import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-20 flex items-center justify-center min-h-[70vh]">
        <div className="container-premium text-center max-w-lg">
          <div className="mb-8">
            <span className="font-heading text-[120px] md:text-[180px] font-bold text-primary/20 leading-none">
              404
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Страница не найдена
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Возможно, страница была перемещена или вы ввели неверный адрес
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/">
              <Button variant="default" size="lg">
                <Home size={18} />
                На главную
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.history.back()}
            >
              <ArrowLeft size={18} />
              Назад
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
