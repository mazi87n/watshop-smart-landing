
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import { useEffect } from "react";

const queryClient = new QueryClient();

// Component to handle HTML document direction
const DirectionHandler = ({ children }: { children: React.ReactNode }) => {
  const { dir, language } = useLanguage();
  
  useEffect(() => {
    // Update HTML lang and dir attributes
    document.documentElement.lang = language;
    document.documentElement.dir = dir();
  }, [language, dir]);
  
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <DirectionHandler>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </DirectionHandler>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
