import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

interface MotionWrapperProps extends MotionProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  animationType?: "fadeIn" | "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "scale" | "none";
}

export function MotionWrapper({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
  animationType = "fadeIn",
  ...props
}: MotionWrapperProps) {
  // Define animation variants
  const animations = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    fadeInUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
    },
    fadeInDown: {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
    },
    fadeInLeft: {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 20 },
    },
    fadeInRight: {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -20 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.95 },
    },
    none: {
      initial: {},
      animate: {},
      exit: {},
    },
  };

  const selectedAnimation = animations[animationType];

  return (
    <motion.div
      initial={selectedAnimation.initial}
      whileInView={selectedAnimation.animate}
      exit={selectedAnimation.exit}
      transition={{ duration, delay }}
      viewport={{ once: true, margin: "-50px" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}