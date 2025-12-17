import { Target, Clock, FileText, AlertOctagon, Eye, ShieldOff, RefreshCw, AlertTriangle } from "lucide-react";
import { useEffect } from "react";

export default function Round2() {
  // Anti-cheat mechanisms
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      alert("Security Alert: Right-click is disabled!");
    };
    document.addEventListener('contextmenu', handleContextMenu);

    // Disable copy/paste/cut
    const handleCopyPaste = (e: ClipboardEvent) => {
      e.preventDefault();
      alert("Security Alert: Copy/Paste is disabled!");
    };
    document.addEventListener('copy', handleCopyPaste);
    document.addEventListener('cut', handleCopyPaste);
    document.addEventListener('paste', handleCopyPaste);

    // Detect tab switching
    const handleVisibilityChange = () => {
      if (document.hidden) {
        alert("Security Alert: Tab switching detected! Refreshing...");
        window.location.reload();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('copy', handleCopyPaste);
      document.removeEventListener('cut', handleCopyPaste);
      document.removeEventListener('paste', handleCopyPaste);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="cyber-glitch-container animate-in fade-in duration-500">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-4 text-primary glitch-text" data-text="Round 2: Code Debugging Challenge">
          Round 2: Code Debugging Challenge
        </h1>
        <div className="cyber-button inline-block text-xl">TIME: 60:00</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Challenge Overview */}
        <div className="cyber-card">
          <h2 className="text-3xl text-secondary mb-6 font-bold font-display">Challenge Overview</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <Target className="w-6 h-6 text-primary mr-4 mt-1" />
              <div>
                <h4 className="text-primary font-bold mb-1">Mode</h4>
                <p className="text-gray-400">Debugging Competition</p>
              </div>
            </div>
            <div className="flex items-start">
              <Clock className="w-6 h-6 text-primary mr-4 mt-1" />
              <div>
                <h4 className="text-primary font-bold mb-1">Duration</h4>
                <p className="text-gray-400">60 Minutes</p>
              </div>
            </div>
            <div className="flex items-start">
              <FileText className="w-6 h-6 text-primary mr-4 mt-1" />
              <div>
                <h4 className="text-primary font-bold mb-1">Submission</h4>
                <p className="text-gray-400">Submit debugged code as PDF with explanations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Rules */}
        <div className="cyber-card">
          <h2 className="text-3xl text-secondary mb-6 font-bold font-display">Rules</h2>
          <ul className="space-y-4">
            {[
              "Fix bugs in provided code snippets",
              "PDF submission only - no code files",
              "Screenshot detection enabled",
              "No external help allowed"
            ].map((rule, i) => (
              <li key={i} className="flex items-start">
                <AlertOctagon className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Code Debugging Interface */}
      <div className="cyber-card mt-8">
        <h2 className="text-3xl text-secondary mb-6 font-bold font-display">Debugging Challenge</h2>

        {/* Buggy Code Sample */}
        <div className="mb-6">
          <h3 className="text-xl text-primary mb-3 font-bold">Buggy Code #1</h3>
          <pre className="bg-gray-950 p-6 rounded-lg overflow-x-auto font-mono text-sm border border-gray-800 leading-relaxed">
            <code>
<span className="text-green-400">// Fix the following JavaScript function</span>
<span className="text-blue-400">function</span> <span className="text-yellow-400">calculateSum</span>(<span className="text-orange-400">numbers</span>) {"{"}
    <span className="text-blue-400">let</span> total = <span className="text-purple-400">0</span>;
    <span className="text-blue-400">for</span> (<span className="text-blue-400">let</span> i = <span className="text-purple-400">0</span>; i &lt;= numbers.length; i++) {"{"}
        total += numbers[i];
    {"}"}
    <span className="text-blue-400">return</span> total;
{"}"}

<span className="text-green-400">// Test case that should return 15</span>
<span className="text-yellow-400">console</span>.<span className="text-blue-400">log</span>(calculateSum([<span className="text-purple-400">1</span>, <span className="text-purple-400">2</span>, <span className="text-purple-400">3</span>, <span className="text-purple-400">4</span>, <span className="text-purple-400">5</span>]));
            </code>
          </pre>
        </div>

        {/* Solution Area */}
        <div>
          <h3 className="text-xl text-primary mb-3 font-bold">Your Solution</h3>
          <textarea
            className="w-full h-40 bg-gray-950 border border-gray-800 rounded-lg p-4 font-mono text-sm text-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
            placeholder="Explain the bug and provide the corrected code..."
          ></textarea>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <button className="cyber-button">Save Progress</button>
          <button className="cyber-button bg-green-600/20 border-green-500 text-green-500 hover:bg-green-600 hover:text-white">Submit PDF</button>
        </div>
      </div>

      {/* Anti-Cheat Warning */}
      <div className="cyber-card mt-8 !border-red-600/50 bg-red-950/10">
        <div className="flex items-center mb-4">
          <AlertTriangle className="w-8 h-8 text-red-500 mr-3" />
          <h2 className="text-2xl text-red-500 font-bold tracking-wider font-display">ANTI-CHEAT WARNING</h2>
        </div>
        <p className="text-lg mb-4 text-gray-300">Any cheating attempt leads to immediate disqualification</p>
        <div className="p-3 bg-red-900/20 border border-red-900/50 rounded text-center">
           <p className="text-red-400 font-bold uppercase tracking-widest">STRICT MONITORING ENABLED</p>
        </div>
      </div>
    </div>
  );
}
