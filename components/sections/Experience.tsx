"use client";

import { motion } from "framer-motion";

function ExperienceTile({ exp, index }: { exp: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 1 }}
      className="studio-card flex flex-col justify-between min-h-[400px]"
    >
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-16">
          <div className="eng-mono text-[#86868b]">{exp.period}</div>
          <div className="eng-mono text-[#eef0f3] font-black text-xl">0{index + 1}</div>
        </div>
        <h4 className="text-4xl font-black text-[#1d1d1f] mb-2 tracking-[-0.05em] uppercase">{exp.role}</h4>
        <div className="eng-mono text-blue-600 font-black tracking-widest mb-10">{exp.company}</div>
        <p className="text-[#86868b] text-base max-w-[280px] leading-relaxed">
          {exp.description}
        </p>
      </div>
      
      <div className="flex items-center gap-4 mt-16">
        <div className="w-1 h-1 rounded-full bg-blue-600 animate-pulse" />
        <div className="eng-mono text-[#86868b]">STABLE NODE // CURRENT</div>
      </div>
    </motion.div>
  );
}

const history = [
  {
    company: "CSI COMPUTECH",
    role: "FULL STACK DEV",
    period: "JULY 2024 / PRESENT",
    description: "Developing and maintaining Next.js applications, building scalable APIs, and optimizing database schemas for performance."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-16 md:mb-24 px-4">
           <div className="eng-mono text-[#86868b] mb-4 md:mb-6">&bull; Professional History</div>
           <h2 className="text-5xl md:text-6xl font-black tracking-[-0.05em] text-[#1d1d1f] uppercase">Execution <br /> <span className="text-[#eef0f3]">Chain.</span></h2>
        </div>

        <div className="bento-grid">
          {history.map((h, i) => (
            <div key={i} className="col-span-1 md:col-span-12 lg:col-span-4">
               <ExperienceTile exp={h} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
