import { motion } from 'motion/react';
import { useState } from 'react';
import { Card } from './ui/card';
import { ArrowDown, Info } from 'lucide-react';

const foodChainLevels = [
  {
    level: 'Producers',
    color: 'from-green-400 to-green-600',
    organisms: [
      { name: 'Phytoplankton', icon: '🦠', description: 'Microscopic algae that photosynthesize using sunlight' },
      { name: 'Algae', icon: '🌿', description: 'Simple plants that form the base of ocean food webs' },
      { name: 'Seaweed', icon: '🌱', description: 'Larger marine plants providing food and shelter' },
    ],
    role: 'Convert sunlight into energy through photosynthesis',
  },
  {
    level: 'Primary Consumers',
    color: 'from-blue-400 to-blue-600',
    organisms: [
      { name: 'Zooplankton', icon: '🦐', description: 'Tiny animals that feed on phytoplankton' },
      { name: 'Sea Sponges', icon: '🧽', description: 'Filter feeders like SpongeBob!' },
      { name: 'Small Fish', icon: '🐟', description: 'Herbivorous fish that eat algae' },
    ],
    role: 'Herbivores that eat producers',
  },
  {
    level: 'Secondary Consumers',
    color: 'from-yellow-400 to-orange-600',
    organisms: [
      { name: 'Jellyfish', icon: '🪼', description: 'Predators that feed on small fish and plankton' },
      { name: 'Crustaceans', icon: '🦀', description: 'Like Mr. Krabs - omnivores eating various foods' },
      { name: 'Medium Fish', icon: '🐠', description: 'Carnivorous fish that eat smaller organisms' },
    ],
    role: 'Carnivores that eat primary consumers',
  },
  {
    level: 'Tertiary Consumers',
    color: 'from-red-400 to-red-600',
    organisms: [
      { name: 'Large Fish', icon: '🐡', description: 'Top predators of the reef' },
      { name: 'Octopuses', icon: '🐙', description: 'Like Squidward - intelligent hunters' },
      { name: 'Sea Turtles', icon: '🐢', description: 'Large predators with varied diets' },
    ],
    role: 'Top predators that eat secondary consumers',
  },
  {
    level: 'Decomposers',
    color: 'from-purple-400 to-purple-600',
    organisms: [
      { name: 'Bacteria', icon: '🦠', description: 'Break down dead organic matter' },
      { name: 'Fungi', icon: '🍄', description: 'Decompose organic material on sea floor' },
      { name: 'Detritus Feeders', icon: '🪱', description: 'Organisms that feed on dead matter' },
    ],
    role: 'Break down dead organisms and return nutrients to the ecosystem',
  },
];

export function FoodChain() {
  const [selectedOrganism, setSelectedOrganism] = useState<any>(null);

  return (
    <section id="foodchain" className="relative py-20 bg-gradient-to-b from-blue-900 to-teal-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-yellow-300 mb-4">
            Bikini Bottom Food Chain & Web
          </h2>
          <p className="text-cyan-100 text-xl max-w-3xl mx-auto">
            Discover how energy flows through our underwater ecosystem!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Food Chain Visualization */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-white/95 backdrop-blur-sm">
              <h3 className="text-2xl text-cyan-900 mb-6 text-center">Energy Flow in the Ocean</h3>
              
              <div className="space-y-4">
                {foodChainLevels.map((level, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className={`bg-gradient-to-r ${level.color} rounded-xl p-6 text-white`}>
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-2xl">{level.level}</h4>
                        <Info className="w-5 h-5" />
                      </div>
                      <p className="text-sm mb-4 text-white/90">{level.role}</p>
                      
                      <div className="grid grid-cols-3 gap-3">
                        {level.organisms.map((organism, orgIndex) => (
                          <motion.button
                            key={orgIndex}
                            onClick={() => setSelectedOrganism(organism)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white/20 backdrop-blur-sm rounded-lg p-3 hover:bg-white/30 transition-all"
                          >
                            <div className="text-3xl mb-1">{organism.icon}</div>
                            <div className="text-xs">{organism.name}</div>
                          </motion.button>
                        ))}
                      </div>
                    </div>
                    
                    {index < foodChainLevels.length - 1 && (
                      <div className="flex justify-center py-2">
                        <ArrowDown className="w-8 h-8 text-yellow-300" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>

          {/* Information Panel */}
          <div className="lg:col-span-1">
            <Card className="p-6 bg-cyan-500/20 backdrop-blur-sm border-2 border-cyan-400 sticky top-24">
              {selectedOrganism ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center mb-4">
                    <div className="text-6xl mb-3">{selectedOrganism.icon}</div>
                    <h4 className="text-2xl text-white mb-2">{selectedOrganism.name}</h4>
                  </div>
                  <p className="text-cyan-100 mb-6">{selectedOrganism.description}</p>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-sm text-cyan-100">
                      Click on different organisms to learn more about their role in the food chain!
                    </p>
                  </div>
                </motion.div>
              ) : (
                <div className="text-center text-white">
                  <Info className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
                  <h4 className="text-xl mb-3">Interactive Food Chain</h4>
                  <p className="text-cyan-100">
                    Click on any organism in the food chain to learn more about it!
                  </p>
                  <div className="mt-6 bg-white/10 rounded-lg p-4">
                    <p className="text-sm text-cyan-100">
                      Energy flows from the sun → producers → consumers → decomposers, 
                      creating a continuous cycle that sustains all life in Bikini Bottom!
                    </p>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>

        {/* Food Web Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <Card className="p-8 bg-white/95 backdrop-blur-sm">
            <h3 className="text-2xl text-cyan-900 mb-4 text-center">Why Food Webs Matter</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl text-cyan-800 mb-3">🔗 Interconnected</h4>
                <p className="text-cyan-700">
                  Real ecosystems are complex webs, not simple chains. Most organisms eat multiple things 
                  and are eaten by multiple predators, creating a resilient network!
                </p>
              </div>
              <div>
                <h4 className="text-xl text-cyan-800 mb-3">⚖️ Balance</h4>
                <p className="text-cyan-700">
                  Each organism plays a crucial role. Removing one species can affect many others, 
                  which is why protecting biodiversity is so important for Bikini Bottom!
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
