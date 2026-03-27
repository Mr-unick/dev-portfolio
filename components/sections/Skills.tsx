"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Database, Layout, Wrench, Cpu } from "lucide-react";

function SkillTile({ skill, index }: { skill: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className={`studio-card flex flex-col justify-between min-h-[300px] ${skill.bg}`}
    >
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-12">
          <div className="eng-mono text-[#86868b]">{skill.category} / S.0{index + 1}</div>
          <motion.div 
            whileHover={{ rotate: 12, scale: 1.1 }}
            className={`p-5 rounded-2xl ${skill.iconBg} ${skill.color} shadow-lg`}
          >
             {skill.icon}
          </motion.div>
        </div>
        <h4 className="text-3xl font-black text-[#1d1d1f] tracking-[-0.05em] mb-4 uppercase leading-none">{skill.title}</h4>
        <p className="text-[#86868b] text-sm max-w-[200px] leading-relaxed font-medium">{skill.highlights}</p>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-12">
        {skill.items.map((it: string) => (
          <span key={it} className="eng-mono border border-[#eef0f3] bg-white/50 px-3 py-1.5 rounded-lg text-[8px] text-[#1d1d1f] shadow-sm">
            {it}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

const skillEcosystem = [
  {
    category: "Languages",
    title: "CODE.PROTOCOLS",
    bg: "bg-amber-50/20",
    iconBg: "bg-amber-100",
    icon: <Zap className="w-5 h-5" />,
    color: "text-amber-600",
    highlights: "Building core logic with modern scripting and statically typed languages.",
    items: ["JavaScript", "TypeScript"]
  },
  {
    category: "Frontend",
    title: "VIRTUAL.DOM",
    bg: "bg-blue-50/20",
    iconBg: "bg-blue-100",
    icon: <Layout className="w-5 h-5" />,
    color: "text-blue-600",
    highlights: "Crafting reactive, high-performance user interfaces and SPAs.",
    items: ["React.js", "Next.js", "Vue.js", "Tailwind CSS"]
  },
  {
    category: "Backend",
    title: "SERVER.NODE",
    bg: "bg-emerald-50/20",
    iconBg: "bg-emerald-100",
    icon: <Shield className="w-5 h-5" />,
    color: "text-emerald-600",
    highlights: "Designing high-scale APIs and multi-tenant backend architectures.",
    items: ["Node.js", "Express.js", "Laravel", "TypeORM"]
  },
  {
    category: "Database",
    title: "DATA.SCHEMA",
    bg: "bg-purple-50/20",
    iconBg: "bg-purple-100",
    icon: <Database className="w-5 h-5" />,
    color: "text-purple-600",
    highlights: "Managing high-availability databases and relational data schemas.",
    items: ["MySQL", "MongoDB", "Oracle"]
  },
  {
    category: "Tools",
    title: "DEV.ENV",
    bg: "bg-rose-50/20",
    iconBg: "bg-rose-100",
    icon: <Wrench className="w-5 h-5" />,
    color: "text-rose-600",
    highlights: "Deployment, server management, and version control tools.",
    items: ["Git", "PM2", "Nginx", "VPS Deployment"]
  },
  {
    category: "Concepts",
    title: "SYSTEM.ARCH",
    bg: "bg-slate-50/20",
    iconBg: "bg-slate-100",
    icon: <Cpu className="w-5 h-5" />,
    color: "text-slate-600",
    highlights: "Core engineering principles for scalable and secure applications.",
    items: ["REST APIs", "Multi-tenant", "RBAC"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-16 md:mb-24 px-4 text-center items-center">
           <div className="eng-mono text-[#86868b] mb-4 md:mb-6">&bull; Technical Ecosystem</div>
           <h2 className="text-5xl md:text-6xl font-black tracking-[-0.05em] text-[#1d1d1f] uppercase px-0">
             THE <span className="gradient-text">TOOLCHAIN.</span>
           </h2>
        </div>

        <div className="bento-grid">
          {skillEcosystem.map((s, idx) => (
            <div key={idx} className="col-span-1 md:col-span-6 lg:col-span-4">
               <SkillTile skill={s} index={idx} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
