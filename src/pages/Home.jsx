import React from 'react'
import { motion } from 'framer-motion'
import "../CSS/Home.css"
import '../index.css' 


// 🖼️ Import Assets
import photo from '../../public/photo.jpg'
import githubLogo from '../../public/github.png'
import linkedinLogo from '../../public/linkedin.png'
import gmailLogo from '../../public/gmail.png'
import whatsappLogo from '../../public/whatsapp.png'
import instagramLogo from '../../public/insta.png'
import facebookLogo from '../../public/facebook.png'

export default function Home() {
  const professions = [
    'AI Enthusiast',
    'Machine Learning Engineer',
    "Deep Learning Expert",
    'Computer Vision Researcher',
    'Developer',
  ]

  const connectLinks = [
    { img: linkedinLogo, title: 'LinkedIn', link: 'https://www.linkedin.com/in/sahilghevariya' },
    { img: whatsappLogo, title: 'WhatsApp', link: 'https://wa.me/918799094066' },
    { img: instagramLogo, title: 'Instagram', link: 'https://www.instagram.com/sahil_ghevariya' },
    { img: facebookLogo, title: 'Facebook', link: 'https://www.facebook.com/share/16c3mpgwB6/' },
  ]

  const activityLinks = [
    { img: githubLogo, title: 'GitHub', link: 'https://github.com/Sahilghevariya' },
    { img: '/leetcode.png', title: 'LeetCode', link: 'https://leetcode.com/Sahilghevariya/' },
  ]

  return (
    <section className="home-section">
      {/* Typing Effect Styles */}
      <style>
        {`
          @keyframes typing { from { width: 0; } to { width: 100ch; } }
          @keyframes blink { 50% { border-color: transparent; } }
        `}
      </style>

      {/* Top Section: Photo + Info */}
      <div className="home-top">
        {/* Left: Glowing Photo */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="photo-container"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="photo-ring"
          />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="photo-frame"
          >
            <motion.img
              src={photo}
              alt="Sahil Ghevariya"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="profile-photo"
            />
          </motion.div>
        </motion.div>

        {/* Right: Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="home-info"
        >
          <h1 className="home-title">
            Hi, I’m{' '}
            <motion.span
              animate={{ backgroundPositionX: ['0%', '200%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="home-name"
            >
              Sahil Ghevariya
            </motion.span>
          </h1>

          <div style={{ marginTop: 6 }}>
            <div style={{ fontSize: 18, fontWeight: 600, color: '#00b4ff' }}>
              Aspiring Machine Learning &amp; Data Science Engineer
            </div>
            <p className="typing-effect" style={{ marginTop: 8, maxWidth: 690 }}>
              Passionate about building data-driven AI solutions using Machine Learning.
            </p>
          </div>

          {/* Profession Tags */}
          <motion.div className="profession-tags">
            {professions.map((role, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05, background: 'linear-gradient(90deg,var(--accent),var(--accent-2))' }} transition={{ type: 'spring', stiffness: 200 }} className="profession-tag">
                {role}
              </motion.div>
            ))}
          </motion.div>

          {/* Info Cards */}
          <motion.div className="info-cards">
            {[
              { label: '📍 Location', value: 'Surat, Gujarat, India' },
              { label: '💼 Expertise', value: 'AI/ML, Problem Solving' },
              { label: '📧 Contact', value: 'sahilghevariya001@gmail.com' },
            ].map((info, i) => (
              <motion.div key={i} whileHover={{ y: -4, scale: 1.05 }} transition={{ type: 'spring', stiffness: 250 }} className="info-card">
                <strong>{info.label}</strong>
                <p>{info.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Quick Links */}
      <motion.div className="quick-links two-column" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="quick-column">
          <h2 className="quick-links-title">Connect with me</h2>
          <div className="quick-links-list centered">
            {connectLinks.map((item, i) => (
              <motion.a key={i} href={item.link} title={item.title} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.06 }} transition={{ type: 'spring', stiffness: 250 }}>
                <motion.img src={item.img} alt={item.title} className="quick-link-img" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="quick-column">
          <h2 className="quick-links-title">See what I'm doing</h2>
          <div className="quick-links-list centered">
            {activityLinks.map((item, i) => (
              <motion.a key={i} href={item.link} title={item.title} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.06 }} transition={{ type: 'spring', stiffness: 250 }}>
                <motion.img src={item.img} alt={item.title} className="quick-link-img" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  )
}
