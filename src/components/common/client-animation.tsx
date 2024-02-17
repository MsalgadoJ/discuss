"use client";
import { motion } from "framer-motion";

export default function ClientAnimation({
  children,
  type = "scale",
  direction = "topDown",
  classProp = "",
}: Readonly<{
  children: React.ReactNode;
  type?: string;
  direction?: "topDown" | "leftToRight" | "rightToLeft" | "downUp";
  classProp?: string;
}>) {
  const directions = {
    topDown: { opacity: 0, translateY: -50 },
    leftToRight: { opacity: 0, translateX: -50 },
    rightToLeft: { opacity: 0, translateX: 50 },
    downUp: { opacity: 0, translateY: 10 },
  };
  const animations = {
    horizontal: { opacity: 1, translateX: 0 },
    vertical: { opacity: 1, translateY: 0 },
  };

  if (type === "scale") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        {children}
      </motion.div>
    );
  }
  if (type === "fade") {
    return (
      <motion.div
        className={`${classProp}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    );
  }
  if (type === "fadeIn") {
    return (
      <motion.div
        className={`flex ${classProp}`}
        initial={directions[direction]}
        animate={
          direction.toLowerCase().indexOf("right") !== -1
            ? animations.horizontal
            : animations.vertical
        }
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    );
  }
  if (type === "flash") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, repeat: 2 }}
      >
        {children}
      </motion.div>
    );
  }
}
