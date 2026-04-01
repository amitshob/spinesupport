const QualifyingQuestions = () => {
  const questions = [
    "Do you find lying flat on your back uncomfortable for extended periods?",
    "Do you struggle to get a good night's sleep due to lower back tension, or do you wake up with a sore back?",
    "Do you feel relief when using a folded towel or a pillow under your lower back when lying down?",
    "Have you or a healthcare provider felt that you would benefit from additional lower back support?",
    "Have one-size-fits-all back support solutions never worked for you?",
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
            Check if you are a good candidate
          </h2>
          <ul className="space-y-4 text-lg text-muted-foreground">
            {questions.map((q, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default QualifyingQuestions;
