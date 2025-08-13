// src/animations/gsapAnimations.js
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animateBulbFlicker(bulbRefs, options = {}) {
  const tl = gsap.timeline();

  bulbRefs.forEach((bulb, i) => {
    tl.to(
      bulb,
      {
        opacity: 1,
        duration: 0.3,
        repeat: 3,
        yoyo: true,
        ease: "power1.inOut",
        delay: i * (options.stagger ?? 0.2),
      },
      0
    );
  });

  return tl;
}

export function animateCameraZoom(cameraRef, { x = 0, y = 0, z = 1, duration = 2 } = {}) {
  if (!cameraRef.current) return gsap.timeline();

  return gsap.timeline().to(cameraRef.current.style, {
    scale: z,
    x,
    y,
    duration,
    ease: "power2.inOut",
  });
}

export function animateLightPoleGlow(poleRefs) {
  const tl = gsap.timeline({ repeat: -1, yoyo: true });

  poleRefs.forEach((pole, i) => {
    tl.to(
      pole,
      {
        boxShadow: "0 0 15px 5px rgba(255, 255, 150, 0.7)",
        duration: 1.5,
        ease: "sine.inOut",
        delay: i * 0.3,
      },
      0
    );
    tl.to(
      pole,
      {
        boxShadow: "0 0 5px 1px rgba(255, 255, 150, 0.3)",
        duration: 1.5,
        ease: "sine.inOut",
      },
      1.5
    );
  });

  return tl;
}

export function animateBackgroundParallax(bgRef, scrollTriggerOptions) {
  if (!bgRef.current) return gsap.timeline();

  return gsap.timeline({
    scrollTrigger: {
      trigger: scrollTriggerOptions.trigger,
      start: scrollTriggerOptions.start || "top bottom",
      end: scrollTriggerOptions.end || "bottom top",
      scrub: true,
    },
  }).to(bgRef.current, { y: 50, ease: "none" });
}
