import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
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

const GitHubStatus = () => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="p-6 border-2 border-blue-200 dark:border-blue-900 rounded-2xl shadow-xl bg-white dark:bg-gray-900 w-full max-w-2xl mx-auto text-center"
      whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(59,130,246,0.10)" }}
      transition={{ type: "spring", stiffness: 180, damping: 16 }}
    >
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">My GitHub Stats 📊</h2>
      <div className="flex flex-col items-center gap-8">
        <motion.img
          src="https://github-readme-stats.vercel.app/api?username=kireeti407&show_icons=true&theme=radical&hide_border=true&include_all_commits=true&count_private=true"
          alt="GitHub Stats"
          className="rounded-xl shadow-md w-full max-w-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 80, damping: 16 }}
        />
        <motion.img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=kireeti407&layout=compact&theme=radical&hide_border=true"
          alt="Top Languages"
          className="rounded-xl shadow-md w-full max-w-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 80, damping: 16 }}
        />
        <motion.img
          src="https://github-readme-streak-stats.herokuapp.com/?user=kireeti407&theme=radical&hide_border=true"
          alt="GitHub Streak"
          className="rounded-xl shadow-md w-full max-w-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 80, damping: 16 }}
        />
        <motion.img
          src="https://github-profile-trophy.vercel.app/?username=kireeti407&theme=radical&column=7"
          alt="GitHub Trophies"
          className="rounded-xl shadow-md w-full max-w-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 80, damping: 16 }}
        />
      </div>
    </motion.div>
  );
};

export default GitHubStatus;
