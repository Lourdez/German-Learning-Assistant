"use client";

import { useStudyStore } from "@/lib/useStudyStore";
import { weeklyPlan, quotes } from "@/lib/studyData";
import DayCard from "@/components/DayCard";
import StreakBadge from "@/components/StreakBadge";
import ProgressBar from "@/components/ProgressBar";
import ResourcePanel from "@/components/ResourcePanel";
import OnboardingModal from "@/components/OnboardingModal";

function getDayOfWeek(): number {
  const d = new Date().getDay();
  return d === 0 ? 6 : d - 1;
}

export default function Home() {
  const {
    state,
    loaded,
    toggleBlock,
    isBlockComplete,
    isDayComplete,
    dayProgress,
    setStartDate,
    toggleDarkMode,
    weeksCompleted,
    examReadiness,
    currentPhase,
  } = useStudyStore();

  if (!loaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <div className="text-gray-400 text-lg">Loading...</div>
      </div>
    );
  }

  const todayIndex = getDayOfWeek();
  const dayOfYear = Math.floor(
    (new Date().getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
  );
  const todayQuote = quotes[dayOfYear % quotes.length];

  return (
    <div className={state.darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors">
        {!state.startDate && <OnboardingModal onSetDate={setStartDate} />}

        <div className="max-w-5xl mx-auto px-4 py-8">
          {/* Header */}
          <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                Auf geht&apos;s!
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Goethe-Zertifikat B2 &middot; Daily Study Tracker
              </p>
            </div>
            <button
              onClick={toggleDarkMode}
              className="self-start sm:self-auto p-2 rounded-xl bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {state.darkMode ? (
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </header>

          {/* Quote */}
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 border border-indigo-200/50 dark:border-indigo-800/50 rounded-2xl p-4 mb-6">
            <p className="text-lg font-semibold text-indigo-900 dark:text-indigo-200 italic">
              &ldquo;{todayQuote.german}&rdquo;
            </p>
            <p className="text-sm text-indigo-600 dark:text-indigo-400 mt-1">
              {todayQuote.english}
            </p>
          </div>

          {/* Streak + Progress */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2 flex items-start">
              <StreakBadge
                current={state.streakCurrent}
                longest={state.streakLongest}
              />
            </div>
            <div>
              <ProgressBar
                examReadiness={examReadiness}
                weeksCompleted={weeksCompleted}
                currentPhase={currentPhase}
              />
            </div>
          </div>

          {/* Weekly schedule */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Wochenplan
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ml-2">
                Weekly Schedule
              </span>
            </h2>
            <div className="space-y-3">
              {weeklyPlan.map((plan, i) => (
                <DayCard
                  key={plan.day}
                  plan={plan}
                  dayIndex={i}
                  isToday={i === todayIndex}
                  isDayComplete={isDayComplete(i)}
                  dayProgress={dayProgress(i)}
                  isBlockComplete={isBlockComplete}
                  toggleBlock={toggleBlock}
                />
              ))}
            </div>
          </section>

          {/* Resources */}
          <section className="mb-8">
            <ResourcePanel />
          </section>

          {/* Footer */}
          <footer className="text-center text-xs text-gray-400 dark:text-gray-600 py-4">
            Auf geht&apos;s! &mdash; B1 &#x2192; B2 in 24 weeks
          </footer>
        </div>
      </div>
    </div>
  );
}
