import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CTA = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Start Your Journey to Relief
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-balance">
            Schedule a consultation to discover how custom prosthetics can transform your quality of life.
          </p>
          
          <div className="flex flex-col gap-4 max-w-2xl mx-auto mb-8">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="h-14 text-lg rounded-xl border-2"
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Input 
                type="text" 
                placeholder="Height" 
                className="h-14 text-lg rounded-xl border-2"
              />
              <Input 
                type="text" 
                placeholder="Weight" 
                className="h-14 text-lg rounded-xl border-2"
              />
              <Input 
                type="text" 
                placeholder="Age" 
                className="h-14 text-lg rounded-xl border-2"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input 
                type="text" 
                placeholder="Waist size" 
                className="h-14 text-lg rounded-xl border-2"
              />
              <Input 
                type="text" 
                placeholder="Zipcode" 
                className="h-14 text-lg rounded-xl border-2"
              />
            </div>
            
            <Button size="lg" className="text-lg px-8 h-14 rounded-xl w-full sm:w-auto sm:mx-auto">
              Get Started
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            No commitment required. Free initial consultation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
