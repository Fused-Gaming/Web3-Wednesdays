export const metadata = {
  title: 'Modules - Web3 Wednesdays',
  description: 'Browse all curriculum modules and lessons',
};

export default function ModulesPage() {
  const modules = [
    {
      id: 0,
      title: 'Module 0: Onboarding',
      description:
        'Set up Foundry, Claude Code, and security mindset. Learn reentrancy exploitation through hands-on labs.',
      weeks: 1,
      status: '✅ LIVE',
      href: '/module-0',
      topics: ['Foundry', 'Reentrancy', 'Exploits'],
    },
    {
      id: 1,
      title: 'Module 1: Foundations',
      description:
        'Learn vulnerability taxonomy, contract reading, and threat modeling. Build security analysis skills.',
      weeks: 4,
      status: '🔧 Coming Soon',
      href: '/module-1',
      topics: ['Threat Landscape', 'Vulnerability Types', 'Contract Analysis', 'Threat Modeling'],
    },
    {
      id: 2,
      title: 'Module 2: Attack Surfaces',
      description:
        'Exploit randomness, oracles, tokens, and bridges. Understand specialized attack vectors.',
      weeks: 4,
      status: '🔧 Coming Soon',
      href: '/module-2',
      topics: ['Randomness', 'Oracles', 'Tokens', 'Bridges'],
    },
    {
      id: 3,
      title: 'Module 3: Audit Practice',
      description:
        'Develop PoCs, conduct live audits, and write professional security reports. Learn audit techniques.',
      weeks: 4,
      status: '🔧 Coming Soon',
      href: '/module-3',
      topics: ['PoC Development', 'Live Audits', 'Report Writing', 'Professional Practice'],
    },
  ];

  return (
    <>
      <section className="mb-12">
        <h1 className="text-vln-accent mb-4">Curriculum Modules</h1>
        <p className="text-xl text-vln-muted mb-8">
          A 16-week journey from security fundamentals to professional auditing
        </p>

        <div className="security-warning mb-8">
          <strong>⚠️ EDUCATIONAL CONTENT</strong>
          <div>
            <p>
              All contracts, labs, and exploits are <strong>intentionally vulnerable</strong> for learning purposes only.
            </p>
            <p>
              <strong>DO NOT</strong> deploy to mainnet or use in production.
            </p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-6">
        {modules.map((module) => (
          <a
            key={module.id}
            href={module.href}
            className="card hover:border-vln-accent transition"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-vln-accent mb-2">{module.title}</h2>
                <span className="inline-block px-3 py-1 bg-vln-darker text-vln-muted text-sm rounded mb-4">
                  {module.status}
                </span>
              </div>
              <span className="text-vln-muted text-sm font-semibold">
                {module.weeks} week{module.weeks > 1 ? 's' : ''}
              </span>
            </div>

            <p className="text-vln-muted mb-4">{module.description}</p>

            <div className="flex flex-wrap gap-2">
              {module.topics.map((topic) => (
                <span key={topic} className="px-2 py-1 bg-vln-darker text-vln-muted text-xs rounded">
                  {topic}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      <section className="mt-12 p-6 bg-vln-darker rounded">
        <h2 className="text-vln-accent mb-4">🎯 Learning Path</h2>
        <div className="space-y-4 text-vln-muted">
          <p>
            <strong>Month 1: Foundations</strong>
            <br />
            Complete Module 0 + start Module 1. Build core security knowledge and analysis skills.
          </p>
          <p>
            <strong>Month 2: Attack Surfaces</strong>
            <br />
            Complete Module 1 + start Module 2. Learn specialized vulnerabilities and attack vectors.
          </p>
          <p>
            <strong>Month 3: Professional Practice</strong>
            <br />
            Complete Modules 2 & 3. Write professional audits and conduct live security analysis.
          </p>
        </div>
      </section>

      <section className="mt-8 p-6 bg-vln-darker rounded">
        <h2 className="text-vln-accent mb-4">❓ FAQ</h2>
        <div className="space-y-4 text-vln-muted text-sm">
          <div>
            <p className="font-bold text-vln-accent mb-2">Do I need Solidity experience?</p>
            <p>No! Module 0 assumes zero Solidity knowledge. We start from the basics.</p>
          </div>
          <div>
            <p className="font-bold text-vln-accent mb-2">Can I skip modules?</p>
            <p>
              We recommend going in order, but experienced developers may skip ahead. Each module builds on previous
              concepts.
            </p>
          </div>
          <div>
            <p className="font-bold text-vln-accent mb-2">How much time commitment?</p>
            <p>Plan for 3-5 hours per week: 60 minutes in the live session + lab work at your own pace.</p>
          </div>
          <div>
            <p className="font-bold text-vln-accent mb-2">What if I miss a session?</p>
            <p>All labs and materials stay available. You can work through them asynchronously and ask questions in Discord.</p>
          </div>
        </div>
      </section>
    </>
  );
}
