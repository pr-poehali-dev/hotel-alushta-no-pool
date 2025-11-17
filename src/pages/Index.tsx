import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

const Index = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  const rooms = [
    {
      id: 1,
      name: "Стандартный номер",
      price: "от 3 500 ₽",
      image: "https://cdn.poehali.dev/projects/cbbd4826-5d38-45a8-b82a-2e6be9d82aba/files/b6ed1c79-a5df-4001-b848-ad6910b6245f.jpg",
      description: "Уютный номер с видом на горы, идеально подходит для пары",
      features: ["2 гостя", "25 м²", "Wi-Fi", "Кондиционер"]
    },
    {
      id: 2,
      name: "Номер с видом на море",
      price: "от 5 000 ₽",
      image: "https://cdn.poehali.dev/projects/cbbd4826-5d38-45a8-b82a-2e6be9d82aba/files/ff93a098-e37a-4f0b-a696-86c554f67e88.jpg",
      description: "Просторный номер с панорамным видом на Черное море",
      features: ["2-3 гостя", "35 м²", "Wi-Fi", "Балкон"]
    },
    {
      id: 3,
      name: "Люкс",
      price: "от 7 500 ₽",
      image: "https://cdn.poehali.dev/projects/cbbd4826-5d38-45a8-b82a-2e6be9d82aba/files/01b7cfd2-bb66-4047-951d-f1d8ee779101.jpg",
      description: "Премиальный номер с гостиной зоной и лучшим видом",
      features: ["2-4 гостя", "50 м²", "Wi-Fi", "Джакузи"]
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Елена Смирнова",
      rating: 5,
      text: "Прекрасный отель с потрясающим видом! Очень чисто, персонал доброжелательный. Обязательно вернемся.",
      date: "Октябрь 2024"
    },
    {
      id: 2,
      name: "Дмитрий Волков",
      rating: 5,
      text: "Отличное соотношение цены и качества. Расположение удобное, до пляжа 10 минут пешком.",
      date: "Сентябрь 2024"
    },
    {
      id: 3,
      name: "Анна Петрова",
      rating: 5,
      text: "Тихое и спокойное место для отдыха. Номера современные, всё необходимое есть.",
      date: "Август 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-cormorant font-bold text-primary">Отель Алушта</h1>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection("hero")} className="text-sm hover:text-accent transition-colors">Главная</button>
              <button onClick={() => scrollToSection("rooms")} className="text-sm hover:text-accent transition-colors">Номера</button>
              <button onClick={() => scrollToSection("gallery")} className="text-sm hover:text-accent transition-colors">Галерея</button>
              <button onClick={() => scrollToSection("location")} className="text-sm hover:text-accent transition-colors">Локация</button>
              <button onClick={() => scrollToSection("reviews")} className="text-sm hover:text-accent transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection("booking")} className="text-sm hover:text-accent transition-colors">Бронирование</button>
              <button onClick={() => scrollToSection("contacts")} className="text-sm hover:text-accent transition-colors">Контакты</button>
            </div>
            <div className="flex items-center gap-3">
              <Button onClick={() => scrollToSection("booking")} className="hidden md:flex bg-accent hover:bg-accent/90 text-accent-foreground">
                Забронировать
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
              </Button>
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              <button 
                onClick={() => { scrollToSection("hero"); setMobileMenuOpen(false); }} 
                className="text-left py-2 hover:text-accent transition-colors"
              >
                Главная
              </button>
              <button 
                onClick={() => { scrollToSection("rooms"); setMobileMenuOpen(false); }} 
                className="text-left py-2 hover:text-accent transition-colors"
              >
                Номера
              </button>
              <button 
                onClick={() => { scrollToSection("gallery"); setMobileMenuOpen(false); }} 
                className="text-left py-2 hover:text-accent transition-colors"
              >
                Галерея
              </button>
              <button 
                onClick={() => { scrollToSection("location"); setMobileMenuOpen(false); }} 
                className="text-left py-2 hover:text-accent transition-colors"
              >
                Локация
              </button>
              <button 
                onClick={() => { scrollToSection("reviews"); setMobileMenuOpen(false); }} 
                className="text-left py-2 hover:text-accent transition-colors"
              >
                Отзывы
              </button>
              <button 
                onClick={() => { scrollToSection("booking"); setMobileMenuOpen(false); }} 
                className="text-left py-2 hover:text-accent transition-colors"
              >
                Бронирование
              </button>
              <button 
                onClick={() => { scrollToSection("contacts"); setMobileMenuOpen(false); }} 
                className="text-left py-2 hover:text-accent transition-colors"
              >
                Контакты
              </button>
              <Button 
                onClick={() => { scrollToSection("booking"); setMobileMenuOpen(false); }} 
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-2"
              >
                Забронировать
              </Button>
            </div>
          </div>
        )}
      </nav>

      <section id="hero" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-cormorant font-bold text-primary mb-6">
              Отдых в сердце Алушты
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Откройте для себя уютный отель с потрясающими видами на Черное море и горы. 
              Комфортабельные номера, внимательный сервис и незабываемая атмосфера.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => scrollToSection("booking")} className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Забронировать номер
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("rooms")}>
                Посмотреть номера
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="rooms" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-primary mb-4">Наши номера</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите идеальный номер для вашего отдыха
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <Card key={room.id} className="overflow-hidden hover:shadow-xl transition-shadow animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={room.image} alt={room.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-cormorant font-bold text-primary mb-2">{room.name}</h3>
                  <p className="text-accent font-semibold text-xl mb-3">{room.price}</p>
                  <p className="text-muted-foreground mb-4">{room.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.features.map((feature, i) => (
                      <span key={i} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button onClick={() => scrollToSection("booking")} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-primary mb-4">Галерея</h2>
            <p className="text-lg text-muted-foreground">Атмосфера нашего отеля</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2 aspect-[16/9] overflow-hidden rounded-lg animate-scale-in">
              <img src="https://cdn.poehali.dev/projects/cbbd4826-5d38-45a8-b82a-2e6be9d82aba/files/ff93a098-e37a-4f0b-a696-86c554f67e88.jpg" 
                   alt="Вид на море" 
                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="aspect-[16/9] overflow-hidden rounded-lg animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <img src="https://cdn.poehali.dev/projects/cbbd4826-5d38-45a8-b82a-2e6be9d82aba/files/b6ed1c79-a5df-4001-b848-ad6910b6245f.jpg" 
                   alt="Номер" 
                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="aspect-[16/9] overflow-hidden rounded-lg animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <img src="https://cdn.poehali.dev/projects/cbbd4826-5d38-45a8-b82a-2e6be9d82aba/files/01b7cfd2-bb66-4047-951d-f1d8ee779101.jpg" 
                   alt="Интерьер" 
                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="md:col-span-2 aspect-[16/9] overflow-hidden rounded-lg animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <img src="https://cdn.poehali.dev/projects/cbbd4826-5d38-45a8-b82a-2e6be9d82aba/files/b6ed1c79-a5df-4001-b848-ad6910b6245f.jpg" 
                   alt="Комфорт" 
                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </section>

      <section id="location" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-primary mb-6">Удобное расположение</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Наш отель находится в живописном районе Алушты, откуда легко добраться до всех главных достопримечательностей курорта.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-accent mt-1" size={20} />
                  <div>
                    <p className="font-semibold">До пляжа</p>
                    <p className="text-muted-foreground">10 минут пешком</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-accent mt-1" size={20} />
                  <div>
                    <p className="font-semibold">До набережной</p>
                    <p className="text-muted-foreground">5 минут пешком</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-accent mt-1" size={20} />
                  <div>
                    <p className="font-semibold">До центра</p>
                    <p className="text-muted-foreground">15 минут пешком</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-square rounded-lg overflow-hidden animate-scale-in">
              <img src="https://cdn.poehali.dev/projects/cbbd4826-5d38-45a8-b82a-2e6be9d82aba/files/ff93a098-e37a-4f0b-a696-86c554f67e88.jpg" 
                   alt="Локация" 
                   className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-primary mb-4">Отзывы гостей</h2>
            <p className="text-lg text-muted-foreground">Что говорят наши посетители</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={review.id} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-accent fill-accent" size={16} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{review.text}</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-primary">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-primary mb-4">Бронирование</h2>
              <p className="text-lg text-muted-foreground">Забронируйте ваш идеальный отдых</p>
            </div>
            <Card className="animate-scale-in">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input id="name" placeholder="Иван Иванов" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="example@mail.ru" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Дата заезда</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start text-left font-normal">
                            <Icon name="Calendar" className="mr-2" size={16} />
                            {checkIn ? format(checkIn, "d MMMM yyyy", { locale: ru }) : "Выберите дату"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={checkIn} onSelect={setCheckIn} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-2">
                      <Label>Дата выезда</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start text-left font-normal">
                            <Icon name="Calendar" className="mr-2" size={16} />
                            {checkOut ? format(checkOut, "d MMMM yyyy", { locale: ru }) : "Выберите дату"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={checkOut} onSelect={setCheckOut} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests">Количество гостей</Label>
                    <Input id="guests" type="number" min="1" max="4" defaultValue="2" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="comments">Комментарий к бронированию</Label>
                    <Textarea id="comments" placeholder="Особые пожелания или вопросы..." rows={4} />
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-primary mb-4">Контакты</h2>
              <p className="text-lg text-muted-foreground">Свяжитесь с нами любым удобным способом</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="animate-scale-in">
                <CardContent className="p-6 text-center">
                  <Icon name="Phone" className="mx-auto mb-4 text-accent" size={32} />
                  <h3 className="font-cormorant font-bold text-xl mb-2">Телефон</h3>
                  <p className="text-muted-foreground">+7 (978) 123-45-67</p>
                  <p className="text-muted-foreground">+7 (978) 765-43-21</p>
                </CardContent>
              </Card>
              <Card className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <CardContent className="p-6 text-center">
                  <Icon name="Mail" className="mx-auto mb-4 text-accent" size={32} />
                  <h3 className="font-cormorant font-bold text-xl mb-2">Email</h3>
                  <p className="text-muted-foreground">info@hotel-alushta.ru</p>
                  <p className="text-muted-foreground">booking@hotel-alushta.ru</p>
                </CardContent>
              </Card>
              <Card className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-6 text-center">
                  <Icon name="MapPin" className="mx-auto mb-4 text-accent" size={32} />
                  <h3 className="font-cormorant font-bold text-xl mb-2">Адрес</h3>
                  <p className="text-muted-foreground">г. Алушта</p>
                  <p className="text-muted-foreground">ул. Приморская, 15</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-cormorant font-bold text-2xl mb-4">Отель Алушта</h3>
              <p className="text-primary-foreground/80">Ваш идеальный отдых на берегу Черного моря</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection("rooms")} className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">Номера</button>
                <button onClick={() => scrollToSection("gallery")} className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">Галерея</button>
                <button onClick={() => scrollToSection("reviews")} className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">Отзывы</button>
                <button onClick={() => scrollToSection("contacts")} className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">Контакты</button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>+7 (978) 123-45-67</p>
                <p>info@hotel-alushta.ru</p>
                <p>г. Алушта, ул. Приморская, 15</p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
            <p>© 2024 Отель Алушта. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;