import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Tour {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  location: string;
  priceFrom: number;
  rating: number;
  reviewsCount: number;
  features: string[];
}

interface TourCardProps {
  tour: Tour;
}

export function TourCard({ tour }: TourCardProps) {
  return (
    <Card variant="elevated" className="group overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge variant="secondary" className="bg-card/90 backdrop-blur-sm">
            {tour.duration}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <div className="flex items-center gap-1 bg-card/90 backdrop-blur-sm px-2 py-1 rounded-full">
            <Star size={14} className="text-primary fill-primary" />
            <span className="text-sm font-medium">{tour.rating}</span>
          </div>
        </div>
      </div>

      <CardContent className="flex-1 p-6">
        <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {tour.title}
        </h3>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <MapPin size={14} />
          <span>{tour.location}</span>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
          {tour.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {tour.features.slice(0, 3).map((feature) => (
            <Badge key={feature} variant="outline" className="text-xs">
              {feature}
            </Badge>
          ))}
          {tour.features.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{tour.features.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex items-center justify-between">
        <div>
          <span className="text-xs text-muted-foreground">от</span>
          <div className="flex items-baseline gap-1">
            <span className="font-heading text-2xl font-bold text-foreground">
              {tour.priceFrom.toLocaleString("ru-RU")}
            </span>
            <span className="text-sm text-muted-foreground">₽</span>
          </div>
        </div>
        <Link to={`/tours/${tour.id}`}>
          <Button variant="default" size="sm" className="group/btn">
            Подробнее
            <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
