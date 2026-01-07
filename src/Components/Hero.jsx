// import React, { useState } from 'react';
// import { Send, Sparkles } from 'lucide-react';
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const Hero = () => {
//   const [chatInput, setChatInput] = useState("");
//   const [aiReply, setAiReply] = useState("");
//   const [loading, setLoading] = useState(false);

//   const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

//   const handleChat = async () => {
//     if (!chatInput) return;
//     setLoading(true);
//     setAiReply(""); 

//     try {
//       const genAI = new GoogleGenerativeAI(API_KEY);
//       const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      
//       const prompt = `You are an AI for Mohammed Swalih, a developer from Kerala. 
//       Answer this shortly: ${chatInput}. 
//       If they ask about contact, say email him at your-email@gmail.com.`;

//       const result = await model.generateContent(prompt);
//       const response = await result.response;
//       setAiReply(response.text());
//     } catch (error) {
//       setAiReply("System busy. Try again later!");
//     } finally {
//       setLoading(false);
//       setChatInput("");
//     }
//   };

//   return (
//     <section id="home" className="h-screen flex flex-col items-center justify-center px-6 relative">
//       <div className="text-center mb-10">
//         <span className="text-green-400 text-xs border border-green-400/30 px-3 py-1 rounded-full mb-6 inline-block">
//               ● Open to opportunities
//             </span>
//         <h1 className="text-5xl md:text-7xl font-light mb-4">
//               Hey, I'm <span className="italic font-serif">Swalih.</span>
//             </h1>
//         <p className="opacity-50 text-sm tracking-widest uppercase">React Developer • Intern at Bridgeon</p>
//       </div>

//       <div className="w-full max-w-xl relative">
//         {/* AI Reply Bubble */}
//         {aiReply && (
//           <div className="absolute -top-20 left-0 right-0 bg-white/5 border border-white/10 p-3 rounded-2xl backdrop-blur-md text-xs animate-in fade-in slide-in-from-bottom-2">
//             <span className="text-blue-400 font-bold">AI: </span> {aiReply}
//           </div>
//         )}
//         <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
//         <div className="relative flex bg-neutral-900/90 border border-white/10 rounded-2xl p-1 shadow-2xl">
//           <input 
//             className="w-full bg-transparent px-5 py-4 outline-none text-sm font-mono"
//             placeholder="Ask my AI anything..."
//             value={chatInput}
//             onChange={(e) => setChatInput(e.target.value)}
//             onKeyPress={(e) => e.key === 'Enter' && handleChat()}
//           />
//           <button 
//             onClick={handleChat}
//             disabled={loading}
//             className="bg-white text-black px-6 rounded-xl hover:bg-neutral-200 transition-all flex items-center gap-2"
//           >
//             {loading ? "..." : <Send size={16} />}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Hero = () => {
  const [chatInput, setChatInput] = useState("");
  const [aiReply, setAiReply] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChat = async () => {
    if (!chatInput.trim()) return;
    
    setLoading(true);
    setAiReply("");

    try {
      // Direct API call - working version
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer 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`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'https://yourportfolio.com', // Change this to your domain
          'X-Title': 'Swalih Portfolio'
        },
        body: JSON.stringify({
          model: "meta-llama/llama-3.2-3b-instruct:free", // More reliable model
          messages: [
            {
              role: "system",
              content: "You are an AI assistant for Mohammed Swalih, a React developer from Kerala, India. Keep answers concise (1-2 sentences). If asked about contact, say to email at swalink555@gmail.com. If asked about skills, mention React, JavaScript, and modern web development."
            },
            {
              role: "user",
              content: chatInput
            }
          ]
        })
      });

      console.log('Response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error:', errorText);
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      console.log('API Response:', data);
      
      if (data.choices && data.choices[0]?.message?.content) {
        setAiReply(data.choices[0].message.content);
      } else {
        setAiReply("Sorry, I couldn't generate a response. Try asking something else!");
      }
    } catch (error) {
      console.error('Full error:', error);
      setAiReply("Hmm, I'm having trouble connecting. Please check your connection and try again.");
    } finally {
      setLoading(false);
      setChatInput("");
    }
  };

  // Alternative: Simple test function
  const testConnection = async () => {
    setLoading(true);
    try {
      const testResponse = await fetch('https://openrouter.ai/api/v1/models');
      const models = await testResponse.json();
      console.log('Available models:', models);
      setAiReply("✅ Connected to OpenRouter! " + models.data?.length + " models available.");
    } catch (error) {
      console.error('Connection test failed:', error);
      setAiReply("❌ Connection failed. Check CORS or try a different model.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="home" className="h-screen flex flex-col items-center justify-center px-6 relative">
      <div className="text-center mb-10">
        <span className="text-green-400 text-xs border border-green-400/30 px-3 py-1 rounded-full mb-6 inline-block">
          ● Open to opportunities
        </span>
        <h1 className="text-5xl md:text-7xl font-light mb-4">
          Hey, I'm <span className="italic font-serif">Swalih.</span>
        </h1>
        <p className="opacity-50 text-sm tracking-widest uppercase">React Developer • Intern at Bridgeon</p>
      </div>

      <div className="w-full max-w-xl relative">
        {/* AI Reply Bubble */}
        {aiReply && (
          <div className="absolute -top-28 left-0 right-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 p-4 rounded-2xl backdrop-blur-md text-sm animate-in fade-in slide-in-from-bottom-2 shadow-lg">
            <div className="flex items-start gap-3">
              <div className="min-w-[24px] h-6 bg-blue-500/20 rounded-full flex items-center justify-center">
                <span className="text-blue-400 font-bold text-xs">AI</span>
              </div>
              <div className="text-left">
                <p className="text-white/90">{aiReply}</p>
                {loading && (
                  <div className="flex gap-1 mt-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        {/* <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div> */}
        <div className="relative flex bg-neutral-900/90 border border-white/10 rounded-2xl p-1 shadow-2xl">
          <input 
            className="w-full bg-transparent px-5 py-4 outline-none text-sm font-mono placeholder:text-gray-500"
            placeholder="Ask my AI anything..."
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && !loading && handleChat()}
            disabled={loading}
          />
          <button 
            onClick={handleChat}
            disabled={loading || !chatInput.trim()}
            className="bg-white text-black px-6 rounded-xl hover:bg-neutral-200 transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <>
                <Send size={16} />
                <span className="hidden sm:inline">Ask</span>
              </>
            )}
          </button>
        </div>
        
        {/* Optional: Test connection button */}
        <div className="flex justify-center gap-4 mt-4">
          <button 
            onClick={() => setChatInput("What are your skills?")}
            className="text-xs text-gray-400 hover:text-white transition"
          >
            Skills
          </button>
          <button 
            onClick={() => setChatInput("How can I contact you?")}
            className="text-xs text-gray-400 hover:text-white transition"
          >
            Contact
          </button>
          <button 
            onClick={() => setChatInput("Tell me about your projects")}
            className="text-xs text-gray-400 hover:text-white transition"
          >
            Projects
          </button>
          {/* <button 
            onClick={testConnection}
            className="text-xs text-gray-400 hover:text-white transition"
          >
            Test Connection
          </button> */}
        </div>
        
        <p className="text-xs text-gray-500 mt-4 text-center">
          Powered by OpenRouter AI • Try asking about my experience
        </p>
      </div>
    </section>
  );
};

export default Hero;