import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

/**
 * React hook for animation when element is visible
 * @example const controls = useVisibleAnimation({
 *   initial: { x: -5, y: -5 },
 *   visible: { x: 0, y: 0 },
 * });
 */
function useVisibleAnimation({ initial, visible }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return {
    ref,
    animate: controls,
    initial: "initial",
    variants: {
      visible,
      initial,
    },
  };
}

export default useVisibleAnimation;
