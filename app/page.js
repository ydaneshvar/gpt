import NetworkBackground from './NetworkBackground';

const capabilities = [
  { icon: '01', title: 'Enterprise Infrastructure', text: 'Architecture, standards, lifecycle planning, and operational governance across mixed Linux and Windows environments.', tags: ['Linux', 'Windows Server', 'AD / Azure AD'] },
  { icon: '02', title: 'VMware & Virtualization', text: 'vSphere operations, capacity and performance analysis, platform hygiene, recovery planning, and modernization strategy.', tags: ['vSphere', 'ESXi', 'HA / DR'] },
  { icon: '03', title: 'Security Engineering', text: 'Hardening, privileged access, logging, audit evidence, segmentation, and practical control implementation.', tags: ['Hardening', 'IAM', 'Audit readiness'] },
  { icon: '04', title: 'Automation & Reliability', text: 'Repeatable administration, configuration discipline, monitoring, runbooks, and workflows that reduce operational risk.', tags: ['Ansible', 'PowerShell', 'Observability'] },
  { icon: '05', title: 'Storage & Continuity', text: 'SAN/NAS planning, backup and recovery alignment, dependency mapping, and resilient service design.', tags: ['SAN / NAS', 'Backup', 'Business continuity'] },
  { icon: '06', title: 'Technical Leadership', text: 'Roadmaps, vendor and contract alignment, team enablement, workload planning, and accountable delivery.', tags: ['ITSM', 'Governance', 'Delivery'] }
];

const programs = [
  { label: 'Operational Baseline', title: 'Standardize the environment before scaling it.', text: 'Configuration standards, ownership, patch strategy, evidence, monitoring, and support boundaries—built around the environment your team actually operates.' },
  { label: 'Virtualization Health', title: 'Turn platform signals into an actionable roadmap.', text: 'Capacity, performance, lifecycle exposure, resilience, and recovery readiness translated into prioritized technical and business decisions.' },
  { label: 'Security Readiness', title: 'Make controls operational—not theoretical.', text: 'Practical hardening and audit-readiness work with traceable evidence, clear exceptions, and operating procedures teams can sustain.' },
  { label: 'Modernization', title: 'Reduce risk while moving legacy services forward.', text: 'Dependency-led planning for platform, ERP, cloud, identity, and infrastructure transitions with validation and rollback built in.' }
];

const principles = [
  ['01', 'Understand the system', 'Establish the technical baseline, service context, dependencies, constraints, and actual risk.'],
  ['02', 'Design for operations', 'Choose the simplest safe architecture the team can support under real production conditions.'],
  ['03', 'Execute with control', 'Plan validation, communication, evidence, and rollback before making consequential change.'],
  ['04', 'Leave capability behind', 'Transfer knowledge through standards, runbooks, ownership, and measurable review loops.']
];

