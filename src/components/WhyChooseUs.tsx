const features = [
  {
    title: "Custom Design",
    description: "Every orthotic is engineered specifically for your unique anatomy and condition.",
  },
  {
    title: "Medical Precision",
    description: "Advanced biomechanical analysis ensures optimal support and pain relief.",
  },
  {
    title: "Continuous Care",
    description: "Ongoing adjustments and support throughout your recovery journey.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            What people are saying
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance italic">
            "It fills the space between the natural curve of your spine and the surface you lay on with a material that feels like a natural extension of your body."
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl hover:bg-muted/30 transition-all duration-500"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-medical-cyan/20 to-medical-blue/20 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-accent" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
