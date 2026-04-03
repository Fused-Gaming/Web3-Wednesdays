export const metadata = {
  title: 'Module 3: Audit Practice - Web3 Wednesdays',
  description: 'Develop PoCs, conduct live audits, and write professional reports',
};

export default function Module3() {
  return (
    <>
      <h1 className="text-vln-accent mb-4">Module 3: Audit Practice</h1>
      <p className="text-xl text-vln-muted mb-8">
        Weeks 9-12 | Professional Security Auditing
      </p>

      <div className="card mb-8">
        <h2 className="text-vln-accent mb-4">Coming Soon</h2>
        <p className="text-vln-muted mb-4">
          This module teaches professional audit techniques:
        </p>
        <ul className="list-disc list-inside text-vln-muted space-y-2">
          <li>Week 9: PoC Development - Writing exploits like a professional</li>
          <li>Week 10: Live Audit #1 - Real-time security analysis</li>
          <li>Week 11: Live Audit #2 - Apply learned techniques</li>
          <li>Week 12: Report Writing - Professional security documentation</li>
        </ul>
      </div>

      <div className="security-warning">
        <strong>⚠️ Module Launch Date: TBD</strong>
        <div>
          <p>Module 3 labs are in development. Check back soon!</p>
        </div>
      </div>
    </>
  );
}
