import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StarBackground from "@/components/StarBackground";
import AppSidebar from "@/components/AppSidebar";
import Index from "./pages/Index";
import Projects from "./pages/Projects";

import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <StarBackground />
        <AppSidebar />
        <main className="lg:ml-64 min-h-screen relative z-10">
          <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 pt-20 lg:pt-12">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
