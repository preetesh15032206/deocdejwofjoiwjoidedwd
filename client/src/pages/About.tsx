import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Github } from "lucide-react";

export default function About() {
  const team = [
    { name: "ARJUN SHARMA", role: "Event Coordinator", desc: "Leads the technical team and event planning", img: "https://enzostvs-cached-generation.hf.space/generate/tech-team-lead-cyber-themed?format=square" },
    { name: "PRIYA PATEL", role: "Technical Head", desc: "Manages platform development and security", img: "https://enzostvs-cached-generation.hf.space/generate/female-web-developer-cyber-punk?format=square" },
    { name: "RAJIV MEHTA", role: "Security Lead", desc: "Implements anti-cheat measures and monitoring", img: "https://enzostvs-cached-generation.hf.space/generate/cyber-security-expert-with-glasses?format=square" },
    { name: "NEHA GUPTA", role: "Design Lead", desc: "Creates the cyber-themed interface and experience", img: "https://enzostvs-cached-generation.hf.space/generate/ui-ux-designer-cyber-theme?format=square" },
    { name: "AMIT KUMAR", role: "Backend Developer", desc: "Handles server infrastructure and API development", img: "https://enzostvs-cached-generation.hf.space/generate/backend-developer-server-room?format=square" },
    { name: "SANA KHAN", role: "Event Manager", desc: "Coordinates participants and event logistics", img: "https://enzostvs-cached-generation.hf.space/generate/event-organizer-cyber-punk?format=square" },
  ];

  return (
    <div className="cyber-glitch-container animate-in fade-in duration-500">
      <h1 className="text-5xl font-bold mb-8 text-primary glitch-text" data-text="MEET THE TEAM">
        MEET THE TEAM
      </h1>

      <div className="cyber-card mb-8">
        <h2 className="text-3xl text-secondary mb-4 font-bold">About KIITFEST</h2>
        <p className="text-lg mb-6 text-gray-300">
          KIITFEST is the annual techno-management fest of Kalinga Institute of Industrial Technology,
          one of India's premier universities. Decode & Dominate is our flagship coding competition
          designed to challenge and inspire the next generation of programmers.
        </p>
        <div className="flex items-center gap-12 border-t border-gray-800 pt-6">
          <div className="text-center">
            <div className="text-3xl text-primary font-bold mb-1">500+</div>
            <div className="text-secondary text-sm uppercase tracking-wide">Participants</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-primary font-bold mb-1">3</div>
            <div className="text-secondary text-sm uppercase tracking-wide">Intense Rounds</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-primary font-bold mb-1">₹50K</div>
            <div className="text-secondary text-sm uppercase tracking-wide">Prize Pool</div>
          </div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {team.map((member, i) => (
          <div key={i} className="bg-card border border-border p-6 rounded-lg text-center hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(147,51,234,0.1)] transition-all duration-300 group">
            <div className="mx-auto mb-6 relative">
              <div className="w-32 h-32 rounded-full border-4 border-secondary mx-auto overflow-hidden relative z-10">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-secondary/20 blur-xl rounded-full scale-110 group-hover:scale-125 transition-transform opacity-50"></div>
            </div>
            <h3 className="text-xl text-primary font-bold mb-2">{member.name}</h3>
            <p className="text-secondary font-medium mb-2">{member.role}</p>
            <p className="text-sm text-gray-400">{member.desc}</p>
          </div>
        ))}
      </div>

      {/* Contact Information */}
      <div className="cyber-card">
        <h2 className="text-3xl text-secondary mb-6 font-bold">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl text-primary mb-4 font-bold">Event Details</h3>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 text-primary mr-3" />
                <span>codeglitch@kiitfest.org</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 text-primary mr-3" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 text-primary mr-3" />
                <span>KIIT University, Bhubaneswar</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl text-primary mb-4 font-bold">Follow KIITFEST</h3>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 flex items-center justify-center rounded border border-gray-700 hover:border-primary hover:text-primary text-gray-400 transition-colors bg-gray-900">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
