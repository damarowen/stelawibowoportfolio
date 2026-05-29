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
import feed2_1 from "@/assets/feed2-1.png";
import feed2_2 from "@/assets/feed2-2.png";
import feed2_3 from "@/assets/feed2-3.png";
import feed2_4 from "@/assets/feed2-4.png";
import feed2_5 from "@/assets/feed2-5.png";
import feed2_6 from "@/assets/feed2-6.png";
import feed2_7 from "@/assets/feed2-7.png";
import feed2_8 from "@/assets/feed2-8.png";
import feed2_9 from "@/assets/feed2-9.png";
import pelureIg from "@/assets/pelure-ig.png";
import bruleIg from "@/assets/brule-ig.png";
import bruleCap from "@/assets/brule-cap.png";
import pelureCap from "@/assets/pelure-cap.png";
const cohesiveFeedImages = [feed1, feed2, feed3, feed4, feed5, feed6, feed7, feed8, feed9];
const contentPillarImages = [feed2_1, feed2_2, feed2_3, feed2_4, feed2_5, feed2_6, feed2_7, feed2_8, feed2_9];

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
        image: bruleIg,
        title: "F&B | Instagram Feed Design",
        description:
          "Designed a cohesive Instagram feed system for BRÛLÉ, a fine-casual dining brand, translating its warm Espresso, Terracotta, and Amber brand palette into a scroll-stopping grid. Each post type,  promotions, menu highlights, and drink features, follows a unified typography and layout system that reinforces the brand's indulgent yet approachable tone, creating an intentional brand story at a glance.",
        feedImages: cohesiveFeedImages,
      },
      {
        image: pelureIg,
        title: "Skincare | Instagram Feed Design",
        description:
          "Developed a full Instagram feed system for Pélure Skin, a clean beauty brand, aligning every design decision, from soft blush tones to serif typography, with the brand's premium, dermatologist-trusted positioning. The content pillar system spans education, product launches, and social proof, keeping the feed visually balanced while serving distinct marketing goals.",
        feedImages: contentPillarImages,
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
        image: bruleIg,
        title: "Hook-Driven Caption",
        description:
          "A scroll-stopping opening line paired with a clear value statement and CTA. Crafted to spark curiosity in the first three seconds and keep readers engaged through the full caption.",
      },
      {
        image: pelureIg,
        title: "SEO-Optimized Caption",
        description:
          "Captions structured around targeted keywords and search intent. Designed to surface in Instagram search results and Explore while still feeling natural and on-brand.",
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

