"use client";

import { Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "next-themes";
import { ToggleGroup, ToggleGroupItem } from "@/components/shadcn/toggle-group";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const iconStyle =
    "h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90";

  // Ensure this component would be rendered after the browser paint
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return null;
  }

  return (
    <ToggleGroup
      type="single"
      className="text-grey-700 dark:text-white"
      defaultValue={theme}
    >
      <ToggleGroupItem value="light" onClick={() => setTheme("light")}>
        <Sun className={iconStyle} />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" onClick={() => setTheme("dark")}>
        <Moon className={iconStyle} />
      </ToggleGroupItem>
      <ToggleGroupItem value="system" onClick={() => setTheme("system")}>
        <Laptop className={iconStyle} />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
