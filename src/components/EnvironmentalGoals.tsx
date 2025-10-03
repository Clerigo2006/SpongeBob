import { motion } from 'motion/react';
import { Target, AlertTriangle, Lightbulb, Recycle, Shield, Droplets } from 'lucide-react';
import { Card } from './ui/card';

const goals = [
  { icon: Shield, title: 'Protect Marine Life', description: 'Safeguard all species in Bikini Bottom' },
  { icon: Recycle, title: 'Zero Waste Ocean', description: 'Eliminate pollution and debris' },
  { icon: Droplets, title: 'Clean Water', description: 'Maintain pristine water quality' },
];

const issues = [
  {
    icon: '🏭',
    title: 'Ocean Pollution',
    description: 'Trash and chemicals threaten our reef',
    severity: 'high',
  },
  {
    icon: '🌡️',
    title: 'Coral Bleaching',
    description: 'Rising temperatures harm coral health',
    severity: 'high',
  },
  {
    icon: '🎣',
    title: 'Overfishing',
    description: 'Depleting fish populations',
    severity: 'medium',
  },
  {
    icon: '⚡',
    title: 'Energy Waste',
    description: 'Excessive power consumption',
    severity: 'medium',
  },
];

const solutions = [
  {
    icon: '🧹',
    title: 'Community Cleanups',
    description: 'Weekly jellyfish field and lagoon cleaning sessions',
    action: 'Join every Saturday!',
  },
  {
    icon: '🪼',
    title: 'Jellyfish Protection',
    description: 'Establish no-catch zones in Jellyfish Fields',
    action: 'Respect sanctuary areas',
  },
  {
    icon: '🐟',
    title: 'Sustainable Fishing',
    description: 'Catch limits and seasonal restrictions',
    action: 'Follow quotas',
  },
  {
    icon: '♻️',
    title: 'Reef Restoration',
    description: 'Plant new coral and restore damaged areas',
    action: 'Volunteer today!',
  },
  {
    icon: '💡',
    title: 'Energy Conservation',
    description: 'Use renewable ocean current power',
    action: 'Switch to green energy',
  },
  {
    icon: '📚',
    title: 'Education Programs',
    description: 'Teach young fish about ocean care',
    action: 'Attend workshops',
  },
];

export function EnvironmentalGoals() {
  return (
    <section id="goals" className="relative py-20 bg-gradient-to-b from-blue-800 to-purple-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-yellow-300 mb-4">
            Environmental Goals & Solutions
          </h2>
          <p className="text-cyan-100 text-xl max-w-3xl mx-auto">
            Together we can protect Bikini Bottom's ecosystem for generations to come!
          </p>
        </motion.div>

        {/* Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6 justify-center">
            <Target className="w-8 h-8 text-green-300" />
            <h3 className="text-3xl text-white">Our Goals</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {goals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-6 bg-green-500/20 backdrop-blur-sm border-2 border-green-400 h-full">
                  <goal.icon className="w-12 h-12 text-green-300 mb-4" />
                  <h4 className="text-xl text-white mb-2">{goal.title}</h4>
                  <p className="text-green-100">{goal.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Issues */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6 justify-center">
            <AlertTriangle className="w-8 h-8 text-red-300" />
            <h3 className="text-3xl text-white">Environmental Challenges</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {issues.map((issue, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className={`p-6 ${
                  issue.severity === 'high' 
                    ? 'bg-red-500/20 border-2 border-red-400' 
                    : 'bg-orange-500/20 border-2 border-orange-400'
                } backdrop-blur-sm h-full`}>
                  <div className="text-4xl mb-3">{issue.icon}</div>
                  <h4 className="text-xl text-white mb-2">{issue.title}</h4>
                  <p className="text-sm text-gray-200">{issue.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6 justify-center">
            <Lightbulb className="w-8 h-8 text-yellow-300" />
            <h3 className="text-3xl text-white">Our Solutions</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="p-6 bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all h-full">
                  <div className="text-5xl mb-4">{solution.icon}</div>
                  <h4 className="text-xl text-cyan-900 mb-2">{solution.title}</h4>
                  <p className="text-cyan-700 mb-4">{solution.description}</p>
                  <div className="bg-cyan-100 px-4 py-2 rounded-full inline-block">
                    <p className="text-sm text-cyan-900">{solution.action}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
