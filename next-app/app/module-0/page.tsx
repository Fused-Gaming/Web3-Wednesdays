export const metadata = {
  title: 'Module 0: Onboarding - Web3 Wednesdays',
  description: 'Set up Foundry, Claude Code, and your security mindset',
};

export default function Module0() {
  const weeks = [
    {
      week: 0,
      title: 'Week 0: Onboarding & Reentrancy',
      description:
        'Set up Foundry and Claude Code. Understand the reentrancy vulnerability through hands-on exploit.',
      topics: ['Foundry setup', 'Reentrancy vulnerability', 'Exploit mechanics', 'Prevention patterns'],
      lab: {
        title: 'Lab 00: Reentrancy Exploitation',
        description: 'Exploit a vulnerable bank contract via reentrancy attack',
        repo: 'module-0-onboarding/labs/lab-00-reentrancy',
        difficulty: '⭐ Beginner',
        duration: '20 minutes',
      },
    },
  ];

  return (
    <>
      <section className="mb-12">
        <h1 className="text-vln-accent mb-4">Module 0: Onboarding</h1>
        <p className="text-xl text-vln-muted mb-4">
          Week 1 of Web3 Wednesdays | Security Foundations
        </p>
        <p className="text-vln-muted mb-6">
          In this module, you'll set up your development environment and learn your first smart contract vulnerability:
          <strong> reentrancy</strong>. We'll exploit a real vulnerability and understand why it matters.
        </p>

        <div className="security-warning mb-8">
          <strong>⚠️ EDUCATIONAL CONTRACTS AHEAD</strong>
          <div>
            <p>
              All contracts in this module are <strong>intentionally vulnerable</strong> for learning purposes.
            </p>
            <p>
              <strong>DO NOT</strong> deploy these to mainnet or send real funds. These are teaching tools designed to help
              you recognize and prevent common vulnerabilities.
            </p>
            <p>
              <a
                href="https://www.openzeppelin.com/security"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vln-accent hover:underline"
              >
                → OpenZeppelin Responsible Disclosure Policy
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-vln-accent mb-6">Prerequisites</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card">
            <h3 className="text-vln-accent mb-2">💻 Foundry</h3>
            <p className="text-sm text-vln-muted mb-3">
              Smart contract development framework with testing suite
            </p>
            <a
              href="https://book.getfoundry.sh/getting-started/installation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-vln-accent hover:underline text-sm"
            >
              Install Foundry →
            </a>
          </div>
          <div className="card">
            <h3 className="text-vln-accent mb-2">🖤 Claude Code</h3>
            <p className="text-sm text-vln-muted mb-3">
              AI-assisted code analysis and contract review
            </p>
            <a
              href="https://claude.ai/code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-vln-accent hover:underline text-sm"
            >
              Open Claude Code →
            </a>
          </div>
          <div className="card">
            <h3 className="text-vln-accent mb-2">📚 Git/GitHub</h3>
            <p className="text-sm text-vln-muted mb-3">
              Clone labs and submit findings
            </p>
            <a
              href="https://github.com/Fused-Gaming/Web3-Wednesdays"
              target="_blank"
              rel="noopener noreferrer"
              className="text-vln-accent hover:underline text-sm"
            >
              Clone Repository →
            </a>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-vln-accent mb-6">Curriculum</h2>
        {weeks.map((w) => (
          <div key={w.week} className="card mb-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-vln-accent text-lg mb-2">{w.title}</h3>
                <p className="text-vln-muted mb-4">{w.description}</p>
              </div>
            </div>

            <div className="mb-6 p-4 bg-vln-darker rounded">
              <h4 className="text-vln-accent mb-3 font-bold">🧪 {w.lab.title}</h4>
              <p className="text-vln-muted text-sm mb-3">{w.lab.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4 text-sm text-vln-muted">
                <div>
                  <span className="text-vln-accent">Difficulty:</span> {w.lab.difficulty}
                </div>
                <div>
                  <span className="text-vln-accent">Duration:</span> {w.lab.duration}
                </div>
                <div>
                  <span className="text-vln-accent">Location:</span> {w.lab.repo}
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={`https://github.com/Fused-Gaming/Web3-Wednesdays/tree/main/${w.lab.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-vln-accent text-vln-darker rounded font-semibold hover:opacity-90 text-sm"
                >
                  View Lab on GitHub →
                </a>
                <a
                  href="#"
                  className="inline-block px-4 py-2 border border-vln-accent text-vln-accent rounded hover:bg-vln-accent hover:text-vln-darker text-sm transition"
                >
                  Lab Instructions
                </a>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-vln-accent mb-3 font-bold">📚 Topics Covered</h4>
              <div className="flex flex-wrap gap-2">
                {w.topics.map((topic) => (
                  <span key={topic} className="px-3 py-1 bg-vln-darker text-vln-muted text-sm rounded">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-12 p-6 bg-vln-darker rounded">
        <h2 className="text-vln-accent mb-4">📖 Quick Start</h2>
        <ol className="space-y-3 text-vln-muted">
          <li>
            <strong>1. Install Foundry</strong>
            <br />
            <code className="text-sm text-vln-accent">curl -L https://foundry.paradigm.xyz | bash</code>
          </li>
          <li>
            <strong>2. Clone the Repository</strong>
            <br />
            <code className="text-sm text-vln-accent">
              git clone https://github.com/Fused-Gaming/Web3-Wednesdays.git
            </code>
          </li>
          <li>
            <strong>3. Navigate to Week 0 Lab</strong>
            <br />
            <code className="text-sm text-vln-accent">cd module-0-onboarding/labs/lab-00-reentrancy</code>
          </li>
          <li>
            <strong>4. Run the Exploit</strong>
            <br />
            <code className="text-sm text-vln-accent">forge test -vv</code>
          </li>
          <li>
            <strong>5. Analyze with Claude Code</strong>
            <br />
            Open the project in Claude Code and work through the CLAUDE.md prompts
          </li>
        </ol>
      </section>

      <section className="mt-12 p-6 bg-vln-darker rounded">
        <h2 className="text-vln-accent mb-4">❓ Need Help?</h2>
        <div className="space-y-2 text-vln-muted">
          <p>
            💬 Ask in the{' '}
            <a href="https://discord.gg/example" className="text-vln-accent hover:underline">
              Web3 Wednesdays Discord
            </a>
          </p>
          <p>
            📖 Check the{' '}
            <a href="/resources" className="text-vln-accent hover:underline">
              Resources page
            </a>
          </p>
          <p>
            🤖 Use Claude Code to analyze contracts and ask questions
          </p>
        </div>
      </section>
    </>
  );
}
