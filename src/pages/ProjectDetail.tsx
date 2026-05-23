import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { projects } from "@/data/projects";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ScrollAnimator from "@/components/ScrollAnimator";
import SEO from "@/components/SEO";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowLeft } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);

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
    <div className="space-y-10 pb-20 pt-4 md:pt-8">
      <SEO
        title={`${project.title} — Stela Wibowo Portfolio`}
        description={seoDesc.length >= 50 ? seoDesc : `${project.title} by Stela Wibowo — ${seoDesc}`.slice(0, 155)}
        path={`/projects/${project.id}`}
      />

      <ScrollAnimator delay={100}>
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground">{project.title}</h1>
          <p className="text-lg text-muted-foreground">{project.description}</p>
        </div>
      </ScrollAnimator>

      <ScrollAnimator delay={200}>
        <p className="text-muted-foreground leading-relaxed max-w-3xl text-center mx-auto">{project.fullDescription}</p>
      </ScrollAnimator>

      {project.showcases && (
        <div className="space-y-12 pt-6">
          {project.showcases.map((s, i) => (
            <ScrollAnimator key={i} delay={i * 100}>
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
                  {/* Phone mockup with IG feed */}
                  <div className="flex justify-center md:justify-start">
                    <div className="relative w-[280px] md:w-[320px] rounded-[2.5rem] bg-card border-[8px] border-border shadow-2xl overflow-hidden navy-glow">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-background rounded-b-2xl z-10" />
                      <img src={s.image} alt={s.title} className="block w-full h-auto" />
                    </div>
                  </div>
                  {/* Description */}
                  <div className="space-y-3 text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground">{s.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{s.description}</p>
                  </div>
                </div>

                {/* Feed design carousel */}
                {s.feedImages && s.feedImages.length > 0 && (
                  <div className="px-10 md:px-14 max-w-2xl mx-auto">
                    <Carousel opts={{ loop: true }} className="w-full">
                      <CarouselContent>
                        {s.feedImages.map((img, idx) => (
                          <CarouselItem key={idx}>
                            <div className="aspect-[4/5] rounded-xl overflow-hidden border border-border bg-card navy-glow">
                              <img
                                src={img}
                                alt={`${s.title} feed design ${idx + 1}`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            </div>
                            <p className="mt-2 text-center text-xs text-muted-foreground">
                              {idx + 1} / {s.feedImages!.length}
                            </p>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </div>
                )}
              </div>
            </ScrollAnimator>

          ))}
        </div>
      )}

      {project.slides && project.slides.length > 0 && (
        <div className="space-y-8 md:space-y-10 pt-6 max-w-4xl mx-auto w-full">
          {project.slides.map((src, i) => (
            <ScrollAnimator key={i} delay={Math.min(i * 50, 300)}>
              <button
                type="button"
                onClick={() => setPreviewSrc(src)}
                className="group block w-full aspect-video rounded-2xl overflow-hidden border border-border bg-card navy-glow transition-transform duration-300 hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label={`Open slide ${i + 1}`}
              >
                <img
                  src={src}
                  alt={`${project.title} slide ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:opacity-95"
                />
              </button>
            </ScrollAnimator>
          ))}
        </div>
      )}

      <Dialog open={!!previewSrc} onOpenChange={(o) => !o && setPreviewSrc(null)}>
        <DialogContent className="max-w-6xl p-2 bg-card border-border">
          {previewSrc && (
            <img src={previewSrc} alt="Slide preview" className="w-full h-auto rounded-lg" />
          )}
        </DialogContent>
      </Dialog>



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
