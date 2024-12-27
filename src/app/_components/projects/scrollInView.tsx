import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ScrollTriggeredAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animation triggers only once when the component comes into view

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Initial state before scrolling into view
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Triggered animation when in view
      transition={{ duration: 0.5 }}
      style={{ height: "200px", background: "lightblue", margin: "20px 0" }}
    >
      <h2>I'm a scroll-triggered animation!</h2>
    </motion.div>
  );
};

export default ScrollTriggeredAnimation;
