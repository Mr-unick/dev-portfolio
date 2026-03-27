"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight, Activity, Terminal } from "lucide-react";

function SystemCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`studio-card ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-US", { 
        hour12: false, 
        hour: "2-digit", 
        minute: "2-digit",
        second: "2-digit"
      }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-12 pb-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bento-grid">
          {/* Headline Tile */}
          <SystemCard className="col-span-1 md:col-span-12 lg:col-span-8 flex flex-col justify-between min-h-[400px] md:min-h-[500px]">
            <div>
              <div className="flex items-center gap-4 mb-12 md:mb-20">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1d1d1f] flex items-center justify-center rounded-2xl shadow-xl shadow-black/5">
                   <Terminal className="text-white w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <div className="eng-mono">System Identity Layer</div>
                  <div className="text-blue-600 text-[10px] font-bold uppercase tracking-tight">Access establish: NIKHIL_LENDE</div>
                </div>
              </div>
              <h1 className="text-4xl md:text-8xl font-black tracking-[-0.05em] leading-[0.85] text-[#1d1d1f] uppercase px-0">
                NIKHIL.LENDE <br />
                <span className="text-[#86868b]">FULLSTACK</span> <br />
                <span className="gradient-text">DEVELOPER</span>
              </h1>
            </div>
            <div className="flex justify-between items-end mt-12 md:mt-20">
              <p className="text-body max-w-sm text-[#86868b] text-base md:text-lg">
                Building scalable web applications and multi-tenant systems with a focus on modern JavaScript and backend architecture.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 md:w-16 md:h-16 bg-[#1d1d1f] rounded-full flex items-center justify-center text-white shadow-2xl"
              >
                <ArrowUpRight className="w-6 h-6" />
              </motion.button>
            </div>
          </SystemCard>

          {/* Right Column */}
          <div className="col-span-1 md:col-span-12 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            <SystemCard className="flex flex-col justify-between min-h-[220px] md:min-h-[240px]">
              <div className="eng-mono">System Clock / UTC</div>
              <div className="text-5xl md:text-6xl font-black tracking-tighter text-[#1d1d1f] tabular-nums">
                {time || "00:00:00"}
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-3 h-3 text-blue-600 animate-pulse" />
                <span className="eng-mono text-[#86868b]">Node Status: ACTIVE</span>
              </div>
            </SystemCard>

            <SystemCard className="flex flex-col justify-between min-h-[220px] md:min-h-[240px] bg-[#1d1d1f] text-white border-none shadow-2xl">
              <div className="eng-mono text-white/40">Core Specialization</div>
              <div className="text-4xl font-black tracking-[-0.05em] leading-none uppercase">SaaS <br /> ARCHITECTURE</div>
              <div className="eng-mono text-white/60 font-black italic">PROD-READY // 2024-2026</div>
            </SystemCard>
          </div>
        </div>
      </div>
    </section>
  );
}
