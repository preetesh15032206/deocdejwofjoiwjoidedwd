import { AlertTriangle, Shield, Clock, Award } from "lucide-react";
import { useState, useEffect } from "react";

export default function Round1() {
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 mins

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    // Anti-cheat: Disable right-click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      alert("Security Alert: Right-click is disabled!");
    };
    document.addEventListener('contextmenu', handleContextMenu);

    // Anti-cheat: Disable copy/paste/cut
    const handleCopyPaste = (e: ClipboardEvent) => {
      e.preventDefault();
      alert("Security Alert: Copy/Paste is disabled!");
    };
    document.addEventListener('copy', handleCopyPaste);
    document.addEventListener('cut', handleCopyPaste);
    document.addEventListener('paste', handleCopyPaste);

    // Anti-cheat: Detect tab switching
    const handleVisibilityChange = () => {
      if (document.hidden) {
        alert("Security Alert: Tab switching detected! Refreshing...");
        window.location.reload();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(timer);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('copy', handleCopyPaste);
      document.removeEventListener('cut', handleCopyPaste);
      document.removeEventListener('paste', handleCopyPaste);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="cyber-glitch-container animate-in fade-in duration-500">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-4 text-primary glitch-text" data-text="Round 1: FastTrack Quiz Challenge">
          Round 1: FastTrack Quiz Challenge
        </h1>
        <div className="cyber-button inline-block text-xl">TIME: {formatTime(timeLeft)}</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Quiz Info Panel */}
        <div className="cyber-card">
          <h2 className="text-3xl text-secondary mb-4 font-bold font-display">Challenge Details</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-gray-800">
              <span className="text-primary font-bold">Mode:</span>
              <span className="text-gray-300">Online Quiz</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-800">
              <span className="text-primary font-bold">Duration:</span>
              <span className="text-gray-300">30 Minutes</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-800">
              <span className="text-primary font-bold">Questions:</span>
              <span className="text-gray-300">25 Multiple Choice Questions</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-800">
              <span className="text-primary font-bold">Scoring:</span>
              <span className="text-gray-300">Each correct answer: +4 points, Wrong answer: -1 point</span>
            </div>
          </div>
        </div>

        {/* Instructions Panel */}
        <div className="cyber-card">
          <h2 className="text-3xl text-secondary mb-4 font-bold font-display">Instructions</h2>
          <ul className="space-y-4">
            {[
              "No tab switching allowed - system will detect and refresh",
              "Right-click and copy-paste are disabled",
              "Complete the quiz within the time limit",
              "Certificates awarded to all participants"
            ].map((instruction, i) => (
              <li key={i} className="flex items-start text-gray-300">
                <AlertTriangle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span>{instruction}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Quiz Interface */}
      <div className="cyber-card mt-8">
        <div className="flex justify-between items-center mb-6 border-b border-gray-800 pb-4">
          <h2 className="text-3xl text-secondary font-bold font-display">Quiz Interface</h2>
          <div className="flex items-center space-x-6 text-xl">
            <span className="text-primary font-bold">Question: <span className="text-white">1</span>/25</span>
          </div>
        </div>

        {/* Sample Question */}
        <div className="mb-8">
          <h3 className="text-xl text-white mb-6 font-medium">1. What does HTML stand for?</h3>
          <div className="space-y-4">
            {[
              "Hyper Text Markup Language",
              "High Tech Modern Language",
              "Hyper Transfer Markup Language",
              "High Text Modern Language"
            ].map((option, i) => (
              <label key={i} className="flex items-center p-4 bg-gray-900/50 border border-gray-800 rounded cursor-pointer hover:bg-gray-800 hover:border-gray-600 transition-colors group">
                <div className="w-5 h-5 rounded-full border-2 border-gray-600 mr-4 group-hover:border-primary flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <span className="text-gray-300 group-hover:text-white">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-between pt-4">
          <button className="cyber-button opacity-50 cursor-not-allowed">Previous</button>
          <button className="cyber-button">Next Question</button>
        </div>
      </div>

      {/* Qualification Info */}
      <div className="cyber-card mt-8">
        <h2 className="text-3xl text-secondary mb-4 font-bold font-display">Qualification Criteria</h2>
        <p className="text-lg mb-4 text-gray-300">Top 50% participants qualify for Round 2.</p>
        <div className="bg-gray-900/50 p-6 rounded border border-gray-800">
          <h4 className="text-primary mb-3 font-bold uppercase tracking-wide">Certificate Distribution:</h4>
          <p className="text-gray-400 flex items-center">
             <Award className="w-5 h-5 text-secondary mr-2" />
             Digital certificate provided upon completion
          </p>
        </div>
      </div>
    </div>
  );
}
