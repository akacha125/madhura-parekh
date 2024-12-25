import { Link } from "react-router-dom";
import { portfolioData } from "@/data/portfolio-data";

const Header = () => {
  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-heading font-bold">
          {portfolioData.artist.name}
        </Link>
        <nav className="hidden md:flex gap-8">
          <a href="#about" className="hover:text-primary/70 transition-colors">
            About
          </a>
          <a href="#work" className="hover:text-primary/70 transition-colors">
            Work
          </a>
          <a href="#contact" className="hover:text-primary/70 transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;