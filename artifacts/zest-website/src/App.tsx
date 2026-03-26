import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

// Components
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

// Pages
import Home from "@/pages/home";
import OurStory from "@/pages/our-story";
import BrandPartners from "@/pages/brand-partners";
import BrandDetail from "@/pages/brand-detail";
import Collections from "@/pages/collections";
import ProductDetail from "@/pages/product-detail";
import B2B from "@/pages/b2b";
import Bespoke from "@/pages/bespoke";
import Journal from "@/pages/journal";
import Contact from "@/pages/contact";

const queryClient = new QueryClient();

// Scroll to top on route change
function ScrollToTop() {
  const [pathname] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/our-story" component={OurStory} />
          <Route path="/brand-partners" component={BrandPartners} />
          <Route path="/brands/:slug" component={BrandDetail} />
          <Route path="/collections" component={Collections} />
          <Route path="/products/:slug" component={ProductDetail} />
          <Route path="/b2b-hospitality" component={B2B} />
          <Route path="/bespoke" component={Bespoke} />
          <Route path="/journal" component={Journal} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
