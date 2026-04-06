import React, { createContext, useContext, useState, useEffect } from 'react';

export type DesignStyle = 'modern' | 'minimalist' | 'bento' | 'brutalism';

interface StateContextType {
  style: DesignStyle;
  setStyle: (style: DesignStyle) => void;
}

const StyleContext = createContext<StateContextType | undefined>(undefined);

export function StyleProvider({ children }: { children: React.ReactNode }) {
  const [style, setStyle] = useState<DesignStyle>(() => {
    const saved = localStorage.getItem('playground-style');
    return (saved as DesignStyle) || 'modern';
  });

  useEffect(() => {
    localStorage.setItem('playground-style', style);
    // Add current style to document body for global CSS targeting
    document.body.className = `style-${style}`;
  }, [style]);

  return (
    <StyleContext.Provider value={{ style, setStyle }}>
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
