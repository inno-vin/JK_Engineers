import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  Briefcase, 
  ShieldCheck, 
  CheckCircle2, 
  Building2, 
  Phone, 
  Mail, 
  ArrowRight,
  Layers,
  Sparkles,
  Target,
  FileCheck
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import './FounderProfile.css';

const stats = [
  { value: '20+', label: 'Years Experience', sub: 'Pharma, API & Chemical Sectors' },
  { value: '₹100+ Cr', label: 'Core Project Responsibility', sub: 'Direct Turnkey Leadership' },
  { value: '80+', label: 'Projects Delivered', sub: 'Greenfield & Brownfield Plants' },
  { value: 'API & Biotech', label: 'Core Engineering Domains', sub: 'cGMP / USFDA Regulated Facilities' },
];

const pastRoles = [
  {
    role: 'Senior General Manager – Projects & Purchase',
    company: 'Raghava Life Sciences Pvt. Ltd.',
    period: 'Jun 2021 – Mar 2026',
    scale: '₹100 Cr API Plant • 200 KL Reactors • ZLD Systems',
  },
  {
    role: 'Lead Manager (Process)',
    company: 'IPS Mehtalia Pvt. Ltd.',
    period: 'Apr 2020 – May 2021',
    scale: 'Pharma & Agro-Chemical Facilities (~₹150 Cr)',
  },
  {
    role: 'Manager – Process Head & Project Manager',
    company: 'Zen Chemiconsult Pvt. Ltd.',
    period: 'Nov 2017 – Nov 2019',
    scale: 'Concord Bio Tech Greenfield Project (INR 600 Cr)',
  },
  {
    role: 'Team Leader – Project Management (CTO V)',
    company: 'Dr. Reddy’s Laboratories',
    period: 'Dec 2012 – May 2016',
    scale: '₹35 Cr DCS Production Block & 10+ Expansion Projects',
  },
];

const educationList = [
  {
    degree: 'B.Tech in Chemical Engineering',
    institution: 'National Institute of Technology (NIT), Warangal',
    desc: 'Premier national technical institute; deep foundation in thermodynamic design and process economics.',
  },
  {
    degree: 'Diploma in Chemical Engineering',
    institution: 'J.N. Govt. Polytechnic, Hyderabad',
    desc: 'Hands-on plant floor unit operations, process piping, and chemical equipment drafting.',
  },
  {
    degree: 'Advanced Governance & Public Policy Studies',
    institution: 'Intensive Study for UPSC Civil Services Examination',
    desc: 'Strategic leadership, statutory environmental compliance, and organizational administrative planning.',
  },
];

const honors = [
  {
    title: 'Site Safety Champion / Zone Owner',
    issuer: 'DuPont Contractor Safety Management (CSM)',
    desc: 'Exemplary execution of behavioral and process safety protocols across high-risk chemical construction zones.',
    icon: ShieldCheck,
    accent: 'red',
  },
  {
    title: 'Safety Excellence Award',
    issuer: 'Capital Projects Execution Board',
    desc: 'Zero lost-time incidents, strict permit-to-work enforcement, and flawless hazard mitigation.',
    icon: Award,
    accent: 'cyan',
  },
  {
    title: 'Qualification Documentation Simplification Award',
    issuer: 'Dr. Reddy’s Laboratories',
    desc: 'Commended for streamlining URS/DQ/IQ/OQ/PQ protocols, reducing engineering cycles while ensuring cGMP audit compliance.',
    icon: FileCheck,
    accent: 'gold',
  },
];

