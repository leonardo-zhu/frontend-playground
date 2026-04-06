import { useState } from 'react';
import { motion } from 'framer-motion';
import PlaygroundCard from '../components/PlaygroundCard';

export default function AnimationsPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-12">
        <h2 className="text-4xl font-bold tracking-tight mb-3">Animations</h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Bring your interface to life with smooth, physics-based animations. These examples use Framer Motion for declarative, performant motion.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        
        {/* Infinite Float Animation */}
        <PlaygroundCard
          title="Floating Aura"
          description="A smooth, continuous floating animation that adds an ethereal feel to hero sections or primary graphics."
          prompt="I want a 'Floating Aura' effect using Framer Motion. Create a smooth, continuous up-and-down floating animation on an element, combined with a subtle shadow expansion to mimic depth. Use physics-based easing (ease: 'easeInOut') and set it to repeat with yoyo (repeatType: 'mirror'). The element itself should be a glassmorphic orb."
          darkBg={true}
        >
          <motion.div
            className="w-32 h-32 rounded-full relative"
            animate={{
              y: [-10, 10],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
          >
            {/* Inner Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-purple-300 opacity-80 mix-blend-screen blur-[2px]" />
            {/* Outer Glow */}
            <div className="absolute -inset-4 rounded-full bg-primary/30 blur-2xl" />
            <div className="absolute inset-0 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white/80">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
          </motion.div>
        </PlaygroundCard>

        {/* Staggered Reveal */}
        <PlaygroundCard
          title="Staggered List Reveal"
          description="A classic but highly effective way to introduce lists of content. Each item mounts with a slight delay."
          prompt="Implement a 'Staggered List Reveal' using Framer Motion. I need a parent container that controls the staggering of its children using 'staggerChildren'. Each child should fade in from opacity 0 and slide up from y: 20 using a spring layout. It should look snappy and premium."
        >
          <motion.ul
            className="flex flex-col gap-3 w-64"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[1, 2, 3, 4].map((i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 24 } }
                }}
                className="p-4 bg-surface border border-border shadow-sm rounded-xl flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-sm">
                  {i}
                </div>
                <div className="h-2 w-24 bg-muted rounded-full" />
              </motion.li>
            ))}
          </motion.ul>
        </PlaygroundCard>

        {/* Pulse Ring Reveal */}
        <PlaygroundCard
          title="Attention Pulse"
          description="Draws the user's eye to a specific element using outward-expanding concentric rings."
          prompt="Create an 'Attention Pulse' effect using Framer Motion and Tailwind CSS. I want a central button with an absolute-positioned ring behind it. The ring should continuously scale outwards from 1 to 1.8 while fading out to opacity 0. Loop this animation indefinitely."
        >
          <div className="relative">
            {/* Pulse Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary"
              animate={{
                scale: [1, 2.5],
                opacity: [1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
            {/* Sub Pulse Ring */}
             <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary"
              animate={{
                scale: [1, 2.5],
                opacity: [1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
                delay: 1
              }}
            />
            {/* Core Element */}
            <div className="relative w-16 h-16 bg-primary rounded-full shadow-lg shadow-primary/30 flex items-center justify-center text-white">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
            </div>
          </div>
        </PlaygroundCard>

        {/* Layout Morph */}
        <PlaygroundCard
           title="Layout Morph (Shared Element)"
           description="Provides seamless transitions when elements change their position or size, creating a high-end app-like feel."
           prompt="Implement a 'Layout Morph' using Framer Motion. I need a segmented control where a background indicator moves between options. Use 'layoutId' on the animated indicator to automatically morph its size and position between the different buttons. This creates a really fluid interaction."
        >
           <div className="flex bg-muted p-1 rounded-2xl relative z-0">
             {['Overview', 'Config', 'Logs'].map((label, idx) => (
                <button
                  key={label}
                  onClick={() => setActiveTab(idx)}
                  className={`relative px-6 py-2.5 text-sm font-medium transition-colors ${
                    activeTab === idx ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {activeTab === idx && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-surface rounded-xl shadow-sm border border-border/50 z-[-1]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {label}
                </button>
             ))}
           </div>
        </PlaygroundCard>

        {/* Hover Reveal Card */}
        <PlaygroundCard
           title="Magnetic Hover Reveal"
           description="An interactive card that reveals detailed information or secondary actions when the user hovers over it."
           prompt="Create a 'Hover Reveal Card' using Framer Motion. The card should have an initial state showing basic info. On hover (whileHover), scale the card up slightly (scale: 1.02) and reveal a hidden content area from bottom (y: 20 to 0) with opacity fade. Add a subtle 'magnetic' feel by applying a light rotate effect (rotateY: 5, rotateX: -5) using hover motion."
        >
          <motion.div 
            whileHover={{ scale: 1.02, rotateX: -2, rotateY: 2 }}
            className="w-full max-w-[280px] h-40 bg-surface border border-border rounded-2xl p-6 relative overflow-hidden group shadow-sm hover:shadow-xl transition-shadow duration-300"
          >
             <div className="flex flex-col h-full justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 16c-1.08 0-2.13-.35-3-1l3-8 3 8c-.87.65-1.92 1-3 1Z"/><path d="M7 21a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H7Z"/><path d="M7 16v2"/><path d="M17 16v2"/></svg>
                  </div>
                  <h4 className="font-bold">Analytics Plus</h4>
                </div>
                
                {/* Reveal Content */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="flex gap-2"
                >
                   <button className="flex-1 text-[10px] bg-primary text-white py-1.5 rounded-lg font-bold">ACTIVATE</button>
                   <button className="flex-1 text-[10px] bg-muted py-1.5 rounded-lg font-bold">INFO</button>
                </motion.div>
             </div>
          </motion.div>
        </PlaygroundCard>

      </div>
    </div>
  );
}
