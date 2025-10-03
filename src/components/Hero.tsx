import { motion } from 'motion/react';
import { Waves, Fish, Droplet } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1719042575585-e9d866f43210?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JhbCUyMHJlZWYlMjB1bmRlcndhdGVyfGVufDF8fHx8MTc1OTM4NTIxMnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Coral Reef Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/70 via-blue-600/60 to-teal-700/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo/Title */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <Waves className="w-16 h-16 text-yellow-300" />
            <h1 className="text-5xl md:text-7xl text-white">
              Bikini Bottom Eco
            </h1>
            <Fish className="w-16 h-16 text-pink-300" />
          </div>

          {/* Slogan */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl md:text-4xl text-yellow-200 mb-8"
          >
            Protect Our Ocean, Protect Bikini Bottom!
          </motion.h2>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl"
          >
            <div className="flex items-start gap-4">
              <Droplet className="w-12 h-12 text-cyan-600 flex-shrink-0 mt-2" />
              <div className="text-left">
                <p className="text-cyan-900 text-lg mb-4">
                  <span className="text-2xl">Hi! I'm SpongeBob SquarePants!</span>
                </p>
                <p className="text-cyan-800">
                  Welcome to our special website about protecting our beautiful underwater home! Did you know that keeping our ocean clean and healthy is super important for all of us who live in Bikini Bottom? From tiny plankton to giant whales, we all depend on a healthy ocean ecosystem!
                </p>
                <p className="text-cyan-800 mt-4">
                  Join me, Patrick, Sandy, and all our friends as we learn about the environment, climate science, and how we can be the best ocean stewards ever! Are you ready? I'm ready! I'm ready!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-white/80 text-sm"
            >
              Scroll to explore ↓
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
