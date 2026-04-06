import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface PlaygroundCardProps {
  title: string;
  description: string;
  prompt: string;
  children: React.ReactNode;
  darkBg?: boolean;
}

export default function PlaygroundCard({ title, description, prompt, children, darkBg = false }: PlaygroundCardProps) {
  const [copied, setCopied] = useState(false);

  const copyPrompt = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group rounded-2xl overflow-hidden border border-border bg-surface shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      {/* Preview Area */}
      <div className={`relative p-8 md:p-12 mb-0 ${darkBg ? 'bg-zinc-950' : 'bg-muted/30'} flex items-center justify-center min-h-[300px] border-b border-border`}>
        {children}
        
        {/* Decorative elements to show structural preview bounds */}
        <div className="absolute top-4 left-4 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-2 h-2 rounded-full bg-red-400"></div>
          <div className="w-2 h-2 rounded-full bg-amber-400"></div>
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
        </div>
      </div>

      {/* Details & Prompt Area */}
      <div className="p-6 flex flex-col flex-1 pb-8">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-6 flex-1">{description}</p>
        
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium uppercase tracking-wider text-primary">AI Prompt</span>
            <button 
              onClick={copyPrompt}
              className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              title="Copy prompt"
            >
              {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
            </button>
          </div>
          <div className="relative group/prompt">
            <pre className="text-sm bg-muted text-foreground p-4 rounded-xl overflow-x-auto whitespace-pre-wrap font-mono border border-border/50">
              {prompt}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
