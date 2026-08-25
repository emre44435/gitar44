"use client";

import { motion, useReducedMotion } from "framer-motion";

export function HeroAtmosphere() {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return null;

  return (
    <div className="hero-atmosphere" aria-hidden="true">
      <motion.div className="stage-light stage-light-left" animate={{ rotate: [-8, 7, -8], opacity: [.22, .38, .22] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="stage-light stage-light-right" animate={{ rotate: [9, -5, 9], opacity: [.18, .34, .18] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} />
      <div className="string-field">
        {[0, 1, 2, 3, 4, 5].map((string) => (
          <motion.span key={string} style={{ "--string-index": string } as React.CSSProperties} animate={{ x: [0, string % 2 ? 3 : -2, 0], opacity: [.18, .56, .18] }} transition={{ duration: 3.8 + string * .45, repeat: Infinity, ease: "easeInOut", delay: string * .16 }} />
        ))}
      </div>
      <div className="sound-origin">
        {[0, 1, 2].map((ring) => <motion.i key={ring} initial={{ scale: .25, opacity: 0 }} animate={{ scale: [0.25, 1.55], opacity: [0, .28, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeOut", delay: ring * 2 }} />)}
      </div>
      <motion.div className="frequency-ribbon ribbon-one" animate={{ y: [0, -14, 0], rotateX: [64, 70, 64] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="frequency-ribbon ribbon-two" animate={{ y: [0, 11, 0], rotateX: [68, 61, 68] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="atmosphere-glint" animate={{ x: ["-20vw", "115vw"], opacity: [0, .75, 0] }} transition={{ duration: 13, repeat: Infinity, ease: "linear", repeatDelay: 3 }} />
    </div>
  );
}
