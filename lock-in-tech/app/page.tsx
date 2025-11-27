import { HeroSection } from "./components/HeroSection";
import { KitGrid } from "./components/KitGrid";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-transparent text-slate-800">
      <Navbar />
      <div className="flex flex-col items-center flex-1">
        <HeroSection />
        <KitGrid />
      </div>
      <Footer />
    </div>
  );
}
