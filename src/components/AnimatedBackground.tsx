
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-violet-50/30 to-blue-100/50 dark:from-slate-900/50 dark:via-violet-900/30 dark:to-slate-800/50" />
      
      {/* Floating Glassmorphic Shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-violet-400/20 rounded-full backdrop-blur-sm border border-white/20 animate-bounce" 
           style={{ animationDuration: '6s', animationDelay: '0s' }} />
      
      <div className="absolute top-32 right-20 w-24 h-24 bg-gradient-to-br from-violet-400/25 to-blue-400/25 rounded-2xl backdrop-blur-sm border border-white/20 animate-pulse" 
           style={{ animationDuration: '4s', animationDelay: '1s' }} />
      
      <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-br from-blue-300/30 to-violet-300/30 rounded-full backdrop-blur-sm border border-white/20 animate-bounce" 
           style={{ animationDuration: '5s', animationDelay: '2s' }} />
      
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-gradient-to-br from-violet-300/35 to-blue-300/35 rounded-xl backdrop-blur-sm border border-white/20 animate-pulse" 
           style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
      
      <div className="absolute bottom-32 right-1/3 w-28 h-28 bg-gradient-to-br from-blue-400/20 to-violet-400/20 rounded-3xl backdrop-blur-sm border border-white/20 animate-bounce" 
           style={{ animationDuration: '7s', animationDelay: '1.5s' }} />
      
      {/* Glowing Spheres */}
      <div className="absolute top-16 left-1/3 w-12 h-12 bg-blue-400/40 rounded-full blur-sm animate-pulse" 
           style={{ animationDuration: '2s' }} />
      
      <div className="absolute bottom-16 right-1/4 w-8 h-8 bg-violet-400/50 rounded-full blur-sm animate-pulse" 
           style={{ animationDuration: '3s', animationDelay: '1s' }} />
      
      <div className="absolute top-1/3 right-1/2 w-6 h-6 bg-blue-300/60 rounded-full blur-sm animate-pulse" 
           style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
      
      {/* Liquid Blob Shapes */}
      <div className="absolute top-24 left-1/2 w-40 h-20 bg-gradient-to-r from-blue-400/15 to-violet-400/15 rounded-full backdrop-blur-sm border border-white/10 animate-bounce" 
           style={{ 
             animationDuration: '8s', 
             animationDelay: '2s',
             borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' 
           }} />
      
      <div className="absolute bottom-1/4 left-20 w-36 h-24 bg-gradient-to-l from-violet-400/20 to-blue-400/20 backdrop-blur-sm border border-white/10 animate-pulse" 
           style={{ 
             animationDuration: '6s', 
             animationDelay: '3s',
             borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%' 
           }} />
      
      {/* Depth Effect Layers */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 dark:to-slate-900/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10 dark:to-slate-800/30" />
      
      {/* Subtle Light Rays */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-blue-400/30 to-transparent animate-pulse" 
           style={{ animationDuration: '4s', animationDelay: '1s' }} />
      
      <div className="absolute top-0 right-1/3 w-px h-24 bg-gradient-to-b from-violet-400/40 to-transparent animate-pulse" 
           style={{ animationDuration: '3s', animationDelay: '2s' }} />
    </div>
  );
};

export default AnimatedBackground;
