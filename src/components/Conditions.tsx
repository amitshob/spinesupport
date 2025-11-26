import { Card } from "@/components/ui/card";

const conditions = [
  {
    name: "Sciatica",
    description: "Custom support to relieve nerve compression and reduce radiating pain down the leg.",
  },
  {
    name: "Herniated Disc",
    description: "Targeted orthotics designed to alleviate pressure on affected spinal discs.",
  },
  {
    name: "Degenerative Disc Disease",
    description: "Long-term solutions that adapt to progressive spinal changes.",
  },
  {
    name: "Spinal Stenosis",
    description: "Precision-fitted devices to manage narrowing of the spinal canal.",
  },
];

const Conditions = () => {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Conditions We Treat
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Specialized orthotic solutions for chronic spine-related conditions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {conditions.map((condition, index) => (
            <Card 
              key={index}
              className="p-8 border-border/50 hover:border-accent/50 transition-all duration-500 hover:shadow-lg hover:scale-[1.02] bg-card/50 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-semibold mb-3">{condition.name}</h3>
              <p className="text-muted-foreground">{condition.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Conditions;
