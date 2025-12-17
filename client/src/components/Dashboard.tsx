import { Link, useLocation } from "wouter";
import { 
  LayoutDashboard, 
  Users, 
  Terminal, 
  Cpu, 
  Code, 
  Shield, 
  Activity,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Dashboard() {
  const [location] = useLocation();

  const navItems = [
    { icon: LayoutDashboard, label: "Overview", href: "/" },
    { icon: Users, label: "Team Info", href: "/about" },
    { icon: Terminal, label: "Round 1: Quiz", href: "/round1" },
    { icon: Cpu, label: "Round 2: Debug", href: "/round2" },
    { icon: Code, label: "Round 3: Clone", href: "/round3" },
  ];

  return (
    <aside className="w-1/4 h-screen bg-black border-r border-gray-800 p-6 flex flex-col relative z-20">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Shield className="w-8 h-8 text-primary animate-pulse" />
          <h2 className="text-xl font-bold text-white tracking-tighter">
            DECODE & <span className="text-primary">DOMINATE</span>
          </h2>
        </div>
        <div className="text-xs text-gray-500 font-mono">
          SYSTEM_STATUS: <span className="text-green-500">ONLINE</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const isActive = location === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <div
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded border transition-all cursor-pointer group",
                  isActive
                    ? "bg-primary/10 border-primary text-white shadow-[0_0_10px_rgba(220,38,38,0.3)]"
                    : "bg-transparent border-transparent text-gray-400 hover:bg-white/5 hover:text-white hover:border-white/10"
                )}
              >
                <item.icon className={cn("w-5 h-5", isActive ? "text-primary" : "text-gray-500 group-hover:text-white")} />
                <span className="font-medium tracking-wide">{item.label}</span>
                {isActive && (
                  <Activity className="w-4 h-4 ml-auto text-primary animate-pulse" />
                )}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Stats/Footer */}
      <div className="mt-auto pt-6 border-t border-gray-800">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-900/50 p-3 rounded border border-gray-800">
            <div className="text-xs text-gray-500">SCORE</div>
            <div className="text-xl font-bold text-secondary">000</div>
          </div>
          <div className="bg-gray-900/50 p-3 rounded border border-gray-800">
            <div className="text-xs text-gray-500">RANK</div>
            <div className="text-xl font-bold text-primary">#---</div>
          </div>
        </div>
        
        <button className="w-full flex items-center justify-center gap-2 text-gray-500 hover:text-red-500 transition-colors text-sm py-2">
          <LogOut className="w-4 h-4" />
          <span>DISCONNECT</span>
        </button>
      </div>
    </aside>
  );
}
