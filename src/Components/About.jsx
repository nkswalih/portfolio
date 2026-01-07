import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, GraduationCap, Briefcase, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate titles
      gsap.from(".about-title", {
        scrollTrigger: {
          trigger: ".about-title",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      // Animate content blocks
      gsap.from(".about-item", {
        scrollTrigger: {
          trigger: ".about-item",
          start: "top 85%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out"
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  // const strengths = [
  //   "Problem-solving", 
  //   "Strong Debugging", 
  //   "Quick Learner", 
  //   "Honest & Hardworking", 
  //   "Communication"
  // ];

  return (
    <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5" ref={aboutRef}>
      <div className="grid lg:grid-cols-2 gap-20">
        
        {/* Left Side: Bio & Education */}
        <div className="space-y-12">
          <div>
            <p className="about-title text-xs tracking-[0.5em] opacity-40 mb-4 uppercase">✦ The Story ✦</p>
            <h2 className="about-title text-4xl font-light mb-8">Building digital <br/> experiences from Kerala.</h2>
            <div className="about-item space-y-6 opacity-60 leading-loose text-sm">
              <p>
                Hello, I’m <span className="text-white border-b border-white/20">Mohammed Swalih</span>, 
                based in Tirur, Malappuram. I've always been fascinated by how code turns logic 
                into visual reality.
              </p>
              <div className="flex items-start gap-4 text-xs">
                <MapPin size={18} className="text-blue-400 mt-1" />
                <span>Available for remote work or local opportunities in Kerala.</span>
              </div>
              <div className="flex items-start gap-4 text-xs">
                <GraduationCap size={18} className="text-purple-400 mt-1" />
                <span>CS Higher Secondary - SMM Rayirirmangalam, Tanur.</span>
              </div>
            </div>
          </div>

          {/* Strengths Grid */}
          {/* <div className="about-item pt-8">
            <h3 className="text-xs tracking-[0.3em] opacity-40 mb-6 uppercase">Core Strengths</h3>
            <div className="grid grid-cols-2 gap-4">
              {strengths.map((s, i) => (
                <div key={i} className="flex items-center gap-2 text-[11px] border border-white/5 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
                  <CheckCircle2 size={14} className="text-green-400" />
                  {s}
                </div>
              ))}
            </div>
          </div> */}
        </div>

        {/* Right Side: Experience Section */}
        <div className="relative">
          <p className="about-title text-xs tracking-[0.5em] opacity-40 mb-8 uppercase">✦ Experience ✦</p>
          
          <div className="about-item relative pl-8 border-l border-white/10">
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
            
            <div className="mb-2 flex justify-between items-start">
              <div>
                <h4 className="text-xl font-bold">Intern – Bridgeon Solutions</h4>
                <p className="text-sm text-blue-400 font-medium">Full Stack Development</p>
              </div>
              <span className="text-[10px] py-1 px-3 bg-white/5 border border-white/10 rounded-full opacity-60">
                2024 - PRESENT
              </span>
            </div>

            <div className="mt-6 space-y-4 opacity-50 text-xs leading-relaxed">
              <p>Currently gaining practical experience in building modern web applications. Learning real-world development workflows and teamwork.</p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-white">→</span>
                  Built responsive and user-friendly interfaces using React & Tailwind.
                </li>
                <li className="flex gap-3">
                  <span className="text-white">→</span>
                  Handled real-time project bugs and improved application flow.
                </li>
                <li className="flex gap-3">
                  <span className="text-white">→</span>
                  Collaborating with senior developers to write cleaner, reusable code.
                </li>
              </ul>
            </div>
          </div>

          {/* Background Decorative Element */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-600/5 blur-[100px] rounded-full -z-10" />
        </div>

      </div>
    </section>
  );
};

export default About;