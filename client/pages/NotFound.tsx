import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Trophy, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Trophy className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">FutsalPro</span>
          </div>
        </div>
      </header>

      {/* 404 Content */}
      <div className="flex items-center justify-center py-20">
        <div className="text-center max-w-md">
          <div className="text-8xl font-bold text-primary mb-4">404</div>
          <h1 className="text-3xl font-bold mb-4">Court Not Found</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Sorry, the page you're looking for doesn't exist. Let's get you back
            to the game!
          </p>
          <Button asChild size="lg" className="px-8">
            <a href="/">
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
