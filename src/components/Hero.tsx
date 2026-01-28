import { Button } from "@/components/ui/button";
import spineHero from "@/assets/spine-hero.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.1]">
              Custom Sneakers
              <span className="block mt-2 bg-gradient-to-r from-medical-cyan to-medical-blue bg-clip-text text-transparent">
                For your Spine
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-balance text-center lg:text-left">
              Precision-engineered lumbar support belt with cushion tailored to your unique anatomy. Helps maintain posture while sleeping on your back.
            </p>
          </div>
          
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <img 
                src={spineHero} 
                alt="Medical illustration showing spine with highlighted pain areas" 
                className="relative z-10 w-full h-auto animate-float"
                style={{
                  maskImage: 'radial-gradient(ellipse 55% 60% at center, black 20%, transparent 70%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 55% 60% at center, black 20%, transparent 70%)'
                }}
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
