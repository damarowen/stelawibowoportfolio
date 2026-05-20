import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import ScrollAnimator from "@/components/ScrollAnimator";
import SEO from "@/components/SEO";

const Projects = () => {
  return (
    <div className="space-y-12 pb-20">
      <SEO
        title="Projects — Stela Wibowo Social Media Portfolio"
        description="Selected social media projects by Stela Wibowo: visual identity and feed design, copywriting, and case studies."
        path="/projects"
      />
      <ScrollAnimator>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground text-center">Projects</h1>
      </ScrollAnimator>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ScrollAnimator key={project.id} delay={i * 100} className="h-full">
            <Link to={`/projects/${project.id}`} className="block group h-full">
              <div className="bg-card rounded-2xl overflow-hidden border border-border hover:navy-glow transition-all duration-300 h-full flex flex-col">
                <div className="aspect-video overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 space-y-2 text-center flex-1 flex flex-col justify-center">
                  <h3 className="text-xl font-display font-semibold text-foreground line-clamp-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
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
