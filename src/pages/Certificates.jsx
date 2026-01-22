import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Certificates data: keep only the six requested PNGs
const CERTS = {
  tech: [
    {
      title: "AIML Internship Certificate",
      org: "",
      date: "",
      img: "/certs/AIML Internship Certificate.png",
      link: "/certs/AIML Internship Certificate.png",
    },
    {
      title: "Microsoft Azure Fundamental (AZ-900)",
      org: "",
      date: "",
      img: "/certs/Microsoft Azure Fundamental (AZ-900).png",
      link: "/certs/Microsoft Azure Fundamental (AZ-900).png",
    },
    {
      title: "TechSpark Hackathon 2025",
      org: "",
      date: "",
      img: "/certs/TechSpark Hackathon 2025.png",
      link: "/certs/TechSpark Hackathon 2025.png",
    },
    {
      title: "AIML Hackathon 2.0",
      org: "",
      date: "",
      img: "/certs/AIML Hackathon 2.0.png",
      link: "/certs/AIML Hackathon 2.0.png",
    },
    {
      title: "Google Cloud Agentic AI Day",
      org: "",
      date: "",
      img: "/certs/Google Cloud Agentic AI Day.png",
      link: "/certs/Google Cloud Agentic AI Day.png",
    },
    {
      title: "TCS ION Career Edge - Young Professional",
      org: "",
      date: "",
      img: "/certs/TCS ION Career Edge - Young Professional.png",
      link: "/certs/TCS ION Career Edge - Young Professional.png",
    },
  ],
  other: [],
};

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  // show both tech and other certificates without a tab selector
  const certList = [...CERTS.tech, ...CERTS.other];

  return (
    <section className="container" style={{ padding: "40px 0" }}>
      <div className="card" style={{ background: "#111", borderRadius: 12, padding: 24 }}>
        <h2 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: 4 }}>Certificates 🏅</h2>
        <p className="lead" style={{ color: "#aaa" }}>
          Explore my certifications — technical & others.
        </p>

        {/* Showing all certificates (tech + others) */}

        {/* Certificates Grid */}
        <div
          className="certs-grid"
          style={{
            marginTop: 28,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          <AnimatePresence mode="wait">
            {certList.map((c, idx) => (
              <motion.div
                key={c.title}
                className="cert card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 15px rgba(0, 123, 255, 0.4)",
                }}
                style={{
                  background: "#1a1a1a",
                  borderRadius: 12,
                  padding: 16,
                  color: "#fff",
                }}
              >
                <img
                  src={c.img}
                  alt={c.title}
                  style={{
                    width: "100%",
                    height: 160,
                    borderRadius: 10,
                    objectFit: "cover",
                    marginBottom: 12,
                  }}
                />
                <strong style={{ fontSize: 16 }}>{c.title}</strong>
                <div className="muted" style={{ fontSize: 13, color: "#bbb" }}>
                  {[c.org, c.date].filter(Boolean).join(" • ")}
                </div>

                <div style={{ marginTop: 12 }}>
                  <button
                    className="btn"
                    onClick={() => setSelectedCert(c)}
                    style={{
                      background: "#007bff",
                      border: "none",
                      color: "white",
                      borderRadius: 6,
                      padding: "6px 14px",
                      cursor: "pointer",
                    }}
                  >
                    View
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.img
              src={selectedCert.img}
              alt={selectedCert.title}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              style={{
                maxWidth: "90%",
                maxHeight: "85%",
                borderRadius: 10,
                boxShadow: "0 0 25px rgba(255,255,255,0.2)",
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
