import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Home, Layers, Mail, Linkedin, Menu, X, Sparkles } from "lucide-react";

const navItems = [
  { label: "Home", path: "/", icon: Home },
  { label: "Projects", path: "/projects", icon: Layers },
  
  { label: "Contact Me", path: "/#contact", icon: Mail },
];

const AppSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (path: string) => {
    setMobileOpen(false);
    if (path === "/#contact") {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      } else {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isActive = (path: string) => {
    if (path === "/#contact") return false;
    return location.pathname === path;
  };

  const sidebarContent = (
    <div className="flex flex-col h-full justify-between py-8 px-5">
      <div>
        {/* Available badge */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-foreground/20 mb-10 w-fit animate-badge-shine relative overflow-hidden">
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/10 to-transparent animate-shimmer" />
          <Sparkles className="w-3 h-3 text-foreground animate-pulse relative z-10" />
          <span className="text-xs font-body text-foreground relative z-10">Available for new Projects</span>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path === "/#contact" ? "/" : item.path}
              onClick={() => handleNav(item.path)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group ${
                isActive(item.path)
                  ? "text-accent bg-accent/10"
                  : "text-muted-foreground hover:text-accent hover:bg-accent/5"
              }`}
            >
              {isActive(item.path) && (
                <span className="w-1 h-5 rounded-full bg-accent mr-1" />
              )}
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Social icons */}
      <div className="flex items-center justify-center gap-3 px-4">
        <a
          href="https://www.linkedin.com/in/stelawibowo"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => { e.preventDefault(); window.open("https://www.linkedin.com/in/stelawibowo", "_blank", "noopener,noreferrer"); }}
          className="p-2.5 rounded-lg text-muted-foreground hover:text-accent hover:navy-glow transition-all duration-200 cursor-pointer"
          title="LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href="mailto:stelaayuwibowo232@gmail.com?subject=Let's%20Work%20Together"
          onClick={(e) => { e.preventDefault(); window.location.href = "mailto:stelaayuwibowo232@gmail.com?subject=Let's%20Work%20Together"; }}
          className="p-2.5 rounded-lg text-muted-foreground hover:text-accent hover:navy-glow transition-all duration-200 cursor-pointer"
          title="Email"
        >
          <Mail className="w-4 h-4" />
        </a>
        <a
          href="https://www.upwork.com/freelancers/~013c524c90b5b3db06"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => { e.preventDefault(); window.open("https://www.upwork.com/freelancers/~013c524c90b5b3db06", "_blank", "noopener,noreferrer"); }}
          className="p-2.5 rounded-lg text-muted-foreground hover:text-accent hover:navy-glow transition-all duration-200 cursor-pointer"
          title="Upwork"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/></svg>
        </a>
        <a
          href="https://www.freelancer.com/u/stelawibowo?frm=stelawibowo&sb=t"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => { e.preventDefault(); window.open("https://www.freelancer.com/u/stelawibowo?frm=stelawibowo&sb=t", "_blank", "noopener,noreferrer"); }}
          className="p-2.5 rounded-lg text-muted-foreground hover:text-accent hover:navy-glow transition-all duration-200 cursor-pointer"
          title="Freelancer"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M4.738 0v.001C2.161 0 .055 2.106.055 4.683c0 2.578 2.107 4.684 4.683 4.684.609 0 1.22-.12 1.771-.333l1.284 1.284-1.073 1.073a4.682 4.682 0 00-1.982-.441c-2.577 0-4.683 2.106-4.683 4.683S2.161 20.317 4.738 20.317c2.576 0 4.683-2.106 4.683-4.683 0-.696-.161-1.378-.441-1.982l1.073-1.073 7.378 7.378A4.683 4.683 0 0020.745 24c2.576 0 4.683-2.106 4.683-4.683s-2.107-4.683-4.683-4.683a4.682 4.682 0 00-3.314 1.373L10.053 8.63a4.683 4.683 0 001.368-3.309V5.32c.001-2.577-2.105-4.683-4.683-4.683V0zm0 2.341a2.342 2.342 0 110 4.684 2.342 2.342 0 010-4.684zm15.369 10.269a2.341 2.341 0 11.001 4.683 2.341 2.341 0 01-.001-4.683zM4.738 13.293a2.342 2.342 0 110 4.683 2.342 2.342 0 010-4.683z"/></svg>
        </a>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-64 bg-sidebar border-r border-sidebar-border flex-col z-40">
        {sidebarContent}
      </aside>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-card border border-border text-foreground"
      >
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-background/80 backdrop-blur-sm" onClick={() => setMobileOpen(false)}>
          <aside
            className="w-64 h-full bg-sidebar border-r border-sidebar-border"
            onClick={(e) => e.stopPropagation()}
          >
            {sidebarContent}
          </aside>
        </div>
      )}
    </>
  );
};

export default AppSidebar;
