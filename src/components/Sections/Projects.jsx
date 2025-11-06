import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Heart, Droplets, Brain } from 'lucide-react';
import artcolabImg from '../../assets/artcolab.png';
import jobportalImg from '../../assets/jobportal.png';
import memehubImg from '../../assets/memehub.png';
import markethubImg from '../../assets/markethub.png';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [

    {
      id: 2,
      title: "Job Portal System",
      subtitle: "Recruitment Platform",
      description: "An end-to-end solution for recruiters to post jobs and candidates to apply.",
      features: [
        "Role-based dashboards",
        "Job posting & applications",
        "MongoDB for data management"
      ],
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      image: jobportalImg,
      url:"https://jobprovider.onrender.com/",
      gurl:"https://github.com/BNSUMANTH/JobPortal_Project"
    },
    {
      id: 3,
      title: "MemeHub",
      subtitle: "Real-time Meme Sharing",
      description: "Built during a 48-hour hackathon, a real-time meme platform with interaction features.",
      features: [
        "Real-time meme sharing",
        "Likes, dislikes & comments",
        "Firebase for backend"
      ],
      icon: Heart,
      color: "from-green-500 to-teal-500",
      bgColor: "from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20",
      tech: ["JavaScript", "Firebase", "Netlify"],
      image: memehubImg,
      url:"https://silly-melba-9a3820.netlify.app/",
      gurl:"https://github.com/BNSUMANTH/Meme_Hub_Project"
    },
    {
      id: 1,
      title: "Multi-Vendor Platform",
      subtitle: "Scalable E-commerce Solution",
      description: "A scalable e-commerce platform with secure authentication and role-based dashboards.",
      features: [
        "Multi-vendor product listings",
        "Secure authentication system",
        "Role-based dashboards"
      ],
      icon: ExternalLink,
      color: "from-orange-500 to-yellow-500",
      bgColor: "from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      image: markethubImg,
      url: "https://multi-vendor-e-commerce-marketplace-8oyi.onrender.com/",
      gurl: "https://github.com/BNSUMANTH/Multivender_Project"
    }
  ];

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
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Real projects that solve real problems. Each one highlights different aspects 
              of modern web development.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 12px 32px rgba(59,130,246,0.10)",
                }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className={`bg-gradient-to-br ${project.bgColor} rounded-2xl p-6 relative overflow-hidden`}
              >
                <div className="relative z-10">
                  {/* Screenshot */}
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-[4/3] md:aspect-video object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Title + Subtitle */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                    {project.subtitle}
                  </p>

                  {/* Short Description */}
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/50 dark:bg-gray-800/50 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <button
                      onClick={() => window.open(project.url, "_blank")}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </button>
                    <button
                      onClick={() => window.open(project.gurl, "_blank")}
                      className="flex items-center gap-2 px-4 py-2 border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600"
                    >
                      <Github size={18} /> Code
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
