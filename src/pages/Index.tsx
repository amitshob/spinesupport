import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import QualifyingQuestions from "@/components/QualifyingQuestions";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhyChooseUs />
      <QualifyingQuestions />
      <CTA />
    </div>
  );
};

export default Index;
