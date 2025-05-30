"use client";

import { useEffect, useRef } from "react";

import useFocusMode from "@/hooks/useFocusMode";
import useShortcut from "@/hooks/useShortcut";
import useTheme from "@/hooks/useTheme";
import useGlobalStore from "@/store/useGlobal.store";
import toast from "../ui/Toast";
import { toast as sonnerToast } from "sonner";

const focusToast = {
  title: "Focus Turned {STATUS}",
  message:
    "Focus helps reduce distractions by hiding floating components, like navigation and reactions.",
};

function Shortcuts() {
  const { theme, setTheme } = useTheme();
  const { isQuickAccessOpen, setQuickAccessOpen } = useGlobalStore();
  const { focusMode, setFocusMode } = useFocusMode();
  const isFirstRender = useRef(true);

  useShortcut("KeyD", () => {
    setTheme(theme === "dark" ? "light" : "dark");
  });

  useShortcut("KeyQ", () => {
    setQuickAccessOpen(!isQuickAccessOpen);
  });

  useShortcut("KeyF", () => {
    setFocusMode(!focusMode);

    toast({
      title: focusToast.title.replace(
        "{STATUS}",
        `${focusMode ? "Off" : "On"}`
      ),
      description: focusToast.message,
      button: {
        label: "Reply",
        onClick: () => sonnerToast.dismiss(),
      },
    });
  });

  useEffect(() => {
    if (isFirstRender.current) {
      sonnerToast.dismiss();
    }
  }, [focusMode]);

  return null;
}

export default Shortcuts;
