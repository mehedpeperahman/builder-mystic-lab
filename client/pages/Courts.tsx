import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Trophy,
  Search,
  Filter,
  MapPin,
  Star,
  Calendar,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Courts() {
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
      available: true,
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
      available: true,
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
      available: false,
    },
    {
      id: 4,
      name: "Professional Arena",
      image:
        "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg",
      rating: 4.9,
      price: "$80",
      location: "Elite Sports Complex",
      features: ["Indoor", "Professional", "Spectator Seats", "Parking"],
      available: true,
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
              to="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link to="/courts" className="text-primary font-medium">
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
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost">Sign In</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Courts</h1>
          <p className="text-xl text-white/90">
            Discover and book the perfect futsal court for your next game
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search by location, court name..."
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Near Me
            </Button>
          </div>
        </div>
      </section>

      {/* Courts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">
              Available Courts ({courts.length})
            </h2>
            <select className="p-2 border border-input rounded-md bg-background">
              <option>Sort by Price</option>
              <option>Sort by Rating</option>
              <option>Sort by Distance</option>
            </select>
          </div>

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
                  {!court.available && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Badge variant="destructive">Unavailable</Badge>
                    </div>
                  )}
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{court.name}</CardTitle>
                      <div className="flex items-center gap-1 mt-1 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{court.location}</span>
                      </div>
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
                  <div className="flex gap-2">
                    <Button className="flex-1" disabled={!court.available}>
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Now
                    </Button>
                    <Button variant="outline" size="icon">
                      <Clock className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Courts
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
