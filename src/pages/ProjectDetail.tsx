import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import ScrollAnimator from "@/components/ScrollAnimator";
import { ArrowLeft, ExternalLink } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-display font-bold text-foreground">Project Not Found</h1>
          <Link to="/projects" className="text-accent hover:underline text-sm">← Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-10 pb-20">
      <ScrollAnimator>
        <div className="aspect-video rounded-2xl overflow-hidden navy-glow">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>
      </ScrollAnimator>

      <ScrollAnimator delay={100}>
        <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground">{project.title}</h1>
      </ScrollAnimator>

      <ScrollAnimator delay={150}>
        <div className="flex items-center gap-4">
          <span className="px-3 py-1 text-xs rounded-full border border-border text-muted-foreground">{project.category}</span>
          <span className="text-sm text-muted-foreground">{project.date}</span>
        </div>
      </ScrollAnimator>

      <ScrollAnimator delay={200}>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">{project.fullDescription}</p>
      </ScrollAnimator>

      <ScrollAnimator delay={250}>
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span key={tool} className="px-3 py-1.5 text-xs rounded-full border border-accent/30 text-accent font-medium">
              {tool}
            </span>
          ))}
        </div>
      </ScrollAnimator>

      <ScrollAnimator delay={300}>
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href={project.liveUrl}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-medium text-sm hover:navy-glow transition-all duration-200"
          >
            <ExternalLink className="w-4 h-4" /> View Live
          </a>
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
