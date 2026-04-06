import PlaygroundCard from '../components/PlaygroundCard';

export default function ComponentsPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-12">
        <h2 className="text-4xl font-bold tracking-tight mb-3">Components</h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Basic building blocks styled with premium aesthetics. Ideal for foundational design systems.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        
        {/* Glow Input */}
        <PlaygroundCard
          title="Glow Outline Input"
          description="An input field that features a subtle glowing border when focused, ensuring accessibility while looking premium."
          prompt="Create a 'Premium Glow Input' using Tailwind CSS. By default it should have a subtle border (border-zinc-200, dark:border-zinc-800) and an invisible ring offset. On focus within, change the border to the primary color, and apply a 2px ring with a shadow that matches the primary color (e.g., focus:ring-primary/20 focus:border-primary focus:shadow-[0_0_0_4px_rgba(170,59,255,0.1)])."
        >
          <div className="w-full max-w-sm">
             <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email address</label>
             <div className="relative group/input">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground group-focus-within/input:text-primary transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="hello@example.com"
                  className="w-full pl-10 pr-4 py-2.5 bg-surface border border-border rounded-xl text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:shadow-[0_0_15px_rgba(170,59,255,0.15)] transition-all duration-300"
                />
             </div>
          </div>
        </PlaygroundCard>

        {/* Dynamic Buttons */}
        <PlaygroundCard
           title="Gradient Border Button"
           description="A button where the border itself is a moving or static gradient, wrapping around a dark or light core."
           prompt="Create a 'Gradient Border Button'. To achieve this cleanly with Tailwind, wrap the button text in an inner div with the background color matching your surface (bg-black). Make the button wrapper have a padding (p-[1px] for border thickness), and a background that is a vibrant gradient (bg-gradient-to-r from-pink-500 to-violet-500). On hover, dim the inner background slightly to reveal more gradient."
        >
           <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1.5px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background group">
             {/* Gradient Background border */}
             <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-primary group-hover:rotate-180 transition-transform duration-1000" />
             
             {/* Inner Surface */}
             <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-background px-8 py-1 text-sm font-medium text-foreground backdrop-blur-3xl group-hover:bg-background/80 transition-colors">
               Unlock Premium
             </span>
           </button>
        </PlaygroundCard>

        {/* Soft Toggle */}
        <PlaygroundCard
           title="Fluid Mode Toggle"
           description="A beautiful segmented control or theme toggle with a sliding background indicator."
           prompt="Build a 'Fluid Segmented Control' or Mode Toggle. Use a relative container with a light background (bg-muted). Render the options as absolute buttons. Use Framer Motion's 'layoutId' to animate a shared background div representing the active state smoothly between options. Add an inset shadow for a tactile feel."
        >
           <div className="flex bg-muted p-1 rounded-xl shadow-inner relative z-0">
               {/* This is a visual mock. Real implementation would use Framer Motion layoutId */}
               <div className="absolute top-1 bottom-1 left-1 w-[100px] bg-surface rounded-lg shadow-sm border border-border/50 z-[-1]" />
               <button className="w-[100px] py-2 text-sm font-medium text-foreground">Light</button>
               <button className="w-[100px] py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Dark</button>
               <button className="w-[100px] py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">System</button>
           </div>
        </PlaygroundCard>

        {/* Bento Grid */}
        <PlaygroundCard
           title="Bento Grid"
           description="A grid-based layout often seen in modern product landing pages (e.g., Apple, Linear). It organizes content into distinct, visually prioritized blocks."
           prompt="Create a responsive 'Bento Grid' using Tailwind CSS. Use a parent container with grid-cols-1 md:grid-cols-3 and gap-4. For specific blocks, use span-2 (e.g., md:col-span-2) to create visual priority. Each card should have consistent padding (p-8), a subtle border (border-zinc-200, dark:border-zinc-800), and a rounded-3xl corner. Mix static content with icons or subtle glows to enhance the bento aesthetic."
        >
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full p-4 bg-muted/20 border border-border/50 rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/5">
              <div className="md:col-span-2 min-h-32 bg-surface p-6 rounded-2xl border border-border shadow-sm flex flex-col justify-between group overflow-hidden">
                 <div className="w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500 mb-2 group-hover:scale-110 transition-transform">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                 </div>
                 <div>
                    <h4 className="font-bold text-base mb-1">Security by Design</h4>
                    <p className="text-[10px] text-muted-foreground">Encryption at rest and in transit.</p>
                 </div>
              </div>
              <div className="min-h-32 bg-surface p-6 rounded-2xl border border-border shadow-sm flex flex-col justify-between group overflow-hidden relative isolate">
                 <div className="absolute -z-10 top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/20 transition-colors" />
                 <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:rotate-12 transition-transform">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                 </div>
                 <h4 className="font-bold text-base">Billing</h4>
              </div>
              <div className="min-h-32 bg-surface p-6 rounded-2xl border border-border shadow-sm flex flex-col justify-between group overflow-hidden">
                 <div className="w-full flex justify-between items-start mb-2">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                    </div>
                    <span className="bg-cyan-500/10 text-cyan-500 text-[8px] font-bold px-1.5 py-0.5 rounded-full border border-cyan-500/20">NEW</span>
                 </div>
                 <h4 className="font-bold text-base">Downloads</h4>
              </div>
              <div className="md:col-span-2 min-h-32 bg-surface p-6 rounded-2xl border border-border shadow-sm flex flex-col justify-between group overflow-hidden bg-gradient-to-br from-surface to-muted/30">
                 <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-400/10 border border-orange-400/20 flex items-center justify-center text-orange-400">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-base mb-1">Project Roadmap</h4>
                      <p className="text-[10px] text-muted-foreground">Keep track of goals and achievements.</p>
                    </div>
                 </div>
                 <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="h-1 flex-1 bg-muted rounded-full overflow-hidden">
                        <div className={`h-full bg-orange-400 ${i <= 3 ? 'w-full' : 'w-0'}`} />
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </PlaygroundCard>

      </div>
    </div>
  );
}
