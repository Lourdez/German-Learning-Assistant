"use client";

interface Props {
  current: number;
  longest: number;
}

export default function StreakBadge({ current, longest }: Props) {
  return (
    <div className="flex gap-4">
      <div className="flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-amber-500/10 dark:from-orange-500/20 dark:to-amber-500/20 border border-orange-200 dark:border-orange-800 rounded-xl px-4 py-2">
        <span className="text-2xl">&#x1F525;</span>
        <div>
          <div className="text-xs text-orange-600 dark:text-orange-400 font-medium uppercase tracking-wide">
            Current Streak
          </div>
          <div className="text-xl font-bold text-orange-700 dark:text-orange-300">
            {current} {current === 1 ? "day" : "days"}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 dark:from-purple-500/20 dark:to-indigo-500/20 border border-purple-200 dark:border-purple-800 rounded-xl px-4 py-2">
        <span className="text-2xl">&#x1F3C6;</span>
        <div>
          <div className="text-xs text-purple-600 dark:text-purple-400 font-medium uppercase tracking-wide">
            Best Streak
          </div>
          <div className="text-xl font-bold text-purple-700 dark:text-purple-300">
            {longest} {longest === 1 ? "day" : "days"}
          </div>
        </div>
      </div>
    </div>
  );
}
