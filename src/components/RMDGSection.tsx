import { motion } from 'motion/react';
import { Droplets, Fish } from 'lucide-react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';

const rmdgs = [
  {
    icon: Droplets,
    number: 6,
    title: 'Clean Water and Sanitation',
    subtitle: 'Ensure pristine water quality for all marine life',
    goals: [
      'Achieve 100% pollution-free water by 2030',
      'Monitor water quality in all Bikini Bottom zones',
      'Eliminate harmful chemical runoff',
      'Protect underwater freshwater springs',
    ],
    progress: 65,
    initiatives: [
      { name: 'Water Testing Program', status: 'Active', impact: 'High' },
      { name: 'Filtration System Upgrade', status: 'In Progress', impact: 'High' },
      { name: 'Pollution Prevention Education', status: 'Active', impact: 'Medium' },
    ],
  },
  {
    icon: Fish,
    number: 14,
    title: 'Life Below Water',
    subtitle: 'Conserve and sustainably use marine biodiversity',
    goals: [
      'Protect 30% of ocean areas as marine sanctuaries',
      'Restore degraded coral reef ecosystems',
      'End overfishing and illegal fishing practices',
      'Minimize ocean acidification impacts',
    ],
    progress: 58,
    initiatives: [
      { name: 'Coral Restoration Project', status: 'Active', impact: 'High' },
      { name: 'Jellyfish Field Sanctuary', status: 'Established', impact: 'High' },
      { name: 'Sustainable Fishing Program', status: 'Active', impact: 'Medium' },
    ],
  },
];

export function RMDGSection() {
  return (
    <section id="rmdgs" className="relative py-20 bg-gradient-to-b from-indigo-900 to-blue-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-yellow-300 mb-4">
            Relevant Marine Development Goals
          </h2>
          <p className="text-cyan-100 text-xl max-w-3xl mx-auto">
            Bikini Bottom's commitment to the ocean's version of Sustainable Development Goals
          </p>
        </motion.div>

        <div className="space-y-12">
          {rmdgs.map((rmdg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-8 bg-white/95 backdrop-blur-sm">
                {/* Header */}
                <div className="flex items-start gap-6 mb-6">
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 flex-shrink-0">
                    <rmdg.icon className="w-12 h-12 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-cyan-600 mb-2">RMDG {rmdg.number}</div>
                    <h3 className="text-3xl text-cyan-900 mb-2">{rmdg.title}</h3>
                    <p className="text-cyan-700 text-lg">{rmdg.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl text-cyan-600">{rmdg.progress}%</div>
                    <div className="text-sm text-cyan-600">Progress</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                  <Progress value={rmdg.progress} className="h-3" />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Goals */}
                  <div>
                    <h4 className="text-xl text-cyan-900 mb-4">Specific Goals</h4>
                    <div className="space-y-3">
                      {rmdg.goals.map((goal, goalIndex) => (
                        <motion.div
                          key={goalIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: goalIndex * 0.1 }}
                          className="flex items-start gap-3 p-3 bg-cyan-50 rounded-lg"
                        >
                          <div className="text-cyan-600 flex-shrink-0">✓</div>
                          <p className="text-cyan-800">{goal}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Initiatives */}
                  <div>
                    <h4 className="text-xl text-cyan-900 mb-4">Active Initiatives</h4>
                    <div className="space-y-3">
                      {rmdg.initiatives.map((initiative, initIndex) => (
                        <motion.div
                          key={initIndex}
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: initIndex * 0.1 }}
                          className="p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="text-cyan-900">{initiative.name}</h5>
                            <span className={`px-3 py-1 rounded-full text-xs ${
                              initiative.status === 'Active' 
                                ? 'bg-green-200 text-green-800'
                                : initiative.status === 'Established'
                                ? 'bg-blue-200 text-blue-800'
                                : 'bg-yellow-200 text-yellow-800'
                            }`}>
                              {initiative.status}
                            </span>
                          </div>
                          <div className="text-sm text-cyan-600">
                            Impact: <span className="text-cyan-800">{initiative.impact}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
