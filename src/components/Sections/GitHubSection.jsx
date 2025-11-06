import React from "react";
import { motion } from "framer-motion";
import GitHubStatus from "../GitHubStatus";

const GitHubSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 18,
        staggerChildren: 0.16,
        delayChildren: 0.15,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 16,
        mass: 0.7,
      },
    },
  };
  return (
    <section id="github" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-purple-900">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              GitHub Status
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore my open source journey, contributions, and GitHub activity. This section shows my public profile, repositories, followers, and yearly contribution graph.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="max-w-xl mx-auto">
            <GitHubStatus username="BNSUMANTH" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubSection;
