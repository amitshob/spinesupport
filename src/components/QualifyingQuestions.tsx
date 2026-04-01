const questions = [
  "Do you find lying flat on your back uncomfortable for extended periods?",
  "Do you struggle to get a good night's sleep due to lower back tension? Do you wake up with a sore back?",
  "Do you instinctively reach for a pillow or folded towel to place under your lower back?",
  "Have you or a healthcare provider felt that you would benefit from additional lower back support?",
  "Have one-size-fits-all back support solutions failed to work for you?",
];

const QualifyingQuestions = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <ul className="max-w-3xl mx-auto space-y-4 list-disc list-outside pl-6">
          {questions.map((q, i) => (
            <li key={i} className="text-lg text-foreground/90">
              {q}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default QualifyingQuestions;
