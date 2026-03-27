"use client";

import { motion } from "framer-motion";
import { Send, Twitter, Github, Mail } from "lucide-react";

function ContactLink({ icon, label, href, index }: { icon: any; label: string; href: string; index: number }) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 1 }}
      className="studio-card flex flex-col items-center justify-center gap-6 group hover:bg-[#1d1d1f] hover:text-white"
    >
      <div className="p-4 rounded-full bg-[#f9f9fb] border border-[#eef0f3] group-hover:bg-white/10 group-hover:border-white/20">
        {icon}
      </div>
      <div className="eng-mono opacity-40 group-hover:opacity-100">{label}</div>
    </motion.a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bento-grid">
          {/* Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-12 lg:col-span-8 studio-card min-h-[500px] flex flex-col justify-between"
          >
            <div>
              <div className="eng-mono text-[#86868b] mb-12">Inquiry / C.01</div>
              <h2 className="text-4xl md:text-6xl font-black text-[#1d1d1f] mb-20 tracking-tighter uppercase">ARCHITECT <br /><span className="#eef0f3">FUTURE.</span></h2>
              
              <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div className="border-b border-[#eef0f3] pb-4 focus-within:border-[#1d1d1f] transition-colors">
                      <div className="eng-mono text-[#86868b] mb-2">FULL_NAME</div>
                      <input type="text" className="w-full bg-transparent text-xl font-bold text-[#1d1d1f] outline-none placeholder-[#eef0f3]" placeholder="DOE / STUDIO" />
                   </div>
                   <div className="border-b border-[#eef0f3] pb-4 focus-within:border-[#1d1d1f] transition-colors">
                      <div className="eng-mono text-[#86868b] mb-2">ELECTRONIC_MAIL</div>
                      <input type="email" className="w-full bg-transparent text-xl font-bold text-[#1d1d1f] outline-none placeholder-[#eef0f3]" placeholder="DOE@ARCH.IO" />
                   </div>
                </div>
                <div className="border-b border-[#eef0f3] pb-4 focus-within:border-[#1d1d1f] transition-colors">
                   <div className="eng-mono text-[#86868b] mb-2">MANIFESTO_INPUT</div>
                   <textarea rows={4} className="w-full bg-transparent text-xl font-bold text-[#1d1d1f] outline-none placeholder-[#eef0f3] resize-none" placeholder="ARCHITECTURAL GOALS..." />
                </div>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 px-12 py-5 bg-[#1d1d1f] text-white font-black uppercase text-sm tracking-widest rounded-xl shadow-2xl"
                >
                  SEND_TRANSMISSION
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Links */}
          <div className="col-span-1 md:col-span-12 lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-6">
            <ContactLink icon={<Github className="w-6 h-6" />} label="GIT_ARCHIVE" href="#" index={0} />
            <ContactLink icon={<Twitter className="w-6 h-6" />} label="STREAMS" href="#" index={1} />
            <ContactLink icon={<Mail className="w-6 h-6" />} label="DIRECT" href="#" index={2} />
          </div>
        </div>
      </div>
    </section>
  );
}
