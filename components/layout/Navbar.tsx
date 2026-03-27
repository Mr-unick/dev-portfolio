"use client";

import { motion } from "framer-motion";
import { User, Code2, Briefcase, Mail } from "lucide-react";

const navItems = [
  { name: "ABOUT", icon: <User className="w-4 h-4" />, href: "#about" },
  { name: "WORK", icon: <Briefcase className="w-4 h-4" />, href: "#work" },
  { name: "TECH", icon: <Code2 className="w-4 h-4" />, href: "#skills" },
  { name: "REACH", icon: <Mail className="w-4 h-4" />, href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="p-pill shadow-2xl scale-90 md:scale-100">
      <div className="flex items-center gap-6 md:gap-12">
        {navItems.map((item, idx) => (
          <motion.a
            key={item.href}
            href={item.href}
            whileHover={{ y: -2 }}
            className="flex items-center gap-2 md:gap-3 group"
          >
            <div className="text-[#86868b] group-hover:text-blue-600 transition-colors duration-500">
               {item.icon}
            </div>
            <span className="eng-mono text-[#1d1d1f] group-hover:text-blue-600 transition-colors duration-500 font-black text-[7px] md:text-[9px]">
              {item.name}
            </span>
          </motion.a>
        ))}
      </div>
      
      <div className="hidden md:block w-px h-6 bg-[#eef0f3]" />
      
      <div className="hidden md:flex items-center gap-4">
        <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse shadow-lg shadow-blue-500/20" />
        <span className="eng-mono text-[#86868b]">SFO // NODE_01</span>
      </div>
    </nav>
  );
}
