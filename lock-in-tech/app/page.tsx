import { HeroSection } from "./components/HeroSection";
import { KitGrid } from "./components/KitGrid";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-950 text-white">
      <HeroSection />
      <KitGrid />
    </div>
  );
}
