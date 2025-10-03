import { motion } from 'motion/react';
import { useState } from 'react';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const cycles = [
  {
    id: 'carbon',
    name: 'Carbon Cycle',
    icon: '💨',
    color: 'from-gray-400 to-gray-600',
    description: 'Carbon moves between the ocean, atmosphere, and living organisms',
    phases: [
      {
        step: 'Atmospheric CO₂',
        icon: '☁️',
        description: 'Carbon dioxide in ocean water',
      },
      {
        step: 'Photosynthesis',
        icon: '🌿',
        description: 'Algae and phytoplankton absorb CO₂',
      },
      {
        step: 'Consumption',
        icon: '🐟',
        description: 'Animals eat plants, incorporating carbon',
      },
      {
        step: 'Respiration',
        icon: '💨',
        description: 'Organisms release CO₂ back',
      },
      {
        step: 'Decomposition',
        icon: '🦠',
        description: 'Dead matter releases carbon',
      },
      {
        step: 'Sediment Storage',
        icon: '🪨',
        description: 'Carbon stored in ocean floor',
      },
    ],
    bikinibottom: 'When SpongeBob exhales, he releases CO₂ bubbles! Algae on coral reefs use this CO₂ to grow, then fish eat the algae, continuing the cycle.',
  },
  {
    id: 'nitrogen',
    name: 'Nitrogen Cycle',
    icon: '💧',
    color: 'from-blue-400 to-blue-600',
    description: 'Nitrogen is essential for proteins and DNA in all living things',
    phases: [
      {
        step: 'Nitrogen Fixation',
        icon: '🦠',
        description: 'Bacteria convert N₂ to usable forms',
      },
      {
        step: 'Assimilation',
        icon: '🌱',
        description: 'Plants absorb nitrogen compounds',
      },
      {
        step: 'Consumption',
        icon: '🦐',
        description: 'Animals eat plants for nitrogen',
      },
      {
        step: 'Ammonification',
        icon: '🪱',
        description: 'Decomposers break down waste',
      },
      {
        step: 'Nitrification',
        icon: '🔬',
        description: 'Bacteria convert ammonia to nitrates',
      },
      {
        step: 'Denitrification',
        icon: '💨',
        description: 'Some bacteria return N₂ to water',
      },
    ],
    bikinibottom: 'Bacteria in the sand near the Krusty Krab help convert nitrogen waste into nutrients that kelp forests can use!',
  },
  {
    id: 'water',
    name: 'Water Cycle',
    icon: '💧',
    color: 'from-cyan-400 to-cyan-600',
    description: 'Water continuously moves through different states and locations',
    phases: [
      {
        step: 'Ocean Storage',
        icon: '🌊',
        description: 'Most water exists in oceans',
      },
      {
        step: 'Evaporation',
        icon: '☀️',
        description: 'Surface water becomes vapor',
      },
      {
        step: 'Condensation',
        icon: '☁️',
        description: 'Water vapor forms clouds',
      },
      {
        step: 'Precipitation',
        icon: '🌧️',
        description: 'Rain returns water to ocean',
      },
      {
        step: 'Currents',
        icon: '🌀',
        description: 'Ocean currents distribute water',
      },
      {
        step: 'Absorption',
        icon: '🧽',
        description: 'Organisms use and store water',
      },
    ],
    bikinibottom: 'Even though Bikini Bottom is underwater, the water cycle affects us! Ocean currents bring fresh water and nutrients from different areas.',
  },
  {
    id: 'phosphorus',
    name: 'Phosphorus Cycle',
    icon: '⚡',
    color: 'from-yellow-400 to-orange-600',
    description: 'Phosphorus is crucial for DNA, bones, and energy transfer (ATP)',
    phases: [
      {
        step: 'Rock Weathering',
        icon: '🪨',
        description: 'Phosphorus released from rocks',
      },
      {
        step: 'Absorption',
        icon: '🌿',
        description: 'Plants take up phosphates',
      },
      {
        step: 'Consumption',
        icon: '🐠',
        description: 'Animals eat phosphorus-rich food',
      },
      {
        step: 'Waste & Death',
        icon: '💀',
        description: 'Organisms release phosphorus',
      },
      {
        step: 'Decomposition',
        icon: '🦠',
        description: 'Bacteria break down organic matter',
      },
      {
        step: 'Sedimentation',
        icon: '⬇️',
        description: 'Phosphorus settles to ocean floor',
      },
    ],
    bikinibottom: 'Underwater volcanoes near Bikini Bottom release phosphorus from deep rocks, providing nutrients for the whole ecosystem!',
  },
  {
    id: 'sulfur',
    name: 'Sulfur Cycle',
    icon: '🌋',
    color: 'from-yellow-300 to-yellow-600',
    description: 'Sulfur is important for proteins and is released by volcanic vents',
    phases: [
      {
        step: 'Volcanic Emissions',
        icon: '🌋',
        description: 'Underwater vents release sulfur',
      },
      {
        step: 'Bacterial Processing',
        icon: '🦠',
        description: 'Bacteria convert sulfur compounds',
      },
      {
        step: 'Assimilation',
        icon: '🌱',
        description: 'Organisms incorporate sulfur',
      },
      {
        step: 'Decomposition',
        icon: '💀',
        description: 'Dead matter releases sulfur',
      },
      {
        step: 'Oxidation',
        icon: '⚗️',
        description: 'Sulfur compounds oxidize',
      },
      {
        step: 'Sedimentation',
        icon: '🏖️',
        description: 'Sulfur settles in sediments',
      },
    ],
    bikinibottom: 'The thermal vents near Rock Bottom release sulfur that special bacteria use for energy - no sunlight needed!',
  },
];

