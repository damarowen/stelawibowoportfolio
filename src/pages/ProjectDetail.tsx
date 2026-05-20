import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import ScrollAnimator from "@/components/ScrollAnimator";
import SEO from "@/components/SEO";
import { ArrowLeft } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <SEO
          title="Project Not Found — Stela Wibowo"
          description="The project you're looking for doesn't exist. Browse Stela Wibowo's full portfolio of social media projects."
          path={`/projects/${id ?? ""}`}
        />
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-display font-bold text-foreground">Project Not Found</h1>
          <Link to="/projects" className="text-accent hover:underline text-sm">← Back to Projects</Link>
        </div>
      </div>
    );
  }

  const seoDesc = (project.description || "").slice(0, 155);

  return (
    <div className="space-y-10 pb-20">
      <SEO
        title={`${project.title} — Stela Wibowo Portfolio`}
        description={seoDesc.length >= 50 ? seoDesc : `${project.title} by Stela Wibowo — ${seoDesc}`.slice(0, 155)}
        path={`/projects/${project.id}`}
      />
      <ScrollAnimator>
        <div className="aspect-video rounded-2xl overflow-hidden navy-glow">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>
      </ScrollAnimator>

      <ScrollAnimator delay={100}>
        <div className="text-center space-y-3">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground">{project.title}</h1>
          <p className="text-lg text-muted-foreground">{project.description}</p>
        </div>
      </ScrollAnimator>

      <ScrollAnimator delay={200}>
        <p className="text-muted-foreground leading-relaxed max-w-3xl text-center mx-auto">{project.fullDescription}</p>
      </ScrollAnimator>

      <ScrollAnimator delay={250}>
        <div className="flex flex-wrap justify-center gap-2">
          {project.tools.map((tool) => (
            <span key={tool} className="px-3 py-1.5 text-xs rounded-full border border-accent/30 text-accent font-medium">
              {tool}
            </span>
          ))}
        </div>
      </ScrollAnimator>

      {project.showcases && (
        <div className="space-y-12 pt-6">
          {project.showcases.map((s, i) => (
            <ScrollAnimator key={i} delay={i * 100}>
              <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
                {/* Phone mockup with IG feed */}
                <div className="flex justify-center md:justify-start">
                  <div className="relative w-[280px] md:w-[320px] aspect-[9/19] rounded-[2.5rem] bg-card border-[8px] border-border shadow-2xl overflow-hidden navy-glow">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-background rounded-b-2xl z-10" />
                    <div className="w-full h-full">
                      <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
                {/* Description */}
                <div className="space-y-3 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground">{s.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      )}

      <ScrollAnimator delay={300}>
        <div className="flex justify-center pt-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-muted-foreground hover:text-foreground font-medium text-sm transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
        </div>
      </ScrollAnimator>
    </div>
  );
};

export default ProjectDetail;
