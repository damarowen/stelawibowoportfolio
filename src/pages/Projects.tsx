import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import ScrollAnimator from "@/components/ScrollAnimator";

const categories = ["All", "Website", "Mobile App", "Branding"];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="space-y-12 pb-20">
      <ScrollAnimator>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">Projects</h1>
      </ScrollAnimator>

      <ScrollAnimator delay={100}>
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-accent text-accent-foreground"
                  : "border border-border text-muted-foreground hover:text-accent hover:border-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </ScrollAnimator>

      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((project, i) => (
          <ScrollAnimator key={project.id} delay={i * 100}>
            <Link to={`/projects/${project.id}`} className="block group">
              <div className="bg-card rounded-2xl overflow-hidden border border-border hover:navy-glow transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-display font-semibold text-foreground">{project.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 text-xs rounded-full border border-border text-muted-foreground">{project.category}</span>
                    <span className="text-xs text-muted-foreground">{project.date}</span>
                  </div>
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
