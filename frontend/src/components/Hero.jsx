import { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, ShieldCheck, Cpu, CheckCircle2, Zap, Layers } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import './Hero.css';

const headline1 = ['Engineering', 'Solutions.'];
const headline2 = ['Built', 'for', 'Industry.'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const wordMaskVariants = {
  hidden: { y: '115%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Hero = () => {
  const visualRef = useRef(null);

  // 3D Tilt interactive state
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 140, damping: 18 });
  const mouseYSpring = useSpring(y, { stiffness: 140, damping: 18 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['9deg', '-9deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-9deg', '9deg']);

  const handleMouseMove = (e) => {
    if (!visualRef.current) return;
    const rect = visualRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="home" className="cinematic-hero">
      {/* Dynamic Ambient Gradient Mesh & Orbs */}
      <div className="hero-ambient-mesh">
        <div className="mesh-orb orb-red"></div>
        <div className="mesh-orb orb-slate"></div>
        <div className="mesh-orb orb-cyan"></div>
      </div>

      {/* Ultra-Fine Engineering Grid Overlay (opacity-20) */}
      <div className="engineering-grid-overlay"></div>

      <div className="container hero-layout-container">
        {/* Left Column: Staggered Content */}
        <motion.div
          className="hero-narrative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Pill */}
          <motion.div variants={itemVariants} className="enterprise-badge">
            <span className="badge-dot"></span>
            <span>Pioneering Industrial Engineering & Turnkey Projects</span>
          </motion.div>

          {/* Staggered Text-Reveal Headline */}
          <h1 className="hero-cinema-heading">
            <span className="headline-row">
              {headline1.map((word, index) => (
                <span key={index} className="word-clip">
                  <motion.span variants={wordMaskVariants} className="word-text word-white">
                    {word}
                  </motion.span>
                </span>
              ))}
            </span>
            <span className="headline-row">
              {headline2.map((word, index) => (
                <span key={index} className="word-clip">
                  <motion.span variants={wordMaskVariants} className="word-text word-accent">
                    {word}
                  </motion.span>
                </span>
              ))}
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="hero-cinema-sub">
            JK Engineers & Enterprises delivers high-precision engineering design and consultancy,
            end-to-end turnkey project execution, and certified industrial materials & chemical supplies.
          </motion.p>

          {/* Action CTAs */}
          <motion.div variants={itemVariants} className="hero-actions-group">
            <motion.a
              href="#services"
              className="btn btn-primary hero-btn-glow"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Explore Our Services</span>
              <ArrowRight size={18} className="btn-arrow" />
            </motion.a>

            <motion.a
              href="https://wa.me/918008132387?text=Hello%20JK%20Engineers%20%26%20Enterprises%2C%20I%20would%20like%20to%20know%20more%20about%20your%20engineering%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline hero-whatsapp-btn"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <WhatsAppIcon size={22} variant="badge" className="whatsapp-icon" />
              <span>Chat on WhatsApp</span>
            </motion.a>
          </motion.div>

          {/* Trust Metrics Bar */}
          <motion.div variants={itemVariants} className="cinema-metrics-bar">
            <div className="metric-pill">
              <CheckCircle2 size={16} className="metric-accent-red" />
              <span>Turnkey Execution</span>
            </div>
            <div className="metric-divider-dot"></div>
            <div className="metric-pill">
              <ShieldCheck size={16} className="metric-accent-red" />
              <span>ISO Quality Standards</span>
            </div>
            <div className="metric-divider-dot"></div>
            <div className="metric-pill">
              <Cpu size={16} className="metric-accent-red" />
              <span>Technical Precision</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: 3D Perspective Tilt Stage */}
        <motion.div
          className="hero-stage-wrapper"
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            ref={visualRef}
            className="hero-perspective-stage"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Glowing Neon Border Frame */}
            <div className="neon-border-frame">
              <div className="frame-corner corner-tl"></div>
              <div className="frame-corner corner-tr"></div>
              <div className="frame-corner corner-bl"></div>
              <div className="frame-corner corner-br"></div>

              {/* Industrial plant visual */}
              <div className="stage-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"
                  alt="Industrial Plant Engineering"
                  className="stage-image"
                />
                <div className="stage-gradient-overlay"></div>
                <div className="stage-scanline"></div>
              </div>
            </div>

            {/* Floating Interactive Feature Badge 1 (Top Left) */}
            <motion.div
              className="stage-glass-badge badge-top-left"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut' }}
              style={{ transform: 'translateZ(45px)' }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="badge-glow-icon icon-navy">
                <ShieldCheck size={20} className="badge-svg-navy" />
              </div>
              <div className="badge-info">
                <span className="badge-headline">Reliability Built-in</span>
                <span className="badge-detail">Certified Industrial Standards</span>
              </div>
            </motion.div>

            {/* Floating Interactive Feature Badge 2 (Bottom Right) */}
            <motion.div
              className="stage-glass-badge badge-bottom-right"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5.2, ease: 'easeInOut', delay: 0.8 }}
              style={{ transform: 'translateZ(55px)' }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="badge-glow-icon icon-red">
                <Zap size={20} className="badge-svg-red" />
              </div>
              <div className="badge-info">
                <span className="badge-headline">Concept to Commissioning</span>
                <span className="badge-detail">Full Lifecycle Project Delivery</span>
              </div>
            </motion.div>

            {/* Ambient Background Aura behind 3D Stage */}
            <div className="stage-ambient-aura"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
