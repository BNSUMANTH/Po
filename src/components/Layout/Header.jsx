// Header.jsx — Mobile menu below 930px & GitHub Status link added
import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const HEADER_MOBILE_BREAKPOINT = 930;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileView, setIsMobileView] = useState(
    typeof window !== "undefined" ? window.innerWidth <= HEADER_MOBILE_BREAKPOINT : false
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let rAF = null;
    const onResize = () => {
      if (rAF) cancelAnimationFrame(rAF);
      rAF = requestAnimationFrame(() => {
        setIsMobileView(window.innerWidth <= HEADER_MOBILE_BREAKPOINT);
      });
    };
    window.addEventListener("resize", onResize);
    return () => {
      if (rAF) cancelAnimationFrame(rAF);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isMenuOpen]);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  // ✅ Updated Navigation Items (Removed Education & Experience, Added GitHub Status)
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "GitHub Status", href: "#github" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setTimeout(() => {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 160);
  };

  const handleResumeDownload = () => {
    setIsMenuOpen(false);
    window.open(
      "https://drive.google.com/file/d/1awKDl8HAdM6ye2xVlS54QSrEma79p1_B/view?usp=sharing",
      "_blank"
    );
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1awKDl8HAdM6ye2xVlS54QSrEma79p1_B";
    link.download = "Sumanth_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/BNSUMANTH", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sumanthbn18/", label: "LinkedIn" },
    { icon: Mail, href: "#contact", label: "Contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-3 md:py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <motion.a
            whileHover={{ scale: 1.03 }}
            href="#about"
            onClick={(e) => handleNavClick(e, "#about")}
            className="text-lg md:text-xl font-bold text-gray-900 dark:text-white flex-shrink-0 tracking-wide"
            aria-label="Sumanth B N - Home"
          >
            Sumanth B N
          </motion.a>

          {/* Desktop / Tablet Nav */}
          {!isMobileView && (
            <>
              <div className="flex items-center space-x-4 lg:space-x-6 flex-1 justify-center">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.03 }}
                    whileHover={{ scale: 1.06 }}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-sm md:text-base whitespace-nowrap"
                    aria-label={`Go to ${item.label}`}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-4 flex-shrink-0">
                <motion.button
                  onClick={handleResumeDownload}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-2 px-3 py-2 md:px-4 md:py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow text-sm md:text-sm"
                  aria-label="Download resume"
                >
                  <Download size={16} />
                  <span className="hidden md:inline">Resume</span>
                </motion.button>

                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 md:p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    target={social.href.startsWith("http") ? "_blank" : "_self"}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </>
          )}

          {/* Mobile Menu Button */}
          {isMobileView && (
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen((s) => !s)}
              className="p-2 text-gray-700 dark:text-gray-300 flex-shrink-0"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          )}
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileView && isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 py-4 border-t border-gray-200 dark:border-gray-700 w-full"
            >
              <div className="flex flex-col space-y-2 w-full px-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03 }}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2 text-base w-full"
                    aria-label={`Go to ${item.label}`}
                  >
                    {item.label}
                  </motion.a>
                ))}

                <motion.button
                  onClick={handleResumeDownload}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow mt-2 text-base w-full"
                  aria-label="Download resume"
                >
                  <Download size={16} />
                  <span>Download Resume</span>
                </motion.button>

                <div className="flex items-center justify-center gap-5 pt-4 border-t border-gray-200 dark:border-gray-700 w-full">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.05 }}
                      className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      target={social.href.startsWith("http") ? "_blank" : "_self"}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
