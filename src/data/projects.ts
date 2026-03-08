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
    title: "Dashboard UI",
    description: "A sleek analytics dashboard with real-time data visualization.",
    category: "Website",
    date: "Jan 15, 2025",
    image: dashboardImg,
    fullDescription:
      "This analytics dashboard was designed to give stakeholders a bird's-eye view of key business metrics. The interface features real-time data visualization with interactive charts, customizable widgets, and a responsive layout that works seamlessly across devices. The design emphasizes clarity and quick data comprehension through thoughtful use of color coding and visual hierarchy.",
    tools: ["Figma", "React", "Tailwind CSS", "Recharts", "TypeScript"],
    liveUrl: "#",
  },
  {
    id: "ecommerce-app",
    title: "E-Commerce App",
    description: "A modern mobile shopping experience with seamless checkout flow.",
    category: "Mobile App",
    date: "Mar 3, 2025",
    image: ecommerceImg,
    fullDescription:
      "A complete mobile e-commerce experience designed from the ground up. The app features an intuitive product browsing experience with smart filtering, a streamlined checkout flow that reduces cart abandonment, and a personalized recommendation engine. Special attention was given to micro-interactions and loading states to create a premium feel throughout the shopping journey.",
    tools: ["Figma", "Framer", "React Native", "Stripe"],
    liveUrl: "#",
  },
  {
    id: "brand-redesign",
    title: "Brand Redesign",
    description: "Complete visual identity overhaul for a fintech startup.",
    category: "Branding",
    date: "Nov 20, 2024",
    image: brandImg,
    fullDescription:
      "A comprehensive brand identity redesign for an emerging fintech company looking to establish credibility and trust in a competitive market. The project included logo design, color palette development, typography selection, brand guidelines documentation, and the creation of templates for marketing materials, social media, and internal communications.",
    tools: ["Illustrator", "Photoshop", "Figma", "After Effects"],
    liveUrl: "#",
  },
  {
    id: "landing-page",
    title: "Landing Page",
    description: "High-converting product landing page with smooth scroll animations.",
    category: "Website",
    date: "Feb 8, 2025",
    image: landingImg,
    fullDescription:
      "A high-performance product landing page designed to maximize conversions. The page features smooth scroll-triggered animations, compelling copywriting sections, social proof elements, and a clear call-to-action flow. Built with performance in mind, the page achieves a perfect Lighthouse score while maintaining rich visual effects and interactions.",
    tools: ["Framer", "Webflow", "Lottie", "Google Analytics"],
    liveUrl: "#",
  },
];
