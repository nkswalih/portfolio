import React from 'react';
import { Github, Linkedin, Twitter, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative py-20 px-8 border-t border-white/10 bg-black overflow-hidden">
      {/* Subtle Space Glow in Footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-blue-500/10 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        <div className="text-center">
          <h2 className="text-3xl font-light mb-4 tracking-tighter">Let's build something together.</h2>
          <p className="opacity-40 text-sm">swalink555@gmail.com</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-8">
          {[
            { icon: <Github />, link: 'https://github.com/nkswalih' },
            { icon: <Linkedin />, link: 'https://www.linkedin.com/in/mohammedswalihnk/' },
            // { icon: <Twitter />, link: '#' },
            { icon: <Instagram />, link: '#' }
          ].map((social, i) => (
            <a
              key={i}
              href={social.link}
              target=' _blank'
              className="p-3 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:-translate-y-2"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
          <p className="text-[10px] opacity-30 uppercase tracking-[0.4em]">
            © 2026 Mohammed Swalih • Malappuram, Kerala
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity"
          >
            Back to top <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;