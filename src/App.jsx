import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, 
  Lock, 
  Terminal as TerminalIcon, 
  Code, 
  Cpu, 
  Globe, 
  Mail, 
  Linkedin, 
  Github, 
  Award, 
  ExternalLink,
  Download,
  CheckCircle2,
  Server,
  Activity,
  Zap,
  Search,
  ChevronRight,
  User,
  ShieldAlert,
  X,
  Layers,
  Cpu as Chip
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const fullText = "Initializing secure_vault_v1.0... Authenticating KARTHIKEYAN... Access Granted.";
  
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const profileData = {
    name: "KARTHIKEYAN T",
    role: "Cybersecurity Engineer",
    email: "karthiksai9865@gmail.com",
    github: "https://github.com/KarthikeyanT-27",
    linkedin: "https://linkedin.com/in/karthikeyan-t",
    tryhackme: "https://tryhackme.com/p/KarthikeyanT",
    summary: "Cybersecurity Engineer-in-Training with hands-on experience in SecureCode AI and network defense. President of Rising Minds community. Ranked Top 10% on TryHackMe.",
    executiveSummary: "Cybersecurity is not just my field of study — it is what I actively build and defend. I have engineered a static code analysis tool to detect OWASP-aligned vulnerabilities, designed segmented enterprise network architectures, and developed reconnaissance automation to simulate real-world attack behavior. Through hands-on exposure to SIEM concepts, vulnerability assessment, secure coding, and network defense strategies, I have strengthened my ability to identify threats and implement structured mitigation mechanisms.          As Founder & President of Rising Minds, I promote cybersecurity awareness and continuous technical growth under the philosophy of Share • Learn • Grow. I am driven to contribute to security teams where analytical thinking, proactive defense, and resilience-building are essential.",
    skills: [
      { category: "SIEM & Log Analysis", items: ["Wazuh", "Splunk", "Wireshark", "ELK Stack", "Suricata"] },
      { category: "Threat Detection & OSINT", items: ["openVAS", "the Harvester", "Burp Suite", "SEToolkit", "Shodan", "Maltego"] },
      { category: "Vulnerability & Exploitation", items: ["Nessus", "Nmap", "Metasploit", "Sqlmap", "Nikto", "OWASP ZAP"] },
      { category: "Security Ops & Networking", items: ["Linux (Parrot, Kali)", "Snort", "Packet Tracer", "Docker Security", "Active Directory Security"] },
      { category: "Programming & Web", items: ["Python (Automation)", "JavaScript", "SQL", "C", "React.js", "Express.js", "MongoDB"] }
    ],
    certifications: [
      { name: "Google Cybersecurity Professional", issuer: "Coursera", date: "2025" },
      { name: "Certified Cybersecurity Educator", issuer: "Red Team Leaders", date: "2026" },
      { name: "Junior Cybersecurity Career Analyst", issuer: "Cisco Academy", date: "2025" },
      { name: "Cybersecurity Analyst Simulation", issuer: "Forage", date: "2025" },
      { name: "IT Primer", issuer: "L&T EduTech", date: "2024" }
    ],
    projects: [
      {
        id: 1,
        title: "SecureCode AI",
        short: "AI-based static vulnerability analyzer.",
        full: "SecureCode AI is a sophisticated static code analysis engine. It leverages rule-based logic combined with AI integration to detect OWASP Top 10 vulnerabilities in real-time. It doesn't just find bugs; it simulates taint analysis to classify severity and provides specific remediation steps for developers.",
        tech: ["React", "Python", "Gemini AI", "OWASP", "FastAPI"],
        github: "https://github.com/KarthikeyanT-27/SecureCodeAI",
        icon: <Lock className="text-blue-500" />
      },
      {
        id: 2,
        title: "ReconX",
        short: "Automated reconnaissance toolkit.",
        full: "ReconX automates the most time-consuming phase of a penetration test: reconnaissance. It orchestrates multiple OSINT tools and custom scanning modules to map an organization's attack surface, identifying subdomains, open ports, and potential entry points with zero manual intervention.",
        tech: ["Python", "Nmap", "OSINT", "Automation", "Shell Scripting"],
        github: "https://github.com/KarthikeyanT-27/ReconX",
        icon: <Search className="text-purple-500" />
      },
      {
        id: 3,
        title: "NetGuard University",
        short: "Secure multi-segment network architecture.",
        full: "A comprehensive enterprise network simulation for a university environment. This project involved designing 5 distinct VLANs (Admin, Student, Lab, Guest, Server) with strict ACL policies, DHCP relaying, and inter-VLAN routing logic to ensure maximum security across departments.",
        tech: ["Cisco", "VLAN", "ACL", "Routing", "STP"],
        github: "https://github.com/KarthikeyanT-27/University-Network-Management-System",
        icon: <Server className="text-green-500" />
      },
      {
        id: 4,
        title: "AcadBridge Portal",
        short: "Role-based secure academic portal.",
        full: "A security-first academic portal built with the MERN stack. It features deep Role-Based Access Control (RBAC), secure JWT-based session management, password hashing, and input sanitization to prevent common web attacks like XSS and NoSQL injection.",
        tech: ["MERN", "JWT", "RBAC", "Node.js", "Bcrypt"],
        github: "https://github.com/KarthikeyanT-27/Acadbridge",
        icon: <ShieldAlert className="text-red-500" />
      }
    ]
  };

  const scrollTo = (ref) => ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-mono selection:bg-blue-600/40">
      
      {/* Fixed Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.3)]">
              <Shield className="text-white" size={16} />
            </div>
            <span className="text-xs font-black tracking-widest text-white uppercase">
              {profileData.name}
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollTo(aboutRef)} className="text-[10px] font-bold tracking-widest text-slate-400 hover:text-blue-500 transition-colors">ABOUT</button>
            <button onClick={() => scrollTo(projectsRef)} className="text-[10px] font-bold tracking-widest text-slate-400 hover:text-blue-500 transition-colors">PROJECTS</button>
            <button onClick={() => scrollTo(skillsRef)} className="text-[10px] font-bold tracking-widest text-slate-400 hover:text-blue-500 transition-colors">SKILLS</button>
            <a href={`mailto:${profileData.email}`} className="px-5 py-2 border border-blue-500/50 text-blue-500 text-[10px] font-black rounded hover:bg-blue-500 hover:text-white transition-all">
              CONTACT_ME
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-44 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded text-[10px] font-bold text-blue-400 tracking-widest uppercase">
              <Activity size={12} className="animate-pulse" />
              <span>Ranked: Top 10% Global Rank — TryHackMe</span>
            </div>

            <h1 className="text-7xl md:text-[90px] font-black text-white leading-none tracking-tighter">
              {profileData.name}<span className="text-blue-600">.</span>
            </h1>

            <p className="text-lg text-slate-400 max-w-xl leading-relaxed border-l-2 border-blue-600/30 pl-6">
              {profileData.summary}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                  href="/Resume.pdf" 
                  download="Karthikeyan_Resume.pdf"
                  className="px-8 py-4 bg-white text-black hover:bg-blue-600 hover:text-white rounded font-black text-sm flex items-center space-x-3 transition-all"
                >
                  <Download size={18} />
                  <span>RESUME.PDF</span>
                </a>

              <div className="flex items-center space-x-3">
                <a href={profileData.linkedin} className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded hover:border-blue-500/50 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href={profileData.github} className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded hover:border-blue-500/50 transition-colors">
                  <Github size={20} />
                </a>
                <a href={profileData.tryhackme} target="_blank" className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded hover:border-red-500/50 transition-colors group">
                  <ShieldAlert size={20} className="group-hover:text-red-500" />
                </a>
              </div>
            </div>

            {/* Terminal Interface */}
            <div className="mt-12 bg-black border border-white/10 rounded-lg overflow-hidden shadow-2xl max-w-xl">
              <div className="bg-[#111] px-4 py-2 flex items-center justify-between border-b border-white/10">
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
                </div>
                <span className="text-[9px] text-slate-600 tracking-widest uppercase font-bold">CyberOS — bash</span>
              </div>
              <div className="p-5 text-sm min-h-[120px]">
                <div className="flex space-x-2 text-blue-500">
                  <span>$</span>
                  <span className="text-slate-300">whoami --passion</span>
                </div>
                <div className="mt-2 text-green-400">
                  {typedText}<span className="inline-block w-2 h-4 bg-green-500/50 animate-pulse ml-1 align-middle"></span>
                </div>
                <div className="mt-2 text-slate-500 italic">
                  &gt;  Cybersecurity Enthusiast & Community Leader | Founder & President @ Rising Minds — Focused on Threat Awareness, Defense Culture & Secure Development | Share • Learn • Grow.

                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="aspect-square relative z-10 rounded-full border-[8px] border-white/5 overflow-hidden shadow-2xl bg-[#0a0a0a]">
                <img 
                  src="/profile.jpeg" 
                  alt="Karthikeyan" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/10 blur-[100px] rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Stats Banner */}
      <section className="py-12 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           <div className="flex items-center space-x-4 border-r border-white/5 last:border-0">
              <div className="w-12 h-12 bg-blue-600/10 rounded flex items-center justify-center">
                <Linkedin className="text-blue-500" size={24} />
              </div>
              <div>
                <div className="text-xl font-black text-white leading-none">500+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1">Connections</div>
              </div>
           </div>
           <div className="flex items-center space-x-4 border-r border-white/5 last:border-0">
              <div className="w-12 h-12 bg-blue-600/10 rounded flex items-center justify-center">
                <Globe className="text-blue-500" size={24} />
              </div>
              <div>
                <div className="text-xl font-black text-white leading-none">50+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1">Active Posts</div>
              </div>
           </div>
           <div className="flex items-center space-x-4 border-r border-white/5 last:border-0">
              <div className="w-12 h-12 bg-red-600/10 rounded flex items-center justify-center">
                <ShieldAlert className="text-red-500" size={24} />
              </div>
              <div>
                <div className="text-xl font-black text-white leading-none">Top 10%</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1">Try HackMe</div>
              </div>
           </div>
           <div className="flex items-center space-x-4 last:border-0">
              <div className="w-12 h-12 bg-green-600/10 rounded flex items-center justify-center">
                <CheckCircle2 className="text-green-500" size={24} />
              </div>
              <div>
                <div className="text-xl font-black text-white leading-none">ACTIVE</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1">Contributor</div>
              </div>
           </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-blue-500 text-xs font-bold tracking-[0.4em] uppercase mb-4">_ROOT_DIRECTORY</h2>
              <h3 className="text-5xl font-black text-white tracking-tighter leading-tight">Professional Summary.</h3>
            </div>
            <div className="lg:col-span-8">
              <div className="bg-[#0a0a0a] border border-white/5 p-10 rounded-3xl relative overflow-hidden group">
                <User className="absolute -top-6 -right-6 text-white/5 w-40 h-40 transition-transform group-hover:scale-110" />
                <p className="text-xl text-slate-300 leading-relaxed font-medium relative z-10 italic">
                  "{profileData.executiveSummary}"
                </p>
                <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap gap-8 relative z-10">
                   <div className="space-y-1">
                     <div className="text-2xl font-black text-white">05+</div>
                     <div className="text-[9px] font-bold uppercase text-slate-500 tracking-widest">Sessions Led</div>
                   </div>
                   <div className="space-y-1">
                     <div className="text-2xl font-black text-white">10+</div>
                     <div className="text-[9px] font-bold uppercase text-slate-500 tracking-widest">Hackathon Participation</div>
                   </div>
                   <div className="space-y-1">
                     <div className="text-2xl font-black text-white">500+</div>
                     <div className="text-[9px] font-bold uppercase text-slate-500 tracking-widest">LinkedIn Net</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-32 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-blue-500 text-xs font-bold tracking-[0.4em] uppercase mb-4">_PROJECT_VAULT</h2>
            <h3 className="text-5xl font-black text-white tracking-tighter">Technical Deployments.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {profileData.projects.map((project) => (
              <div 
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-[#0a0a0a] border border-white/5 rounded-3xl p-10 hover:bg-white/[0.02] transition-all hover:border-blue-500/30 cursor-pointer"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-blue-600/10 transition-colors">
                    {project.icon}
                  </div>
                  <ChevronRight size={24} className="text-slate-700 group-hover:text-blue-500 transition-colors transform group-hover:translate-x-1" />
                </div>
                <h4 className="text-2xl font-black text-white mb-2">{project.title}</h4>
                <p className="text-slate-500 mb-8 leading-relaxed">
                  {project.short}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className="text-[9px] font-bold px-3 py-1 bg-white/5 border border-white/10 rounded-full uppercase text-slate-400">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && <span className="text-[9px] font-bold px-3 py-1 text-slate-600">+{project.tech.length - 3}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-blue-500 text-xs font-bold tracking-[0.4em] uppercase mb-12 flex items-center gap-4">
              <TerminalIcon size={14} /> _SKILLS_ARSENAL
            </h2>
            <div className="space-y-12">
              {profileData.skills.map((group, i) => (
                <div key={i} className="space-y-4">
                  <h4 className="text-[10px] font-black text-slate-500 tracking-widest uppercase flex items-center gap-2">
                    <Layers size={10} className="text-blue-500" /> {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map(skill => (
                      <span key={skill} className="px-4 py-2 bg-black border border-white/10 rounded text-xs font-bold hover:border-blue-500 hover:text-white transition-all cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-20">
            <div>
              <h2 className="text-blue-500 text-xs font-bold tracking-[0.4em] uppercase mb-12">_ACCREDITATIONS</h2>
              <div className="space-y-4">
                {profileData.certifications.map((cert, i) => (
                  <div key={i} className="flex items-center p-5 bg-black border border-white/5 rounded-xl group hover:border-blue-500/20 transition-all">
                    <div className="mr-6 p-3 bg-blue-600/5 rounded-lg group-hover:scale-110 transition-transform">
                      <Award className="text-blue-500" size={20} />
                    </div>
                    <div className="flex-grow">
                      <div className="text-sm font-black text-white">{cert.name}</div>
                      <div className="text-[9px] text-slate-500 mt-1 uppercase tracking-widest">
                        {cert.issuer} • {cert.date}
                      </div>
                    </div>
                    <CheckCircle2 size={16} className="text-green-500/30 group-hover:text-green-500 transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-blue-600 rounded-3xl relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-[10px] font-black text-blue-100 tracking-[0.3em] uppercase mb-4">Alma Mater</h4>
                <div className="text-2xl font-black text-white leading-tight">Jeppiaar University</div>
                <p className="text-blue-100 font-bold mt-2 italic text-sm">B.Tech CSE Cybersecurity • Class of 2027</p>
                <div className="mt-6 inline-flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">CGPA: 9.52</span>
                </div>
              </div>
              <Chip className="absolute -bottom-6 -right-6 text-white/5 w-40 h-40 -rotate-12 transition-transform group-hover:scale-110" />
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md">
          <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="p-8 border-b border-white/10 flex justify-between items-center bg-white/[0.02]">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-600/10 rounded-lg flex items-center justify-center">
                    {selectedProject.icon}
                  </div>
                  <h3 className="text-2xl font-black text-white">{selectedProject.title}</h3>
               </div>
               <button onClick={() => setSelectedProject(null)} className="p-2 hover:bg-white/10 rounded-full text-slate-500 hover:text-white transition-colors">
                 <X size={20} />
               </button>
            </div>
            <div className="p-8 space-y-6">
               <div>
                  <h5 className="text-[10px] font-black text-blue-500 tracking-widest uppercase mb-2">Detailed Investigation</h5>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    {selectedProject.full}
                  </p>
               </div>
               <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h5 className="text-[10px] font-black text-blue-500 tracking-widest uppercase mb-3">Tech Stack</h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map(t => (
                        <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold text-slate-400 border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col justify-end">
                    <a href={selectedProject.github} target="_blank" className="flex items-center justify-center gap-2 w-full py-4 bg-white text-black font-black rounded-xl hover:bg-blue-600 hover:text-white transition-all transform active:scale-95">
                      <Github size={18} />
                      <span>CLONE REPOSITORY</span>
                    </a>
                  </div>
               </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter italic uppercase">Terminating Session.</h2>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              Open for security internships and collaborative research. LinkedIn profile active and frequently updated.
            </p>
          </div>

          <div className="flex space-x-6">
             <a href={`mailto:${profileData.email}`} className="px-10 py-5 bg-white text-black font-black rounded-full hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              HIRE_KARTHIKEYAN
            </a>
          </div>

          <div className="w-full pt-12 flex flex-col md:flex-row justify-between items-center border-t border-white/5 gap-6">
            <div className="flex items-center space-x-2">
              <Shield className="text-blue-600" size={16} />
              <span className="text-[10px] font-black tracking-[0.4em] text-white uppercase">{profileData.name} T</span>
            </div>
            <div className="text-[9px] text-slate-600 tracking-[0.5em] uppercase font-bold">
              500+ CONNECTIONS • ACTIVE CONTRIBUTOR
            </div>
            <div className="text-slate-600 text-[10px]">
              © {new Date().getFullYear()} — build_id: portfolio_v3.0
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
