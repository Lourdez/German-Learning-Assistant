"use client";

import { phases, type Phase } from "@/lib/studyData";

interface Props {
  examReadiness: number;
  weeksCompleted: number;
  currentPhase: number;
}

export default function ProgressBar({ examReadiness, weeksCompleted, currentPhase }: Props) {
  const activePhase: Phase = phases[currentPhase - 1];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
            Exam Readiness
          </h3>
          <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
            {examReadiness}%
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-500 dark:text-gray-400">
            Week {Math.min(weeksCompleted + 1, 24)} of 24
          </div>
          <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            Phase {activePhase.number}: {activePhase.title}
          </div>
        </div>
      </div>

      {/* Progress bar B1 -> B2 */}
      <div className="relative mb-4">
        <div className="flex justify-between text-xs font-bold mb-1">
          <span className="text-emerald-600 dark:text-emerald-400">B1</span>
          <span className="text-indigo-600 dark:text-indigo-400">B2</span>
        </div>
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-full transition-all duration-700 ease-out"
            style={{ width: `${examReadiness}%` }}
          />
        </div>
      </div>

      {/* Phase indicators */}
      <div className="grid grid-cols-3 gap-2">
        {phases.map((phase) => (
          <div
            key={phase.number}
            className={`text-center rounded-lg p-2 text-xs transition-colors ${
              phase.number === currentPhase
                ? "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 font-semibold ring-1 ring-indigo-300 dark:ring-indigo-700"
                : phase.number < currentPhase
                ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400"
                : "bg-gray-50 dark:bg-gray-800 text-gray-400 dark:text-gray-500"
            }`}
          >
            <div className="font-medium">Phase {phase.number}</div>
            <div>{phase.titleDe}</div>
          </div>
        ))}
      </div>

      {/* Current phase focus */}
      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
        <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
          Current Focus
        </h4>
        <ul className="space-y-1">
          {activePhase.focus.map((item, i) => (
            <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
              <span className="text-indigo-500 mt-0.5">&#x25B8;</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
