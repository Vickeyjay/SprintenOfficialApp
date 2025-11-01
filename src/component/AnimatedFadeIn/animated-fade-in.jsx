// src/component/AnimatedFadeIn/animated-fade-in.jsx
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // delay between each child
      delayChildren: 0.15,   // wait before starting
      ease: "easeOut",
    },
  },
};

const item = {
  hidden: { opacity: 0.8, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.12, 1, 0.16, 0.5], // smooth ease-out cubic
    },
  },
};

const FadeIn = ({ children }) => (
  <motion.div
    variants={container}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }} // animate every time it enters view
  >
    {Array.isArray(children)
      ? children.map((child, i) => (
          <motion.div key={i} variants={item}>
            {child}
          </motion.div>
        ))
      : <motion.div variants={item}>{children}</motion.div>}
  </motion.div>
);

export default FadeIn;
