export const metadata = {
  title: 'Module 2: Attack Surfaces - Web3 Wednesdays',
  description: 'Exploit randomness, oracles, tokens, and bridges',
};

export default function Module2() {
  return (
    <>
      <h1 className="text-vln-accent mb-4">Module 2: Attack Surfaces</h1>
      <p className="text-xl text-vln-muted mb-8">
        Weeks 5-8 | Specialized Vulnerability Deep Dives
      </p>

      <div className="card mb-8">
        <h2 className="text-vln-accent mb-4">Coming Soon</h2>
        <p className="text-vln-muted mb-4">
          This module explores attack surfaces in decentralized systems:
        </p>
        <ul className="list-disc list-inside text-vln-muted space-y-2">
          <li>Week 5: Randomness Exploits - Predictable pseudo-random numbers</li>
          <li>Week 6: Oracle Manipulation - Exploiting price feeds and data sources</li>
          <li>Week 7: Token Economics - Governance and economic vulnerabilities</li>
          <li>Week 8: Bridge Security - Cross-chain vulnerabilities and exploits</li>
        </ul>
      </div>

      <div className="security-warning">
        <strong>⚠️ Module Launch Date: TBD</strong>
        <div>
          <p>Module 2 labs are in development. Stay tuned!</p>
        </div>
      </div>
    </>
  );
}
