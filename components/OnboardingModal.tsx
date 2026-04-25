"use client";

import { useState } from "react";

interface Props {
  onSetDate: (date: string) => void;
}

export default function OnboardingModal({ onSetDate }: Props) {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full p-8 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Willkommen! Welcome!
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          When did you start (or plan to start) studying for the Goethe B2 exam?
          This helps us track your progress through the 6-month plan.
        </p>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Study start date
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent mb-6"
        />
        <button
          onClick={() => onSetDate(date)}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Auf geht&apos;s! Let&apos;s go!
        </button>
      </div>
    </div>
  );
}
