# Web3-Wednesdays
Web3 Wednesdays is a weekly meetup in Oakland where we discuss all things related to security, secure development practices and real life examples of exploits. Join Fused Gaming for happy hour and discussions about web 3 security. 

# VLN.GG — GitHub Repository Directory Tree

### `vln-gg/web3-wednesdays`

```
web3-wednesdays/
├── CLAUDE.md                          # Claude Code project context & agent instructions
├── ARCHITECT.md                       # Curriculum architecture & governance notes
├── README.md                          # Series overview, setup instructions, contributor guide
├── LICENSE
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── session-feedback.md
│   │   ├── lab-bug-report.md
│   │   └── new-topic-proposal.md
│   └── workflows/
│       ├── lint-contracts.yml         # Auto-lint Solidity lab files on PR
│       └── validate-session-docs.yml  # Check required files exist per session folder
│
├── docs/
│   ├── curriculum-overview.md         # Full 16-week outline
│   ├── facilitator-guide.md           # How to run a session, timing, tools needed
│   ├── claude-code-integration.md     # Claude Code setup, CLAUDE.md best practices
│   ├── audit-methodology.md           # VLN.GG audit standards reference
│   ├── severity-scoring.md            # Severity framework (CVSS + Web3 adaptation)
│   └── glossary.md                    # Terms, acronyms, protocol references
│
├── module-0-onboarding/
│   ├── README.md
│   ├── session-plan.md
│   ├── slides/
│   │   └── week-00-onboarding.md      # Slide outline (Markdown or link to deck)
│   ├── labs/
│   │   └── lab-00-claude-code-setup/
│   │       ├── README.md              # Lab instructions
│   │       ├── CLAUDE.md              # Sample CLAUDE.md for participants to adapt
│   │       └── contracts/
│   │           └── VulnerableSample.sol
│   └── resources/
│       └── claude-code-prompts.md     # Starter prompts for security research
│
├── module-1-foundations/
│   ├── README.md
│   ├── week-01-threat-landscape/
│   │   ├── session-plan.md
│   │   ├── slides/
│   │   │   └── week-01-slides.md
│   │   ├── labs/
│   │   │   └── lab-01-architecture-mapping/
│   │   │       ├── README.md
│   │   │       ├── CLAUDE.md
│   │   │       └── contracts/
│   │   │           └── TargetProtocol.sol
│   │   └── resources/
│   │       └── further-reading.md
│   ├── week-02-vulnerability-taxonomy/
│   │   ├── session-plan.md
│   │   ├── slides/
│   │   │   └── week-02-slides.md
│   │   ├── labs/
│   │   │   └── lab-02-vuln-classification/
│   │   │       ├── README.md
│   │   │       ├── contracts/
│   │   │       │   ├── Reentrancy.sol
│   │   │       │   ├── AccessControl.sol
│   │   │       │   └── IntegerOverflow.sol
│   │   │       └── solutions/         # Unlocked after session
│   │   │           ├── Reentrancy.findings.md
│   │   │           ├── AccessControl.findings.md
│   │   │           └── IntegerOverflow.findings.md
│   │   └── resources/
│   │       └── immunefi-case-studies.md
│   ├── week-03-reading-contracts/
│   │   ├── session-plan.md
│   │   ├── slides/
│   │   ├── labs/
│   │   │   └── lab-03-first-pass-review/
│   │   │       ├── README.md
│   │   │       ├── CLAUDE.md
│   │   │       ├── contracts/
│   │   │       │   └── GameEconomy.sol
│   │   │       └── tools/
│   │   │           └── slither-config.json
│   │   └── resources/
│   │       └── auditor-checklist.md
│   └── week-04-threat-modeling/
│       ├── session-plan.md
│       ├── slides/
│       ├── labs/
│       │   └── lab-04-threat-model/
│       │       ├── README.md
│       │       ├── CLAUDE.md
│       │       └── templates/
│       │           └── threat-model-template.md
│       └── resources/
│           └── threat-modeling-frameworks.md
│
├── module-2-attack-surfaces/
│   ├── README.md
│   ├── week-05-randomness/
│   │   ├── session-plan.md
│   │   ├── slides/
│   │   ├── labs/
│   │   │   └── lab-05-rng-exploit/
│   │   │       ├── README.md
│   │   │       ├── CLAUDE.md
│   │   │       ├── contracts/
│   │   │       │   ├── WeakRNG.sol
│   │   │       │   └── VRFImplementation.sol
│   │   │       └── poc/
│   │   │           └── RNGExploit.t.sol   # Foundry test / PoC scaffold
│   │   └── resources/
│   │       └── rng-case-studies.md
│   ├── week-06-oracle-manipulation/
│   │   ├── session-plan.md
│   │   ├── slides/
│   │   ├── labs/
│   │   │   └── lab-06-flash-loan-oracle/
│   │   │       ├── README.md
│   │   │       ├── CLAUDE.md
│   │   │       ├── contracts/
│   │   │       │   └── OracleVulnerable.sol
│   │   │       └── poc/
│   │   │           └── FlashLoanOracle.t.sol
│   │   └── resources/
│   ├── week-07-token-economics/
│   │   ├── session-plan.md
│   │   ├── slides/
│   │   ├── labs/
│   │   │   └── lab-07-inflation-attack/
│   │   │       ├── README.md
│   │   │       ├── CLAUDE.md
│   │   │       └── contracts/
│   │   │           └── GameToken.sol
│   │   └── resources/
│   │       └── axie-postmortem.md
│   └── week-08-bridges/
│       ├── session-plan.md
│       ├── slides/
│       ├── labs/
│       │   └── lab-08-bridge-review/
│       │       ├── README.md
│       │       ├── CLAUDE.md
│       │       └── contracts/
│       │           └── SimpleBridge.sol
│       └── resources/
│           └── ronin-bridge-forensics.md
│
├── module-3-audit-practice/
│   ├── README.md
│   ├── week-09-poc-development/
│   │   ├── session-plan.md
│   │   ├── slides/
│   │   ├── labs/
│   │   │   └── lab-09-poc-writing/
│   │   │       ├── README.md
│   │   │       ├── CLAUDE.md
│   │   │       ├── contracts/
│   │   │       │   └── VulnerableGame.sol
│   │   │       └── poc/
│   │   │           └── ExploitTemplate.t.sol
│   │   └── resources/
│   │       └── responsible-disclosure-guide.md
│   ├── week-10-live-audit-1/
│   │   ├── session-plan.md
│   │   ├── roles.md                   # Lead auditor / PoC dev / Claude Code operator / documenter
│   │   ├── labs/
│   │   │   └── audit-target-1/
│   │   │       ├── README.md
│   │   │       ├── CLAUDE.md
│   │   │       └── contracts/         # Full protocol for group audit
│   │   ├── findings/
│   │   │   └── .gitkeep               # Teams submit findings here
│   │   └── solutions/
│   ├── week-11-live-audit-2/
│   │   ├── session-plan.md
│   │   ├── roles.md
│   │   ├── labs/
│   │   │   └── audit-target-2/
│   │   │       ├── README.md
│   │   │       ├── CLAUDE.md
│   │   │       └── contracts/
│   │   ├── findings/
│   │   │   └── .gitkeep
│   │   └── solutions/
│   └── week-12-report-writing/
│       ├── session-plan.md
│       ├── slides/
│       ├── templates/
│       │   ├── audit-report-template.md
│       │   └── finding-template.md
│       └── resources/
│           └── sample-reports/
│               └── example-report-redacted.md
│
├── module-4-forensics-and-design/
│   ├── README.md
│   ├── week-13-forensic-analysis/
│   │   ├── session-plan.md
│   │   ├── slides/
│   │   ├── labs/
│   │   │   └── lab-13-exploit-reconstruction/
│   │   │       ├── README.md
│   │   │       ├── CLAUDE.md
│   │   │       └── data/
│   │   │           └── sample-tx-trace.json
│   │   └── resources/
│   │       └── forensics-toolkit-guide.md  # Links to blockchain-forensic-toolkit
│   ├── week-14-incident-response/
│   │   ├── session-plan.md
│   │   ├── slides/
│   │   ├── labs/
│   │   │   └── lab-14-runbook/
│   │   │       ├── README.md
│   │   │       ├── CLAUDE.md
│   │   │       └── templates/
│   │   │           └── incident-response-runbook.md
│   │   └── resources/
│   ├── week-15-secure-design/
│   │   ├── session-plan.md
│   │   ├── slides/
│   │   ├── labs/
│   │   │   └── lab-15-refactor/
│   │   │       ├── README.md
│   │   │       ├── CLAUDE.md
│   │   │       └── contracts/
│   │   │           ├── InsecureProtocol.sol
│   │   │           └── SecureProtocol.sol  # Revealed post-session
│   │   └── resources/
│   │       └── design-patterns-reference.md
│   └── week-16-capstone/
│       ├── session-plan.md
│       ├── README.md
│       ├── CLAUDE.md                       # Capstone-specific agent context
│       ├── target-protocol/
│       │   └── contracts/                  # Full capstone audit target
│       ├── team-submissions/
│       │   └── .gitkeep
│       └── debrief/
│           └── claude-code-retrospective.md
│
├── bonus-sessions/
│   ├── claude-code-as-attack-surface/
│   │   ├── session-plan.md
│   │   └── labs/
│   │       └── prompt-injection-demo/
│   │           ├── README.md
│   │           └── malicious-CLAUDE.md.example
│   ├── agentic-audit-pipelines/
│   │   ├── session-plan.md
│   │   └── labs/
│   │       └── ci-audit-pipeline/
│   │           ├── README.md
│   │           └── .github/
│   │               └── workflows/
│   │                   └── audit-on-push.yml
│   ├── forensics-deep-dive/
│   │   ├── session-plan.md
│   │   └── labs/
│   └── career-track/
│       ├── session-plan.md
│       └── resources/
│           └── reentry-security-pathway.md
│
├── shared/
│   ├── contracts/
│   │   ├── interfaces/                # Shared Solidity interfaces used across labs
│   │   └── mocks/                     # Mock tokens, oracles, VRF for lab use
│   ├── foundry/
│   │   ├── foundry.toml
│   │   └── remappings.txt
│   ├── prompts/
│   │   ├── audit-first-pass.md        # Reusable Claude Code prompts
│   │   ├── poc-scaffolding.md
│   │   ├── threat-model-gen.md
│   │   ├── forensics-narration.md
│   │   └── report-drafting.md
│   └── templates/
│       ├── session-plan-template.md
│       ├── CLAUDE-template.md         # Base CLAUDE.md for each week's lab
│       └── lab-readme-template.md
│
└── registry/
    └── repo-registry.md               # VLN.GG org-level repo registry reference
```
---
