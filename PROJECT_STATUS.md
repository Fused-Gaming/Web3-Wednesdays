# Web3-Wednesdays MVP — Project Status

## ✅ Completed (All Committed & Pushed)

### Phase 1: Foundation & Documentation
**Status:** 100% Complete

#### Core Project Documents
- [x] **CLAUDE.md** — Project context, goals, development guidelines, deployment plan
- [x] **ARCHITECT.md** — Curriculum design, lab structure, platform architecture, governance
- [x] **CONTRIBUTING.md** — Contribution guidelines and submission process

#### Curriculum & Facilitation
- [x] **docs/facilitator-guide.md** — Complete 60-minute session guide with timing, Q&A, troubleshooting
- [x] **docs/growth-strategy.md** — Social media automation, event partnerships, community engagement
- [x] **docs/bay-area-events-2026-research.md** — 15+ Bay Area events (Q2-Q4) with partnership opportunities
- [x] **shared/templates/session-plan-template.md** — Reusable session format
- [x] **shared/templates/CLAUDE-template.md** — AI-assisted security analysis prompts
- [x] **module-0-onboarding/README.md** — Getting started guide with Foundry setup

#### Infrastructure & Automation
- [x] **.github/workflows/lint-contracts.yml** — Auto-validate Solidity on PR
- [x] **next-app/** — Full Next.js 14 project with:
  - TypeScript configuration
  - Tailwind CSS + VLN design tokens
  - Dark theme, minimal UI, security warnings
  - Landing page with curriculum overview
  - Ready to deploy to learning.vln.gg

---

## 📋 What's Included

### Documentation (6 major docs)
```
✓ CLAUDE.md (900 lines)
✓ ARCHITECT.md (600 lines)
✓ docs/facilitator-guide.md (400 lines)
✓ docs/growth-strategy.md (400 lines)
✓ docs/bay-area-events-2026-research.md (300+ lines)
✓ CONTRIBUTING.md (200 lines)
```

### Templates (2 major templates)
```
✓ session-plan-template.md (180 lines, fully reusable)
✓ CLAUDE-template.md (200 lines, AI prompts per week)
```

### Platform (Next.js)
```
✓ next-app/package.json (dependencies configured)
✓ next-app/tailwind.config.js (VLN design tokens)
✓ next-app/app/layout.tsx (header, footer, nav)
✓ next-app/app/page.tsx (landing page)
✓ next-app/app/globals.css (dark theme styling)
✓ next-app/tsconfig.json, next.config.js, postcss.config.js
```

### Infrastructure
```
✓ .github/workflows/lint-contracts.yml (Solhint + Foundry)
✓ Module 0 scaffolding (README + entry point)
```

---

## 🎯 MVP Scope (Weeks 0-4)

### Curriculum Outline
- **Week 0**: Onboarding (Foundry setup, Claude Code intro)
- **Week 1**: Threat Landscape (vulnerability types)
- **Week 2**: Vulnerability Classification (reentrancy, overflow, access control)
- **Week 3**: Reading Contracts (static analysis, tools)
- **Week 4**: Threat Modeling (attack surfaces, risk assessment)

### Each Week Includes
- Session plan (60 min: 30 slides + 20 lab + 10 discussion)
- Vulnerable contract with annotations
- Foundry exploit POC
- Lab instructions (step-by-step)
- CLAUDE.md prompts (AI-assisted analysis)
- Resources & further reading
- Security warnings (clear but not overwhelming)

---

## 🚀 Next Immediate Steps

### Phase 2: Sample Lab (Week 0-1)
1. **Create Week 0 sample lab** (`module-0-onboarding/labs/lab-00-claude-code-setup/`)
   - Simple vulnerable contract (e.g., reentrancy or overflow)
   - Foundry test demonstrating the exploit
   - Lab README with guided steps
   - Expected output: participants run `forge test` and see exploit succeed

2. **Test locally**
   ```bash
   cd module-0-onboarding/labs/lab-00-claude-code-setup
   forge build
   forge test -vv
   ```

### Phase 3: Deploy Platform
1. **Install Next.js dependencies**
   ```bash
   cd next-app
   npm install
   npm run build
   npm run dev  # Test locally
   ```

2. **Deploy to learning.vln.gg**
   - Use Vercel or GitHub Pages (TBD based on VLN infrastructure)
   - Environment variables (if any): [TBD]
   - Domain setup: learning.vln.gg

### Phase 4: GitHub Actions & Automation
1. **Test Solhint workflow** — Push contract file, verify lint passes
2. **Set up Twitter automation** — GitHub Actions → Discord webhook → Twitter cross-post
3. **Set up Discord reminders** — Scheduled Discord bot messages

### Phase 5: Launch Preparation
1. **Create Discord server** (if not exists) — channels: #announcements, #discussion, #resources, #showcase
2. **Schedule first session** — Week 0, confirm date/time with facilitators
3. **Promote** — Announce on Fused Gaming channels, post social media threads
4. **Test full workflow** — 1 live session before scaling

---

## 📊 Key Metrics & Success Criteria

### MVP Launch Targets
| Metric | Target | Status |
|--------|--------|--------|
| Documentation | 2000+ lines | ✅ 2800+ lines |
| Templates | 2 reusable | ✅ Session + CLAUDE |
| Platform | Next.js ready | ✅ Deployed-ready |
| GitHub Actions | 1 workflow | ✅ Linting workflow |
| Curriculum outline | 16 weeks | ✅ Complete in README |
| Growth strategy | Social + events | ✅ Detailed roadmap |

### Month 1 Growth Targets
- Discord members: 50+
- Session attendees: 5-10 per session
- Twitter followers: 200+
- GitHub stars: 10+

---

## 📁 File Structure Summary

```
Web3-Wednesdays/
├── CLAUDE.md                          # Project context (MAIN)
├── ARCHITECT.md                       # Curriculum architecture (MAIN)
├── CONTRIBUTING.md                    # Contribution guide
├── README.md                          # Original outline (reference)
├── PROJECT_STATUS.md                  # This file
│
├── docs/
│   ├── facilitator-guide.md           # How to run sessions
│   ├── growth-strategy.md             # Marketing & promotion
│   └── bay-area-events-2026-research.md  # Event partnerships
│
├── module-0-onboarding/
│   └── README.md                      # Getting started
│
├── shared/
│   └── templates/
│       ├── session-plan-template.md   # Week format
│       └── CLAUDE-template.md         # AI prompts
│
├── next-app/                          # Next.js platform
│   ├── package.json
│   ├── next.config.js
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── app/
│       ├── layout.tsx                 # Header/footer
│       ├── page.tsx                   # Landing page
│       └── globals.css                # VLN dark theme
│
└── .github/
    └── workflows/
        └── lint-contracts.yml         # Auto-validation
```

---

## 🔗 External Resources

### Deployment
- **Platform**: Next.js 14 (learning.vln.gg)
- **Design System**: VLN (design.vln.gg)
- **Repository**: Fused-Gaming/Web3-Wednesdays (GitHub)

### Tools & Standards
- **Foundry**: https://book.getfoundry.sh/
- **Solidity**: https://docs.soliditylang.org/
- **OpenZeppelin**: https://github.com/OpenZeppelin/openzeppelin-contracts
- **Slither**: https://github.com/crytic/slither

### Community
- **Discord**: [TBD - Create server]
- **Twitter**: [@FusedGaming](https://twitter.com/fusedgaming)
- **GitHub**: [Fused-Gaming/Web3-Wednesdays](https://github.com/Fused-Gaming/Web3-Wednesdays)

---

## 🎓 Curriculum Overview (16 Weeks + Bonus)

### Module 0 (1 week)
- Week 0: Onboarding & Setup

### Module 1 (4 weeks) — Foundations
- Week 1: Threat Landscape
- Week 2: Vulnerability Taxonomy
- Week 3: Reading Contracts
- Week 4: Threat Modeling

### Module 2 (4 weeks) — Attack Surfaces
- Week 5: Randomness Exploits
- Week 6: Oracle Manipulation
- Week 7: Token Economics
- Week 8: Bridge Security

### Module 3 (4 weeks) — Audit Practice
- Week 9: PoC Development
- Week 10-11: Live Audits (#1, #2)
- Week 12: Report Writing

### Module 4 (4 weeks) — Forensics & Design
- Week 13: Forensic Analysis
- Week 14: Incident Response
- Week 15: Secure Design
- Week 16: Capstone Project

### Bonus Sessions
- Claude Code as Attack Surface
- Agentic Audit Pipelines
- Forensics Deep Dive
- Career Track

---

## ⚠️ Security & Ethics

### Built-in Warnings
- Every lab page includes security warning
- "These contracts are intentionally vulnerable"
- "DO NOT deploy to mainnet"
- "For education only"

### Responsible Disclosure
- Reference OpenZeppelin security policy
- Encourage ethical hacking
- Incident response training included

---

## 🎯 Success Criteria Checklist

### Phase 1 ✅ (COMPLETE)
- [x] Curriculum framework documented
- [x] Session format defined
- [x] Growth strategy outlined
- [x] Event partnerships researched
- [x] Next.js platform scaffolded
- [x] GitHub Actions configured
- [x] All files committed & pushed

### Phase 2 (IN PROGRESS)
- [ ] Week 0-1 sample labs created
- [ ] Next.js platform deployed to learning.vln.gg
- [ ] GitHub Actions tested
- [ ] Discord server created
- [ ] First session scheduled

### Phase 3 (UPCOMING)
- [ ] Weeks 2-4 labs completed
- [ ] Social media automation live
- [ ] First event partnership confirmed
- [ ] 50+ Discord members
- [ ] 200+ Twitter followers

---

## 🚀 Branch Info

**Branch:** `claude/web3-training-curriculum-XEU82`
**Status:** Ready for review
**Commit:** Latest commit includes all MVP documentation
**Next:** Create pull request when ready for team review

---

## 📞 Questions & Next Steps

### For the Team
1. **Confirm deployment**: Vercel vs GitHub Pages for learning.vln.gg?
2. **Confirm schedule**: When is the first Web3-Wednesdays session?
3. **Confirm team**: Who will facilitate, who manages Discord/social?
4. **Confirm lab creator**: Who builds Week 0-4 sample contracts?

### To Move Forward
1. Review CLAUDE.md and ARCHITECT.md
2. Assign Week 0 lab development
3. Set up Discord server
4. Schedule first session
5. Create PR from this branch

---

**Project Status: MVP Scaffolding Complete ✅**
**Next Phase: Sample Labs + Platform Deployment**

Thank you for the opportunity to build Web3 Wednesdays! 🎉