const FounderProfile = () => {
  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="founder" className="section founder-cinema-section">
      {/* Ambient Atmospheric Glow */}
      <div className="founder-ambient-glow"></div>

      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center founder-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="enterprise-badge">
            <span className="badge-dot"></span>
            <span>Executive Leadership</span>
          </div>
          <h2 className="heading-lg founder-title">
            Founder &amp; Director Profile
          </h2>
          <p className="text-lg founder-subtitle">
            Two decades of chemical engineering, multi-crore greenfield project execution, and cGMP compliance leadership.
          </p>
        </motion.div>

        {/* Main Bento Grid Layout */}
        <div className="founder-bento-grid">
          {/* Left Column: Comprehensive Director Overview */}
          <motion.div
            className="spotlight-card founder-main-card"
            onMouseMove={handleCardMouseMove}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="founder-card-glow"></div>

            {/* Profile Heading Bar */}
            <div className="founder-id-row">
              <div className="founder-avatar-badge">
                <span>JK</span>
              </div>
              <div className="founder-id-text">
                <span className="founder-role-tag">Founder &amp; Managing Director</span>
                <h3 className="founder-full-name">Janaki Ramulu Kandikanti</h3>
                <span className="founder-sub-title">Chemical Engineering &amp; Project Management Professional</span>
              </div>
            </div>

            {/* NIT Warangal Credential Banner */}
            <div className="founder-alumni-pill">
              <GraduationCap size={18} className="alumni-icon" />
              <span>B.Tech Chemical Engineering &bull; <strong>National Institute of Technology (NIT), Warangal</strong></span>
            </div>

            {/* Executive Bio */}
            <div className="founder-bio-text">
              <p>
                A distinguished Chemical Engineering leader with over <strong>20 years</strong> of practical, hands-on experience spearheading large-scale greenfield and brownfield capital projects across pharmaceutical, API, formulation, biotechnology, and specialty chemical facilities.
              </p>
              <p>
                Having served as <strong>Senior General Manager</strong> at Raghava Life Sciences, <strong>Lead Manager</strong> at IPS Mehtalia, and <strong>Project Leader</strong> at Dr. Reddy’s Laboratories, he combines rigorous thermodynamic process design with meticulous site execution, DuPont CSM safety leadership, and flawless cGMP/USFDA qualification.
              </p>
            </div>

            {/* Metrics Ribbon */}
            <div className="founder-stats-grid">
              {stats.map((st, idx) => (
                <div key={idx} className="founder-stat-box">
                  <div className="founder-stat-val">{st.value}</div>
                  <div className="founder-stat-label">{st.label}</div>
                  <div className="founder-stat-sub">{st.sub}</div>
                </div>
              ))}
            </div>

            {/* Core Strengths Chips */}
            <div className="founder-strengths-wrapper">
              <div className="strengths-title">Core Engineering Strengths:</div>
              <div className="strengths-chips">
                <span>Process Engineering (P&amp;IDs, Sizing, Balances)</span>
                <span>Greenfield &amp; Brownfield Execution</span>
                <span>cGMP / USFDA Validation (URS to PQ)</span>
                <span>Solvent Recovery &amp; Multiple-Effect Evaporators</span>
                <span>Capital Procurement &amp; Vendor Negotiations</span>
                <span>DuPont CSM Behavioral Safety</span>
                <span>Statutory PCB &amp; Licensing Compliance</span>
              </div>
            </div>

            {/* Direct Connect Actions */}
            <div className="founder-connect-row">
              <a
                href="https://wa.me/918008132387?text=Hello%20Janaki%20Ram%20Sir%2C%20I%20would%20like%20to%20discuss%20an%20engineering%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-director-wa"
              >
                <WhatsAppIcon size={18} />
                <span>Chat with Director</span>
              </a>

              <a href="tel:+918008132387" className="btn-director-call">
                <Phone size={16} />
                <span>+91 8008132387</span>
              </a>

              <a href="mailto:kandhikanti@yahoo.co.in" className="btn-director-email">
                <Mail size={16} />
                <span>kandhikanti@yahoo.co.in</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Roles, Education & Honors Stack */}
          <div className="founder-secondary-stack">
            {/* 1. Distinguished Career Roles */}
            <motion.div
              className="spotlight-card stack-card roles-card"
              onMouseMove={handleCardMouseMove}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="stack-card-header">
                <div className="stack-icon-box icon-red">
                  <Briefcase size={20} />
                </div>
                <h4 className="stack-title">Distinguished Leadership Roles</h4>
              </div>

              <div className="past-roles-timeline">
                {pastRoles.map((role, idx) => (
                  <div key={idx} className="timeline-item">
                    <div className="timeline-bullet"></div>
                    <div className="timeline-content">
                      <div className="timeline-head">
                        <span className="role-company">{role.company}</span>
                        <span className="role-period">{role.period}</span>
                      </div>
                      <div className="role-title">{role.role}</div>
                      <div className="role-scale">{role.scale}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 2. Education & Academic Background */}
            <motion.div
              className="spotlight-card stack-card edu-card"
              onMouseMove={handleCardMouseMove}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="stack-card-header">
                <div className="stack-icon-box icon-cyan">
                  <GraduationCap size={20} />
                </div>
                <h4 className="stack-title">Education &amp; Technical Foundation</h4>
              </div>

              <div className="edu-list">
                {educationList.map((edu, idx) => (
                  <div key={idx} className="edu-item">
                    <div className="edu-title">{edu.degree}</div>
                    <div className="edu-inst">{edu.institution}</div>
                    <p className="edu-note">{edu.desc}</p>
                  </div>
                ))}
                <div className="academic-note">
                  <CheckCircle2 size={15} className="note-check" />
                  <span>2 Years Engineering Institution Faculty Experience (Chemical Engineering)</span>
                </div>
              </div>
            </motion.div>

            {/* 3. Safety Honors & Quality Awards */}
            <motion.div
              className="spotlight-card stack-card honors-card"
              onMouseMove={handleCardMouseMove}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="stack-card-header">
                <div className="stack-icon-box icon-gold">
                  <Award size={20} />
                </div>
                <h4 className="stack-title">Safety &amp; Engineering Recognitions</h4>
              </div>

              <div className="honors-list">
                {honors.map((h, idx) => {
                  const IconComp = h.icon;
                  return (
                    <div key={idx} className={`honor-item honor-${h.accent}`}>
                      <div className="honor-icon-wrapper">
                        <IconComp size={18} />
                      </div>
                      <div className="honor-details">
                        <div className="honor-title">{h.title}</div>
                        <div className="honor-issuer">{h.issuer}</div>
                        <p className="honor-desc">{h.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderProfile;
