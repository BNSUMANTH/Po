import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Lightbulb, Users, Rocket } from 'lucide-react';
import GitHubStatus from '../GitHubStatus';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  // Enhanced container and item variants for professional animation
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

  const principles = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Experienced in MERN stack development with hands-on experience from Masai School . I build end-to-end applications with scalable architecture."
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Strong foundation in Data Structures & Algorithms with 250+ LeetCode problems solved. I approach challenges with analytical thinking and efficient solutions."
    },
    {
      icon: Users,
      title: "Collaboration & Communication",
      description: "Proven ability to work in teams through hackathons and collaborative projects. I believe in clear communication and knowledge sharing."
    },
    {
      icon: Rocket,
      title: "Continuous Learning",
      description: "Fast learner with multiple certifications and hands-on project experience. I stay updated with modern technologies and best practices."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              B.Tech Computer Science & Engineering graduate(2021-2025) from Sri Krishnadevaraya University with 
              Full Stack Development certification from Masai School(Feb 2025-Nov 2025). Passionate about building scalable 
              web applications and solving real-world problems through code.
            </p>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Main Story Card */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                My Journey
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                I’ve completed an intensive Full Stack Development program at Masai School, gaining hands-on experience with the MERN stack. During the course, I developed dynamic features and achieved a 30% improvement in API response times through database optimization. I bring strong problem-solving skills, curiosity, and a collaborative spirit to every project I work on.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium">
                  MERN Stack Developer
                </span>
                <span className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-xs font-medium">
                  Problem Solver
                </span>
                <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-xs font-medium">
                  Fast Learner
                </span>
              </div>
            </motion.div>



            {/* Stats Card */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 flex flex-col justify-center"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">250+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">LeetCode Problems</div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">4⭐</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Java HackerRank</div>
              </div>
            </motion.div>
          </div>

          {/* Development Principles */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Development Principles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.045, y: -8, boxShadow: "0 8px 32px rgba(59,130,246,0.10)" }}
                  transition={{ type: "spring", stiffness: 180, damping: 16 }}
                  className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                        <principle.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                        {principle.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;