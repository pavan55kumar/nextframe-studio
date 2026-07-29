"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

export default function Providers({
  children,
}: {
  children: ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      smoothWheel: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}