export function BiogeochemicalCycles() {
  const [selectedPhase, setSelectedPhase] = useState<number | null>(null);

  return (
    <section id="cycles" className="relative py-20 bg-gradient-to-b from-cyan-900 to-purple-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-yellow-300 mb-4">
            Biogeochemical Cycles
          </h2>
          <p className="text-cyan-100 text-xl max-w-3xl mx-auto">
            Essential elements cycle through Bikini Bottom's ecosystem continuously!
          </p>
        </motion.div>

        <Tabs defaultValue="carbon" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8 bg-white/10 backdrop-blur-sm">
            {cycles.map((cycle) => (
              <TabsTrigger
                key={cycle.id}
                value={cycle.id}
                className="data-[state=active]:bg-white/90"
              >
                <span className="mr-2">{cycle.icon}</span>
                <span className="hidden md:inline">{cycle.name}</span>
                <span className="md:hidden">{cycle.name.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {cycles.map((cycle) => (
            <TabsContent key={cycle.id} value={cycle.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="p-8 bg-white/95 backdrop-blur-sm mb-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`text-6xl bg-gradient-to-br ${cycle.color} p-4 rounded-2xl`}>
                      <span className="filter drop-shadow-lg">{cycle.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-3xl text-cyan-900 mb-2">{cycle.name}</h3>
                      <p className="text-cyan-700">{cycle.description}</p>
                    </div>
                  </div>

                  {/* Cycle Phases */}
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    {cycle.phases.map((phase, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setSelectedPhase(index)}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-4 rounded-xl text-left transition-all ${
                          selectedPhase === index
                            ? `bg-gradient-to-br ${cycle.color} text-white shadow-xl`
                            : 'bg-cyan-50 hover:bg-cyan-100'
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="text-3xl">{phase.icon}</div>
                          <div className={`text-xs px-2 py-1 rounded-full ${
                            selectedPhase === index ? 'bg-white/20' : 'bg-cyan-200'
                          }`}>
                            Step {index + 1}
                          </div>
                        </div>
                        <h4 className={`mb-1 ${
                          selectedPhase === index ? 'text-white' : 'text-cyan-900'
                        }`}>
                          {phase.step}
                        </h4>
                        <p className={`text-sm ${
                          selectedPhase === index ? 'text-white/90' : 'text-cyan-700'
                        }`}>
                          {phase.description}
                        </p>
                      </motion.button>
                    ))}
                  </div>

                  {/* Bikini Bottom Example */}
                  <div className={`bg-gradient-to-r ${cycle.color} rounded-xl p-6`}>
                    <h4 className="text-xl text-white mb-3 flex items-center gap-2">
                      <span>🏖️</span> In Bikini Bottom...
                    </h4>
                    <p className="text-white/90">{cycle.bikinibottom}</p>
                  </div>
                </Card>

                {/* Visual Flow Diagram */}
                <Card className="p-6 bg-cyan-500/20 backdrop-blur-sm border-2 border-cyan-400">
                  <h4 className="text-xl text-white mb-4 text-center">Cycle Flow</h4>
                  <div className="flex items-center justify-center flex-wrap gap-2">
                    {cycle.phases.map((phase, index) => (
                      <div key={index} className="flex items-center">
                        <div className="text-3xl bg-white/10 backdrop-blur-sm rounded-lg p-3">
                          {phase.icon}
                        </div>
                        {index < cycle.phases.length - 1 && (
                          <div className="text-yellow-300 text-2xl mx-2">→</div>
                        )}
                      </div>
                    ))}
                    <div className="text-yellow-300 text-2xl mx-2">🔄</div>
                  </div>
                  <p className="text-center text-cyan-100 mt-4 text-sm">
                    The cycle repeats continuously, sustaining life in Bikini Bottom!
                  </p>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Why Cycles Matter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <Card className="p-8 bg-white/95 backdrop-blur-sm">
            <h3 className="text-2xl text-cyan-900 mb-6 text-center">Why These Cycles Are Critical</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="text-4xl">♻️</div>
                <div>
                  <h4 className="text-xl text-cyan-800 mb-2">Nothing is Wasted</h4>
                  <p className="text-cyan-700">
                    Nature recycles everything! Every atom that was once part of a prehistoric sea creature 
                    might now be part of SpongeBob or the Krusty Krab building.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-4xl">🌍</div>
                <div>
                  <h4 className="text-xl text-cyan-800 mb-2">Global Connection</h4>
                  <p className="text-cyan-700">
                    These cycles connect every part of the ocean. Disrupting one cycle in one location 
                    can affect ecosystems far away - which is why protecting Bikini Bottom protects everywhere!
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
