import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import profileImg from "../../assets/profile.jpg";

const roles = ["Problem Solver", "Full Stack Developer"];

function TypingRoles() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentRole = roles[roleIndex];
    if (!deleting && charIndex <= currentRole.length) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, charIndex));
        setCharIndex(charIndex + 1);
      }, 80);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, charIndex));
        setCharIndex(charIndex - 1);
      }, 40);
    } else if (!deleting && charIndex > currentRole.length) {
      timeout = setTimeout(() => setDeleting(true), 1200);
    } else if (deleting && charIndex < 0) {
      setDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
      setCharIndex(0);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <h2 className="text-lg md:text-xl text-blue-700 dark:text-blue-400 font-bold min-h-[2.5rem]">
      {text}
      <span className="animate-pulse">|</span>
    </h2>
  );
}

const Hero = () => {
  // Enhanced container and item variants for more professional animation
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 18,
        staggerChildren: 0.18,
        delayChildren: 0.2,
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

  // Improved floating icon animation for more natural movement
  const floatingVariants = (delay = 0) => ({
    animate: {
      y: [0, -18, 0, 18, 0],
      rotate: [0, 8, 0, -8, 0],
      transition: {
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      },
    },
  });


  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 pt-20 text-sm md:text-base">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col-reverse md:flex-row items-center md:items-center gap-12 md:gap-16 justify-center">
            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left justify-center h-full">
              <motion.div variants={itemVariants} className="relative z-10 w-full">
                <motion.h1
                  className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                  whileHover={{ scale: 1.04, textShadow: "0 4px 32px rgba(99,102,241,0.18)" }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    B N Sumanth
                  </span>
                </motion.h1>
              </motion.div>

              {/* Typing Animation for Roles */}
              <motion.div variants={itemVariants} className="w-full mb-6">
                <TypingRoles />
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-16 w-full"
              >
                <motion.a
                  href="#github"
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 12px 32px rgba(59, 130, 246, 0.22)",
                    backgroundColor: "#2563eb",
                  }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg text-center"
                >
                  View My Work
                </motion.a>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.08, borderColor: "#2563eb", color: "#2563eb" }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors"
                  onClick={() => {
                    // Open in new tab
                    window.open("https://drive.google.com/file/d/1awKDl8HAdM6ye2xVlS54QSrEma79p1_B/view?usp=sharing", "_blank");
                    // Trigger download
                    const link = document.createElement('a');
                    link.href = "https://drive.google.com/uc?export=download&id=1awKDl8HAdM6ye2xVlS54QSrEma79p1_B";
                    link.download = "Sumanth_Resume.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  Download Resume
                </motion.button>
              </motion.div>
            </div>
            {/* Profile Photo */}
            <motion.div variants={itemVariants} className="flex justify-center md:justify-end items-center mb-8 md:mb-0 md:ml-8 w-full md:w-auto">
              <motion.img
                src={profileImg}
                alt="Profile"
                className="w-64 h-64 md:w-72 md:h-72 rounded-full border-4 border-blue-500 shadow-xl object-cover bg-white dark:bg-gray-900"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 16, delay: 0.1 }}
              />
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center mt-8"
          >
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
              Scroll to explore
            </p>
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="text-gray-400 dark:text-gray-500"
            >
              <ArrowDown size={24} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
