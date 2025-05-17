
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Oops! We couldn't find the soundscape you're looking for.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/">
            <Button>Go Home</Button>
          </Link>
          <Link to="/onboarding">
            <Button variant="outline">Create New Sound</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
