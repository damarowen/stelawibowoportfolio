import dashboardImg from "@/assets/project-dashboard.jpg";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import brandImg from "@/assets/project-brand.jpg";
import landingImg from "@/assets/project-landing.jpg";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  fullDescription: string;
  tools: string[];
  liveUrl: string;
}

export const projects: Project[] = [
  {
    id: "dashboard-ui",
    title: "Visual Identity & Feed Design",
    description: "Creating consistent and aesthetically balanced Instagram content.",
    image: dashboardImg,
    fullDescription:
      "This social media analytics dashboard was designed to give marketers a bird's-eye view of key performance metrics across all platforms. The interface features real-time data visualization with interactive charts for engagement rates, follower growth, and content performance. Customizable widgets and a responsive layout ensure seamless use across devices.",
    tools: ["Meta Business Suite", "Google Analytics", "Hootsuite", "Canva", "Notion"],
    liveUrl: "#",
  },
  {
    id: "ecommerce-app",
    title: "Strategic Organic Growth Campaign",
    description: "Driving engagement and reach through research-backed content.",
    image: ecommerceImg,
    fullDescription:
      "A complete social media campaign for a mobile e-commerce brand. The project included influencer partnerships, user-generated content strategies, and platform-specific ad creatives. Special attention was given to TikTok Shop integration and Instagram Shopping features to create a seamless social commerce experience that drove a 3x increase in conversions.",
    tools: ["TikTok Ads", "Meta Ads Manager", "Canva", "CapCut", "Sprout Social"],
    liveUrl: "#",
  },
  {
    id: "brand-redesign",
    title: "Digital Growth Roadmap",
    description: "Long-term strategic planning and competitor gap analysis.",
    image: brandImg,
    fullDescription:
      "A comprehensive social media brand identity redesign for an emerging fintech company. The project included developing a cohesive visual language for all social platforms, creating content templates, defining brand voice guidelines, and establishing a content calendar strategy that increased engagement by 150% within the first quarter.",
    tools: ["Canva", "Photoshop", "Figma", "Later", "Buffer"],
    liveUrl: "#",
  },
  {
    id: "landing-page",
    title: "Social Media Growth Strategy & Optimization",
    description: "Improving Engagement, Reach, and Content Performance",
    image: landingImg,
    fullDescription:
      "A high-performance campaign landing page designed to capture leads from social media traffic. The page features scroll-triggered animations, social proof elements from real customer testimonials, and a clear call-to-action flow optimized for mobile users coming from Instagram and TikTok. Achieved a 12% conversion rate from social traffic.",
    tools: ["Canva", "Google Analytics", "Meta Pixel", "Mailchimp", "Notion"],
    liveUrl: "#",
  },
  {
    id: "influencer-campaign",
    title: "Paid Social Media Ads Strategy",
    description: "Targeting the Right Audience for Maximum Campaign Results",
    image: brandImg,
    fullDescription:
      "A full-scale influencer marketing campaign coordinating 20+ micro and macro influencers across Instagram and TikTok for a lifestyle brand product launch. The project involved talent sourcing, contract negotiation, creative briefing, content review, and performance tracking. The campaign generated over 2M impressions and a 5x return on ad spend.",
    tools: ["Later", "Sprout Social", "Canva", "CapCut", "Google Analytics"],
    liveUrl: "#",
  },
];
