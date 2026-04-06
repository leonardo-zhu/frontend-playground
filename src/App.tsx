import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { Sparkles, Palette, Pointer, Box } from 'lucide-react';
import AnimationsPage from './pages/AnimationsPage';
import StylesPage from './pages/StylesPage';
import InteractionsPage from './pages/InteractionsPage';
import ComponentsPage from './pages/ComponentsPage';

import { useStyle, type DesignStyle } from './context/StyleContext';

function StyleSwitcher() {
  const { style: currentStyle, setStyle } = useStyle();
  
  const styles: { id: DesignStyle, label: string }[] = [
    { id: 'modern', label: 'Modern' },
    { id: 'minimalist', label: 'Minimalist' },
    { id: 'bento', label: 'Bento' },
    { id: 'brutalism', label: 'Brutalism' },
  ];

  return (
    <div className="mt-8 px-4">
      <h3 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-3 px-4">
        Playground Style
      </h3>
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
    { name: 'Styles', path: '/styles', icon: <Palette size={20} /> },
    { name: 'Interactions', path: '/interactions', icon: <Pointer size={20} /> },
    { name: 'Components', path: '/components', icon: <Box size={20} /> },
  ];

  return (
    <aside className="w-64 border-r border-border bg-surface flex flex-col h-screen fixed left-0 top-0 z-50">
      <div className="p-6">
        <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
          Playground v2
        </h1>
        <p className="text-xs text-muted-foreground mt-1">Advanced UI Reference</p>
      </div>
      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'bg-primary/10 text-primary font-medium shadow-sm'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`
            }
          >
            {item.icon}
            <span className="text-sm">{item.name}</span>
          </NavLink>
        ))}
        
        <StyleSwitcher />
      </nav>
      <div className="p-6 mt-auto">
        <div className="text-[10px] leading-relaxed text-muted-foreground bg-muted/50 p-4 rounded-xl border border-border/50">
          Tip: Switch themes above to see how existing components adapt to different design languages.
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
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
