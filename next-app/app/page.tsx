export default function Home() {
  const modules = [
    {
      id: 0,
      title: 'Module 0: Onboarding',
      description: 'Set up Foundry, Claude Code, and security mindset',
      weeks: 1,
      href: '/module-0',
    },
    {
      id: 1,
      title: 'Module 1: Foundations',
      description:
        'Learn vulnerability taxonomy, contract reading, and threat modeling',
      weeks: 4,
      href: '/module-1',
    },
    {
      id: 2,
      title: 'Module 2: Attack Surfaces',
      description: 'Exploit randomness, oracles, tokens, and bridges',
      weeks: 4,
      href: '/module-2',
    },
    {
      id: 3,
      title: 'Module 3: Audit Practice',
      description:
        'Develop PoCs, conduct live audits, write professional reports',
      weeks: 4,
      href: '/module-3',
    },
  ];

  return (
    <>
      <section className="py-12">
        <h1 className="text-vln-accent mb-4">Web3 Wednesdays</h1>
        <p className="text-2xl text-vln-muted mb-6">
          A weekly guided curriculum for beginners learning smart contract
          security through hands-on labs and real exploits.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="card">
            <h3 className="text-vln-accent mb-2">📅 Sessions</h3>
            <p>Live every Wednesday at Fused Gaming HQ in Oakland</p>
          </div>
          <div className="card">
            <h3 className="text-vln-accent mb-2">🔒 Security First</h3>
            <p>Learn by exploiting intentionally vulnerable contracts</p>
          </div>
          <div className="card">
            <h3 className="text-vln-accent mb-2">🧑‍💻 Hands-on Labs</h3>
            <p>60-minute sessions: presentation, lab, discussion</p>
          </div>
          <div className="card">
            <h3 className="text-vln-accent mb-2">🏆 Beginner-Friendly</h3>
            <p>No prior Solidity experience required</p>
          </div>
        </div>

        <div className="security-warning">
          <strong>⚠️ WARNING</strong>
          <div>
            <p>
              All contracts and exploits in this curriculum are{' '}
              <strong>intentionally vulnerable</strong> for educational
              purposes.
            </p>
            <p>
              <strong>DO NOT</strong> deploy these to mainnet or send real
              funds. These labs teach you to recognize and prevent common
              vulnerabilities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-vln-accent mb-8">Curriculum</h2>
        <div className="grid grid-cols-1 gap-6">
          {modules.map((module) => (
            <a
              key={module.id}
              href={module.href}
              className="card"
              style={{ cursor: 'pointer' }}
            >
              <h3 className="text-vln-accent mb-2">{module.title}</h3>
              <p className="text-vln-muted mb-4">{module.description}</p>
              <p className="text-sm text-vln-muted">
                {module.weeks} week{module.weeks > 1 ? 's' : ''}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-vln-accent mb-8">Getting Started</h2>
        <ol className="list-decimal list-inside space-y-4 text-vln-muted">
          <li>
            Install{' '}
            <a
              href="https://book.getfoundry.sh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-vln-accent hover:underline"
            >
              Foundry
            </a>
          </li>
          <li>
            Clone the{' '}
            <a
              href="https://github.com/Fused-Gaming/Web3-Wednesdays"
              target="_blank"
              rel="noopener noreferrer"
              className="text-vln-accent hover:underline"
            >
              GitHub repository
            </a>
          </li>
          <li>Follow along with the live sessions every Wednesday</li>
          <li>Submit findings via GitHub issues</li>
          <li>Ask questions in Discord</li>
        </ol>
      </section>
    </>
  );
}
