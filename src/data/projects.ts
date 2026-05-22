import dashboardImg from "@/assets/project-dashboard.jpg";
import landingImg from "@/assets/project-landing.jpg";
import brandImg from "@/assets/project-brand.jpg";
import feed1 from "@/assets/feed-1.png";
import feed2 from "@/assets/feed-2.png";
import feed3 from "@/assets/feed-3.png";
import feed4 from "@/assets/feed-4.png";
import feed5 from "@/assets/feed-5.png";
import feed6 from "@/assets/feed-6.png";
import feed7 from "@/assets/feed-7.png";
import feed8 from "@/assets/feed-8.png";
import feed9 from "@/assets/feed-9.png";

const cohesiveFeedImages = [feed1, feed2, feed3, feed4, feed5, feed6, feed7, feed8, feed9];

export interface Showcase {
  image: string;
  title: string;
  description: string;
  feedImages?: string[];
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
  slides?: string[];
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
    showcases: [
      {
        image: dashboardImg,
        title: "Cohesive Feed Aesthetic",
        description:
          "A unified color palette, typography system, and grid layout that make every post feel like part of one intentional brand story.",
        feedImages: cohesiveFeedImages,
      },
      {
        image: landingImg,
        title: "Content Pillar System",
        description:
          "Organized templates across distinct content pillars — education, inspiration, and engagement — so the feed stays varied yet visually balanced.",
        feedImages: Array(9).fill(landingImg),
      },
      {
        image: brandImg,
        title: "Campaign Visual Storytelling",
        description:
          "A campaign-driven feed where each tile builds on the last, guiding followers through a clear narrative arc from launch to conversion.",
        feedImages: Array(9).fill(brandImg),
      },
    ],
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
    slides: Array(10).fill(brandImg),
  },
];
