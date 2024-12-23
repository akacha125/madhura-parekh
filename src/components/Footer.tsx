const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">© 2024 Artist Name. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              Instagram
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              Twitter
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;