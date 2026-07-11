"use client";

import { Sparkles } from "lucide-react";
import Button from "@/components/global/Button";

export default function GuideMeButton({ variant = "dark", className = "" }) {
  return (
    <Button
      href="/personalize"
      variant={variant}
      iconLeft={Sparkles}
      className={className}
    >
      Guide me
    </Button>
  );
}
