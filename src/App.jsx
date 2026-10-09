const classes = [
  {
    icon: '✳',
    label: 'START HERE',
    title: 'AI for beginners',
    description: 'Understand AI and try helpful tools in a relaxed, hands-on class.',
  },
  {
    icon: '✍',
    label: 'GET PRACTICAL',
    title: 'Prompting that works',
    description: 'Learn simple ways to get better results for writing, ideas, and research.',
  },
  {
    icon: '↗',
    label: 'FOR YOUR TEAM',
    title: 'AI at work',
    description: 'Find useful ways for your team to save time and work smarter with AI.',
  },
];

function App() {
  return (
    <>
      <header className="header wrap">
        <a className="brand" href="#home" aria-label="Lumanara home">
          <span className="brand-icon">✳</span>
          <span>LUMANARA<small>AI SOLUTIONS</small></span>
        </a>
        <nav><a href="#classes">Classes</a><a className="nav-button" href="#contact">Get in touch <span>↗</span></a></nav>
      </header>

      <main id="home">
        <section className="hero wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span /> AI made approachable</div>
            <h1>Learn AI.<br /><em>Use it for good.</em></h1>
            <p>Friendly, practical classes to help you understand AI and use it with confidence in everyday life and work.</p>
            <a className="button" href="#classes">Explore classes <span>↓</span></a>
            <div className="note"><span className="check">✓</span> No experience needed. Just bring your curiosity.</div>
          </div>
          <div className="hero-art" aria-label="AI learning illustration">
            <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
            <div className="art-center">✳</div>
            <div className="art-tag tag-top">✍️ &nbsp; Create</div>
            <div className="art-tag tag-right">⚡ &nbsp; Make time</div>
            <div className="art-tag tag-bottom">🧠 &nbsp; Understand</div>
            <span className="spark spark-one">✦</span><span className="spark spark-two">✦</span>
          </div>
        </section>

        <section className="classes wrap" id="classes">
          <div className="section-heading">
            <div><div className="eyebrow">Learn at your pace</div><h2>A class for your next step.</h2></div>
            <p>Small, clear lessons. Useful skills you can put to work right away.</p>
          </div>
          <div className="class-grid">
            {classes.map((item) => (
              <article className="class-card" key={item.title}>
                <div className="class-icon">{item.icon}</div>
                <div className="class-label">{item.label}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href="#contact" aria-label={`Ask about ${item.title}`}>Ask about this class <span>↗</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className="contact wrap" id="contact">
          <div><div className="eyebrow">Your AI journey starts here</div><h2>Curious? Let's talk.</h2><p>Tell us what you want to learn, and we’ll help you choose a class.</p><a className="address" href="https://www.google.com/maps/search/?api=1&query=Plot%20no%20339A%2C%204-32-1566%2C%20Allwyn%20Colony%20Phase%202%2C%20Kukatpally%2C%20Hyderabad" target="_blank" rel="noreferrer"><span>⌖</span> Plot No. 339A, 4-32-1566, Allwyn Colony Phase 2,<br className="address-break" /> Kukatpally, Hyderabad <span className="map-link">Open map ↗</span></a></div>
          <a className="button button-light" href="mailto:hello@lumanara.com?subject=AI%20class%20enquiry">Send an email <span>↗</span></a>
        </section>
      </main>

      <footer className="footer wrap"><strong>LUMANARA AI SOLUTIONS</strong><span>Practical AI learning for everyone.</span><span>© {new Date().getFullYear()} Lumanara</span></footer>
    </>
  );
}

export default App;
