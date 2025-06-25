import React from "react";
import { ArrowRight } from "lucide-react";

const Custom404 = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-400 via-purple-600 to-indigo-900 flex items-center justify-center p-4">
      {/* Background Glass Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Shape 1 */}
        <div className="absolute top-[10%] left-[10%] w-48 h-48 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full animate-pulse"></div>
        {/* Shape 2 */}
        <div className="absolute top-[60%] right-[15%] w-32 h-32 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full animate-bounce"></div>
        {/* Shape 3 */}
        <div className="absolute bottom-[20%] left-[20%] w-40 h-40 bg-cyan-400/10 backdrop-blur-xl border border-cyan-300/20 rounded-full animate-ping"></div>
        {/* Shape 4 */}
        <div className="absolute top-[30%] right-[40%] w-24 h-24 bg-indigo-400/10 backdrop-blur-xl border border-indigo-300/20 rounded-full animate-pulse"></div>
        {/* Floating Orbs */}
        <div className="absolute top-[40%] left-[70%] w-6 h-6 bg-cyan-400 rounded-full blur-sm animate-bounce"></div>
        <div className="absolute top-[80%] left-[60%] w-4 h-4 bg-blue-400 rounded-full blur-sm animate-ping"></div>
        <div className="absolute top-[20%] left-[50%] w-8 h-8 bg-purple-400 rounded-full blur-sm animate-pulse"></div>
      </div>

      {/* Main Glass Container */}
      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 p-8 md:p-12 shadow-2xl hover:bg-white/15 transition-all duration-500">
          {/* 3D Robot Character */}
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto relative animate-bounce">
              {/* Robot Body */}
              <div className="absolute inset-0 bg-gradient-to-b from-gray-300 to-gray-500 rounded-xl transform rotate-3 shadow-2xl border-2 border-white/30">
                {/* Robot Head */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg border-2 border-white/40">
                  {/* Eyes */}
                  <div className="absolute top-3 left-2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-3 right-2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  {/* Confused expression */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-white/60 rounded-full"></div>
                </div>
                {/* Robot Arms */}
                <div className="absolute -left-4 top-4 w-3 h-12 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full animate-pulse"></div>
                <div className="absolute -right-4 top-4 w-3 h-12 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full animate-pulse"></div>
                {/* Robot Chest Panel */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded border border-white/40">
                  <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full animate-ping"></div>
                  <div className="absolute top-3 left-2 w-4 h-1 bg-white/60 rounded"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-1 bg-white/60 rounded"></div>
                </div>
              </div>
              {/* Floating question marks */}
              <div className="absolute -top-8 -right-8 text-2xl animate-bounce">
                ❓
              </div>
              <div className="absolute -top-6 -left-8 text-xl animate-pulse">
                ❓
              </div>
            </div>
          </div>
          {/* 404 Text */}
          <div className="mb-6 text-center">
            <h1 className="text-7xl md:text-8xl font-black text-white mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl">
                404
              </span>
            </h1>
          </div>
          {/* Error Message */}
          <div className="mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-wide">
              Page Not Found
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed">
              Oops! The page you're looking for seems to have wandered off into
              the digital void. Our robot friend here is just as confused as you
              are!
            </p>
          </div>
          {/* CTA Button */}
          <div className="text-center">
            <button
              onClick={() => window.history.back()}
              className="relative bg-white/15 backdrop-blur-xl border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/25 hover:scale-105 hover:shadow-2xl hover:border-cyan-300/50 active:scale-95 inline-flex items-center justify-center gap-3 group"
            >
              <span>Back to Home</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </button>
          </div>
          {/* Glass box inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-purple-600/5 rounded-3xl pointer-events-none"></div>
        </div>
      </div>
      {/* Floating particles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-60"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>
      {/* Additional Glass Elements for Depth */}
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-white/5 backdrop-blur-2xl rounded-full border border-white/10 animate-pulse"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-cyan-400/10 backdrop-blur-2xl rounded-full border border-cyan-300/20 animate-bounce"></div>
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Custom404;