export default function Home() {
  return <main id="top">
    <NetworkBackground />
    <div className="utility"><div className="shell utilityInner"><span>Varonex LLC · Rocklin, California</span><span>Enterprise infrastructure &amp; operations</span></div></div>

    <nav className="nav shell">
      <a className="brand" href="#top" aria-label="Varonex home"><span className="brandMark"/><span>Varonex<small>Enterprise IT. Security-first. Operations-ready.</small></span></a>
      <div className="navlinks"><a href="#expertise">Expertise</a><a href="#work">Selected Work</a><a href="#leadership">Leadership</a><a href="#contact">Contact</a></div>
      <a className="button buttonSmall" href="#contact">Discuss a priority <span>↗</span></a>
    </nav>

    <section className="hero shell">
      <div className="heroCopy">
        <div className="status"><i/> Security-first. Operations-ready.</div>
        <h1>Infrastructure<br/>that earns<br/><em>your trust.</em></h1>
        <p className="heroLead">Varonex helps organizations stabilize, secure, and modernize the systems their operations depend on—from Linux and VMware to identity, automation, storage, and service delivery.</p>
        <div className="heroActions"><a className="button" href="#contact">Start with the environment <span>↗</span></a><a className="quietLink" href="#expertise">Explore capabilities <span>↓</span></a></div>
      </div>
      <div className="heroVisual" aria-label="Enterprise systems network visualization">
        <div className="visualGrid" aria-hidden="true"/>
        <div className="systemLabel"><i/><span>LIVE OPERATING MODEL</span><b>VX—01</b></div>
        <svg className="systemMap" viewBox="0 0 600 600" role="img" aria-label="Connected infrastructure platforms">
          <defs><radialGradient id="core"><stop offset="0" stopColor="#63d0ff" stopOpacity=".9"/><stop offset="1" stopColor="#0b1326" stopOpacity=".2"/></radialGradient><filter id="glow"><feGaussianBlur stdDeviation="7" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
          <g className="mapLines"><path d="M300 300 L154 168 L92 322 L213 455 L300 300 L438 146 L506 308 L418 468 Z"/><path d="M154 168 L438 146 M92 322 L506 308 M213 455 L418 468"/></g>
          <g className="mapOrbit"><circle cx="300" cy="300" r="178"/><circle cx="300" cy="300" r="112"/><circle cx="300" cy="300" r="54"/></g>
          <g className="mapNodes"><circle cx="154" cy="168" r="7"/><circle cx="92" cy="322" r="7"/><circle cx="213" cy="455" r="7"/><circle cx="438" cy="146" r="7"/><circle cx="506" cy="308" r="7"/><circle cx="418" cy="468" r="7"/></g>
          <circle className="mapCore" cx="300" cy="300" r="38" fill="url(#core)" filter="url(#glow)"/>
        </svg>
        <div className="platformLabels"><span className="pl1">LINUX</span><span className="pl2">VMWARE</span><span className="pl3">IDENTITY</span><span className="pl4">SECURITY</span><span className="pl5">STORAGE</span><span className="pl6">AUTOMATION</span></div>
        <div className="visualReadout"><div><small>PLATFORM STATE</small><strong>Operational</strong></div><div><small>DESIGN PRIORITY</small><strong>Resilience</strong></div></div>
      </div>
    </section>

    <section className="proof"><div className="shell proofGrid">
      <div><strong>20+</strong><span>Years across enterprise technology and operations</span></div>
      <div><strong>3</strong><span>Core estates: Linux, Windows, and VMware</span></div>
      <div><strong>360°</strong><span>Architecture through day-two operations</span></div>
      <div className="proofStatement">Built from real production responsibility—not slideware.</div>
    </div></section>

    <section className="section shell" id="expertise">
      <div className="sectionIntro"><div><span className="overline">01 · EXPERTISE</span><h2>Deep enough for the platform.<br/><em>Broad enough for the mission.</em></h2></div><p>Infrastructure decisions do not live in isolation. Varonex connects architecture, security, operations, people, and lifecycle reality into one supportable operating model.</p></div>
      <div className="capabilityGrid">{capabilities.map(c=><article key={c.icon} className="capability"><div className="capTop"><span>{c.icon}</span><b>↗</b></div><h3>{c.title}</h3><p>{c.text}</p><div className="tags">{c.tags.map(t=><span key={t}>{t}</span>)}</div></article>)}</div>
    </section>

    <section className="manifesto"><div className="shell manifestoGrid">
      <div><span className="overline overlineLight">THE VARONEX STANDARD</span><h2>Complex systems.<br/>Clear decisions.<br/><em>Controlled change.</em></h2></div>
      <div className="manifestoCopy"><p>Technology becomes valuable when it is secure enough to trust, stable enough to depend on, and clear enough for a team to operate.</p><blockquote>“Maintainability is not documentation added at the end. It is an architectural requirement from the beginning.”</blockquote><span>— Operating principle</span></div>
    </div></section>

    <section className="section shell" id="work">
      <div className="sectionIntro compact"><div><span className="overline">02 · SELECTED PROGRAMS</span><h2>Work shaped around<br/><em>operational outcomes.</em></h2></div><p>Representative engagement patterns drawn from more than two decades of enterprise infrastructure, security, service management, and modernization work.</p></div>
      <div className="programList">{programs.map((p,i)=><article key={p.label}><span className="programNo">0{i+1}</span><div><small>{p.label}</small><h3>{p.title}</h3></div><p>{p.text}</p><b>↗</b></article>)}</div>
    </section>

    <section className="leadership" id="leadership"><div className="shell leadershipGrid">
      <div className="leaderVisual"><div className="leaderMonogram">YD</div><div className="leaderMeta"><span>Based in</span><strong>Rocklin, California</strong></div></div>
      <div className="leaderCopy"><span className="overline">03 · LEADERSHIP</span><h2>From the command line<br/>to the operating model.</h2><p className="leaderLead">Yashar Daneshvar brings more than 20 years of technical and leadership experience across enterprise infrastructure, Linux systems, VMware virtualization, cybersecurity, automation, and IT service operations.</p><p>His perspective is grounded in both hands-on engineering and accountable leadership: team development, production reliability, vendor alignment, procurement, workload planning, stakeholder communication, and controlled delivery in high-responsibility environments.</p><div className="credentials"><div><strong>Master’s-level IT education</strong><span>Advanced study in information technology</span></div><div><strong>International foundation</strong><span>NCC Education, United Kingdom</span></div><div><strong>Enterprise leadership</strong><span>People, platforms, vendors, and operations</span></div></div><a className="quietLink darkLink" href="https://www.linkedin.com/in/yashar-daneshvar" target="_blank" rel="noreferrer">View professional profile <span>↗</span></a></div>
    </div></section>

    <section className="section shell process">
      <div className="sectionIntro compact"><div><span className="overline">04 · DELIVERY MODEL</span><h2>Disciplined from discovery<br/><em>through handoff.</em></h2></div><p>Every engagement should reduce uncertainty, not transfer it. The work is structured to produce decisions, evidence, and operational capability.</p></div>
      <div className="principleGrid">{principles.map(p=><article key={p[0]}><span>{p[0]}</span><h3>{p[1]}</h3><p>{p[2]}</p></article>)}</div>
    </section>

    <section className="contact" id="contact"><div className="shell contactGrid">
      <div><span className="overline overlineLight">START A CONVERSATION</span><h2>Bring the environment.<br/><em>We’ll bring clarity.</em></h2></div>
      <div className="contactAside"><p>Describe the operational pressure, the platform, and what must be true when the work is complete. We will respond with a practical next step.</p><a className="contactLink" href="mailto:info@varonex.com"><span>Business inquiries</span><strong>info@varonex.com</strong><b>↗</b></a><a className="contactLink" href="https://www.linkedin.com/company/varonex" target="_blank" rel="noreferrer"><span>Connect with Varonex</span><strong>LinkedIn company page</strong><b>↗</b></a></div>
    </div></section>

    <footer className="footer"><div className="shell footerGrid"><a className="brand brandLight" href="#top"><span className="brandMark"/><span>Varonex<small>Enterprise IT. Security-first. Operations-ready.</small></span></a><p>Enterprise infrastructure engineered for security, resilience, and operational clarity.</p><div><a href="https://www.linkedin.com/company/varonex" target="_blank" rel="noreferrer">LinkedIn ↗</a><small>© 2026 Varonex LLC</small></div></div><div className="shell disclaimer">Varonex LLC is an independent business. Professional affiliations are provided solely as biographical context and do not imply government endorsement.</div></footer>
  </main>;
}
