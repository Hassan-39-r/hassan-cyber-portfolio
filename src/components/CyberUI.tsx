import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface TerminalLineProps {
  text: string;
  delay?: number;
  className?: string;
}

export const TerminalLine: React.FC<TerminalLineProps> = ({ text, delay = 0, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay }}
      className={cn("font-mono text-sm flex gap-2", className)}
    >
      <span className="text-cyber-accent opacity-70">$</span>
      <span>{text}</span>
    </motion.div>
  );
};

interface CyberCardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export const CyberCard: React.FC<CyberCardProps> = ({ children, title, className }) => {
  return (
    <div className={cn("cyber-border rounded-lg overflow-hidden group transition-all hover:border-cyber-accent/40", className)}>
      {title && (
        <div className="border-bottom border-cyber-border px-4 py-2 bg-cyber-accent/5 flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-widest text-cyber-accent/80">{title}</span>
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-500/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
            <div className="w-2 h-2 rounded-full bg-green-500/50" />
          </div>
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};
