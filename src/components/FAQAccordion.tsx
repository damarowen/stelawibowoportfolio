import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { cn } from "@/lib/utils";

const faqItems = [
  {
    question: "How do you help grow social media organically?",
    answer: "I focus on strategic content, consistency, and audience understanding to drive sustainable growth. Every piece of content is designed to increase reach, engagement, and meaningful connections.",
  },
  {
    question: "What services do you offer?",
    answer: "I offer organic growth strategy, social media management, and content development, tailored to align with your brand goals.",
  },
  {
    question: "How long does it take to see results?",
    answer: "Results typically start to show within 1–3 months, depending on your starting point, consistency, and strategy execution.",
  },
  {
    question: "How can we start working together?",
    answer: "Simply reach out through the contact section, and we can discuss your goals and the best approach for your brand.",
  },
  {
    question: "What are your rates?",
    answer: "My rates vary depending on your needs and scope of work, with packages starting from $3. Feel free to get in touch for a customized proposal tailored to your brand.",
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer },
    })),
  };

  return (
    <div className="space-y-3">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
      </Helmet>
      {faqItems.map((item, index) => (
        <div
          key={index}
          className="bg-card rounded-2xl border border-border overflow-hidden transition-all duration-200 hover:border-primary/30"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer group"
          >
            <span className="font-display font-medium text-foreground text-sm md:text-base pr-4">
              {item.question}
            </span>
            <span className="shrink-0 w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/40 transition-all duration-200">
              {openIndex === index ? (
                <Minus className="w-4 h-4 text-primary" />
              ) : (
                <Plus className="w-4 h-4 text-muted-foreground" />
              )}
            </span>
          </button>
          <div
            className={cn(
              "overflow-hidden transition-all duration-300 ease-in-out",
              openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            )}
          >
            <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
