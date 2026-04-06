import ScrollAnimator from "@/components/ScrollAnimator";
import heroImg from "@/assets/hero-portrait.jpg";
import serviceUiux from "@/assets/service-uiux.jpg";
import serviceNocode from "@/assets/service-nocode.jpg";
import serviceBrand from "@/assets/service-brand.jpg";
import { projects } from "@/data/projects";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Linkedin, Mail, MessageCircle, Send, Sparkles } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import { toolItems } from "@/components/ToolIcons";

const services = [
  {
    title: "Social Media Strategy",
    bullets: ["Audience Research", "Competitor Analysis", "Growth Strategy"],
    image: serviceUiux,
  },
  {
    title: "Social Media Management",
    bullets: ["Community Management", "Social Media SEO Optimization", "Account Audit"],
    image: serviceNocode,
  },
  {
    title: "Content Creation",
    bullets: ["Content Planning", "SEO Copywriting", "Visual Branding & Feed Design"],
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

  const skills = [
    "Growth Strategy",
    "Content Strategy",
    "Content Creation",
    "Copywriting",
    "Social Media SEO Optimization",
    "Audience Research",
    "Competitor Analysis",
    "Data Analytics",
    "Community Building",
    "Social Media Management",
    "Meta Ads",
  ];

  return (
    <div className="space-y-32 pb-20">
      {/* About Me */}
      <section className="min-h-[85vh] flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          <ScrollAnimator>
            <div className="space-y-8">
              <h1 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-foreground leading-tight whitespace-nowrap">
                Stela Wibowo
              </h1>
              <p className="text-lg md:text-xl font-display font-medium text-primary mt-1">Social Media Specialist</p>
              <p className="text-muted-foreground leading-[1.85] max-w-lg text-sm md:text-[0.938rem] mt-2 text-justify">
                Hi, I'm a Social Media Specialist who helps brands grow and build meaningful connections with their audience through thoughtful and strategic content. My expertise focuses on organic growth strategy, social media management, and content development, ensuring every piece of content is intentional, relevant, and built to perform. I approach content with purpose and precision, crafting strategies that go beyond aesthetics to deliver measurable impact. I'd love to help your brand grow with purpose and achieve results beyond numbers.
              </p>
            </div>
          </ScrollAnimator>
          <ScrollAnimator delay={200}>
            <div className="flex flex-col items-center lg:items-end gap-4">
              <div className="w-44 md:w-52 lg:w-64 aspect-[3/4] rounded-3xl overflow-hidden navy-glow">
                <img src={heroImg} alt="Stela Wibowo portrait" className="w-full h-full object-cover object-top" />
              </div>
              <div className="mt-10 relative inline-flex items-center gap-2 px-6 py-2 rounded-full border-2 border-foreground/40 bg-card text-sm font-medium font-display text-foreground hover:border-foreground/60 transition-colors duration-200 overflow-hidden">
               {/* shimmer */}
                <span className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />  
                   {/* green */}
                <span className="relative w-2 h-2 rounded-full bg-green-500 animate-[pulse-green_2s_ease-in-out_infinite]" />
              <span className="relative">Available For New Project</span>
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </section>

      {/* Skills */}
      <section>
        <ScrollAnimator>
          <div className="flex items-center justify-center gap-3 mb-12">
            <Sparkles className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Skills</h2>
          </div>
        </ScrollAnimator>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, i) => (
            <ScrollAnimator key={skill} delay={i * 60}>
              <span className="inline-flex items-center px-5 py-2.5 rounded-full border border-border bg-card text-sm font-medium text-foreground font-display hover:bg-primary/10 hover:border-primary/40 hover:scale-105 transition-all duration-200 cursor-default">
                {skill}
              </span>
            </ScrollAnimator>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section>
        <ScrollAnimator>
          <div className="flex items-center justify-center gap-3 mb-12">
            <Sparkles className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Tools</h2>
          </div>
        </ScrollAnimator>
        <div className="overflow-hidden">
          <div className="animate-scroll-left flex gap-12 items-center w-max">
            {[...toolItems, ...toolItems].map((tool, i) => (
              <span
                key={`${tool.name}-${i}`}
                className="flex items-center gap-2 text-muted-foreground text-lg font-display font-medium whitespace-nowrap hover:text-foreground hover:scale-110 transition-all duration-200 cursor-default"
              >
                {tool.icon}
                {tool.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
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
              <Link to={`/projects/${project.id}`} className="block group h-full">
                <div className="bg-card rounded-2xl overflow-hidden border border-border hover:navy-glow transition-all duration-300 h-full flex flex-col">
                  <div className="aspect-video overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5 space-y-2 text-center flex-1 flex flex-col justify-center">
                    <h3 className="font-display font-semibold text-foreground line-clamp-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                  </div>
                </div>
              </Link>
            </ScrollAnimator>
          ))}
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
            <ScrollAnimator key={service.title} delay={i * 100} className="h-full">
              <div className="group bg-card rounded-2xl overflow-hidden border border-border hover:navy-glow transition-all duration-300 h-full flex flex-col">
                <div className="aspect-video overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-display font-semibold text-foreground text-center mb-4">{service.title}</h3>
                  <ul className="space-y-2 pl-1">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section>
        <ScrollAnimator>
          <div className="flex items-center justify-center gap-3 mb-12">
            <Sparkles className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">FAQ</h2>
          </div>
        </ScrollAnimator>
        <ScrollAnimator delay={100}>
          <FAQAccordion />
        </ScrollAnimator>
      </section>

      {/* Contact */}
      <section id="contact">
        <ScrollAnimator>
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-4xl font-display font-bold text-foreground mb-3">
              Let's Grow Your Brand Online!
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mx-auto">
              Let's shape a social media presence that accelerates your brand's growth.
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
              <a href="https://www.linkedin.com/in/stelawibowo" target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); window.open("https://www.linkedin.com/in/stelawibowo", "_blank", "noopener,noreferrer"); }} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary border border-border text-foreground text-sm font-medium hover:navy-glow transition-all duration-200 cursor-pointer">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a href="mailto:stelaayuwibowo232@gmail.com?subject=Let's%20Work%20Together" onClick={(e) => { e.preventDefault(); window.location.href = "mailto:stelaayuwibowo232@gmail.com?subject=Let's%20Work%20Together"; }} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary border border-border text-foreground text-sm font-medium hover:navy-glow transition-all duration-200 cursor-pointer">
                <Mail className="w-4 h-4" /> Email
              </a>
              <a href="https://www.upwork.com/freelancers/~013c524c90b5b3db06" target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); window.open("https://www.upwork.com/freelancers/~013c524c90b5b3db06", "_blank", "noopener,noreferrer"); }} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary border border-border text-foreground text-sm font-medium hover:navy-glow transition-all duration-200 cursor-pointer">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/></svg> Upwork
              </a>
              <a href="https://www.freelancer.com/u/stelawibowo?frm=stelawibowo&sb=t" target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); window.open("https://www.freelancer.com/u/stelawibowo?frm=stelawibowo&sb=t", "_blank", "noopener,noreferrer"); }} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary border border-border text-foreground text-sm font-medium hover:navy-glow transition-all duration-200 cursor-pointer">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M4.738 0v.001C2.161 0 .055 2.106.055 4.683c0 2.578 2.107 4.684 4.683 4.684.609 0 1.22-.12 1.771-.333l1.284 1.284-1.073 1.073a4.682 4.682 0 00-1.982-.441c-2.577 0-4.683 2.106-4.683 4.683S2.161 20.317 4.738 20.317c2.576 0 4.683-2.106 4.683-4.683 0-.696-.161-1.378-.441-1.982l1.073-1.073 7.378 7.378A4.683 4.683 0 0020.745 24c2.576 0 4.683-2.106 4.683-4.683s-2.107-4.683-4.683-4.683a4.682 4.682 0 00-3.314 1.373L10.053 8.63a4.683 4.683 0 001.368-3.309V5.32c.001-2.577-2.105-4.683-4.683-4.683V0zm0 2.341a2.342 2.342 0 110 4.684 2.342 2.342 0 010-4.684zm15.369 10.269a2.341 2.341 0 11.001 4.683 2.341 2.341 0 01-.001-4.683zM4.738 13.293a2.342 2.342 0 110 4.683 2.342 2.342 0 010-4.683z"/></svg> Freelancer
              </a>
            </div>

          </div>
        </ScrollAnimator>
      </section>
    </div>
  );
};

export default Index;
