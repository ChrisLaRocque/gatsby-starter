import React, { useEffect, useState } from "react";
import "./scroll-progress.scss";

export default function ScrollProgress() {
  const [docHeight, setDocHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [progress, setProgress] = useState(0);

  // updates progress variable based on scoll position
  useEffect(() => {
    const onScroll = (e) => {
      const zero = (
        e.target.documentElement.scrollTop /
        (docHeight - windowHeight)
      ).toFixed(2);
      const perc = zero * 100 > 100 ? 100 : zero * 100;
      setProgress(perc);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [progress, docHeight, windowHeight]);

  // if doc + window height haven't been set, set them
  useEffect(() => {
    if (typeof document !== "undefined" && docHeight === 0) {
      setDocHeight(document.body.clientHeight);
      setWindowHeight(window.innerHeight);
    }
  }, [docHeight, windowHeight]);

  return <div id="scroll-progress" style={{ width: `${progress}%` }} />;
}
