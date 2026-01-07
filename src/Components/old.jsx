import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, Github, Linkedin, Mail, ExternalLink, Code2 } from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";

gsap.registerPlugin(ScrollTrigger);

// --- Background Component ---
const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-[#050505] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,50,0.2),transparent_70%)]" />
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full opacity-20 animate-pulse-slow"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 3}px`,
            height: `${Math.random() * 3}px`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  );
};

const App = () => {
  const [chatInput, setChatInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const projectRef = useRef(null);

  // Gemini Integration
  const handleChat = async () => {
    if (!chatInput) return;
    setIsTyping(true);
    try {
      // Replace with your API Key
      const genAI = new GoogleGenerativeAI("YOUR_GEMINI_API_KEY");
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = `You are an AI assistant for Mohammed Swalih. If the user wants to email or contact him, tell them to use the contact form or email him at mswalih@example.com. User says: ${chatInput}`;
      
      const result = await model.generateContent(prompt);
      alert(result.response.text()); // Simplified for demo
    } catch (error) {
      console.error("Chat Error:", error);
    }
    setChatInput("");
    setIsTyping(false);
  };

  useEffect(() => {
    // GSAP Project Cards Animation
    const cards = gsap.utils.toArray('.project-card');
    cards.forEach((card) => {
      gsap.fromTo(card, 
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "top center",
            scrub: 1
          }
        }
      );
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen text-white font-mono selection:bg-white selection:text-black">
        <SpaceBackground />
        
        {/* Navbar */}
        <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 backdrop-blur-sm">
          <div className="text-2xl font-bold border border-white/20 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white hover:text-black transition-all cursor-pointer">
            S
          </div>
          <div className="hidden md:flex gap-8 text-sm opacity-70">
            {['Home', 'Projects', 'Skills', 'About', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:opacity-100 hover:tracking-widest transition-all">
                {item}
              </a>
            ))}
          </div>
          <button className="border border-white/20 px-4 py-2 rounded-full text-xs hover:bg-white hover:text-black transition-all">
            Resume ↗
          </button>
        </nav>

        {/* Hero Section */}
        <section id="home" className="h-screen flex flex-col items-center justify-center px-4">
          <div className="text-center mb-12">
            <span className="text-green-400 text-xs border border-green-400/30 px-3 py-1 rounded-full mb-6 inline-block">
              ● Open to opportunities
            </span>
            <h1 className="text-5xl md:text-7xl font-light mb-4">
              Hey, I'm <span className="italic font-serif">Swalih.</span>
            </h1>
            <p className="max-w-xl opacity-60 mx-auto text-sm leading-relaxed">
              Intern at Bridgeon Solutions. Building modern web applications in Kerala.
            </p>
          </div>

          {/* AI Chat Bar */}
          <div className="w-full max-w-2xl relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative flex bg-black border border-white/10 rounded-xl overflow-hidden">
              <input 
                type="text" 
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask my AI about my projects..."
                className="w-full bg-transparent px-6 py-4 outline-none text-sm"
              />
              <button 
                onClick={handleChat}
                className="px-6 border-l border-white/10 hover:bg-white hover:text-black transition-all"
              >
                {isTyping ? "..." : <Send size={18} />}
              </button>
            </div>
          </div>
        </section>

        {/* Skills Marquee (2nd Image Reference) */}
        <section id="skills" className="py-20 border-y border-white/5 bg-black/20">
          <div className="flex overflow-hidden group">
            <div className="flex animate-marquee whitespace-nowrap gap-12 py-4">
              {['React.js', 'Tailwind CSS', 'JavaScript', 'Redux', 'GSAP', 'Framer Motion', 'Node.js'].map((skill) => (
                <div key={skill} className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity cursor-default">
                  <Code2 size={24} />
                  <span className="text-xl font-bold uppercase tracking-tighter">{skill}</span>
                </div>
              ))}
            </div>
            {/* Repeat for seamless loop */}
            <div className="flex animate-marquee whitespace-nowrap gap-12 py-4 ml-12" aria-hidden="true">
              {['React.js', 'Tailwind CSS', 'JavaScript', 'Redux', 'GSAP', 'Framer Motion', 'Node.js'].map((skill) => (
                <div key={skill} className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity">
                  <Code2 size={24} />
                  <span className="text-xl font-bold uppercase tracking-tighter">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Section (3rd Image Reference) */}
        <section id="projects" className="py-32 px-8 max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <p className="text-xs opacity-50 mb-2 uppercase tracking-[0.3em]">✦ Projects ✦</p>
            <h2 className="text-4xl">What I've been up to</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="project-card group cursor-pointer">
              <div className="relative aspect-video bg-neutral-900 rounded-3xl overflow-hidden border border-white/10 mb-6 transition-transform duration-500 group-hover:scale-[0.98]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent" />
                {/* Mockup Content */}
                <div className="absolute inset-4 bg-black/40 rounded-xl border border-white/5 flex items-center justify-center">
                   <p className="text-xs opacity-40">Tech Store E-commerce Mockup</p>
                </div>
              </div>
              <h3 className="text-xl mb-2">Tech Store E-commerce</h3>
              <p className="text-sm opacity-50">Full-stack React application with Admin Panel and authentication.</p>
            </div>

            <div className="project-card group cursor-pointer">
              <div className="relative aspect-video bg-neutral-900 rounded-3xl overflow-hidden border border-white/10 mb-6 transition-transform duration-500 group-hover:scale-[0.98]">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent" />
                 <div className="absolute inset-4 bg-black/40 rounded-xl border border-white/5 flex items-center justify-center">
                   <p className="text-xs opacity-40">Portfolio UI Mockup</p>
                </div>
              </div>
              <h3 className="text-xl mb-2">Modern Design System</h3>
              <p className="text-sm opacity-50">Reusable UI components built with Tailwind and GSAP.</p>
            </div>
          </div>
        </section>

        {/* About & Experience */}
        <section id="about" className="py-32 px-8 max-w-4xl mx-auto border-t border-white/5">
           <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-2xl mb-8 uppercase tracking-widest">About Me</h2>
                <p className="opacity-60 text-sm leading-loose">
                  Based in Malappuram, Kerala. I specialize in building responsive, 
                  user-friendly interfaces. Currently honing my skills as an intern at Bridgeon Solutions.
                </p>
              </div>
              <div>
                <h2 className="text-2xl mb-8 uppercase tracking-widest">Experience</h2>
                <div className="border-l border-white/20 pl-6 py-2">
                  <p className="text-sm font-bold">Intern – Bridgeon Solutions</p>
                  <p className="text-xs opacity-40 mb-4">Current</p>
                  <ul className="text-xs opacity-60 space-y-2">
                    <li>• Worked on real-time web projects</li>
                    <li>• Fixed bugs and handled application flow</li>
                  </ul>
                </div>
              </div>
           </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="py-20 border-t border-white/5 text-center">
          <h2 className="text-4xl mb-8">Let's Connect</h2>
          <div className="flex justify-center gap-6 mb-12">
            <a href="#" className="p-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all"><Github size={20} /></a>
            <a href="#" className="p-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all"><Linkedin size={20} /></a>
            <a href="mailto:mswalih@example.com" className="p-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all"><Mail size={20} /></a>
          </div>
          <p className="text-[10px] opacity-30 tracking-[0.5em] uppercase">© 2024 Mohammed Swalih • Crafted with React & GSAP</p>
        </footer>
      </div>
      
      {/* Global CSS for Marquee */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}} />
    </Router>
  );
};

export default App;