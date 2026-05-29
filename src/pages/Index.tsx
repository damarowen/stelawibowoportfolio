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
import SEO from "@/components/SEO";

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
      <SEO
        title="Stela Wibowo — Social Media Specialist Portfolio"
        description="Stela Wibowo's portfolio: social media strategy, management, and content creation that helps brands grow with intention."
        path="/"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Stela Wibowo",
            jobTitle: "Social Media Specialist",
            url: "https://stelawibowoportfolio.lovable.app/",
          },
          ...services.map((s) => ({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.title,
            serviceType: s.title,
            provider: { "@type": "Person", name: "Stela Wibowo" },
            areaServed: "Worldwide",
          })),
        ]}
      />
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
                <img src={heroImg} alt="Stela Wibowo portrait" width="768" height="1024" fetchPriority="high" decoding="async" className="w-full h-full object-cover object-top" />
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
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollAnimator key={project.id} delay={i * 100} className="h-full">
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
            </div>

          </div>
        </ScrollAnimator>
      </section>
    </div>
  );
};

export default Index;
