import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Github, Twitter, Linkedin } from 'lucide-react';

// --- Types ---
type Resource = {
  id: number;
  name: string;
  category: string;
  description: string;
  url: string;
};

// --- Data ---
const RESOURCES: Resource[] = [
  { id: 1, name: "Y Combinator", category: "Funding", description: "Seed money for startups.", url: "https://www.ycombinator.com/" },
  { id: 2, name: "Stripe Atlas", category: "Legal", description: "Incorporate your company.", url: "https://stripe.com/atlas" },
  { id: 3, name: "Figma", category: "Design", description: "Interface design tool.", url: "https://www.figma.com/" },
  { id: 4, name: "Linear", category: "Productivity", description: "Issue tracking built for speed.", url: "https://linear.app/" },
  { id: 5, name: "Notion", category: "Knowledge", description: "All-in-one workspace.", url: "https://www.notion.so/" },
  { id: 6, name: "Supabase", category: "Backend", description: "Open source Firebase alternative.", url: "https://supabase.com/" },
  { id: 7, name: "Vercel", category: "Hosting", description: "Develop. Preview. Ship.", url: "https://vercel.com/" },
  { id: 8, name: "PostHog", category: "Analytics", description: "Product analytics suite.", url: "https://posthog.com/" },
  { id: 9, name: "Resend", category: "Email", description: "Email for developers.", url: "https://resend.com/" },
  { id: 10, name: "Mercury", category: "Banking", description: "Banking for startups.", url: "https://mercury.com/" },
  { id: 11, name: "Clerk", category: "Auth", description: "Authentication for React.", url: "https://clerk.com/" },
  { id: 12, name: "Tailwind CSS", category: "Design", description: "Utility-first CSS framework.", url: "https://tailwindcss.com/" },
  { id: 13, name: "Arc", category: "Productivity", description: "The browser for 2026.", url: "https://arc.net/" },
  { id: 14, name: "Raycast", category: "Productivity", description: "Mac spotlight replacement.", url: "https://raycast.com/" },
  { id: 15, name: "Midjourney", category: "AI", description: "Generative AI imagery.", url: "https://midjourney.com/" },
  { id: 16, name: "OpenAI", category: "AI", description: "GPT models and API.", url: "https://openai.com/" },
  { id: 17, name: "Cursor", category: "Dev", description: "AI code editor.", url: "https://cursor.sh/" },
  { id: 18, name: "Plain", category: "Support", description: "Support for modern teams.", url: "https://plain.com/" },
];

const CATEGORIES = ["All", ...new Set(RESOURCES.map(r => r.category))];

// --- Colors & Theme ---
// The olive green from the image
const THEME = {
  bg: '#8f914f', 
  text: '#2b291a',
  hover: '#7e8045',
};

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="tabular-nums font-mono text-xs md:text-sm">
      {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }).toUpperCase()}
    </span>
  );
}

function DateDisplay() {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return (
    <span className="uppercase text-xs md:text-sm">
      {date.toLocaleDateString('en-US', options)}
    </span>
  );
}

