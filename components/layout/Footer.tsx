export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 md:py-32 px-4 md:px-6 border-t border-[#eef0f3]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-[#1d1d1f] flex items-center justify-center rounded-lg shadow-xl shadow-black/10">
             <div className="w-2 h-2 bg-white rounded-full" />
          </div>
          <span className="eng-mono text-[#1d1d1f]">NIKHIL.LENDE / {currentYear}</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          <a href="#" className="eng-mono text-[#86868b] hover:text-blue-600 transition-colors duration-500">GIT_ARCHIVE</a>
          <a href="#" className="eng-mono text-[#86868b] hover:text-blue-600 transition-colors duration-500">LI_NODE</a>
        </div>

        <p className="eng-mono text-[#eef0f3] italic font-black text-center md:text-right">
          v0.2.2 / STUDIO_PAPER_PROTOCOL
        </p>
      </div>
    </footer>
  );
}
