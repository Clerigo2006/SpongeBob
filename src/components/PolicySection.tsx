import { motion } from 'motion/react';
import { Scale, CheckCircle } from 'lucide-react';
import { Card } from './ui/card';

const policies = [
  {
    title: 'Clean Oceans Act',
    description: 'All citizens must properly dispose of waste in designated receptacles',
  },
  {
    title: 'Coral Protection Law',
    description: 'No touching, breaking, or damaging coral reefs - they\'re our homes!',
  },
  {
    title: 'Energy Efficiency Standard',
    description: 'All buildings must use ocean current renewable energy by 2026',
  },
  {
    title: 'Sustainable Fishing Quota',
    description: 'Daily catch limits to ensure fish populations remain healthy',
  },
  {
    title: 'Marine Education Requirement',
    description: 'All young fish must complete Ocean Ecology 101 at Boating School',
  },
  {
    title: 'Jellyfish Sanctuary Protection',
    description: 'Designated safe zones where jellyfish can thrive undisturbed',
  },
];

export function PolicySection() {
  return (
    <section id="policy" className="relative py-20 bg-gradient-to-b from-purple-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-yellow-300 mb-4">
            Bikini Bottom Environmental Policy
          </h2>
          <p className="text-cyan-100 text-xl max-w-3xl mx-auto">
            Inspired by real-world environmental action plans, adapted for our underwater community!
          </p>
        </motion.div>

        {/* Message from Community Leaders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Card className="p-8 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm border-2 border-purple-400">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="text-5xl">🦀</div>
                <div>
                  <h3 className="text-2xl text-yellow-300 mb-2">Mr. Krabs Says:</h3>
                  <p className="text-white">
                    "Listen up, me boy! A healthy ocean means healthy business! We all need to do our part to keep Bikini Bottom clean. It's not just good for the environment - it's good for the wallet... I mean, the community!"
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-5xl">🐿️</div>
                <div>
                  <h3 className="text-2xl text-yellow-300 mb-2">Sandy Cheeks Says:</h3>
                  <p className="text-white">
                    "Y'all, science shows us that every action counts! Whether you're a sponge, a starfish, or a squirrel in a diving suit, we've all got a responsibility to protect this here ocean ecosystem!"
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Policy Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Scale className="w-8 h-8 text-yellow-300" />
            <h3 className="text-3xl text-white">Key Policy Points</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {policies.map((policy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <Card className="p-6 bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all h-full">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <h4 className="text-xl text-cyan-900">{policy.title}</h4>
                  </div>
                  <p className="text-cyan-700 pl-9">{policy.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Card className="p-6 bg-cyan-500/20 backdrop-blur-sm border-2 border-cyan-400 max-w-2xl mx-auto">
            <p className="text-white">
              <strong>Note:</strong> This policy framework is based on the National Environmental Education Action Plan (NEEAP), 
              adapted to fit the unique needs of our underwater community. Together, we can make Bikini Bottom a model 
              of environmental stewardship!
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
