"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

function ProjectCard({ project, className = "" }: { project: any; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`studio-card group flex flex-col justify-between ${className}`}
    >
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-12">
          <div className="eng-mono text-[#86868b]">Record / {project.id}</div>
          <div className="flex gap-4">
             <Github className="w-4 h-4 text-[#86868b] hover:text-[#1d1d1f] transition-colors cursor-pointer" />
             <ExternalLink className="w-4 h-4 text-[#86868b] hover:text-[#1d1d1f] transition-colors cursor-pointer" />
          </div>
        </div>
        <h3 className="text-4xl font-bold text-[#1d1d1f] mb-6 tracking-tighter group-hover:text-blue-600 transition-colors uppercase">
          {project.title}
        </h3>
        <p className="text-[#86868b] text-lg font-light mb-10 max-w-sm leading-relaxed">
          {project.description}
        </p>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-10">
        {project.tags.map((tag: string) => (
          <span key={tag} className="eng-mono border border-[#eef0f3] bg-[#f9f9fb] px-3 py-1 rounded-full text-[8px] text-[#1d1d1f]">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

const projects = [
  {
    id: "P.01",
    title: "AMS CENTRAL",
    description: "A centralized activity monitoring platform deployed across 800+ locations to track operational data in real-time.",
    tags: ["React.js", "Node.js", "Oracle"],
    featured: true
  },
  {
    id: "P.02",
    title: "IMPSONE",
    description: "Dairy supply chain management system processing milk procurement transactions with 30+ Bulks and 1000+ agents.",
    tags: ["React.js", "TypeORM", "MySQL"],
    featured: false
  },
  {
    id: "P.03",
    title: "RetailOne",
    description: "Inventory and retail management system handling product movement from warehouse to store and customer.",
    tags: ["Laravel", "Vue.js"],
    featured: false
  },
  {
    id: "P.04",
    title: "Fuelize",
    description: "E-commerce platform for on-demand fuel delivery, supporting product ordering and order tracking.",
    tags: ["Laravel", "Vue.js"],
    featured: false
  },
  {
    id: "P.05",
    title: "Multi-Tenant CRM",
    description: "A multi-tenant platform for lead management, sales pipeline tracking, and role-based access control.",
    tags: ["Next.js", "Tailwind CSS", "MySQL"],
    featured: true
  }
];

export default function Projects() {
  return (
    <section id="work" className="py-16 md:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 md:mb-24 px-4">
           <div>
             <div className="eng-mono text-[#86868b] mb-4 md:mb-6">&bull; Selected Case Studies</div>
             <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-[#1d1d1f] uppercase px-0">Production <br /><span className="text-[#eef0f3]">Protocols.</span></h2>
           </div>
           <div className="hidden md:block eng-mono text-[#86868b]">RECORDS // 2024-2026</div>
        </div>

        <div className="bento-grid">
          {projects.map((p, i) => (
            <ProjectCard 
              key={p.id} 
              project={p} 
              className={p.featured 
                ? `${p.id === 'P.01' ? 'bg-blue-50/50' : 'bg-violet-50/50'} col-span-1 md:col-span-12 lg:col-span-8 min-h-[400px] md:min-h-[440px]` 
                : "col-span-1 md:col-span-12 lg:col-span-4 min-h-[400px] md:min-h-[440px]"} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
