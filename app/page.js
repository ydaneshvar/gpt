const services = [
  { n: '01', title: 'Infrastructure & Operations', text: 'Linux and Windows Server standards, lifecycle planning, troubleshooting, and resilient day-two operations.' },
  { n: '02', title: 'VMware & Virtualization', text: 'vSphere health, capacity, performance, recovery readiness, and practical modernization roadmaps.' },
  { n: '03', title: 'Security Readiness', text: 'Hardening, least privilege, logging, audit evidence, and risk reduction that fits the way your team works.' },
  { n: '04', title: 'Automation & Leadership', text: 'Repeatable workflows, runbooks, technical standards, and delivery leadership that reduce operational friction.' }
];

const outcomes = [
  ['Fewer surprises', 'Find hidden dependencies and operational risks before they become incidents.'],
  ['Cleaner recovery', 'Build rollback plans, runbooks, and ownership into every meaningful change.'],
  ['Stronger evidence', 'Turn security controls and system activity into clear, usable audit evidence.'],
  ['Supportable systems', 'Choose solutions your team can understand, maintain, and improve.']
];

export default function Home() {
  return <main>
    <nav className="nav wrap">
      <a className="brand" href="#top" aria-label="Varonex home"><span>V</span>VARONEX</a>
      <div className="navlinks"><a href="#services">Services</a><a href="#approach">Approach</a><a href="#about">About</a></div>
      <a className="navcta" href="#contact">Start a conversation <b>↗</b></a>
    </nav>

    <section className="hero wrap" id="top">
      <div className="eyebrow"><i /> Enterprise infrastructure · Rocklin, California</div>
      <h1>Enterprise IT,<br/><em>built to hold.</em></h1>
      <div className="heroBottom">
        <p>Security-first infrastructure, virtualization, and operational leadership for systems that cannot afford guesswork.</p>
        <div className="actions"><a className="primary" href="#contact">Discuss your environment <b>↗</b></a><a className="textlink" href="#services">Explore capabilities ↓</a></div>
      </div>
      <div className="signal"><div className="rings"><span/><span/><span/><b>V</b></div><div className="signalText"><small>OPERATING PRINCIPLE</small><strong>Stable. Secure.<br/>Supportable.</strong></div></div>
    </section>

    <section className="proof"><div className="wrap proofgrid">
      <div><strong>20+</strong><span>Years in enterprise IT</span></div>
      <div><strong>3</strong><span>Core platforms<br/>Linux · Windows · VMware</span></div>
      <div><strong>1</strong><span>Accountable operating model</span></div>
      <p>Experience shaped by real production environments, controlled change, and the operational work that follows implementation.</p>
    </div></section>

    <section className="section wrap" id="services">
      <header className="sectionhead"><div><span className="kicker">CAPABILITIES</span><h2>Clarity across the<br/>infrastructure lifecycle.</h2></div><p>Focused engagements that turn technical complexity into a realistic plan, controlled execution, and maintainable operations.</p></header>
      <div className="servicegrid">{services.map(s => <article key={s.n}><span>{s.n}</span><h3>{s.title}</h3><p>{s.text}</p><b>↗</b></article>)}</div>
    </section>

    <section className="dark" id="approach"><div className="wrap">
      <header className="darkhead"><span className="kicker">THE OPERATING MODEL</span><h2>Good infrastructure is not just installed.<br/><em>It is made operable.</em></h2></header>
      <div className="steps">
        <article><b>01</b><div><h3>Assess</h3><p>Map the environment, dependencies, constraints, and material risks. Separate urgent issues from expensive distractions.</p></div></article>
        <article><b>02</b><div><h3>Execute</h3><p>Implement controlled changes with validation, stakeholder alignment, and rollback readiness.</p></div></article>
        <article><b>03</b><div><h3>Sustain</h3><p>Leave behind standards, runbooks, ownership, and review loops—not new operational debt.</p></div></article>
      </div>
    </div></section>

    <section className="section wrap outcomes">
      <header className="sectionhead"><div><span className="kicker">DESIGNED OUTCOMES</span><h2>Less operational noise.<br/>More control.</h2></div><p>The goal is not complexity. It is a safer environment, a clearer operating model, and a team that can support what is built.</p></header>
      <div className="outcomegrid">{outcomes.map((o,i)=><article key={o[0]}><span>0{i+1}</span><h3>{o[0]}</h3><p>{o[1]}</p></article>)}</div>
    </section>

    <section className="about" id="about"><div className="wrap aboutgrid">
      <div className="monogram"><div>YD</div><span>ENTERPRISE IT<br/>SINCE 2000s</span></div>
      <div><span className="kicker">LEADERSHIP</span><h2>Deep technical experience.<br/>Practical executive judgment.</h2><p className="lead">Varonex is led by Yashar Daneshvar, a senior IT leader with more than two decades of hands-on experience across Linux, Windows Server, VMware, security, automation, and enterprise operations.</p><p>Every recommendation is tested against real constraints: uptime, staffing, policy, risk, budget, and the people who will operate the system tomorrow.</p><small>Varonex is an independent professional brand and is not affiliated with or endorsed by any government agency.</small></div>
    </div></section>

    <section className="contact" id="contact"><div className="wrap contactgrid">
      <div><span className="kicker">START HERE</span><h2>What is keeping your<br/>environment up at night?</h2></div>
      <div><p>Share the environment, the pressure point, and what a good outcome looks like. We will determine whether there is a practical fit.</p><a href="mailto:hello@varonex.com">hello@varonex.com <b>↗</b></a><span>Rocklin, California · Serving organizations remotely and regionally</span></div>
    </div></section>

    <footer className="wrap"><a className="brand" href="#top"><span>V</span>VARONEX</a><p>Enterprise IT. Security-first. Operations-ready.</p><small>© 2026 Varonex. All rights reserved.</small></footer>
  </main>;
}
