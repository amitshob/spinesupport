import { Button } from "@/components/ui/button";
import spineHero from "@/assets/spine-hero.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.1]">
              Custom Prosthetics for
              <span className="block mt-2 bg-gradient-to-r from-medical-cyan to-medical-blue bg-clip-text text-transparent">
                Chronic Spine Relief
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-balance">
              Precision-engineered prosthetic solutions tailored to your unique needs. Relief from sciatica, herniated discs, and spinal stenosis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8 py-6 rounded-xl transition-all hover:scale-105">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-xl border-2 transition-all hover:scale-105">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-medical-cyan/20 to-pain-orange/20 blur-3xl rounded-full" />
              <img 
                src={spineHero} 
                alt="Medical illustration showing spine with highlighted pain areas" 
                className="relative z-10 w-full h-auto drop-shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
