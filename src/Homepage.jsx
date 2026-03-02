import React, { useState, useEffect } from "react";
import "./HomePage.css";

const elections = [
  {
    id: 1,
    title: "General Assembly Election",
    date: "15 Apr 2025",
    region: "National",
    status: "Registration Open",
  },
  {
    id: 2,
    title: "Municipal Corporation Vote",
    date: "02 May 2025",
    region: "State",
    status: "Upcoming",
  },
  {
    id: 3,
    title: "University Student Council",
    date: "20 May 2025",
    region: "Local",
    status: "Upcoming",
  },
];

const features = [
  {
    icon: "🔐",
    title: "End-to-End Encrypted",
    desc: "Every ballot is encrypted before it leaves your device.",
  },
  {
    icon: "⛓",
    title: "Blockchain Verified",
    desc: "Votes are written to an immutable public ledger.",
  },
  {
    icon: "👤",
    title: "Anonymous Voting",
    desc: "Zero-knowledge proofs keep your choice private.",
  },
  {
    icon: "📋",
    title: "Auditable Results",
    desc: "Anyone can verify the final count at any time.",
  },
];

export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [previousImage, setPreviousImage] = useState(null);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);

  const images = ["/bg-1.png", "/bg-6.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousImage(currentImage);
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [currentImage, images.length]);

  const filteredElections = elections.filter(
    (e) =>
      e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.region.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="homepage">
      {/* Background images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`hero-background ${index === currentImage ? "active" : index === previousImage ? "fading" : ""}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}

      {/* Dark overlay */}
      <div className="hero-overlay" />

      {/* ── NAVBAR ── */}
      <nav className="navbar">
        <div className="navbar-brand">
          <span className="navbar-icon">⬡</span>
          VoteChain
        </div>
        <ul className="navbar-links">
          <li>
            <a href="#elections">Elections</a>
          </li>
          <li>
            <a href="#candidates">Candidates</a>
          </li>
          <li>
            <a href="#how">How It Works</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
        <div className="navbar-actions">
          <a href="#login" className="nav-ghost-btn">
            Login
          </a>
          <a href="#register" className="nav-solid-btn">
            Register
          </a>
          <button
            className="nav-menu-btn"
            onClick={() => setShowMoreMenu(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* ── HERO CONTENT ── */}
      <div className="hero-content">
        <div className="hero-eyebrow">
          Blockchain-Secured · Transparent · Anonymous
        </div>
        <h1 className="hero-title">
          Empowering Democracy
          <br />
          <span className="hero-title-accent">with Technology</span>
        </h1>
        <p className="hero-subtitle">
          A secure online voting platform built for transparency, trust and
          nationwide accessibility.
        </p>

        {/* Search bar */}
        <div className={`hero-search ${searchFocused ? "focused" : ""}`}>
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search elections by name or region…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
          {searchQuery && (
            <button className="search-clear" onClick={() => setSearchQuery("")}>
              ×
            </button>
          )}
        </div>

        {/* Search results dropdown */}
        {searchQuery && (
          <div className="search-results">
            {filteredElections.length > 0 ? (
              filteredElections.map((e) => (
                <a href="#elections" key={e.id} className="search-result-item">
                  <div className="sri-left">
                    <span className="sri-title">{e.title}</span>
                    <span className="sri-meta">
                      {e.region} · {e.date}
                    </span>
                  </div>
                  <span
                    className={`sri-badge ${e.status === "Registration Open" ? "green" : "blue"}`}
                  >
                    {e.status}
                  </span>
                </a>
              ))
            ) : (
              <div className="search-empty">
                No elections found for "{searchQuery}"
              </div>
            )}
          </div>
        )}

        <div className="hero-btns">
          <button className="vote-btn">Cast Your Vote</button>
          <a href="#how" className="hero-learn-link">
            How it works <span>›</span>
          </a>
        </div>
      </div>

      {/* ── FEATURE STRIP (bottom of hero) ── */}
      <div className="feature-strip">
        {features.map((f, i) => (
          <div className="feature-chip" key={i}>
            <span className="feature-chip-icon">{f.icon}</span>
            <div>
              <div className="feature-chip-title">{f.title}</div>
              <div className="feature-chip-desc">{f.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── SLIDE-IN MORE MENU ── */}
      {showMoreMenu && (
        <div className="menu-overlay" onClick={() => setShowMoreMenu(false)} />
      )}
      <div className={`more-menu ${showMoreMenu ? "show" : ""}`}>
        <button className="close-btn" onClick={() => setShowMoreMenu(false)}>
          ×
        </button>
        <div className="menu-grid">
          <div className="menu-column">
            <h3>Voter Services</h3>
            <ul>
              <li>
                <a href="#voter-registration">Voter Registration</a>
              </li>
              <li>
                <a href="#check-status">Check Registration</a>
              </li>
              <li>
                <a href="#polling-booth">Find Polling Booth</a>
              </li>
              <li>
                <a href="#voter-id">Download Voter ID</a>
              </li>
              <li>
                <a href="#update-details">Update Details</a>
              </li>
            </ul>
          </div>
          <div className="menu-column">
            <h3>Elections</h3>
            <ul>
              <li>
                <a href="#upcoming">Upcoming Elections</a>
              </li>
              <li>
                <a href="#past-results">Past Results</a>
              </li>
              <li>
                <a href="#candidates">Candidates Info</a>
              </li>
              <li>
                <a href="#schedules">Election Schedules</a>
              </li>
              <li>
                <a href="#guidelines">Voting Guidelines</a>
              </li>
            </ul>
          </div>
          <div className="menu-column">
            <h3>Information</h3>
            <ul>
              <li>
                <a href="#faq">FAQs</a>
              </li>
              <li>
                <a href="#guides">Voter Guides</a>
              </li>
              <li>
                <a href="#rights">Voter Rights</a>
              </li>
              <li>
                <a href="#blockchain">About Blockchain</a>
              </li>
              <li>
                <a href="#security">Security Features</a>
              </li>
            </ul>
          </div>
          <div className="menu-column">
            <h3>Support</h3>
            <ul>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
              <li>
                <a href="#helpline">Helpline</a>
              </li>
              <li>
                <a href="#feedback">Feedback</a>
              </li>
              <li>
                <a href="#report">Report Issue</a>
              </li>
              <li>
                <a href="#accessibility">Accessibility</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── ELECTIONS SECTION ── */}
      <section className="elections-section" id="elections">
        <div className="section-inner">
          <div className="section-header">
            <div>
              <div className="section-eyebrow">// Active &amp; Scheduled</div>
              <h2 className="section-title">Upcoming Elections</h2>
            </div>
            <a href="#all-elections" className="see-all-link">
              See all elections →
            </a>
          </div>
          <div className="elections-grid">
            {/* Featured large card */}
            <div className="election-card featured">
              <div>
                <div className="ec-top">
                  <span className="ec-badge green">Registration Open</span>
                  <span className="ec-region">National</span>
                </div>
                <h3 className="ec-title">General Assembly Election</h3>
                <p className="ec-desc">
                  Cast your vote for national representatives. This election
                  determines the composition of the General Assembly for the
                  next term. All registered voters are eligible to participate.
                </p>
                <div className="ec-meta-row">
                  <div className="ec-meta-item">
                    <span>📅</span>
                    <span>15 Apr 2025</span>
                  </div>
                  <div className="ec-meta-item">
                    <span>🏛</span>
                    <span>National Constituency</span>
                  </div>
                  <div className="ec-meta-item">
                    <span>⛓</span>
                    <span>Blockchain Verified</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="ec-divider" />
                <div className="ec-footer-row">
                  <a href="#candidates" className="ec-cta">
                    View Candidates
                  </a>
                  <span className="ec-candidates-count">
                    12 candidates registered
                  </span>
                </div>
              </div>
            </div>

            {/* Regular cards */}
            {elections.slice(1).map((e) => (
              <div className="election-card" key={e.id}>
                <div className="ec-top">
                  <span
                    className={`ec-badge ${e.status === "Registration Open" ? "green" : "blue"}`}
                  >
                    {e.status}
                  </span>
                  <span className="ec-region">{e.region}</span>
                </div>
                <h3 className="ec-title">{e.title}</h3>
                <div className="ec-meta-row">
                  <div className="ec-meta-item">
                    <span>📅</span>
                    <span>{e.date}</span>
                  </div>
                </div>
                <div className="ec-divider" />
                <div className="ec-footer-row">
                  <a href="#candidates" className="ec-cta">
                    View Candidates →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="how-section" id="how">
        <div className="section-inner">
          <div className="section-eyebrow">// Process</div>
          <h2 className="section-title">How VoteChain Works</h2>
          <div className="steps-timeline">
            {[
              {
                n: "01",
                icon: "🪪",
                title: "Verify Identity",
                desc: "Authenticate with your government-issued ID and OTP to confirm eligibility.",
              },
              {
                n: "02",
                icon: "🗳",
                title: "Choose & Vote",
                desc: "Browse verified candidates and cast your encrypted ballot securely.",
              },
              {
                n: "03",
                icon: "⛓",
                title: "Block Confirmed",
                desc: "Your vote is hashed and written to the public blockchain — immutable.",
              },
              {
                n: "04",
                icon: "✅",
                title: "Audit Anytime",
                desc: "Use your receipt to verify your vote was counted, anonymously, at any time.",
              },
            ].map((s, i) => (
              <div className="step-card" key={i}>
                <div className="step-node">{s.n}</div>
                <span className="step-icon">{s.icon}</span>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-section">
        <div className="section-inner">
          <div className="cta-inner">
            <div className="cta-text">
              <h2>
                Ready to participate in <em>democracy?</em>
              </h2>
              <p>
                Register your voter identity and stay informed about elections
                in your region. Every vote is encrypted, anonymous, and
                permanently recorded.
              </p>
            </div>
            <div className="cta-btns">
              <a href="#register" className="vote-btn">
                Register Now
              </a>
              <a href="#audit" className="nav-ghost-btn large">
                Public Audit Ledger
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="site-footer">
        <div className="section-inner">
          <div className="footer-inner">
            <div className="footer-brand-col">
              <div className="footer-brand">
                <span className="navbar-icon">⬡</span> VoteChain
              </div>
              <p className="footer-tagline">
                A secure, transparent blockchain voting platform built for
                nationwide accessibility.
              </p>
            </div>
            <div>
              <div className="footer-col-title">Platform</div>
              <ul className="footer-links">
                <li>
                  <a href="#elections">Elections</a>
                </li>
                <li>
                  <a href="#candidates">Candidates</a>
                </li>
                <li>
                  <a href="#results">Past Results</a>
                </li>
                <li>
                  <a href="#register">Register to Vote</a>
                </li>
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Learn</div>
              <ul className="footer-links">
                <li>
                  <a href="#how">How It Works</a>
                </li>
                <li>
                  <a href="#blockchain">About Blockchain</a>
                </li>
                <li>
                  <a href="#security">Security</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Support</div>
              <ul className="footer-links">
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
                <li>
                  <a href="#helpline">Helpline</a>
                </li>
                <li>
                  <a href="#report">Report Issue</a>
                </li>
                <li>
                  <a href="#accessibility">Accessibility</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copy">© 2025 VoteChain. Open Source.</p>
            <ul className="footer-bottom-links">
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms">Terms of Use</a>
              </li>
              <li>
                <a href="#audit">Public Audit</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
