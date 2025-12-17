import { Clock, GitBranch, Download, Image, Check, X } from "lucide-react";
import { useEffect } from "react";

export default function Round3() {
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
        <h1 className="text-5xl font-bold mb-4 text-primary glitch-text" data-text="Round 3: Web Cloning Challenge">
          Round 3: Web Cloning Challenge
        </h1>
        <div className="cyber-button inline-block text-xl">TIME: 90:00</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Challenge Info */}
        <div className="cyber-card col-span-2">
          <h2 className="text-3xl text-secondary mb-4 font-bold font-display">Final Round Challenge</h2>
          <p className="text-lg mb-6 text-gray-300">Recreate the provided website design with pixel-perfect accuracy.</p>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-6 bg-gray-900/50 rounded border border-gray-800">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-primary font-bold text-xl">90 Minutes</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">Duration</div>
            </div>
            <div className="text-center p-6 bg-gray-900/50 rounded border border-gray-800">
              <GitBranch className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-primary font-bold text-xl">GitHub Only</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">Submission Format</div>
            </div>
          </div>
        </div>

        {/* Assets Download */}
        <div className="cyber-card flex flex-col justify-center">
          <h2 className="text-3xl text-secondary mb-4 font-bold font-display">Assets</h2>
          <a href="https://assets.decode-dominate.com/round3" target="_blank" className="cyber-button w-full text-center block mb-4 flex items-center justify-center gap-2">
            <Download className="w-4 h-4" />
            Download Assets
          </a>
          <p className="text-sm text-gray-400 text-center">Includes design mockups, images, and specifications</p>
        </div>
      </div>

      {/* Evaluation Criteria */}
      <div className="cyber-card mb-8">
        <h2 className="text-3xl text-secondary mb-6 font-bold font-display">Evaluation Criteria</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: "Design accuracy", val: "40%" },
            { label: "Code quality", val: "30%" },
            { label: "Functionality", val: "20%" },
            { label: "Creativity", val: "10%" }
          ].map((item, i) => (
            <div key={i} className="p-4 bg-gray-900/50 rounded border border-gray-800">
              <div className="flex justify-between items-center mb-3">
                <span className="text-primary font-bold">{item.label}</span>
                <span className="text-secondary font-bold text-xl">{item.val}</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                <div className="bg-primary h-2 rounded-full" style={{ width: item.val }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Submission Guidelines */}
      <div className="cyber-card">
        <h2 className="text-3xl text-secondary mb-6 font-bold font-display">Submission Guidelines</h2>

        <div className="grid grid-cols-1 gap-8 mb-8">
          <div>
            <h3 className="text-xl text-primary mb-4 font-bold flex items-center gap-2">
              <span className="bg-red-900/30 text-red-500 p-1 rounded"><X className="w-4 h-4" /></span> 
              Restrictions
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center"><X className="w-4 h-4 mr-2 text-red-500" /> No frameworks allowed - Pure HTML/CSS/JS only</li>
            </ul>
          </div>
        </div>

        {/* GitHub Submission */}
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
          <h3 className="text-xl text-white mb-4 font-bold font-display">GitHub Submission</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <input type="text"
                   className="flex-1 bg-black border border-gray-700 rounded p-3 text-white focus:border-primary outline-none"
                   placeholder="https://github.com/username/repository" />
            <button className="cyber-button bg-green-600/20 border-green-500 text-green-500 hover:bg-green-600 hover:text-white">
              Submit Repository
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-3">Make sure repository is public and contains all necessary files</p>
        </div>
      </div>
    </div>
  );
}
