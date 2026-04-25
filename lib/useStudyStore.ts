"use client";

import { useState, useEffect, useCallback } from "react";

function getISOWeek(date: Date): number {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
}

function getISOWeekYear(date: Date): number {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  return d.getUTCFullYear();
}

function getCurrentWeekKey(): string {
  const now = new Date();
  return `${getISOWeekYear(now)}-W${getISOWeek(now)}`;
}

function getDayOfWeek(): number {
  const d = new Date().getDay();
  return d === 0 ? 6 : d - 1; // Monday = 0, Sunday = 6
}

function diffWeeks(startDate: string): number {
  const start = new Date(startDate);
  const now = new Date();
  const diff = now.getTime() - start.getTime();
  return Math.max(0, Math.floor(diff / (7 * 24 * 60 * 60 * 1000)));
}

export interface StudyState {
  startDate: string | null;
  completedBlocks: Record<string, boolean>; // keyed by weekKey:blockId
  weekKey: string;
  streakCurrent: number;
  streakLongest: number;
  dailyCompletionLog: Record<string, boolean>; // keyed by "YYYY-MM-DD"
  darkMode: boolean;
}

const STORAGE_KEY = "auf-gehts-study-state";

const defaultState: StudyState = {
  startDate: null,
  completedBlocks: {},
  weekKey: getCurrentWeekKey(),
  streakCurrent: 0,
  streakLongest: 0,
  dailyCompletionLog: {},
  darkMode: true,
};

function loadState(): StudyState {
  if (typeof window === "undefined") return defaultState;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    const parsed = JSON.parse(raw) as StudyState;
    const currentWeek = getCurrentWeekKey();
    if (parsed.weekKey !== currentWeek) {
      // New week — reset completed blocks but keep streaks and start date
      return {
        ...parsed,
        completedBlocks: {},
        weekKey: currentWeek,
      };
    }
    return parsed;
  } catch {
    return defaultState;
  }
}

function saveState(state: StudyState) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

// Block IDs for each day (index 0=Monday ... 6=Sunday)
const dayBlockIds: string[][] = [
  ["mon-1", "mon-2", "mon-3"],
  ["tue-1", "tue-2", "tue-3"],
  ["wed-1", "wed-2", "wed-3"],
  ["thu-1", "thu-2", "thu-3"],
  ["fri-1", "fri-2", "fri-3"],
  ["sat-1", "sat-2", "sat-3"],
  ["sun-1", "sun-2", "sun-3"],
];

function computeStreak(log: Record<string, boolean>): { current: number; longest: number } {
  const today = new Date();
  let current = 0;
  let longest = 0;
  let streak = 0;

  // Check backwards from today
  const d = new Date(today);
  // First check if today is completed — if not, start from yesterday
  const todayKey = d.toISOString().slice(0, 10);
  if (!log[todayKey]) {
    d.setDate(d.getDate() - 1);
  }

  while (true) {
    const key = d.toISOString().slice(0, 10);
    if (log[key]) {
      streak++;
      d.setDate(d.getDate() - 1);
    } else {
      break;
    }
  }
  current = streak;

  // Compute longest by scanning all entries
  const dates = Object.keys(log)
    .filter((k) => log[k])
    .sort();
  streak = 0;
  for (let i = 0; i < dates.length; i++) {
    if (i === 0) {
      streak = 1;
    } else {
      const prev = new Date(dates[i - 1]);
      const curr = new Date(dates[i]);
      const diff = (curr.getTime() - prev.getTime()) / 86400000;
      streak = diff === 1 ? streak + 1 : 1;
    }
    longest = Math.max(longest, streak);
  }

  return { current, longest };
}

export function useStudyStore() {
  const [state, setState] = useState<StudyState>(defaultState);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const s = loadState();
    setState(s);
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) saveState(state);
  }, [state, loaded]);

  const toggleBlock = useCallback((blockId: string) => {
    setState((prev) => {
      const key = `${prev.weekKey}:${blockId}`;
      const newCompleted = { ...prev.completedBlocks };
      if (newCompleted[key]) {
        delete newCompleted[key];
      } else {
        newCompleted[key] = true;
      }

      // Check if today's day is fully complete
      const dayIdx = getDayOfWeek();
      const todayBlocks = dayBlockIds[dayIdx];
      const todayComplete = todayBlocks.every(
        (bid) => newCompleted[`${prev.weekKey}:${bid}`]
      );

      const todayKey = new Date().toISOString().slice(0, 10);
      const newLog = { ...prev.dailyCompletionLog };
      if (todayComplete) {
        newLog[todayKey] = true;
      } else {
        delete newLog[todayKey];
      }

      const { current, longest } = computeStreak(newLog);

      return {
        ...prev,
        completedBlocks: newCompleted,
        dailyCompletionLog: newLog,
        streakCurrent: current,
        streakLongest: longest,
      };
    });
  }, []);

  const isBlockComplete = useCallback(
    (blockId: string) => {
      return !!state.completedBlocks[`${state.weekKey}:${blockId}`];
    },
    [state.completedBlocks, state.weekKey]
  );

  const isDayComplete = useCallback(
    (dayIndex: number) => {
      return dayBlockIds[dayIndex].every(
        (bid) => state.completedBlocks[`${state.weekKey}:${bid}`]
      );
    },
    [state.completedBlocks, state.weekKey]
  );

  const dayProgress = useCallback(
    (dayIndex: number) => {
      const blocks = dayBlockIds[dayIndex];
      const done = blocks.filter(
        (bid) => state.completedBlocks[`${state.weekKey}:${bid}`]
      ).length;
      return { done, total: blocks.length };
    },
    [state.completedBlocks, state.weekKey]
  );

  const setStartDate = useCallback((date: string) => {
    setState((prev) => ({ ...prev, startDate: date }));
  }, []);

  const toggleDarkMode = useCallback(() => {
    setState((prev) => ({ ...prev, darkMode: !prev.darkMode }));
  }, []);

  const weeksCompleted = state.startDate ? diffWeeks(state.startDate) : 0;
  const examReadiness = Math.min(100, Math.round((weeksCompleted / 24) * 100));

  const currentPhase = (() => {
    const w = weeksCompleted + 1;
    if (w <= 8) return 1;
    if (w <= 16) return 2;
    return 3;
  })();

  return {
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
  };
}
