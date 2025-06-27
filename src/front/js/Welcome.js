import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import "../styles/welcome.css";
import mifoto from "../img/mifoto.png";
import {
  FaGithub,
  FaLinkedin,
  FaAddressCard,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Welcome = ({ theme }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const skills = [
    { text: "Full Stack" },
    { text: "React" },
    { text: "Python" },
  ];

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = mifoto;
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [skills.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  const socialItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      className={`welcome-section ${
        theme === "dark" ? "dark-theme" : "light-theme"
      }`}
    >
      <motion.div
        ref={ref}
        className="welcome-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Text Content */}
        <motion.div className="welcome-text" variants={textVariants}>
          <motion.div className="welcome-badge">
            <motion.span
              className="badge-icon"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              👋
            </motion.span>
            <span>¡Hola! Bienvenido a mi portfolio</span>
          </motion.div>

          <motion.h1 className="welcome-title">
            Soy <span className="highlight-name">Denis Díaz</span>
          </motion.h1>

          <motion.div className="welcome-subtitle-container">
            <span className="subtitle-static">Desarrollador </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentSkill}
                className="subtitle-dynamic"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {skills[currentSkill].text}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p className="welcome-description">
            Especializado en crear{" "}
            <span className="highlight-text">soluciones web modernas</span> y
            eficientes. Disfruto transformando ideas en aplicaciones
            funcionales utilizando diferentes tecnologías.
          </motion.p>

          <motion.div className="welcome-location">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaMapMarkerAlt className="location-icon" />
            </motion.div>
            <span>Madrid, España</span>
          </motion.div>

          <motion.div className="welcome-cta">
            <motion.a
              href="mailto:denis9diaz@hotmail.com"
              className="contact-button secondary"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope />
              <span>Contáctame</span>
              <div className="button-glow"></div>
            </motion.a>

            <motion.a
              href="https://drive.google.com/file/d/1NfWb6ahd5FjNQufgXPC0HrTu4vj6S8rT/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button secondary"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaAddressCard />
              <span>Ver CV</span>
              <div className="button-glow"></div>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Image Content */}
        <motion.div className="welcome-image" variants={imageVariants}>
          <div className="image-container">
            {!imageLoaded && (
              <motion.div
                className="image-skeleton"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <div className="skeleton-animation"></div>
              </motion.div>
            )}
            <motion.img
              src={mifoto}
              alt="Denis Díaz - Desarrollador Full Stack"
              className={`profile-image ${imageLoaded ? "loaded" : ""}`}
              animate={
                imageLoaded
                  ? {
                      y: [0, -10, 0],
                    }
                  : {}
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            />
            <motion.div
              className="image-glow"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Floating Tech Icons */}
            <div className="tech-orbits">
              {[
                { icon: "⚛️", delay: 0, radius: 150 },
                { icon: "🐍", delay: 1, radius: 180 },
                { icon: "💎", delay: 2, radius: 200 },
                { icon: "🚀", delay: 3, radius: 170 },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className="tech-orbit"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 10 + tech.delay * 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: tech.delay,
                  }}
                  style={{
                    width: tech.radius,
                    height: tech.radius,
                  }}
                >
                  <motion.span
                    className="tech-icon"
                    animate={{
                      rotate: -360,
                    }}
                    transition={{
                      duration: 10 + tech.delay * 2,
                      repeat: Infinity,
                      ease: "linear",
                      delay: tech.delay,
                    }}
                  >
                    {tech.icon}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div className="social-section" variants={socialVariants}>
            <p className="social-title">Conecta conmigo</p>
            <div className="social-links">
              {[
                {
                  href: "https://github.com/denis9diaz",
                  icon: FaGithub,
                  label: "GitHub",
                  color: "#333",
                },
                {
                  href: "https://www.linkedin.com/in/denis-diaz-romero/",
                  icon: FaLinkedin,
                  label: "LinkedIn",
                  color: "#0077B5",
                },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  variants={socialItemVariants}
                  whileHover={{
                    scale: 1.2,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon />
                  <motion.div
                    className="social-ripple"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.5, opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced Floating Elements */}
      <div className="floating-elements">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`floating-element element-${i % 3}`}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
            style={{
              left: `${5 + Math.random() * 90}%`,
              top: `${5 + Math.random() * 90}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Welcome;
