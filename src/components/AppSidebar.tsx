import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Home, Layers, BookOpen, Mail, Linkedin, MessageCircle, Menu, X, Sparkles } from "lucide-react";

const navItems = [
  { label: "Home", path: "/", icon: Home },
  { label: "Projects", path: "/projects", icon: Layers },
  { label: "My Blog", path: "/blog", icon: BookOpen },
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
          href="https://linkedin.com/in/placeholder"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-lg text-muted-foreground hover:text-accent hover:navy-glow transition-all duration-200"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href="mailto:placeholder@email.com"
          className="p-2.5 rounded-lg text-muted-foreground hover:text-accent hover:navy-glow transition-all duration-200"
        >
          <Mail className="w-4 h-4" />
        </a>
        <a
          href="https://wa.me/0000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-lg text-muted-foreground hover:text-accent hover:navy-glow transition-all duration-200"
        >
          <MessageCircle className="w-4 h-4" />
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
