import React from "react";
import { motion } from "framer-motion";

const Section = ({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
