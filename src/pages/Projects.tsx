import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import ScrollAnimator from "@/components/ScrollAnimator";

const Projects = () => {
  return (
    <div className="space-y-12 pb-20">
      <ScrollAnimator>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground text-center">Projects</h1>
      </ScrollAnimator>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ScrollAnimator key={project.id} delay={i * 100}>
            <Link to={`/projects/${project.id}`} className="block group">
              <div className="bg-card rounded-2xl overflow-hidden border border-border hover:navy-glow transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 space-y-2 text-center">
                  <h3 className="text-xl font-display font-semibold text-foreground">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
              </div>
            </Link>
          </ScrollAnimator>
        ))}
      </div>
    </div>
  );
};

export default Projects;
