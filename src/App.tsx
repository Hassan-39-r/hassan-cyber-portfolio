import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Terminal, 
  Lock, 
  Cpu, 
  Network, 
  Search, 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink, 
  ChevronRight,
  Database,
  Code,
  Globe,
  Activity,
  Phone
} from 'lucide-react';
import { cn } from './lib/utils';
import { TerminalLine, CyberCard } from './components/CyberUI';

const SKILLS = [
  { name: 'Penetration Testing', level: 90, icon: Shield },
  { name: 'Network Security', level: 85, icon: Network },
  { name: 'Incident Response', level: 80, icon: Activity },
  { name: 'Cloud Security', level: 75, icon: Globe },
  { name: 'Malware Analysis', level: 70, icon: Search },
  { name: 'Cryptography', level: 85, icon: Lock },
];

const PROJECTS = [
  {
    title: 'Sentinel-X',
    description: 'Automated vulnerability scanner for cloud infrastructure with real-time alerting.',
    tags: ['Python', 'AWS', 'Docker', 'Security'],
    link: '#',
  },
  {
    title: 'Ghost-Protocol',
    description: 'A custom encrypted communication protocol designed for low-latency secure messaging.',
    tags: ['Rust', 'Cryptography', 'Networking'],
    link: '#',
  },
  {
    title: 'Threat-Intel-Aggregator',
    description: 'Aggregates threat feeds from multiple sources and visualizes attack vectors.',
    tags: ['TypeScript', 'Node.js', 'D3.js'],
    link: '#',
  },
];

