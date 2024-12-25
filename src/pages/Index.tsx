import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkGrid from "@/components/WorkGrid";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-secondary relative">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 animate-fade-in">
            Mixed Media Artist
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up">
            Creating unique experiences through diverse artistic mediums
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
              As a mixed media artist, I explore the intersection of various artistic disciplines,
              combining traditional techniques with contemporary approaches. My work reflects the
              complexity of modern life through the fusion of different materials and methods.
            </p>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center">My Work</h2>
          <WorkGrid />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center">Contact Me</h2>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;