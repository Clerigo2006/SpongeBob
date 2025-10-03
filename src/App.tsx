import { Navigation } from './components/Navigation';
import { AnimatedBubbles } from './components/AnimatedBubbles';
import { Hero } from './components/Hero';
import { WorldSection } from './components/WorldSection';
import { EnvironmentalGoals } from './components/EnvironmentalGoals';
import { PolicySection } from './components/PolicySection';
import { RMDGSection } from './components/RMDGSection';
import { FoodChain } from './components/FoodChain';
import { EnergySection } from './components/EnergySection';
import { BiogeochemicalCycles } from './components/BiogeochemicalCycles';
import { Waves } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-cyan-700 relative overflow-x-hidden">
      {/* Animated Bubbles Background */}
      <AnimatedBubbles />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <WorldSection />
        <EnvironmentalGoals />
        <PolicySection />
        <RMDGSection />
        <FoodChain />
        <EnergySection />
        <BiogeochemicalCycles />
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-cyan-950 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Waves className="w-8 h-8 text-yellow-300" />
              <div>
                <h3 className="text-xl">Bikini Bottom Ecological Initiative</h3>
                <p className="text-sm text-cyan-300">Protecting our underwater home together!</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-cyan-300 mb-2">
                Educational content inspired by real environmental science
              </p>
              <p className="text-xs text-cyan-400">
                © 2025 Bikini Bottom Eco • A project for ocean awareness
              </p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-cyan-800 text-center">
            <p className="text-sm text-cyan-400">
              🧽 Remember: Every small action counts! Whether you're a sponge, a starfish, or anything in between,
              you can make a difference in protecting our ocean! 🌊
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
