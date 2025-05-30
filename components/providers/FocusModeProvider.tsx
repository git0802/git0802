"use client";

import useFocusMode from "@/hooks/useFocusMode";
import { useEffect } from "react";

interface FocusModeProviderProps {
  children: React.ReactNode;
}

function FocusModeProvider({ children }: FocusModeProviderProps) {
  const { focusMode } = useFocusMode();

  useEffect(() => {
    if (focusMode) {
      document.documentElement.classList.add("fm");
    } else {
      document.documentElement.classList.remove("fm");
    }
  }, [focusMode]);

  return <>{children}</>;
}

export default FocusModeProvider;