const EXPERIENCE = [
  {
    company: 'SecureNet Systems',
    role: 'Senior Security Analyst',
    period: '2022 - Present',
    description: 'Leading the incident response team and conducting regular deep-dive security audits.',
  },
  {
    company: 'CyberGuard Corp',
    role: 'Security Engineer',
    period: '2020 - 2022',
    description: 'Implemented zero-trust architecture across 500+ endpoints and managed firewall configurations.',
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen cyber-grid relative overflow-x-hidden">
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled ? "bg-cyber-bg/80 backdrop-blur-md border-cyber-border py-3" : "bg-transparent border-transparent py-6"
      )}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-cyber-accent" />
            <span className="font-mono font-bold text-xl tracking-tighter">HASSAN<span className="text-cyber-accent">.SEC</span></span>
          </div>
          <div className="hidden md:flex gap-8 font-mono text-sm uppercase tracking-widest">
            {['home', 'expertise', 'projects', 'experience'].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                whileHover="hover"
                initial="initial"
                className={cn(
                  "relative py-1 transition-colors duration-300",
                  activeTab === tab ? "text-cyber-accent" : "text-cyber-muted hover:text-cyber-accent"
                )}
              >
                <motion.span
                  variants={{
                    hover: { scale: 1.1 }
                  }}
                  className="block"
                >
                  {tab}
                </motion.span>
                
                {/* Hover Underline */}
                {activeTab !== tab && (
                  <motion.div
                    variants={{
                      initial: { width: 0 },
                      hover: { width: '100%' }
                    }}
                    className="absolute bottom-0 left-0 h-0.5 bg-cyber-accent/40"
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  />
                )}

                {/* Active Underline */}
                {activeTab === tab && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyber-accent"
                  />
                )}
              </motion.button>
            ))}
          </div>
          <div className="flex gap-4 items-center">
            <a 
              href="https://linkedin.com/in/hassan-cyber" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 cyber-border px-4 py-2 rounded font-mono text-xs uppercase tracking-widest hover:border-cyber-accent transition-all text-cyber-muted hover:text-cyber-accent"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <button className="cyber-border px-4 py-2 rounded font-mono text-xs uppercase tracking-widest hover:bg-cyber-accent hover:text-cyber-bg transition-all">
              Contact
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section id="home" className="mb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-accent/10 border border-cyber-accent/20 text-cyber-accent text-xs font-mono mb-6">
                  <div className="w-2 h-2 rounded-full bg-cyber-accent animate-pulse" />
                  SYSTEM STATUS: SECURE
                </div>
                <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-none">
                  CYBER <br />
                  <span className="text-cyber-accent glow-text">DEFENDER</span>
                </h1>
                <p className="text-cyber-muted text-lg max-w-md mb-8 leading-relaxed">
                  I'm Hassan, a Cybersecurity Engineer dedicated to fortifying digital infrastructures and neutralizing sophisticated threats.
                </p>
                <div className="flex gap-4">
                  <button className="bg-cyber-accent text-cyber-bg px-8 py-4 rounded font-mono font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                    View Dossier
                  </button>
                  <div className="flex gap-2">
                    {[Github, Linkedin, Mail].map((Icon, i) => (
                      <button key={i} className="w-14 h-14 cyber-border rounded flex items-center justify-center hover:border-cyber-accent transition-colors">
                        <Icon className="w-5 h-5" />
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="relative">
              <CyberCard title="TERMINAL_SESSION" className="h-[400px] font-mono">
                <div className="space-y-2">
                  <TerminalLine text="whoami" delay={0.1} />
                  <TerminalLine text="hassan --role 'Security Engineer' --location 'Global'" delay={0.2} className="text-cyber-muted" />
                  <TerminalLine text="ls expertise/" delay={0.4} />
                  <TerminalLine text="pentesting.sh  network_sec.py  incident_response.log" delay={0.5} className="text-cyber-accent/60" />
                  <TerminalLine text="cat bio.txt" delay={0.7} />
                  <TerminalLine text="Building resilient systems that withstand the test of time and adversaries." delay={0.8} className="text-cyber-muted italic" />
                  <TerminalLine text="status --check-integrity" delay={1.0} />
                  <TerminalLine text="[OK] Integrity verified. 100% uptime." delay={1.1} className="text-green-500" />
                  <div className="mt-4">
                    <span className="text-cyber-accent opacity-70">$</span>
                    <span className="terminal-cursor" />
                  </div>
                </div>
              </CyberCard>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-cyber-accent/20" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-cyber-accent/20" />
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-bold mb-2 uppercase tracking-tighter">Technical <span className="text-cyber-accent">Expertise</span></h2>
              <p className="text-cyber-muted font-mono text-sm">CORE COMPETENCIES & SECURITY STACK</p>
            </div>
            <div className="text-right hidden md:block">
              <span className="text-cyber-accent font-mono text-xs tracking-widest uppercase">Last Audit: 2026.02.21</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <CyberCard className="h-full hover:scale-[1.02] hover:border-cyber-accent/60 transition-all duration-300 cursor-default">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded bg-cyber-accent/10 border border-cyber-accent/20">
                      <skill.icon className="w-6 h-6 text-cyber-accent" />
                    </div>
                    <h3 className="font-mono font-bold text-lg">{skill.name}</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-cyber-muted uppercase">
                      <span>Proficiency</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-cyber-border rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.5,
                          ease: "easeOut",
                          delay: 0.3 + (i * 0.1) 
                        }}
                        className="h-full bg-cyber-accent shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                      />
                    </div>
                  </div>
                </CyberCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-32">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-2 uppercase tracking-tighter">Security <span className="text-cyber-accent">Projects</span></h2>
            <p className="text-cyber-muted font-mono text-sm">RESEARCH & DEVELOPMENT</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <CyberCard title={`PROJECT_ID: 00${i + 1}`} className="group">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-cyber-accent transition-colors">{project.title}</h3>
                    <ExternalLink className="w-5 h-5 text-cyber-muted group-hover:text-cyber-accent transition-colors" />
                  </div>
                  <p className="text-cyber-muted mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 rounded bg-cyber-accent/5 border border-cyber-accent/10 text-[10px] font-mono text-cyber-accent uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CyberCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-32">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-2 uppercase tracking-tighter">Operational <span className="text-cyber-accent">History</span></h2>
            <p className="text-cyber-muted font-mono text-sm">PROFESSIONAL TIMELINE</p>
          </div>

          <div className="space-y-8 relative before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-px before:bg-cyber-border">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-2 w-9 h-9 rounded-full bg-cyber-bg border border-cyber-accent flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-cyber-accent animate-pulse" />
                </div>
                <CyberCard>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-cyber-accent">{exp.role}</h3>
                      <p className="font-mono text-sm text-cyber-muted">{exp.company}</p>
                    </div>
                    <span className="px-3 py-1 rounded border border-cyber-border text-xs font-mono text-cyber-muted">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-cyber-muted leading-relaxed">
                    {exp.description}
                  </p>
                </CyberCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer / Contact */}
        <footer className="border-t border-cyber-border pt-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 uppercase tracking-tighter">Initiate <span className="text-cyber-accent">Contact</span></h2>
              <p className="text-cyber-muted font-mono text-sm mb-8">ENCRYPTED CHANNEL OPEN</p>
              <div className="space-y-4">
                <a href="mailto:hassan27462@gmail.com" className="flex items-center gap-4 text-cyber-muted hover:text-cyber-accent transition-colors group">
                  <Mail className="w-5 h-5" />
                  <span className="font-mono">hassan27462@gmail.com</span>
                </a>
                <a href="tel:+905385476507" className="flex items-center gap-4 text-cyber-muted hover:text-cyber-accent transition-colors group">
                  <Phone className="w-5 h-5" />
                  <span className="font-mono">+90 538 547 6507</span>
                </a>
                <a href="https://linkedin.com/in/hassan-cyber" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-cyber-muted hover:text-cyber-accent transition-colors group">
                  <Linkedin className="w-5 h-5" />
                  <span className="font-mono">linkedin.com/in/hassan-cyber</span>
                </a>
                <a href="https://github.com/hassan-sec" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-cyber-muted hover:text-cyber-accent transition-colors group">
                  <Github className="w-5 h-5" />
                  <span className="font-mono">github.com/hassan-sec</span>
                </a>
                <a href="https://hassan.sec" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-cyber-muted hover:text-cyber-accent transition-colors group">
                  <Globe className="w-5 h-5" />
                  <span className="font-mono">hassan.sec</span>
                </a>
              </div>
            </div>
            <div className="text-right">
              <div className="inline-block text-left">
                <p className="text-cyber-muted font-mono text-xs uppercase tracking-[0.2em] mb-4">PGP Fingerprint</p>
                <code className="block p-4 bg-cyber-card border border-cyber-border rounded text-[10px] font-mono text-cyber-accent/60 break-all leading-relaxed">
                  8F2A 4C1E 9D0B 3F7G 1H5J 6K9L 0M2N 4P6Q 8R0S 2T4U
                </code>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-cyber-border/30 flex flex-col md:flex-row justify-between items-center gap-6 text-cyber-muted text-[10px] font-mono uppercase tracking-widest">
            <div className="flex items-center gap-6">
              <span>© 2026 HASSAN.SEC - ALL RIGHTS RESERVED</span>
              <div className="hidden sm:flex gap-4 border-l border-cyber-border/30 pl-6">
                <a href="https://github.com/hassan-sec" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-accent transition-colors">
                  <Github className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com/in/hassan-cyber" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-accent transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://hassan.sec" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-accent transition-colors">
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="hover:text-cyber-accent cursor-pointer">Privacy Policy</span>
              <span className="hover:text-cyber-accent cursor-pointer">Security Disclosure</span>
            </div>
          </div>
        </footer>
      </main>

      {/* Background decoration */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-cyber-accent/5 blur-[120px] -z-10 rounded-full" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-cyber-accent/5 blur-[120px] -z-10 rounded-full" />
    </div>
  );
}
