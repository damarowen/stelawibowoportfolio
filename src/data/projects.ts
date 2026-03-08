import dashboardImg from "@/assets/project-dashboard.jpg";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import brandImg from "@/assets/project-brand.jpg";
import landingImg from "@/assets/project-landing.jpg";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
  fullDescription: string;
  tools: string[];
  liveUrl: string;
}

export const projects: Project[] = [
  {
    id: "dashboard-ui",
    title: "Social Media Dashboard",
    description: "A sleek analytics dashboard for tracking social media performance metrics.",
    category: "Website",
    date: "Jan 15, 2025",
    image: dashboardImg,
    fullDescription:
      "This social media analytics dashboard was designed to give marketers a bird's-eye view of key performance metrics across all platforms. The interface features real-time data visualization with interactive charts for engagement rates, follower growth, and content performance. Customizable widgets and a responsive layout ensure seamless use across devices.",
    tools: ["Meta Business Suite", "Google Analytics", "Hootsuite", "Canva", "Notion"],
    liveUrl: "#",
  },
  {
    id: "ecommerce-app",
    title: "E-Commerce Campaign",
    description: "A social media-driven mobile shopping experience with viral content strategy.",
    category: "Mobile App",
    date: "Mar 3, 2025",
    image: ecommerceImg,
    fullDescription:
      "A complete social media campaign for a mobile e-commerce brand. The project included influencer partnerships, user-generated content strategies, and platform-specific ad creatives. Special attention was given to TikTok Shop integration and Instagram Shopping features to create a seamless social commerce experience that drove a 3x increase in conversions.",
    tools: ["TikTok Ads", "Meta Ads Manager", "Canva", "CapCut", "Sprout Social"],
    liveUrl: "#",
  },
  {
    id: "brand-redesign",
    title: "Brand Social Revamp",
    description: "Complete social media identity overhaul for a fintech startup.",
    category: "Branding",
    date: "Nov 20, 2024",
    image: brandImg,
    fullDescription:
      "A comprehensive social media brand identity redesign for an emerging fintech company. The project included developing a cohesive visual language for all social platforms, creating content templates, defining brand voice guidelines, and establishing a content calendar strategy that increased engagement by 150% within the first quarter.",
    tools: ["Canva", "Photoshop", "Figma", "Later", "Buffer"],
    liveUrl: "#",
  },
  {
    id: "landing-page",
    title: "Campaign Landing Page",
    description: "High-converting landing page for a social media-driven product launch.",
    category: "Website",
    date: "Feb 8, 2025",
    image: landingImg,
    fullDescription:
      "A high-performance campaign landing page designed to capture leads from social media traffic. The page features scroll-triggered animations, social proof elements from real customer testimonials, and a clear call-to-action flow optimized for mobile users coming from Instagram and TikTok. Achieved a 12% conversion rate from social traffic.",
    tools: ["Canva", "Google Analytics", "Meta Pixel", "Mailchimp", "Notion"],
    liveUrl: "#",
  },
];
