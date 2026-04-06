import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import PlaygroundCard from '../components/PlaygroundCard';

// Magnetic Button Helper Component
function MagneticButton({ children, className }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    // reduce movement intensity
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.button>
  );
}

export default function InteractionsPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-12">
        <h2 className="text-4xl font-bold tracking-tight mb-3">Interactions</h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Micro-interactions that make the user experience feel alive and highly responsive.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        
        {/* Magnetic Button */}
        <PlaygroundCard
          title="Magnetic Element"
          description="Elements that subtly pull towards the user's cursor when hovered, creating a physical, tactile feel."
          prompt="Create a 'Magnetic Button' component using React and Framer Motion. On 'onMouseMove', calculate the center of the bounding client rect, and animate the button slightly (e.g. 20% of the distance) towards the cursor's (x, y) offset using a responsive spring transition. On 'onMouseLeave', reset (x, y) to (0, 0)."
        >
          <div className="flex gap-4">
             <MagneticButton className="px-8 py-4 bg-primary text-white rounded-full font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:bg-primary-hover transition-colors">
               Hover me
             </MagneticButton>
             
             <MagneticButton className="w-14 h-14 bg-surface text-foreground border border-border rounded-full flex items-center justify-center shadow-sm hover:border-primary transition-colors">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
             </MagneticButton>
          </div>
        </PlaygroundCard>

        {/* Hover Reveal Cover */}
        <PlaygroundCard
           title="Directional Hover Reveal"
           description="A card that reveals internal information exactly from the direction the cursor entered."
           prompt="Create a 'Directional Hover Reveal' interaction. I want a card where a dark overlay slides in from whatever direction the mouse entered from (top, right, bottom, or left). Instead of building complex math natively, suggest using Framer Motion to animate an absolute div based on mouse events, or use CSS hover with clip-path/transforms."
        >
           <div className="group relative w-64 h-80 rounded-2xl bg-zinc-100 dark:bg-zinc-800 overflow-hidden cursor-pointer shadow-md">
              <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2600&auto=format&fit=crop" alt="Abstract Art" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex flex-col justify-end p-6">
                 <h4 className="text-white font-bold text-xl mb-1">Abstract Collection</h4>
                 <p className="text-white/80 text-sm">View gallery</p>
                 <motion.div 
                   className="w-8 h-1 bg-primary mt-4 rounded-full"
                   initial={{ width: 0 }}
                   whileHover={{ width: 32 }}
                   transition={{ duration: 0.3 }}
                 />
              </div>
           </div>
        </PlaygroundCard>

      </div>
    </div>
  );
}
