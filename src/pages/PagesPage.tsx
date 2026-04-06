import PlaygroundCard from '../components/PlaygroundCard';
import { Rocket, User, Calendar, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PagesPage() {
  return (
    <div className="space-y-12 pb-20">
      <header>
        <h2 className="text-4xl font-bold tracking-tight mb-4">Templates</h2>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Complete page sections and layout templates designed with high-impact aesthetics. 
          Use these as a starting point for your next landing page or application.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-12">
        {/* Modern SaaS Hero */}
        <PlaygroundCard
          title="Modern SaaS Hero"
          description="A high-end glassmorphism landing page hero section with vibrant gradients and smooth motion."
          prompt="Create a modern SaaS landing page hero section with glassmorphism. Use a dark background with vibrant purple and cyan blurred circles (light leaks). Include a bold heading with radial-gradient text, a clear call-to-action button, and a floating 3D-style card preview with backdrop-blur. Apply subtle parallax animations using Framer Motion."
        >
          <div className="w-full relative overflow-hidden rounded-2xl bg-slate-50 dark:bg-zinc-950 p-8 md:p-16 border border-slate-200 dark:border-white/5 shadow-2xl transition-colors duration-500">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-600/20 blur-[100px] rounded-full" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs text-slate-600 dark:text-white/70">
                  <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                  Now integrated with AI
                </div>
                <h1 className="text-4xl md:text-6xl font-black leading-tight text-slate-900 dark:text-white">
                  Deploy Your <span className="bg-gradient-to-br from-purple-500 to-cyan-500 bg-clip-text text-transparent">Creative Vision</span> Fast.
                </h1>
                <p className="text-slate-500 dark:text-white/60 text-lg max-w-md">
                  Everything you need to build stunning interfaces and high-performance applications in one platform.
                </p>
                <div className="flex gap-4">
                  <button className="h-12 px-8 rounded-xl bg-purple-600 text-white dark:bg-white dark:text-black font-bold hover:opacity-90 transition-all shadow-xl shadow-purple-500/20">
                    Get Started
                  </button>
                  <button className="h-12 px-8 rounded-xl bg-transparent border border-slate-300 dark:border-white/10 text-slate-600 dark:text-white font-semibold hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                    Watch Demo
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <motion.div 
                  initial={{ rotateY: 20, rotateX: 10, y: 20 }}
                  animate={{ rotateY: 10, rotateX: 5, y: 0 }}
                  transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
                  className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-3xl p-6 shadow-2xl relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    </div>
                    <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Analytics Preview</div>
                  </div>
                  <div className="space-y-4">
                    <div className="w-full h-8 rounded-lg bg-white/5 animate-pulse" />
                    <div className="grid grid-cols-3 gap-3">
                      <div className="aspect-square rounded-lg bg-white/5 animate-pulse" />
                      <div className="aspect-square rounded-lg bg-white/5 animate-pulse" />
                      <div className="aspect-square rounded-lg bg-white/5 animate-pulse" />
                    </div>
                    <div className="w-full h-32 rounded-lg bg-gradient-to-br from-purple-500/20 to-transparent border border-white/5" />
                  </div>
                </motion.div>
                {/* Floating UI Tag */}
                <motion.div 
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 3, repeat: Infinity }}
                   className="absolute -top-4 -right-4 px-4 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl z-20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                      <Rocket size={14} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Conversion Rate</div>
                      <div className="text-lg font-bold text-green-400">+24.8%</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </PlaygroundCard>

        {/* Minimalist Editorial Portfolio Header */}
        <PlaygroundCard
          title="Minimalist Portfolio"
          description="Editorial-style portfolio header with absolute focus on typography and clean layout."
          prompt="Create a minimalist, editorial-style portfolio header section. Use high-contrast black and white colors. Include a massive serif heading (font weight: black). Use a grid system with plenty of white space. Add a subtle hover reveal for gallery items where an image appears on text hover. Typography should be the main visual driver."
        >
          <div className="w-full bg-white dark:bg-black text-black dark:text-white p-12 md:p-16 border border-zinc-200 dark:border-white/10 rounded-2xl transition-colors duration-500">
            <header className="flex justify-between items-center mb-24">
              <div className="text-xl font-black tracking-tighter">STUDIO.LV</div>
              <nav className="flex gap-8 text-sm font-medium uppercase tracking-widest">
                <a href="#" className="hover:line-through transition-all">Work</a>
                <a href="#" className="hover:line-through transition-all">About</a>
                <a href="#" className="hover:line-through transition-all">Contact</a>
              </nav>
            </header>
            
            <div className="max-w-4xl mx-auto space-y-12">
              <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-[0.9]">
                CREATING <br />
                <span className="text-white dark:text-black bg-black dark:bg-white px-4 ml-[-1rem]">TIMELESS</span> <br />
                EXPERIENCES.
              </h1>
              
              <div className="grid md:grid-cols-2 gap-16 pt-12 items-end">
                <p className="text-xl leading-relaxed text-zinc-500 dark:text-zinc-400 max-w-sm">
                  We are a boutique design laboratory focusing on the intersection of physical craft and digital precision.
                </p>
                <div className="space-y-4">
                  <div className="h-[1px] bg-black dark:bg-white w-full" />
                  <div className="flex justify-between items-center text-sm font-bold uppercase">
                    <span>Scroll to explore</span>
                    <span className="animate-bounce">↓</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-zinc-200 dark:bg-zinc-800 border-t border-zinc-200 dark:border-zinc-800">
              {['Design', 'Motion', 'Identity', 'Web'].map((tag) => (
                <div key={tag} className="p-8 bg-white dark:bg-black hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors group">
                  <div className="text-xs text-zinc-400 dark:text-zinc-600 mb-2">Service 0{tag.length}</div>
                  <div className="text-lg font-black group-hover:tracking-widest transition-all text-black dark:text-white">{tag}</div>
                </div>
              ))}
            </div>
          </div>
        </PlaygroundCard>

        {/* Bento Dashboard Template */}
        <PlaygroundCard
          title="Bento App Dashboard"
          description="A dark-themed dashboard application template using the popular Bento layout pattern."
          prompt="Design a dark-themed 'Bento' style application dashboard. Use a black background with dark grey cards (rounded-3xl). Each card should have a 1px border. Feature multiple grid areas: a large chart area, smaller stats cards, and a vertical activity list. Add subtle glowing borders or shadows for interactivity. Use high-end dark design tokens (Apple/Linear style)."
        >
          <div className="w-full bg-white dark:bg-[#050505] p-8 md:p-12 rounded-3xl border border-zinc-200 dark:border-white/5 transition-colors duration-500">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Sidebar Info */}
              <div className="md:col-span-1 space-y-6">
                <div className="aspect-square rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 p-6 flex flex-col justify-between">
                  <User size={24} className="text-zinc-400 dark:text-white/40" />
                  <div>
                    <div className="text-xs text-zinc-500 dark:text-white/40 mb-1">Total Users</div>
                    <div className="text-3xl font-bold text-zinc-900 dark:text-white">12.4k</div>
                  </div>
                </div>
                <div className="h-32 rounded-3xl bg-gradient-to-br from-indigo-500 to-indigo-700 p-6 flex flex-col justify-between text-white">
                  <Sparkles size={20} />
                  <div className="font-bold">Upgrade Pro</div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="md:col-span-3 grid grid-cols-3 gap-6">
                <div className="col-span-3 h-64 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5 p-8 relative overflow-hidden group">
                   <div className="flex justify-between items-start mb-8">
                     <div>
                       <h4 className="text-lg font-bold text-zinc-900 dark:text-white">Revenue Insight</h4>
                       <p className="text-sm text-zinc-500 dark:text-white/40">Growth over last 30 days</p>
                     </div>
                     <select className="bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-xs px-2 py-1 rounded-lg dark:text-white">
                       <option>Monthly</option>
                     </select>
                   </div>
                   {/* Mock Chart Lines */}
                   <div className="flex items-end gap-2 h-24 mt-4">
                     {[40, 70, 45, 90, 65, 80, 50, 95, 100, 75, 60, 85].map((h, i) => (
                       <motion.div 
                         key={i}
                         initial={{ height: 0 }}
                         animate={{ height: `${h}%` }}
                         transition={{ delay: i * 0.05 }}
                         className="flex-1 bg-zinc-200 dark:bg-white/20 rounded-t-sm group-hover:bg-indigo-500/50 transition-colors"
                       />
                     ))}
                   </div>
                </div>
                
                <div className="col-span-2 aspect-video rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 p-8">
                   <Calendar size={24} className="text-zinc-400 dark:text-white/40 mb-4" />
                   <h4 className="font-bold mb-6 text-zinc-900 dark:text-white">Upcoming Sprints</h4>
                   <div className="space-y-3">
                     {[1, 2].map(i => (
                       <div key={i} className="flex items-center gap-4 p-3 rounded-2xl bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/5">
                         <div className="w-2 h-2 rounded-full bg-green-500" />
                         <div className="text-sm flex-1 text-zinc-800 dark:text-white">Database Migration Phase {i}</div>
                         <div className="text-xs text-zinc-400 dark:text-white/40">Oct {14 + i}</div>
                       </div>
                     ))}
                   </div>
                </div>
                
                <div className="col-span-1 rounded-3xl bg-indigo-500 p-8 flex flex-col justify-center items-center text-center">
                   <div className="text-4xl font-black mb-2 text-white">98%</div>
                   <div className="text-[10px] uppercase font-bold text-white/60">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </PlaygroundCard>

        {/* Neo-brutalism Event Landing */}
        <PlaygroundCard
          title="Neo-brutalism Event"
          description="High-contrast, bold, and raw landing page for an underground tech event."
          prompt="Create a neo-brutalism underground tech event landing page. Use a bright yellow background (#fff500). Use comic-style bold borders (4px). Include staggered text with overlapping layers. Buttons should have a rigid shadow (non-blurry). Font should be a bold sans-serif. Add rough textures or dot patterns to some areas."
        >
          <div className="w-full bg-[#fff500] dark:bg-black text-black dark:text-white border-[4px] border-black dark:border-white rounded-2xl p-0 overflow-hidden shadow-[12px_12px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_rgba(255,255,255,1)] transition-all">
            <div className="p-8 border-b-[4px] border-black dark:border-white flex justify-between items-center bg-white dark:bg-zinc-900">
              <div className="text-2xl font-black uppercase tracking-tighter">FUTURE_FEST.26</div>
              <div className="px-6 py-2 border-[4px] border-black dark:border-white text-sm font-black uppercase bg-[#fff500] dark:text-black">Tickets Now</div>
            </div>
            
            <div className="grid md:grid-cols-2">
              <div className="p-12 space-y-8 border-r-[4px] border-black">
                <h1 className="text-6xl md:text-7xl font-black uppercase leading-none tracking-tighter">
                  TEACH <br />
                  <span className="bg-black text-white px-2">YOUR_SELF</span> <br />
                  NEW RULES.
                </h1>
                <p className="text-xl font-bold bg-white p-6 border-[3px] border-black shadow-[6px_6px_0px_rgba(0,0,0,1)]">
                  The underground movement for developers who want to break the simulation.
                </p>
                <div className="flex gap-4">
                  <button className="px-8 py-4 bg-black text-white font-black uppercase hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all shadow-[6px_6px_0px_rgba(255,255,255,1)] border-[3px] border-white">
                    Apply Now
                  </button>
                  <button className="px-8 py-4 bg-[#ff00ff] text-white font-black uppercase hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all shadow-[6px_6px_0px_rgba(0,0,0,1)] border-[3px] border-black">
                    Lineup
                  </button>
                </div>
              </div>
              
              <div className="bg-white p-0 relative">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '20px 20px' }} />
                <div className="relative z-10 p-12 space-y-6 flex flex-col justify-center h-full">
                  {[
                    { date: 'OCT 24', event: 'Web Assembly Deep Dive', color: '#00ffff' },
                    { date: 'OCT 25', event: 'Reverse Engineering 101', color: '#ff00ff' },
                    { date: 'OCT 26', event: 'Post-Quantum Crypto', color: '#fff500' }
                  ].map((row, i) => (
                    <div key={i} className="flex gap-4 items-center">
                       <div className={`px-4 py-2 border-[3px] border-black font-black text-xs`} style={{ backgroundColor: row.color }}>{row.date}</div>
                       <div className="font-black italic text-lg">{row.event}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-black text-white p-6 overflow-hidden whitespace-nowrap">
              <div className="inline-block animate-marquee font-black uppercase text-xl">
                SECURE YOUR SPOT — NEW TOKYO — 2026.04 — LIMITED CAPACITY — 
                SECURE YOUR SPOT — NEW TOKYO — 2026.04 — LIMITED CAPACITY — 
              </div>
            </div>
          </div>
        </PlaygroundCard>
      </div>
    </div>
  );
}
