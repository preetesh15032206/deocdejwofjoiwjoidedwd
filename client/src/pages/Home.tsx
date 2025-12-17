import { Clock, Award, Users, ChevronRight, Check, Play } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="cyber-glitch-container animate-in fade-in duration-500">
      <h1 
        className="text-5xl font-bold mb-6 text-primary glitch-text tracking-tight" 
        data-text="DECODE AND DOMINATE 2.0"
      >
        DECODE AND DOMINATE 2.0
      </h1>

      <div className="cyber-card mb-8">
        <h2 className="text-3xl text-secondary mb-4 font-bold font-display">About the Event</h2>
        <p className="text-lg mb-6 text-gray-300 leading-relaxed">
          Decode & Dominate is KIITFEST's premier coding competition where programmers battle through three intense rounds of challenges.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-gray-900/50 p-6 rounded border border-gray-800 hover:border-primary/50 transition-colors group">
            <Clock className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl text-secondary mb-2 font-bold font-display">3 Rounds</h3>
            <p className="text-gray-400">Quiz → Debugging → Web Cloning</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded border border-gray-800 hover:border-primary/50 transition-colors group">
            <Award className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl text-secondary mb-2 font-bold font-display">Certificates</h3>
            <p className="text-gray-400">For all participants + Winners</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded border border-gray-800 hover:border-primary/50 transition-colors group">
            <Users className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl text-secondary mb-2 font-bold font-display">Team Event</h3>
            <p className="text-gray-400">Compete with the best coders</p>
          </div>
        </div>
      </div>

      <div className="cyber-card">
        <h2 className="text-3xl text-secondary mb-8 font-bold font-display">Event Timeline</h2>
        <div className="relative pl-4">
          <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-secondary to-transparent"></div>
          <div className="space-y-12 relative z-10">
            <div className="flex items-center group">
              <div className="w-8 h-8 rounded-full bg-primary mr-6 flex items-center justify-center shadow-[0_0_15px_rgba(220,38,38,0.5)] z-20 group-hover:scale-110 transition-transform">
                <span className="text-black font-bold">1</span>
              </div>
              <div className="flex-1 bg-gray-900/30 p-4 rounded border border-gray-800 group-hover:border-primary/30 transition-colors">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl text-primary font-bold font-display">Round 1 - FastTrack Quiz</h3>
                    <p className="text-gray-400">25 Questions | 30 Minutes</p>
                  </div>
                  <Link href="/round1">
                    <button className="cyber-button text-sm py-1 px-4">Start</button>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="flex items-center group">
              <div className="w-8 h-8 rounded-full bg-secondary mr-6 flex items-center justify-center shadow-[0_0_15px_rgba(147,51,234,0.5)] z-20 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold">2</span>
              </div>
              <div className="flex-1 bg-gray-900/30 p-4 rounded border border-gray-800 group-hover:border-secondary/30 transition-colors">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl text-primary font-bold font-display">Round 2 - Code Debugging</h3>
                    <p className="text-gray-400">60 Minutes | PDF Submission</p>
                  </div>
                   <Link href="/round2">
                    <button className="cyber-button text-sm py-1 px-4 opacity-50 hover:opacity-100">Locked</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex items-center group">
              <div className="w-8 h-8 rounded-full bg-primary mr-6 flex items-center justify-center shadow-[0_0_15px_rgba(220,38,38,0.5)] z-20 group-hover:scale-110 transition-transform">
                <span className="text-black font-bold">3</span>
              </div>
              <div className="flex-1 bg-gray-900/30 p-4 rounded border border-gray-800 group-hover:border-primary/30 transition-colors">
                 <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl text-primary font-bold font-display">Round 3 - Web Cloning</h3>
                    <p className="text-gray-400">90 Minutes | GitHub Submission</p>
                  </div>
                   <Link href="/round3">
                    <button className="cyber-button text-sm py-1 px-4 opacity-50 hover:opacity-100">Locked</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
