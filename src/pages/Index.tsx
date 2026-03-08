import ScrollAnimator from "@/components/ScrollAnimator";
import heroImg from "@/assets/hero-portrait.jpg";
import serviceUiux from "@/assets/service-uiux.jpg";
import serviceNocode from "@/assets/service-nocode.jpg";
import serviceBrand from "@/assets/service-brand.jpg";
import { projects } from "@/data/projects";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { Linkedin, Mail, MessageCircle, Send, Sparkles } from "lucide-react";

const techTools = [
  "Figma", "Framer", "Webflow", "Notion", "Zapier", "Next.js",
  "Tailwind CSS", "TypeScript", "VS Code", "Adobe XD", "Illustrator",
  "Photoshop", "Lottie", "Airtable", "Slack",
];

const services = [
  {
    title: "UI/UX Design",
    description: "Crafting clean, user-centered interfaces that balance aesthetics with functionality for web and mobile platforms.",
    image: serviceUiux,
  },
  {
    title: "No-Code Development",
    description: "Building fast, responsive websites and apps using Framer, Webflow, and other modern no-code tools.",
    image: serviceNocode,
  },
  {
    title: "Brand Identity",
    description: "Designing cohesive visual identities that communicate your brand's personality and values effectively.",
    image: serviceBrand,
  },
];

const Index = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (carouselRef.current) carouselRef.current.scrollLeft = scrollLeft - walk;
  };
  const handleMouseUp = () => setIsDragging(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="space-y-32 pb-20">
      {/* Hero */}
      <section className="min-h-[85vh] flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          <ScrollAnimator>
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-foreground leading-tight">
                John Doe
              </h1>
              <div className="space-y-2">
                <p className="text-xl md:text-2xl font-display font-medium text-primary">UI/UX Designer</p>
                <p className="text-xl md:text-2xl font-display font-medium text-primary/80">No-Code Developer</p>
                <p className="text-xl md:text-2xl font-display font-medium text-primary/60">Digital Creator</p>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-lg text-sm md:text-base">
                I'm a product designer based in Indonesia, focused on crafting intuitive digital experiences for websites and mobile apps. I bridge the gap between design and technology through thoughtful user research and clean visual execution. My goal is to solve real human problems while helping businesses achieve their objectives. Currently open to freelance projects and collaborations.
              </p>
            </div>
          </ScrollAnimator>
          <ScrollAnimator delay={200}>
            <div className="flex justify-center lg:justify-end">
              <div className="w-72 md:w-80 lg:w-96 aspect-[3/4] rounded-3xl overflow-hidden navy-glow">
                <img src={heroImg} alt="John Doe portrait" className="w-full h-full object-cover" />
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </section>

      {/* Services */}
      <section>
        <ScrollAnimator>
          <div className="flex items-center gap-3 mb-12">
            <Sparkles className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Services</h2>
          </div>
        </ScrollAnimator>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollAnimator key={service.title} delay={i * 100}>
              <div className="group bg-card rounded-2xl overflow-hidden border border-border hover:navy-glow transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-display font-semibold text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section>
        <ScrollAnimator>
          <span className="inline-block px-4 py-1.5 text-xs font-medium border border-border rounded-full text-muted-foreground mb-8">
            TECH STACK
          </span>
        </ScrollAnimator>
        <div className="overflow-hidden">
          <div className="animate-scroll-left flex gap-12 items-center w-max">
            {[...techTools, ...techTools].map((tool, i) => (
              <span
                key={`${tool}-${i}`}
                className="text-muted-foreground text-lg font-display font-medium whitespace-nowrap hover:text-foreground hover:scale-110 transition-all duration-200 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section>
        <ScrollAnimator>
          <span className="inline-block px-4 py-1.5 text-xs font-medium border border-border rounded-full text-muted-foreground mb-8">
            PROJECTS
          </span>
        </ScrollAnimator>
        <div
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="flex gap-6 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project, i) => (
            <ScrollAnimator key={project.id} delay={i * 100} className="flex-shrink-0 w-72 md:w-80">
              <Link to={`/projects/${project.id}`} className="block group">
                <div className="bg-card rounded-2xl overflow-hidden border border-border hover:navy-glow transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5 space-y-2">
                    <h3 className="font-display font-semibold text-foreground">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                </div>
              </Link>
            </ScrollAnimator>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <ScrollAnimator>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-12">
            Let's Work Together!
          </h2>
        </ScrollAnimator>
        <ScrollAnimator delay={100}>
          <div className="bg-card rounded-2xl border border-border p-8 md:p-12 space-y-8">
            <div>
              <h3 className="text-2xl font-display font-semibold text-foreground mb-2">Get in Touch</h3>
              <div className="w-16 h-1 rounded-full bg-accent" />
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="https://linkedin.com/in/placeholder" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm font-medium hover:navy-glow transition-all duration-200">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a href="mailto:placeholder@email.com" className="flex items-center gap-2 px-5 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm font-medium hover:navy-glow transition-all duration-200">
                <Mail className="w-4 h-4" /> Email
              </a>
              <a href="https://wa.me/0000000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm font-medium hover:navy-glow transition-all duration-200">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-5 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-5 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <textarea
                placeholder="Message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-5 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-medium text-sm hover:navy-glow transition-all duration-200"
              >
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </div>
        </ScrollAnimator>
      </section>
    </div>
  );
};

export default Index;
