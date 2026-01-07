import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // 1. Create a GSAP Context (Crucial for React 18+)
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.project-card');
      
      cards.forEach((card) => {
        gsap.fromTo(card, 
          { 
            y: 100, 
            opacity: 0 
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%", // Starts when the top of card hits 90% of viewport
              toggleActions: "play none none reverse",
            }
          }
        );
      });
    }, containerRef); // 2. Scope selectors to this container

    return () => ctx.revert(); // 3. Cleanup: This stops animations when component unmounts
  }, []);

  return (
    <section id="projects" className="py-24 px-6 md:px-10 max-w-7xl mx-auto" ref={containerRef}>
      <p className="text-center text-xs tracking-[0.4em] opacity-40 mb-4 uppercase">✦ Selected Work ✦</p>
      <h2 className="text-4xl md:text-5xl text-center mb-20 font-light font-mono">What I've been up to</h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Project Card 1 */}
        <div className="project-card group">
          <div className="aspect-video bg-neutral-900 rounded-3xl border border-white/10 overflow-hidden relative shadow-2xl">
             <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-transparent transition-all duration-700" />
             <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-950 flex items-center justify-center">
             <img src='/assets/screencapture-localhost-5174-2026-01-06-16_59_10.jpg' className=' scale-115'/>
             </div>
          </div>
          
          <div className="mt-8 flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-mono mb-2">Tech Store E-commerce</h3>
              <p className="text-sm opacity-50 font-mono">Full-stack React application with Admin Panel. Focus on state management and responsive UI.</p>
              <div className="flex gap-3 mt-4">
                <span className="text-[10px] px-2 py-1 border border-white/10 rounded uppercase opacity-60">React</span>
                <span className="text-[10px] px-2 py-1 border border-white/10 rounded uppercase opacity-60">Redux</span>
                <span className="text-[10px] px-2 py-1 border border-white/10 rounded uppercase opacity-60">Tailwind</span>
                <span className="text-[10px] px-2 py-1 border border-white/10 rounded uppercase opacity-60">JSON</span>
                <span className="text-[10px] px-2 py-1 border border-white/10 rounded uppercase opacity-60">GSAP</span>
              </div>
            </div>
            <a href="#" className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
               <span className="text-xl">↗</span>
            </a>
          </div>
        </div>

        {/* Project Card 2 (Duplicate for layout testing) */}
        <div className="project-card group">
          <div className="aspect-video bg-neutral-900 rounded-3xl border border-white/10 overflow-hidden relative shadow-2xl">
             <div className="absolute inset-0 bg-purple-500/5 group-hover:bg-transparent transition-all duration-700" />
             <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-950 flex items-center justify-center">
                <img src='/assets/Nav Bar.png' className=' scale-100'/>
             </div>
          </div>
          
          <div className="mt-8 flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-mono mb-2">Modern Design System</h3>
              <p className="text-sm opacity-50 font-mono">A collection of reusable, animated components built with React and Tailwind css.</p>
              <div className="flex gap-3 mt-4">
                <span className="text-[10px] px-2 py-1 border border-white/10 rounded uppercase opacity-60">Tailwind CSS</span>
                <span className="text-[10px] px-2 py-1 border border-white/10 rounded uppercase opacity-60">React</span>
              </div>
            </div>
            <a href="#" className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
               <span className="text-xl">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;