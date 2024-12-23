import { Mail, Phone, Instagram, Twitter, Linkedin } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

const Footer = () => {
  const { contact } = portfolioData;
  
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-4 w-4" />
                {contact.email}
              </a>
              <a href={`tel:${contact.phone}`} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-4 w-4" />
                {contact.phone}
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Social Media</h3>
            <div className="flex gap-4">
              <a
                href={contact.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={contact.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={contact.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {portfolioData.artist.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;