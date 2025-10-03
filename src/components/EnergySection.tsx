import { motion } from 'motion/react';
import { Zap, TrendingUp, TrendingDown, RotateCcw, Scale } from 'lucide-react';
import { Card } from './ui/card';

const thermodynamicLaws = [
  {
    number: 'First Law',
    title: 'Conservation of Energy',
    icon: '♻️',
    description: 'Energy cannot be created or destroyed, only transformed from one form to another.',
    example: 'When SpongeBob eats a Krabby Patty, chemical energy from food converts to energy for movement!',
    color: 'from-green-400 to-green-600',
  },
  {
    number: 'Second Law',
    title: 'Entropy & Energy Quality',
    icon: '📉',
    description: 'Energy transformations are never 100% efficient. Some energy is always lost as heat.',
    example: 'When jellyfish glow, not all energy becomes light - some becomes heat that warms the water.',
    color: 'from-orange-400 to-red-600',
  },
  {
    number: 'Third Law',
    title: 'Absolute Zero',
    icon: '❄️',
    description: 'As temperature approaches absolute zero, entropy approaches a minimum value.',
    example: 'The deepest parts of Bikini Bottom are cold, but even there, molecules still move!',
    color: 'from-blue-400 to-blue-600',
  },
  {
    number: 'Zeroth Law',
    title: 'Thermal Equilibrium',
    icon: '⚖️',
    description: 'If two systems are in thermal equilibrium with a third, they are in equilibrium with each other.',
    example: 'Ocean water temperature stays relatively constant because everything exchanges heat equally.',
    color: 'from-purple-400 to-purple-600',
  },
];

const energyConcepts = [
  {
    title: 'Matter in Ecosystems',
    icon: '🧪',
    points: [
      'Matter is recycled continuously in the ocean',
      'Atoms from decomposed organisms become nutrients',
      'Carbon, nitrogen, and other elements cycle endlessly',
    ],
  },
  {
    title: 'Energy Flow',
    icon: '⚡',
    points: [
      'Energy flows in one direction through food chains',
      'Only about 10% of energy transfers between levels',
      'Solar energy is the ultimate source for most life',
    ],
  },
  {
    title: 'Homeostasis',
    icon: '🎯',
    points: [
      'Ecosystems maintain balance through feedback loops',
      'Coral reefs regulate their own environment',
      'Temperature, pH, and nutrients stay in equilibrium',
    ],
  },
];

export function EnergySection() {
  return (
    <section id="energy" className="relative py-20 bg-gradient-to-b from-teal-800 to-cyan-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-yellow-300 mb-4">
            Energy & Matter in Bikini Bottom
          </h2>
          <p className="text-cyan-100 text-xl max-w-3xl mx-auto">
            Understanding how energy and matter flow through our underwater ecosystem!
          </p>
        </motion.div>

        {/* Energy Concepts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {energyConcepts.map((concept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <Card className="p-6 bg-white/95 backdrop-blur-sm h-full">
                  <div className="text-5xl text-center mb-4">{concept.icon}</div>
                  <h3 className="text-xl text-cyan-900 mb-4 text-center">{concept.title}</h3>
                  <ul className="space-y-2">
                    {concept.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2 text-cyan-700">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Four Laws of Thermodynamics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <Zap className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
            <h3 className="text-3xl text-white mb-2">The Four Laws of Thermodynamics</h3>
            <p className="text-cyan-100 max-w-2xl mx-auto">
              These fundamental laws govern how energy works in Bikini Bottom and everywhere else!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {thermodynamicLaws.map((law, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-white/95 backdrop-blur-sm h-full overflow-hidden relative">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${law.color} opacity-10 rounded-full -mr-16 -mt-16`} />
                  
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-5xl">{law.icon}</div>
                      <div>
                        <div className="text-sm text-cyan-600">{law.number}</div>
                        <h4 className="text-xl text-cyan-900">{law.title}</h4>
                      </div>
                    </div>
                    
                    <p className="text-cyan-800 mb-4">{law.description}</p>
                    
                    <div className={`bg-gradient-to-r ${law.color} bg-opacity-10 rounded-lg p-4`}>
                      <p className="text-sm">
                        <strong className="text-cyan-900">Bikini Bottom Example:</strong>
                        <br />
                        <span className="text-cyan-700">{law.example}</span>
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Homeostasis Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <Card className="p-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border-2 border-cyan-400">
            <div className="flex items-start gap-6">
              <Scale className="w-16 h-16 text-yellow-300 flex-shrink-0" />
              <div>
                <h3 className="text-2xl text-white mb-4">Ecosystem Homeostasis</h3>
                <p className="text-cyan-100 mb-4">
                  Just like SpongeBob maintains his body temperature, the coral reef ecosystem maintains balance! 
                  Coral reefs regulate temperature, oxygen levels, and nutrient cycles through complex interactions 
                  between organisms.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="text-yellow-300 mb-2">🌡️ Temperature Regulation</h4>
                    <p className="text-sm text-cyan-100">
                      Ocean currents and thermal mass keep reef temperatures stable
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="text-yellow-300 mb-2">🫧 Oxygen Balance</h4>
                    <p className="text-sm text-cyan-100">
                      Algae produce oxygen while organisms consume it - maintaining equilibrium
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
