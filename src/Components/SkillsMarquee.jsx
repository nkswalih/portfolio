import React from 'react';
import { 
  Figma, 
  Layers, 
  Code2, 
  Terminal, 
  Cpu, 
  Globe, 
  Database, 
  GitBranch,
  Github
} from 'lucide-react';

const skills = [
  { name: 'React.js', icon: <Code2 /> },
  { name: 'Tailwind CSS', icon: <Layers /> },
  { name: 'JavaScript', icon: <Terminal /> },
  { name: 'Git', icon: <GitBranch /> },
  { name: 'Github', icon: <Github /> },
  { name: 'Web Dev', icon: <Globe /> },
];

const SkillsMarquee = () => {
  return (
    <section id="skills" className="py-20 bg-black/40 border-y border-white/5 overflow-hidden">
      <div className="flex whitespace-nowrap">
        {/* We duplicate the list to create a seamless infinite loop */}
        <div className="flex animate-scroll gap-16 items-center">
          {skills.concat(skills).map((skill, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 opacity-30 hover:opacity-100 transition-opacity duration-500 cursor-default px-4"
            >
              <span className="text-white scale-125">{skill.icon}</span>
              <span className="text-2xl font-bold uppercase tracking-tighter font-mono">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default SkillsMarquee;