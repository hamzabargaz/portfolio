"use client";
import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

type Props = HTMLMotionProps<"div">;

export const FadeIn = ({ children, ...props }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      //   viewport={{ once: true }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
