"use client";

import { motion } from "framer-motion";

function StatCard({ label, value, index }: { label: string; value: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 1 }}
      className="studio-card flex flex-col justify-between min-h-[200px]"
    >
      <div className="eng-mono text-[#86868b]">{label}</div>
      <div className="text-6xl font-black text-[#1d1d1f] tracking-[-0.08em] tabular-nums uppercase">{value}</div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-16 md:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bento-grid">
          {/* Theory Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="col-span-1 md:col-span-12 lg:col-span-7 studio-card flex flex-col justify-between min-h-[400px] md:min-h-[500px]"
          >
            <div>
              <div className="eng-mono text-[#86868b] mb-8 md:mb-12">Mission / A.01</div>
              <h2 className="text-4xl md:text-6xl font-black text-[#1d1d1f] mb-8 md:mb-10 tracking-[-0.05em] leading-[0.85] uppercase">
                SCALABLE <br /> DIGITAL <br /><span className="text-[#eef0f3]">ARCHITECTURE.</span>
              </h2>
            </div>
            <p className="text-[#86868b] text-lg md:text-xl font-light leading-relaxed max-w-lg">
              Full Stack Developer with experience building scalable web applications. 
              Specialized in designing multi-tenant systems, high-performance APIs, and robust role-based authorization protocols.
            </p>
          </motion.div>

          {/* Stats Column */}
          <div className="col-span-1 md:col-span-12 lg:col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            <StatCard label="Exp Tenure" value="02 YEARS" index={0} />
            <StatCard label="Live Protos" value="05+" index={1} />
          </div>

          {/* Infrastructure Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-12 studio-card bg-blue-50 border-blue-100 py-10 shadow-none"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-blue-600 flex items-center justify-center rounded-xl shadow-xl shadow-blue-500/20">
                   <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                </div>
                <div>
                  <div className="font-bold text-[#1d1d1f] tracking-tight">Available for Production Deployment & Consultation</div>
                  <div className="eng-mono text-blue-600/60 font-black">LATENCY: 4.2ms avg response</div>
                </div>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="px-8 py-3 bg-[#1d1d1f] text-white font-bold rounded-lg shadow-xl"
              >
                REQUEST_CV
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
