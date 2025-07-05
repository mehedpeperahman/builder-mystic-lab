import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  MapPin,
  Star,
  Users,
  Trophy,
  Shield,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Index() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const courts = [
    {
      id: 1,
      name: "Premium Court A",
      image:
        "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg",
      rating: 4.8,
      price: "$50",
      location: "Downtown Sports Center",
      features: ["Indoor", "AC", "Changing Room", "Parking"],
    },
    {
      id: 2,
      name: "Elite Court B",
      image:
        "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg",
      rating: 4.9,
      price: "$60",
      location: "City Sports Complex",
      features: ["Indoor", "Professional", "Live Stream", "Parking"],
    },
    {
      id: 3,
      name: "Community Court C",
      image:
        "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg",
      rating: 4.6,
      price: "$35",
      location: "Neighborhood Center",
      features: ["Outdoor", "Basic", "Parking"],
    },
  ];

  const timeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];

  const features = [
    {
      icon: Shield,
      title: "Secure Booking",
      description:
        "Safe and secure payment processing with instant confirmation",
    },
    {
      icon: Zap,
      title: "Instant Booking",
      description: "Book your court in seconds with real-time availability",
    },
    {
      icon: Trophy,
      title: "Premium Courts",
      description: "Access to the best futsal courts in your area",
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with other players and build your team",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Trophy className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">FutsalPro</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/courts"
              className="text-foreground hover:text-primary transition-colors"
            >
              Courts
            </Link>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Tournaments
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost">Sign In</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative text-white py-20 lg:py-32"
        style={{ backgroundColor: "#FF0000" }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Book Premium Futsal Courts
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Find and book the best futsal courts in your city. Play with
              friends, join tournaments, and improve your game.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-3"
              >
                <Link to="/courts">
                  <MapPin className="w-5 h-5 mr-2" />
                  Find Courts Near Me
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 border-white text-black hover:bg-white hover:text-primary"
              >
                <Users className="w-5 h-5 mr-2" />
                Join Tournament
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Booking Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Quick Booking
            </h2>
            <Card className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Location
                  </label>
                  <Input placeholder="Enter city or area" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Date</label>
                  <Input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Time</label>
                  <select
                    className="w-full p-2 border border-input rounded-md bg-background"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex items-end">
                  <Button asChild className="w-full h-10">
                    <Link to="/courts">Search Courts</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Courts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Courts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courts.map((court) => (
              <Card
                key={court.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video relative">
                  <img
                    src={court.image}
                    alt={court.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge
                      variant="secondary"
                      className="bg-white/90 text-primary"
                    >
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      {court.rating}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{court.name}</CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <MapPin className="w-4 h-4" />
                        {court.location}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">
                        {court.price}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        per hour
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {court.features.map((feature) => (
                      <Badge
                        key={feature}
                        variant="outline"
                        className="text-xs"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose FutsalPro?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">150+</div>
              <div className="text-primary-foreground/80">Courts Available</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">25K+</div>
              <div className="text-primary-foreground/80">Happy Players</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-primary-foreground/80">Cities Covered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">Tournaments</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Play?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of players who trust FutsalPro for their court
            bookings. Find your perfect court and start playing today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3">
              <Calendar className="w-5 h-5 mr-2" />
              Book Your First Court
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3"
            >
              <Link to="/courts">
                <Clock className="w-5 h-5 mr-2" />
                View All Courts
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-primary">
                  FutsalPro
                </span>
              </div>
              <p className="text-muted-foreground">
                The ultimate platform for futsal court bookings and community
                building.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Find Courts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Tournaments
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 FutsalPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
