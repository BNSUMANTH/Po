import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Lightbulb, Users, Rocket, Briefcase, BookOpen, UserCheck } from 'lucide-react';
import GitHubStatus from '../GitHubStatus';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 18,
        staggerChildren: 0.12,
        delayChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28, scale: 0.99 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 16,
      },
    },
  };

  const principles = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description:
        "Proficient in the MERN stack (MongoDB, Express, React, Node.js) and Firebase. Skilled in building secure, scalable, and efficient full-stack applications."
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description:
        "Strong foundation in Data Structures & Algorithms with 250+ LeetCode problems solved. Known for analytical thinking and optimization techniques."
    },
    {
      icon: Users,
      title: "Collaboration & Communication",
      description:
        "Team player experienced in agile workflows, collaborative problem-solving, and communicating effectively in remote and team environments."
    },
    {
      icon: Rocket,
      title: "Continuous Learning",
      description:
        "Committed to continuous learning with certifications in web development, MS Office, and Coursera programs. Always exploring new technologies."
    },
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
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Proactive Full Stack Developer skilled in JavaScript, MERN stack, and Firebase.
              I build scalable and responsive web applications, handle API integrations, and ensure performance and security.
              Quick learner with excellent problem-solving and communication skills.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants} className="bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-8 mb-12">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Education</h3>
              <BookOpen className="w-5 h-5 text-gray-500 dark:text-gray-300" />
            </div>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li>
                <div className="font-medium">Masai School</div>
                <div className="text-sm">Full Stack Development (Feb 2025 – Sep 2025)</div>
              </li>
              <li>
                <div className="font-medium">Sri Krishnadevaraya University</div>
                <div className="text-sm">
                  B.Tech in Computer Science & Engineering (2021 – 2025), Anantapur, Andhra Pradesh
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Experience */}
          <motion.div variants={itemVariants} className="bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-8 mb-12">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Experience</h3>
              <Briefcase className="w-5 h-5 text-gray-500 dark:text-gray-300" />
            </div>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div className="font-medium">
                Full Stack Web Development Trainee — Masai School (Remote)
              </div>
              <div className="text-sm mb-2">Feb 2025 – Oct 2025</div>
              <ul className="list-disc ml-5 space-y-2 text-sm">
                <li>Developed 5+ full-stack applications using MERN stack (MongoDB, Express, React, Node.js).</li>
                <li>Implemented secure authentication systems and optimized database queries (30% faster).</li>
                <li>Handled 100+ API requests per day ensuring scalability and performance.</li>
                <li>Collaborated in Agile teams of 3–5 members simulating real-world workflows.</li>
                <li>Solved 200+ coding problems improving problem-solving and DSA fundamentals.</li>
              </ul>
            </div>
          </motion.div>


          {/* Certifications & Achievements */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-indigo-50 to-cyan-50 dark:from-indigo-900/20 dark:to-cyan-900/20 rounded-2xl p-6 mb-12">
            <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-3">
              Certifications & Achievements
            </h4>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 text-sm space-y-2">
              <li>Hackathon Edition 4 by Masai School (2025)</li>
              <li>MS Office Certificate – Mythri Ojas Academy (Sep–Dec 2023)</li>
              <li>Programming Foundations with JavaScript, HTML, and CSS – Coursera (Duke University)</li>
              <li>5-Star Python — HackerRank</li>
              <li>250+ LeetCode Problems Solved</li>
            </ul>
          </motion.div>

          {/* Development Principles */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Development Principles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {principles.map((principle) => (
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
