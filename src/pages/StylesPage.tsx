import PlaygroundCard from '../components/PlaygroundCard';

export default function StylesPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-12">
        <h2 className="text-4xl font-bold tracking-tight mb-3">Styles</h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Visual treatments that define the aesthetic of a web application. Discover how to create premium aesthetics using Tailwind CSS classes.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        
        {/* Glassmorphism */}
        <PlaygroundCard
          title="Frosted Glass (Glassmorphism)"
          description="A design idiom where elements appear as semi-transparent, frosted glass hovering over the background."
          prompt="Design a 'Frosted Glass' (Glassmorphism) card using Tailwind CSS. Use a vibrant background image or mesh gradient for the parent container. The card itself should have a translucent background (like bg-white/10 or bg-white/20 for light mode, bg-black/20 for dark mode), a strong background blur (backdrop-blur-md or lg), and a subtle 1px border (border-white/20) to define its edge."
        >
          {/* Mock background mesh */}
          <div className="absolute inset-0 bg-amber-100/50 dark:bg-zinc-950 overflow-hidden -z-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
          </div>

          {/* Custom animated blobs would need custom tailwind plugins normally, but using standard tailwind here. If no custom classes, I'll rely on the colors */}

          <div className="w-80 p-6 rounded-2xl bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-orange-400 to-pink-500 mb-4 shadow-lg shadow-pink-500/30"></div>
            <h4 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-2">Premium Tier</h4>
            <p className="text-sm text-zinc-700 dark:text-zinc-400 mb-6 font-medium">Unlock exclusive features and frosted aesthetics.</p>
            <div className="w-full h-2 bg-black/5 dark:bg-white/10 rounded-full overflow-hidden">
               <div className="w-2/3 h-full bg-gradient-to-r from-orange-400 to-pink-500"></div>
            </div>
          </div>
        </PlaygroundCard>

        {/* Modern Gradients */}
        <PlaygroundCard
          title="Mesh & Conic Gradients"
          description="Vibrant colors blended seamlessly can create highly emotional and deeply engaging visual backgrounds."
          prompt="Create a vibrant 'Mesh Gradient' aesthetic. Since native CSS mesh gradients are complex, use an absolute-positioned cluster of 3-4 blurred circles (blur-3xl) with distinct colors (e.g. bg-fuchsia-500, bg-cyan-400, bg-indigo-500). Layer a container with a subtle noise texture or semi-transparent background over it to create modern gradient aesthetics and depth."
        >
          <div className="w-full max-w-sm h-64 relative rounded-3xl overflow-hidden shadow-xl shadow-fuchsia-500/10 isolate">
             {/* Gradient Blobs */}
             <div className="absolute -inset-10 opacity-70">
                <div className="absolute top-0 right-0 w-48 h-48 bg-fuchsia-500 rounded-full mix-blend-screen filter blur-[60px]" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400 rounded-full mix-blend-screen filter blur-[80px]" />
                <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-indigo-500 rounded-full mix-blend-screen filter blur-[50px]" />
             </div>
             
             {/* Content Overlay */}
             <div className="absolute inset-2 rounded-2xl bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 flex flex-col justify-between p-6 z-10">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center backdrop-blur-xl border border-white/30 text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <div>
                  <h4 className="text-white font-medium text-xl">Balance</h4>
                  <p className="text-white/70 text-sm">$12,450.00</p>
                </div>
             </div>
          </div>
        </PlaygroundCard>

        {/* Neumorphism */}
        <PlaygroundCard
           title="Neumorphism (Soft UI)"
           description="A design style characterized by monochromatic colors and soft shadows, making elements look extruded from the background."
           prompt="Design a 'Neumorphic' (Soft UI) button or card. The background of the element and its parent must be the exact same color (e.g., bg-[#e0e5ec]). Give the element a dual shadow: a light shadow (white) on the top-left to simulate light, and a dark shadow (dark gray/blue) on the bottom-right to simulate depth. Use Tailwind arbitary values for the box-shadow: shadow-[-8px_-8px_16px_#ffffff,_8px_8px_16px_#c3c9d1]."
        >
          <div className="w-full h-full min-h-[200px] flex items-center justify-center bg-[#e0e5ec] rounded-xl p-8 absolute inset-0">
             <div className="flex gap-8">
               {/* Outset */}
               <button className="w-16 h-16 rounded-2xl bg-[#e0e5ec] shadow-[8px_8px_16px_#c8ccd1,-8px_-8px_16px_#f8fcff] flex items-center justify-center text-zinc-500 hover:text-primary transition-colors hover:shadow-[inset_8px_8px_16px_#c8ccd1,inset_-8px_-8px_16px_#f8fcff]">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z"/></svg>
               </button>
               {/* Inset */}
               <div className="w-16 h-16 rounded-2xl bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#c8ccd1,inset_-8px_-8px_16px_#f8fcff] flex items-center justify-center relative overfow-hidden">
                  <div className="w-8 h-8 rounded-full bg-primary shadow-[0_0_15px_rgba(170,59,255,0.5)]"></div>
               </div>
             </div>
          </div>
        </PlaygroundCard>

        {/* Minimalism */}
        <PlaygroundCard
           title="Minimalist White-Space"
           description="Focuses on extreme simplicity, heavy use of white space, and impeccable typography over colors or shadows."
           prompt="Design a 'Minimalist' card using Tailwind CSS. Use high contrast (black text on pure white background). Rely on large, bold typography (text-5xl) and generous padding (p-12). Avoid any shadows or rounded corners. Use single-pixel black borders (border-black) and focus on a clean, structural layout."
        >
          <div className="w-full bg-white p-12 border border-zinc-100 flex flex-col gap-6">
             <div className="flex justify-between items-baseline border-b border-black pb-2 text-black">
                <span className="text-xs font-bold tracking-widest uppercase">Issue 01</span>
                <span className="text-xs font-medium">APRIL 2026</span>
             </div>
             <h3 className="text-5xl font-black tracking-tighter leading-none italic text-black">LESS IS MORE</h3>
             <p className="text-sm leading-relaxed max-w-xs font-medium text-zinc-900 border-l border-black pl-4">The beauty of architecture lies in the silence between the bricks.</p>
             <button className="w-fit px-8 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors">EXPLORE</button>
          </div>
        </PlaygroundCard>

        {/* Neo-brutalism */}
        <PlaygroundCard
           title="Neo-brutalism (Bold & Raw)"
           description="A vibrant, high-contrast style that breaks traditional clean UI rules with thick borders and harsh shadows."
           prompt="Create a 'Neo-brutalism' element. Use ultra-thick borders (border-4 or 8), vibrant/ugly-pretty colors (bg-yellow-300, bg-pink-400), and hard, unblurred shadows (shadow-[8px_8px_0px_#000000]). Font should be bold or heavy (font-black). Don't use transitions unless they are snappy and immediate."
        >
          <div className="p-8 bg-yellow-300 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_rgba(0,0,0,1)] transition-all">
             <div className="w-12 h-12 bg-pink-400 border-4 border-black mb-4 flex items-center justify-center text-black">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
             </div>
             <h4 className="text-2xl font-black border-b-4 border-black pb-2 mb-4 text-black">BOLD AS HELL</h4>
             <p className="font-bold text-sm mb-6 text-black">Traditional UI is boring. High contrast rules everything.</p>
             <div className="flex gap-4">
                <button className="px-4 py-2 bg-black text-white font-black hover:bg-zinc-900">DO IT</button>
                <button className="px-4 py-2 bg-white border-4 border-black font-black hover:bg-zinc-100 text-black">NOPE</button>
             </div>
          </div>
        </PlaygroundCard>

      </div>
    </div>
  );
}
