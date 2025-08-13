import { gsap } from "gsap";
import { animateBulbFlicker, animateCameraZoom } from "./gsapAnimations";

export function createScrollTimeline({ cameraRef, bulbRefs }) {
  const timeline = gsap.timeline({ paused: true });

  // Add individual animation timelines in sequence or parallel
  timeline.add(animateBulbFlicker(bulbRefs[0]), 0);
  timeline.add(animateCameraZoom(cameraRef), 0);

  // Add more animations as needed...

  return timeline;
}
