import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "./components/ErrorBoundary";
import SkipToContent from "./components/SkipToContent";

const SignUp = lazy(() => import("./components/SignUp"));
const Login = lazy(() => import("./components/Login"));
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SkipToContent />
          <div id="main">
            <ErrorBoundary>
              <Suspense fallback={<div className="p-8">Loading…</div>}>
                <Routes>
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/home" element={<Index />} />
                  <Route path="/" element={<Login />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
