"use client";

import { useState } from "react";
import type { DayPlan } from "@/lib/studyData";

interface Props {
  plan: DayPlan;
  dayIndex: number;
  isToday: boolean;
  isDayComplete: boolean;
  dayProgress: { done: number; total: number };
  isBlockComplete: (blockId: string) => boolean;
  toggleBlock: (blockId: string) => void;
}

export default function DayCard({
  plan,
  isToday,
  isDayComplete,
  dayProgress,
  isBlockComplete,
  toggleBlock,
}: Props) {
  const [expanded, setExpanded] = useState(isToday);

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        isDayComplete
          ? "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-700"
          : isToday
          ? "bg-indigo-50/50 dark:bg-indigo-950/20 border-indigo-300 dark:border-indigo-700 ring-2 ring-indigo-400/30"
          : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800"
      }`}
    >
      {/* Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-4 text-left"
      >
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              {plan.dayDe}
              {isToday && (
                <span className="ml-2 text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-2 py-0.5 rounded-full">
                  Heute
                </span>
              )}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {plan.theme}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {isDayComplete && (
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm animate-pulse">
              &#x2713; Fertig!
            </span>
          )}
          <div className="flex gap-1">
            {Array.from({ length: dayProgress.total }).map((_, i) => (
              <div
                key={i}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i < dayProgress.done
                    ? "bg-emerald-500"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
          <svg
            className={`w-5 h-5 text-gray-400 transition-transform ${
              expanded ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Blocks */}
      {expanded && (
        <div className="px-4 pb-4 space-y-3">
          {plan.blocks.map((block) => {
            const complete = isBlockComplete(block.id);
            return (
              <div
                key={block.id}
                className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-200 ${
                  complete
                    ? "bg-emerald-100/60 dark:bg-emerald-900/30"
                    : "bg-gray-50 dark:bg-gray-800/50"
                }`}
              >
                <button
                  onClick={() => toggleBlock(block.id)}
                  className={`mt-0.5 w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                    complete
                      ? "bg-emerald-500 border-emerald-500 text-white scale-110"
                      : "border-gray-300 dark:border-gray-600 hover:border-indigo-400"
                  }`}
                >
                  {complete && (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-semibold text-sm ${
                        complete
                          ? "line-through text-gray-400 dark:text-gray-500"
                          : "text-gray-900 dark:text-white"
                      }`}
                    >
                      {block.title}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full">
                      {block.duration} min
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {block.description}
                  </p>
                  <span className="inline-block text-xs text-indigo-600 dark:text-indigo-400 mt-1">
                    {block.resource}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
