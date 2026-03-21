# CLAUDE.md — Web3-Wednesdays Training Curriculum

## 🎯 Project Overview
**Web3 Wednesdays** is a weekly guided security training program for beginners learning Solidity. We deliver:
- **16-week curriculum** with 4 modules + bonus sessions
- **Hands-on labs** with intentionally vulnerable contracts
- **Working exploits** as proof-of-concept demonstrations
- **Interactive web platform** at learning.vln.gg for curriculum + contract simulator

### Repository Structure
```
web3-wednesdays/
├── docs/                    # Curriculum documentation
├── module-*/                # 4 core modules (0-3)
├── bonus-sessions/          # Optional advanced topics
├── shared/                  # Reusable contracts, templates, prompts
├── scripts/                 # Automation (CI/CD, diagram generation)
├── .github/workflows/       # GitHub Actions for validation
└── next-app/                # Next.js learning platform (learning.vln.gg)
```

---

## 📋 Phase 1: MVP (Weeks 0-4 Foundations)

### Goals
1. Launch Week 0-4 curriculum by [target date]
2. Provide working exploits + guided labs for beginners
3. Deploy interactive contract simulator to learning.vln.gg
4. Establish growth/promotion strategy

### Curriculum Scope (MVP)
- **Week 0**: Onboarding (Claude Code setup, security mindset)
- **Week 1**: Threat landscape (vulnerability taxonomy)
- **Week 2**: Vulnerability classification (reentrancy, access control, overflow)
- **Week 3**: Reading contracts (static analysis, tooling)
- **Week 4**: Threat modeling (attack surfaces, risk assessment)

### Deliverables per Week
Each week includes:
1. **Session plan** (timing, slides, live demo walkthrough)
2. **Lab** (vulnerable contract + guided exploit)
3. **Resources** (further reading, references, case studies)
4. **CLAUDE.md** (AI-assisted prompts for code review/analysis)

---

## 🔒 Security & Ethics

### Critical Warning (on every lab page)
> ⚠️ **These contracts are intentionally vulnerable for educational purposes only.**
> - **DO NOT** deploy these to mainnet or use in production.
> - **DO NOT** send real funds to these contracts.
> - These labs demonstrate common vulnerabilities to help you recognize and prevent them.

