import dashboardImg from "@/assets/project-dashboard.jpg";
import landingImg from "@/assets/project-landing.jpg";
import brandImg from "@/assets/project-brand.jpg";

export interface Showcase {
  image: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  fullDescription: string;
  tools: string[];
  liveUrl: string;
  showcases?: Showcase[];
}

export const projects: Project[] = [
  {
    id: "visual-identity",
    title: "Visual Identity & Feed Design",
    description: "Creating consistent and aesthetically balanced Instagram content.",
    image: dashboardImg,
    fullDescription:
      "Crafting a cohesive visual identity and feed design that reflects the brand's personality across every post. The project focused on building consistent color palettes, typography, and layout systems that make the Instagram feed feel intentional, recognizable, and aesthetically balanced — turning casual scrollers into engaged followers.",
    tools: ["Canva", "Photoshop", "Figma", "Meta Business Suite", "Notion"],
    liveUrl: "#",
  },
  {
    id: "copywriting",
    title: "Copywriting",
    description: "Crafting search-optimized captions that capture attention and drive action.",
    image: landingImg,
    fullDescription:
      "Writing search-optimized captions and copy designed to capture attention, spark engagement, and drive measurable action. Each piece blends keyword research, brand voice, and storytelling to make content discoverable on social platforms while staying authentic to the audience.",
    tools: ["Canva", "Google Analytics", "Meta Pixel", "Mailchimp", "Notion"],
    liveUrl: "#",
    showcases: [
      {
        image: landingImg,
        title: "Hook-Driven Caption",
        description:
          "A scroll-stopping opening line paired with a clear value statement and CTA. Crafted to spark curiosity in the first three seconds and keep readers engaged through the full caption.",
      },
      {
        image: dashboardImg,
        title: "SEO-Optimized Carousel",
        description:
          "Captions structured around targeted keywords and search intent. Designed to surface in Instagram search results and Explore while still feeling natural and on-brand.",
      },
      {
        image: brandImg,
        title: "Story-Led Long Caption",
        description:
          "A narrative-driven caption that blends storytelling with brand voice, building emotional connection and guiding the audience toward a meaningful action.",
      },
    ],
  },
  {
    id: "case-study",
    title: "Case Study",
    description: "In-depth breakdown of strategy, execution, and measurable results.",
    image: brandImg,
    fullDescription:
      "A deep-dive case study walking through the full journey of a social media project — from initial research and strategy, through content execution, all the way to performance analysis. It highlights the thinking behind each decision and the measurable results that followed.",
    tools: ["Meta Business Suite", "Google Analytics", "Sprout Social", "Canva", "Notion"],
    liveUrl: "#",
  },
];