export default function App() {
  const [filter, setFilter] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredResources = filter === "All" 
    ? RESOURCES 
    : RESOURCES.filter(r => r.category === filter);

  return (
    <div 
      className="min-h-screen w-full flex flex-col font-sans overflow-x-hidden selection:bg-[#2b291a] selection:text-[#8f914f]"
      style={{ backgroundColor: THEME.bg, color: THEME.text }}
    >
      {/* Top Header Section */}
      <header className="px-4 md:px-8 pt-6 md:pt-10 flex justify-between items-start relative z-10">
        <div>
           <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[14vw] md:text-[12vw] leading-[0.85] font-black tracking-tighter uppercase select-none"
           >DOC --OSC<span className="text-xl md:text-4xl align-top">*</span></motion.h1>
           <p className="mt-2 text-xs md:text-sm font-bold tracking-[0.2em] uppercase opacity-70 ml-2">Startup Resource Directory</p>
        </div>
        
        <div className="flex gap-6 pt-4 pr-2">
           <a href="#" className="hover:scale-110 transition-transform"></a>
           <a href="#" className="hover:scale-110 transition-transform"></a>
           <a href="https://www.linkedin.com/in/nicolaseobando/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><Linkedin className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} /></a>
        </div>
      </header>

      {/* Decorative Circles on Right - Fixed */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-24 pointer-events-none hidden lg:flex z-0 opacity-80">
           <div className="w-4 h-4 rounded-full bg-[#2b291a]" />
           <div className="w-4 h-4 rounded-full bg-[#2b291a]" />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 px-4 md:px-8 mt-12 md:mt-24 pb-32 relative z-10">
        
        {/* Controls / Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#2b291a] pb-2 mb-2 gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold tracking-widest uppercase mb-1">Filter by Category</span>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {CATEGORIES.slice(0, 6).map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`text-sm font-bold uppercase tracking-wider transition-opacity ${filter === cat ? 'opacity-100 underline decoration-2 underline-offset-4' : 'opacity-40 hover:opacity-100'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="text-right">
             <span className="text-xs md:text-sm font-bold tracking-widest uppercase">
               {filteredResources.length} Items
             </span>
          </div>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 py-2 border-b border-[#2b291a] text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-60">
          <div className="col-span-2 md:col-span-1">No.</div>
          <div className="col-span-6 md:col-span-3">Name</div>
          <div className="col-span-4 md:col-span-2 hidden md:block">Category</div>
          <div className="col-span-5 hidden lg:block">Description</div>
          <div className="col-span-4 md:col-span-1 text-right">Link</div>
        </div>

        {/* Resource List */}
        <div className="flex flex-col">
          <AnimatePresence mode='popLayout'>
            {filteredResources.map((resource, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                key={resource.id}
                className="group relative grid grid-cols-12 gap-4 py-3 md:py-4 border-b border-[#2b291a] items-center cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredId(resource.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => window.open(resource.url, '_blank')}
              >
                {/* Hover Background Effect */}
                <motion.div 
                  className="absolute inset-0 bg-[#2b291a] -z-10 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredId === resource.id ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                />

                <div className={`col-span-2 md:col-span-1 font-mono text-sm transition-colors ${hoveredId === resource.id ? 'text-[#8f914f]' : 'opacity-60'}`}>
                  {String(resource.id).padStart(3, '0')}
                </div>
                
                <div className={`col-span-6 md:col-span-3 font-bold text-base md:text-lg tracking-tight uppercase truncate transition-colors ${hoveredId === resource.id ? 'text-[#8f914f]' : ''}`}>
                  {resource.name}
                </div>
                
                <div className={`col-span-4 md:col-span-2 text-xs md:text-sm uppercase tracking-wide truncate hidden md:block transition-colors ${hoveredId === resource.id ? 'text-[#8f914f]' : 'opacity-80'}`}>
                  {resource.category}
                </div>
                
                <div className={`col-span-5 text-xs md:text-sm truncate hidden lg:block transition-colors ${hoveredId === resource.id ? 'text-[#8f914f]' : 'opacity-70'}`}>
                  {resource.description}
                </div>
                
                <div className={`col-span-4 md:col-span-6 lg:col-span-1 flex justify-end pr-2 transition-colors ${hoveredId === resource.id ? 'text-[#8f914f]' : ''}`}>
                   <ArrowUpRight className={`w-5 h-5 transition-transform duration-300 ${hoveredId === resource.id ? 'rotate-45' : ''}`} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {/* Bottom Large Text */}
        <div className="flex justify-between items-end mt-20 md:mt-32 border-b-4 border-[#2b291a] pb-2">
            <h2 className="text-xl md:text-3xl font-black uppercase tracking-tight">
               Build_Fast
            </h2>
            <h2 className="text-xl md:text-3xl font-black uppercase tracking-tight text-right">
               Ship_Faster
            </h2>
        </div>
        
        <div className="flex justify-between mt-2 text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-60">
            
            
        </div>

      </main>

      {/* Footer */}
      <footer className="px-4 md:px-8 py-6 flex flex-col md:flex-row justify-between items-start md:items-center text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] gap-4 opacity-80 pb-8">
        
        <div className="flex flex-col items-end gap-1">
            <DateDisplay />
            <Clock />
        </div>
      </footer>
    </div>
  );
}
