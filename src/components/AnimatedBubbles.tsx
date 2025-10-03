import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Bubble {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
}

export function AnimatedBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const newBubbles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 30 + 10,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 5,
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-white/20 backdrop-blur-sm"
          style={{
            left: `${bubble.x}%`,
            width: bubble.size,
            height: bubble.size,
            bottom: -50,
          }}
          animate={{
            y: [-50, -window.innerHeight - 100],
            x: [0, Math.sin(bubble.id) * 50],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
