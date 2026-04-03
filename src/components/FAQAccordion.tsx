import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqItems = [
  {
    question: "What services do you offer?",
    answer: "I offer social media management, content creation, and organic growth strategies tailored to your brand.",
  },
  {
    question: "How do you help grow social media organically?",
    answer: "I combine data-driven strategy, high-performing content, and continuous optimization to drive consistent and scalable organic growth.",
  },
  {
    question: "How long does it take to see results?",
    answer: "Results vary depending on the project scope, strategy, and consistency of execution.",
  },
  {
    question: "Do you create content or only manage accounts?",
    answer: "I handle everything from strategy and content creation to full account management.",
  },
  {
    question: "Which platforms do you specialize in?",
    answer: "I specialize in Meta platforms (Instagram and Facebook) and TikTok, with the ability to adapt strategies across other platforms.",
  },
  {
    question: "How do we start working together?",
    answer: "You can contact me via email or LinkedIn, or hire me directly through Upwork or Freelancer.",
  },
  {
    question: "What are your rates?",
    answer: "My rates start from $3/hour and may vary depending on the project scope and requirements.",
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
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
