import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type DesignStyle = 'modern' | 'minimalist' | 'bento' | 'brutalism';
export type ColorMode = 'light' | 'dark';

interface StateContextType {
  style: DesignStyle;
  setStyle: (style: DesignStyle) => void;
  mode: ColorMode;
  toggleMode: () => void;
}

const StyleContext = createContext<StateContextType | undefined>(undefined);

export function StyleProvider({ children }: { children: ReactNode }) {
  const [style, setStyle] = useState<DesignStyle>(() => {
    const saved = localStorage.getItem('playground-style');
    return (saved as DesignStyle) || 'modern';
  });

  const [mode, setMode] = useState<ColorMode>(() => {
    const saved = localStorage.getItem('playground-mode');
    if (saved) return saved as ColorMode;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const toggleMode = () => setMode(m => (m === 'light' ? 'dark' : 'light'));

  useEffect(() => {
    localStorage.setItem('playground-style', style);
    localStorage.setItem('playground-mode', mode);
    
    // Update body classes for global styling
    // We use 'dark' class on HTML for tailwind support, plus custom style classes on body
    document.documentElement.className = mode === 'dark' ? 'dark' : '';
    document.body.className = `style-${style}`;
  }, [style, mode]);

  return (
    <StyleContext.Provider value={{ style, setStyle, mode, toggleMode }}>
      {children}
    </StyleContext.Provider>
  );
}

export function useStyle() {
  const context = useContext(StyleContext);
  if (context === undefined) {
    throw new Error('useStyle must be used within a StyleProvider');
  }
  return context;
}
