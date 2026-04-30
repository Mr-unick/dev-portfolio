import type { IconType } from "react-icons";
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiVuedotjs,
  SiTailwindcss, SiHtml5, SiCss, SiChartdotjs, SiSwiper,
  SiNodedotjs, SiExpress, SiLaravel, SiPhp, SiMysql, SiMongodb,
  SiGit, SiGithub, SiNginx, SiVercel, SiLinux,
  SiPrisma, SiZod, SiReacthookform, SiReactquery, SiCloudinary, SiTypeorm,
} from "react-icons/si";

type TechMeta = { icon: IconType; color: string };

export const techMeta: Record<string, TechMeta> = {
  "JavaScript":               { icon: SiJavascript,    color: "#F7DF1E" },
  "TypeScript":               { icon: SiTypescript,    color: "#3178C6" },
  "React.js":                 { icon: SiReact,         color: "#61DAFB" },
  "Next.js":                  { icon: SiNextdotjs,     color: "#111111" },
  "Vue.js":                   { icon: SiVuedotjs,      color: "#4FC08D" },
  "Tailwind CSS":             { icon: SiTailwindcss,   color: "#06B6D4" },
  "HTML5":                    { icon: SiHtml5,         color: "#E34F26" },
  "CSS3":                     { icon: SiCss,           color: "#1572B6" },
  "Chart.js":                 { icon: SiChartdotjs,    color: "#FF6384" },
  "React ChartJS 2":          { icon: SiChartdotjs,    color: "#FF6384" },
  "Swiper.js":                { icon: SiSwiper,        color: "#6332F6" },
  "Node.js":                  { icon: SiNodedotjs,     color: "#339933" },
  "Express.js":               { icon: SiExpress,       color: "#444444" },
  "Laravel":                  { icon: SiLaravel,       color: "#FF2D20" },
  "PHP":                      { icon: SiPhp,           color: "#777BB4" },
  "MySQL":                    { icon: SiMysql,         color: "#4479A1" },
  "MongoDB":                  { icon: SiMongodb,       color: "#47A248" },
  "Git":                      { icon: SiGit,           color: "#F05032" },
  "GitHub":                   { icon: SiGithub,        color: "#181717" },
  "Nginx":                    { icon: SiNginx,         color: "#009639" },
  "Vercel Deployment":        { icon: SiVercel,        color: "#111111" },
  "Linux Server Management":  { icon: SiLinux,         color: "#D4A017" },
  "Prisma":                   { icon: SiPrisma,        color: "#2D3748" },
  "Zod":                      { icon: SiZod,           color: "#3E67B1" },
  "React Hook Form":          { icon: SiReacthookform, color: "#EC5990" },
  "TanStack Query":           { icon: SiReactquery,    color: "#FF4154" },
  "Cloudinary":               { icon: SiCloudinary,    color: "#3448C5" },
  "TypeORM":                  { icon: SiTypeorm,       color: "#E83524" },
};

export function TechPill({ name }: { name: string }) {
  const meta = techMeta[name];

  if (meta) {
    const Icon = meta.icon;
    return (
      <span
        className="eng-mono flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[8px] font-semibold shadow-sm border"
        style={{
          color: meta.color,
          backgroundColor: `${meta.color}12`,
          borderColor: `${meta.color}30`,
        }}
      >
        <Icon style={{ color: meta.color, width: 10, height: 10, flexShrink: 0 }} />
        {name}
      </span>
    );
  }

  return (
    <span className="eng-mono border border-[#eef0f3] bg-white/50 px-3 py-1.5 rounded-lg text-[8px] text-[#1d1d1f] shadow-sm">
      {name}
    </span>
  );
}
