import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-premium section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">R</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg font-semibold leading-tight">
                  Reboot Camp
                </span>
                <span className="text-xs opacity-70 uppercase tracking-widest">
                  Premium
                </span>
              </div>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed">
              Премиальный велнес-отдых в Воронеже. Перезагрузка от рутины — спа, бани, 
              массаж и здоровое питание с трансфером от двери до двери.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Навигация</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Главная" },
                { href: "/tours", label: "Туры" },
                { href: "/pricing", label: "Тарифы" },
                { href: "/auth", label: "Личный кабинет" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="opacity-70 mt-0.5 shrink-0" />
                <span className="text-sm opacity-80">
                  Воронеж, Центральный район
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="opacity-70 shrink-0" />
                <a 
                  href="tel:+79001234567" 
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  +7 (900) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="opacity-70 shrink-0" />
                <a 
                  href="mailto:info@rebootcamp.ru" 
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  info@rebootcamp.ru
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="opacity-70 mt-0.5 shrink-0" />
                <span className="text-sm opacity-80">
                  Ежедневно: 08:00 — 22:00
                </span>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Информация</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity duration-200"
                >
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity duration-200"
                >
                  Условия использования
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity duration-200"
                >
                  Публичная оферта
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-60">
              © {currentYear} Reboot Camp Premium. Все права защищены.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://t.me/rebootcamp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm opacity-60 hover:opacity-100 transition-opacity"
              >
                Telegram
              </a>
              <a
                href="https://wa.me/79001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm opacity-60 hover:opacity-100 transition-opacity"
              >
                WhatsApp
              </a>
              <a
                href="https://vk.com/rebootcamp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm opacity-60 hover:opacity-100 transition-opacity"
              >
                VK
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