### Responsible Disclosure
All labs reference [OpenZeppelin's Responsible Disclosure Policy](https://www.openzeppelin.com/security).

---

## 🛠️ Development Guidelines

### Deliverable Standards
- **Contracts**: Solidity 0.8.x, annotated with vulnerability comments
- **Labs**: Include step-by-step exploit walkthroughs + PoC tests (Foundry)
- **Session plans**: 60-minute format (30 min slides + 20 min lab + 10 min discussion)
- **Documentation**: Markdown, clear prose, minimal jargon for beginners

### Code Quality
- Use `foundry` for testing and deployment
- Lint contracts: `solhint` on PR
- Validate session structure: GitHub Actions check required files exist

### CLAUDE.md per Week
Each lab includes a `CLAUDE.md` with:
- Prompts for contract analysis (static review, threat modeling)
- PoC development scaffolds
- Report writing templates
- Integration with Claude Code workflow

---

## 🌐 Deployment & Platform

### Next.js Site (learning.vln.gg)
**Stack:**
- Next.js 14+ (React 18, TypeScript)
- VLN Design System (dark theme, minimal aesthetics)
- Mermaid diagrams (architecture, journeys, roadmaps)
- No authentication or backend (static + client-side only)

**Pages:**
- `/`: Landing / curriculum overview
- `/module-[0-3]/week-[num]`: Session details, slides, lab links
- `/labs/[week]`: Lab instructions + embedded contract viewer
- `/simulator`: Interactive contract analyzer (syntax highlight + Foundry test output)
- `/resources`: Further reading, glossary, case studies

### Contract Simulator
**Features:**
- View `.sol` files with syntax highlighting
- Display Foundry test output (pass/fail, gas, state changes)
- Link to GitHub repo (clone, run locally)
- Show vulnerability annotations

### Deployment
- GitHub Pages or Vercel (TBD based on VLN infra)
- Auto-deploy on push to `main`
- Subdomain: **learning.vln.gg**

---

## 📊 Growth & Promotion Strategy

### Social Media Automation
- **Twitter**: Weekly threads on lab topics + vulnerability highlights
  - Automation: GitHub Actions → Discord webhook → Twitter cross-post
- **Discord**: Announcements, PoC sharing, discussion threads
  - Automation: Session calendar → Discord reminders

### Event Calendar Alignment
- Research Oakland/Bay Area tech + Web3 events (Q2-Q4 2026)
- Sponsor or co-promote at:
  - Security conferences (DEFCON, BSides Bay Area)
  - Blockchain conferences (Consensus, DevCon offsites)
  - Gaming/metaverse events (Fused Gaming partners)
- Announce upcoming Web3-Wednesdays cohorts at these events

### Community Engagement
- Showcase participant findings (with permission)
- Feature "best exploit" from each week on social media
- Invite external auditors as guest speakers
- Partner with security firms (sponsorships, recruiting)

---

## 🔄 Continuous Improvement

### Feedback Loops
- Weekly GitHub issue templates (session-feedback.md, lab-bug-report.md)
- Post-session surveys (quick Discord poll)
- Incorporate learnings into next iteration

### Diagram Automation
Use Mermaid for:
- **User journeys**: Discovery → Session → Lab → Finding submission
- **Architecture**: Curriculum modules, lab progression
- **State machines**: Exploit development workflow
- **Roadmap**: 16-week timeline with milestones

Diagrams regenerate automatically from docs (via GitHub Actions + Claude).

---

## 👥 Roles & Responsibilities

### Session Facilitator
- Lead presentation (30 min slides)
- Walk through live exploit demo (10-15 min)
- Guide lab work, answer questions (20 min)
- Collect feedback

### Claude Code Operator
- Use Claude Code to analyze contracts during session
- Generate threat models and reports live
- Demonstrate prompt-based security workflows

### Lab Developer
- Create vulnerable contracts with annotations
- Write step-by-step exploit guides
- Ensure PoCs run cleanly with Foundry

### Documentation
- Keep session plans, labs, and resources in sync
- Update README and curriculum overview
- Maintain glossary and resources

---

## 🚀 Getting Started

### For Facilitators
1. Review `docs/facilitator-guide.md`
2. Check the week's `session-plan.md`
3. Clone lab contracts locally, run `foundry test`
4. Review lab resources and speaker notes

### For Participants
1. Clone the Web3-Wednesdays repo
2. Install Foundry: `curl -L https://foundry.paradigm.xyz | bash`
3. Navigate to the week's lab folder
4. Follow lab README step-by-step
5. Submit findings via GitHub (findings/ folder)

### For Contributors
1. Follow `CONTRIBUTING.md` (TBD)
2. Use issue templates for feedback and proposals
3. Run CI/CD checks locally before PR
4. Keep CLAUDE.md and session plans in sync

---

## 📚 Resources & References

- **Foundry Book**: https://book.getfoundry.sh/
- **Solidity Docs**: https://docs.soliditylang.org/
- **OpenZeppelin Contracts**: https://github.com/OpenZeppelin/openzeppelin-contracts
- **Slither**: https://github.com/crytic/slither
- **Mythril**: https://github.com/ConsenSys/mythril
- **Web3 Security**: https://github.com/ethereum/devcon-archive
- **VLN Design System**: https://design.vln.gg (TBD)

---

## 📅 Timeline

- **Now**: Set up Next.js, scaffold Weeks 0-4
- **Week 1**: Finalize Week 0 & 1 content, test in live session
- **Week 2**: Launch learning.vln.gg, deploy Week 0-2
- **Week 3**: Weeks 3-4 ready, growth automation live
- **Month 2**: Modules 1-2 complete, Weeks 5-8 in progress
- **Month 3**: Full 16-week curriculum available, bonus sessions launched

---

## 🎨 Design & Branding

- **Color Scheme**: VLN dark theme (see CLAUDE.md context for tokens)
- **Tone**: Encouraging, beginner-friendly, security-conscious
- **Visual**: Dark background, neon accents, minimal UI clutter
- **Accessibility**: High contrast, readable code blocks, clear hierarchy

---

## ✅ Checklist for Launch

- [ ] Next.js project initialized
- [ ] Weeks 0-4 curriculum drafted
- [ ] Foundry contracts + PoCs working
- [ ] learning.vln.gg deployed
- [ ] GitHub Actions (linting, validation) live
- [ ] Discord + Twitter automation set up
- [ ] Event calendar research complete
- [ ] Security warnings visible on all labs
- [ ] Facilitator guide finalized
- [ ] First session scheduled & promoted

---

## 📞 Contact & Support

- **Organizer**: Fused Gaming
- **Location**: Oakland, CA (weekly meetup)
- **Time**: [TBD — confirm with user]
- **Feedback**: GitHub Issues or [Discord channel TBD]

