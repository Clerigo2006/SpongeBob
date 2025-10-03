import { motion } from 'motion/react';
import { MapPin, Thermometer, Mountain, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';

const terrainFeatures = [
  { icon: '🪸', label: 'Coral Reefs', description: 'Colorful underwater gardens' },
  { icon: '🌋', label: 'Underwater Volcanoes', description: 'Active geothermal vents' },
  { icon: '🏖️', label: 'Sandy Bottom', description: 'Soft sediment floors' },
  { icon: '🌿', label: 'Kelp Forests', description: 'Tall seaweed groves' },
];

const species = [
  { icon: '🧽', name: 'Sea Sponges', population: 'Abundant' },
  { icon: '🪼', name: 'Jellyfish', population: 'Common' },
  { icon: '🐠', name: 'Tropical Fish', population: 'Diverse' },
  { icon: '🦀', name: 'Crustaceans', population: 'Widespread' },
  { icon: '🐙', name: 'Cephalopods', population: 'Moderate' },
  { icon: '⭐', name: 'Starfish', population: 'Common' },
];

export function WorldSection() {
  return (
    <section id="world" className="relative py-20 bg-gradient-to-b from-teal-700 to-blue-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-center text-yellow-300 mb-4">
            Our Underwater World
          </h2>
          <p className="text-center text-cyan-100 text-xl mb-12 max-w-3xl mx-auto">
            Discover the amazing location, climate, terrain, and creatures of Bikini Bottom!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-6 bg-white/95 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl text-cyan-900">Location</h3>
              </div>
              <p className="text-cyan-800 mb-4">
                Bikini Bottom is located deep in the <strong>Pacific Ocean</strong>, beneath the surface near Bikini Atoll. Our underwater city sits on the ocean floor at approximately 600 feet below sea level, where sunlight filters through in beautiful rays!
              </p>
              <div className="bg-cyan-50 p-4 rounded-lg">
                <p className="text-sm text-cyan-700">
                  📍 Coordinates: Pacific Ocean, Marshall Islands region
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Climate Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-6 bg-white/95 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Thermometer className="w-8 h-8 text-orange-500" />
                <h3 className="text-2xl text-cyan-900">Climate</h3>
              </div>
              <p className="text-cyan-800 mb-4">
                Bikini Bottom enjoys a <strong>warm tropical oceanic climate</strong> with stable temperatures year-round. Ocean currents bring nutrients and moderate seasonal changes, creating perfect conditions for diverse marine life!
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-cyan-50 p-3 rounded-lg">
                  <p className="text-xs text-cyan-600">Temperature</p>
                  <p className="text-cyan-900">72-78°F</p>
                </div>
                <div className="bg-cyan-50 p-3 rounded-lg">
                  <p className="text-xs text-cyan-600">Currents</p>
                  <p className="text-cyan-900">Moderate</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Terrain Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6 justify-center">
            <Mountain className="w-8 h-8 text-yellow-300" />
            <h3 className="text-3xl text-white">Terrain Features</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {terrainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-6 bg-white/90 backdrop-blur-sm text-center hover:shadow-xl transition-shadow">
                  <div className="text-5xl mb-3">{feature.icon}</div>
                  <h4 className="text-cyan-900 mb-2">{feature.label}</h4>
                  <p className="text-sm text-cyan-700">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Dominant Species */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6 justify-center">
            <Users className="w-8 h-8 text-yellow-300" />
            <h3 className="text-3xl text-white">Dominant Species</h3>
          </div>
          <Card className="p-8 bg-white/95 backdrop-blur-sm">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {species.map((creature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-3 p-3 bg-cyan-50 rounded-lg hover:bg-cyan-100 transition-colors"
                >
                  <div className="text-3xl">{creature.icon}</div>
                  <div>
                    <p className="text-cyan-900">{creature.name}</p>
                    <p className="text-xs text-cyan-600">{creature.population}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
