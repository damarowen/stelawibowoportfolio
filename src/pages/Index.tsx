import ScrollAnimator from "@/components/ScrollAnimator";
import heroImg from "@/assets/hero-portrait.jpg";
import serviceUiux from "@/assets/service-uiux.jpg";
import serviceNocode from "@/assets/service-nocode.jpg";
import serviceBrand from "@/assets/service-brand.jpg";
import { projects } from "@/data/projects";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Linkedin, Mail, MessageCircle, Send, Sparkles } from "lucide-react";

const techTools = [
  "Instagram", "TikTok", "Meta Business Suite", "Hootsuite", "Buffer",
  "Canva", "CapCut", "Google Analytics", "Sprout Social", "Later",
  "Adobe Premiere", "Photoshop", "ChatGPT", "Notion", "Figma",
];

const services = [
  {
    title: "Social Media Management",
    description: "Managing and growing brand presence across Instagram, TikTok, LinkedIn, Twitter, and other major platforms with strategic content.",
    image: serviceUiux,
  },
  {
    title: "Content Strategy",
    description: "Developing data-driven content calendars and campaigns that boost engagement, reach, and conversions.",
    image: serviceNocode,
  },
  {
    title: "Brand Identity",
    description: "Designing cohesive visual identities and social media branding that communicate your brand's personality effectively.",
    image: serviceBrand,
  },
];

const Index = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [projectIndex, setProjectIndex] = useState(0);

  const scrollProjectTo = (dir: "left" | "right") => {
    const container = carouselRef.current;
    if (!container) return;
    const cardWidth = container.children[0]?.clientWidth || 320;
    const gap = 24;
    const newIndex = dir === "left"
      ? Math.max(0, projectIndex - 1)
      : Math.min(projects.length - 1, projectIndex + 1);
    setProjectIndex(newIndex);
    container.scrollTo({ left: newIndex * (cardWidth + gap), behavior: "smooth" });
  };

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
              <p className="text-xl md:text-2xl font-display font-medium text-primary">Social Media Specialist</p>
              <p className="text-muted-foreground leading-relaxed max-w-lg text-sm md:text-base">
                I'm a social media specialist based in Indonesia, focused on crafting compelling content strategies and growing online communities. I bridge the gap between brands and their audiences through data-driven campaigns and creative storytelling. My goal is to amplify brand presence and drive meaningful engagement across all platforms. Currently open to freelance projects and collaborations.
              </p>
            </div>
          </ScrollAnimator>
          <ScrollAnimator delay={200}>
            <div className="flex justify-center lg:justify-end">
              <div className="w-60 md:w-68 lg:w-80 aspect-[3/4] rounded-3xl overflow-hidden navy-glow">
                <img src={heroImg} alt="John Doe portrait" className="w-full h-full object-cover" />
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </section>

      {/* Services */}
      <section>
        <ScrollAnimator>
          <div className="flex items-center justify-center gap-3 mb-12">
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
                <div className="p-6 space-y-3 text-center">
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
          <div className="flex items-center justify-center gap-3 mb-12">
            <Sparkles className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Tools</h2>
          </div>
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
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Projects</h2>
          </div>
        </ScrollAnimator>
        <div className="flex items-center justify-end gap-3 mb-4">
          <button onClick={() => scrollProjectTo("left")} className="p-2.5 rounded-full bg-primary/20 border border-foreground text-foreground hover:bg-primary/30 transition-all">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={() => scrollProjectTo("right")} className="p-2.5 rounded-full bg-primary/20 border border-foreground text-foreground hover:bg-primary/30 transition-all">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
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
                  <div className="p-5 space-y-2 text-center">
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
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-4xl font-display font-bold text-foreground mb-3">
              Let's Work Together!
            </h2>
            <p className="text-sm md:text-base text-muted-foreground whitespace-nowrap mx-auto">
              Have a project or collaboration in mind? I'd be happy to hear from you
            </p>
          </div>
        </ScrollAnimator>
        <ScrollAnimator delay={100}>
          <div className="bg-card rounded-2xl border border-border p-6 md:p-8 space-y-5">
            <div className="text-center">
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">Contact Me</h3>
              <div className="w-16 h-1 rounded-full bg-accent mx-auto" />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <a href="https://linkedin.com/in/placeholder" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary border border-border text-foreground text-sm font-medium hover:navy-glow transition-all duration-200">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a href="mailto:placeholder@email.com" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary border border-border text-foreground text-sm font-medium hover:navy-glow transition-all duration-200">
                <Mail className="w-4 h-4" /> Email
              </a>
              <a href="https://wa.me/0000000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary border border-border text-foreground text-sm font-medium hover:navy-glow transition-all duration-200">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a href="https://www.upwork.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary border border-border text-foreground text-sm font-medium hover:navy-glow transition-all duration-200">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/></svg> Upwork
              </a>
              <a href="https://www.freelancer.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary border border-border text-foreground text-sm font-medium hover:navy-glow transition-all duration-200">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M4.738 0v.001C2.161 0 .055 2.106.055 4.683c0 2.578 2.107 4.684 4.683 4.684.609 0 1.22-.12 1.771-.333l1.284 1.284-1.073 1.073a4.682 4.682 0 00-1.982-.441c-2.577 0-4.683 2.106-4.683 4.683S2.161 20.317 4.738 20.317c2.576 0 4.683-2.106 4.683-4.683 0-.696-.161-1.378-.441-1.982l1.073-1.073 7.378 7.378A4.683 4.683 0 0020.745 24c2.576 0 4.683-2.106 4.683-4.683s-2.107-4.683-4.683-4.683a4.682 4.682 0 00-3.314 1.373L10.053 8.63a4.683 4.683 0 001.368-3.309V5.32c.001-2.577-2.105-4.683-4.683-4.683V0zm0 2.341a2.342 2.342 0 110 4.684 2.342 2.342 0 010-4.684zm15.369 10.269a2.341 2.341 0 11.001 4.683 2.341 2.341 0 01-.001-4.683zM4.738 13.293a2.342 2.342 0 110 4.683 2.342 2.342 0 010-4.683z"/></svg> Freelancer
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid md:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-accent text-accent-foreground font-medium text-sm hover:navy-glow transition-all duration-200"
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
