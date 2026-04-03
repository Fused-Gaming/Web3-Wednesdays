export const metadata = {
  title: 'Module 1: Foundations - Web3 Wednesdays',
  description: 'Learn vulnerability taxonomy, contract reading, and threat modeling',
};

export default function Module1() {
  return (
    <>
      <h1 className="text-vln-accent mb-4">Module 1: Foundations</h1>
      <p className="text-xl text-vln-muted mb-8">
        Weeks 1-4 | Vulnerability Taxonomy & Security Analysis
      </p>

      <div className="card mb-8">
        <h2 className="text-vln-accent mb-4">Coming Soon</h2>
        <p className="text-vln-muted mb-4">
          This module covers the fundamentals of smart contract vulnerabilities:
        </p>
        <ul className="list-disc list-inside text-vln-muted space-y-2">
          <li>Week 1: Threat Landscape - Understanding vulnerability types</li>
          <li>Week 2: Vulnerability Classification - Reentrancy, overflow, access control</li>
          <li>Week 3: Reading Contracts - Static analysis and tooling</li>
          <li>Week 4: Threat Modeling - Attack surfaces and risk assessment</li>
        </ul>
      </div>

      <div className="security-warning">
        <strong>⚠️ Module Launch Date: TBD</strong>
        <div>
          <p>Module 1 labs are in development. Join the Discord for announcements!</p>
        </div>
      </div>
    </>
  );
}
