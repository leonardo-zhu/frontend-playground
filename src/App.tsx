import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { Sparkles, Palette, Pointer, Box, Layout, Sun, Moon } from 'lucide-react';
import AnimationsPage from './pages/AnimationsPage';
import StylesPage from './pages/StylesPage';
import InteractionsPage from './pages/InteractionsPage';
import ComponentsPage from './pages/ComponentsPage';
import PagesPage from './pages/PagesPage';
import { useStyle, type DesignStyle } from './context/StyleContext';

function StyleSwitcher() {
  const { style: currentStyle, setStyle, mode, toggleMode } = useStyle();
  
  const styles: { id: DesignStyle, label: string }[] = [
    { id: 'modern', label: 'Modern' },
    { id: 'minimalist', label: 'Minimalist' },
    { id: 'bento', label: 'Bento' },
    { id: 'brutalism', label: 'Brutalism' },
  ];

  return (
    <div className="mt-8 px-4">
      <div className="flex items-center justify-between mb-3 px-4">
        <h3 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
          Appearance
        </h3>
        <button 
          onClick={toggleMode}
          className="p-1.5 rounded-lg bg-muted hover:bg-muted-foreground/10 transition-colors text-muted-foreground"
          title={`Switch to ${mode === 'light' ? 'Dark' : 'Light'} mode`}
        >
          {mode === 'light' ? <Moon size={14} /> : <Sun size={14} />}
        </button>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {styles.map((s) => (
          <button
            key={s.id}
            onClick={() => setStyle(s.id)}
            className={`text-xs py-2 px-3 rounded-lg border transition-all ${
              currentStyle === s.id 
                ? 'bg-primary text-white border-primary shadow-sm' 
                : 'bg-surface text-muted-foreground border-border hover:border-muted-foreground/30'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function Sidebar() {
  const navItems = [
    { name: 'Animations', path: '/animations', icon: <Sparkles size={20} /> },
    { name: 'Presets', path: '/styles', icon: <Palette size={20} /> },
    { name: 'Interactions', path: '/interactions', icon: <Pointer size={20} /> },
    { name: 'Components', path: '/components', icon: <Box size={20} /> },
    { name: 'Pages', path: '/pages', icon: <Layout size={20} /> },
  ];

  return (
    <aside className="w-64 flex flex-col h-screen fixed left-0 top-0 z-50 bg-[var(--sidebar-bg)] border-r border-[var(--sidebar-border)] transition-all duration-500 overflow-hidden">
      <div className="p-8">
        <h1 className="text-2xl font-black bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent tracking-tighter">
          PLAYGROUND
        </h1>
        <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground mt-1 opacity-70">Design System V2</p>
      </div>
      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                isActive
                  ? 'bg-primary text-white font-bold shadow-lg shadow-primary/20 scale-[1.02]'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`
            }
          >
            {item.icon}
            <span className="text-sm font-semibold">{item.name}</span>
          </NavLink>
        ))}
        
        <StyleSwitcher />
      </nav>
      <div className="p-6 mt-auto">
        <div className="text-[11px] leading-relaxed text-muted-foreground bg-muted/30 p-5 rounded-2xl border border-border/50 backdrop-blur-sm">
          <span className="font-bold text-foreground">Global Engine:</span> Switching styles redefines the entire application UI, including layout, motion, and typography.
        </div>
      </div>
    </aside>
  );
}

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-background font-sans text-foreground">
        <Sidebar />
        <main className="flex-1 ml-64 p-8 md:p-12">
          <div className="max-w-6xl mx-auto">
            <Routes>
              <Route path="/" element={<Navigate to="/animations" replace />} />
              <Route path="/animations" element={<AnimationsPage />} />
              <Route path="/styles" element={<StylesPage />} />
              <Route path="/interactions" element={<InteractionsPage />} />
              <Route path="/components" element={<ComponentsPage />} />
              <Route path="/pages" element={<PagesPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
