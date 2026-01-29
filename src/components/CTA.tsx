import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const CTA = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    height: "",
    weight: "",
    age: "",
    waistSize: "",
    zipcode: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields are filled
    if (!formData.email || !formData.height || !formData.weight || !formData.age || !formData.waistSize || !formData.zipcode) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-consultation-email", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your consultation request has been submitted. We'll be in touch soon!",
      });

      // Reset form
      setFormData({
        email: "",
        height: "",
        weight: "",
        age: "",
        waistSize: "",
        zipcode: "",
      });
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Start Your Journey
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-balance">
            Submit the form below. We will get back with the next steps.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-2xl mx-auto mb-8">
            <Input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email" 
              className="h-14 text-lg rounded-xl border-2"
              required
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Input 
                type="text" 
                name="height"
                value={formData.height}
                onChange={handleInputChange}
                placeholder="Height" 
                className="h-14 text-lg rounded-xl border-2"
                required
              />
              <Input 
                type="text" 
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
                placeholder="Weight" 
                className="h-14 text-lg rounded-xl border-2"
                required
              />
              <Input 
                type="text" 
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                placeholder="Age" 
                className="h-14 text-lg rounded-xl border-2"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input 
                type="text" 
                name="waistSize"
                value={formData.waistSize}
                onChange={handleInputChange}
                placeholder="Waist size" 
                className="h-14 text-lg rounded-xl border-2"
                required
              />
              <Input 
                type="text" 
                name="zipcode"
                value={formData.zipcode}
                onChange={handleInputChange}
                placeholder="Zipcode" 
                className="h-14 text-lg rounded-xl border-2"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              size="lg" 
              className="text-lg px-8 h-14 rounded-xl w-full sm:w-auto sm:mx-auto"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </Button>
          </form>
          
          <p className="text-sm text-muted-foreground">
            This solution is for general lumbar support. It is not intended to treat or correct any medical condition.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
