export const metadata = {
  title: 'Resources - Web3 Wednesdays',
  description: 'Further reading, tools, and security references',
};

export default function Resources() {
  const sections = [
    {
      title: 'Smart Contract Development',
      resources: [
        {
          name: 'Foundry Book',
          description: 'Complete guide to smart contract testing with Foundry',
          link: 'https://book.getfoundry.sh/',
        },
        {
          name: 'Solidity Documentation',
          description: 'Official Solidity language reference',
          link: 'https://docs.soliditylang.org/',
        },
        {
          name: 'OpenZeppelin Contracts',
          description: 'Audited, secure smart contract libraries',
          link: 'https://github.com/OpenZeppelin/openzeppelin-contracts',
        },
      ],
    },
    {
      title: 'Security Analysis Tools',
      resources: [
        {
          name: 'Slither',
          description: 'Static analyzer for Solidity vulnerabilities',
          link: 'https://github.com/crytic/slither',
        },
        {
          name: 'Mythril',
          description: 'Symbolic execution framework for Ethereum smart contracts',
          link: 'https://github.com/ConsenSys/mythril',
        },
        {
          name: 'MythX',
          description: 'Professional smart contract security analysis platform',
          link: 'https://mythx.io/',
        },
      ],
    },
    {
      title: 'Security Best Practices',
      resources: [
        {
          name: 'OpenZeppelin Security',
          description: 'Responsible disclosure and security policies',
          link: 'https://www.openzeppelin.com/security',
        },
        {
          name: 'OWASP Top 10 - Web3',
          description: 'Top 10 Web3 security vulnerabilities',
          link: 'https://owasp.org/',
        },
        {
          name: 'SWC Registry',
          description: 'Smart Contract Weakness Classification',
          link: 'https://swcregistry.io/',
        },
      ],
    },
    {
      title: 'Learning Resources',
      resources: [
        {
          name: 'Ethereum Development Documentation',
          description: 'Official Ethereum developer docs',
          link: 'https://ethereum.org/en/developers/',
        },
        {
          name: 'Cryptopedia',
          description: 'Web3 and blockchain fundamentals',
          link: 'https://www.gemini.com/cryptopedia',
        },
        {
          name: 'The DAO Hack Analysis',
          description: 'Historical case study of the 2016 DAO reentrancy attack',
          link: 'https://www.coindesk.com/understanding-dao-hack-journalists',
        },
      ],
    },
    {
      title: 'Community & Events',
      resources: [
        {
          name: 'Web3 Wednesdays Discord',
          description: 'Join our community for discussions and support',
          link: 'https://discord.gg/example',
        },
        {
          name: 'Fused Gaming',
          description: 'Web3 gaming and security initiatives',
          link: 'https://fused-gaming.com',
        },
        {
          name: 'OpenZeppelin Forum',
          description: 'Smart contract development discussions',
          link: 'https://forum.openzeppelin.com/',
        },
      ],
    },
  ];

  return (
    <>
      <section className="mb-12">
        <h1 className="text-vln-accent mb-4">Resources</h1>
        <p className="text-xl text-vln-muted">
          Curated tools, documentation, and further reading for smart contract security
        </p>
      </section>

      {sections.map((section) => (
        <section key={section.title} className="mb-12">
          <h2 className="text-vln-accent mb-6">{section.title}</h2>
          <div className="space-y-4">
            {section.resources.map((resource) => (
              <a
                key={resource.name}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block card hover:border-vln-accent transition"
              >
                <h3 className="text-vln-accent mb-2">{resource.name}</h3>
                <p className="text-vln-muted text-sm mb-3">{resource.description}</p>
                <span className="text-vln-accent text-sm hover:underline">Visit →</span>
              </a>
            ))}
          </div>
        </section>
      ))}

      <section className="mt-12 p-6 bg-vln-darker rounded">
        <h2 className="text-vln-accent mb-4">💡 Tips for Learning</h2>
        <ul className="space-y-3 text-vln-muted">
          <li>
            <strong>Start with the basics:</strong> Don't skip foundational concepts
          </li>
          <li>
            <strong>Practice with labs:</strong> Hands-on experience is crucial
          </li>
          <li>
            <strong>Use tools early:</strong> Get comfortable with Slither, Foundry, and analysis tools
          </li>
          <li>
            <strong>Read real audits:</strong> Learn from professional security reports
          </li>
          <li>
            <strong>Ask questions:</strong> Join our Discord and community
          </li>
        </ul>
      </section>
    </>
  );
}
