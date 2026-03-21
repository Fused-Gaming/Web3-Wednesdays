# ARCHITECT.md — Curriculum Design & Technical Architecture

## 🏗️ Curriculum Architecture

### Progression Model
```
Module 0: Onboarding
├── Week 0: Setup & mindset

Module 1: Foundations (Weeks 1-4)
├── Week 1: Threat landscape
├── Week 2: Vulnerability taxonomy
├── Week 3: Reading contracts
└── Week 4: Threat modeling

Module 2: Attack Surfaces (Weeks 5-8)
├── Week 5: Randomness exploits
├── Week 6: Oracle manipulation
├── Week 7: Token economics
└── Week 8: Bridge security

Module 3: Audit Practice (Weeks 9-12)
├── Week 9: PoC development
├── Week 10: Live audit #1
├── Week 11: Live audit #2
└── Week 12: Report writing

Module 4: Forensics & Design (Weeks 13-16)
├── Week 13: Forensic analysis
├── Week 14: Incident response
├── Week 15: Secure design
└── Week 16: Capstone project

Bonus Sessions:
├── Claude Code as attack surface
├── Agentic audit pipelines
├── Forensics deep dive
└── Career track
```

### Learning Outcomes per Module

**Module 0 (Onboarding)**
- Understand Web3 Wednesdays goals and format
- Set up Foundry + Claude Code
- Recognize security mindset (defense > offense)

**Module 1 (Foundations)**
- Classify vulnerabilities (6 main categories)
- Read Solidity code and identify patterns
- Map attack surfaces and threat models
- Use static analysis tools (Slither, Solhint)

**Module 2 (Attack Surfaces)**
- Exploit randomness flaws
- Manipulate price oracles
- Analyze token economics attacks
- Review bridge security assumptions

**Module 3 (Audit Practice)**
- Write Foundry PoCs from specs
- Collaborate on live audits (team roles)
- Write professional audit reports
- Use findings templates

**Module 4 (Forensics & Design)**
- Reconstruct exploits from transaction traces
- Develop incident response procedures
- Design secure smart contract patterns
- Complete capstone audit project

---

## 📐 Lab Structure (60-minute session model)

### Timing Breakdown
```
0:00 - 0:30   Presentation (30 min)
             ├── Context & motivation (5 min)
             ├── Vulnerability explanation (15 min)
             ├── Live demo walkthrough (10 min)

0:30 - 0:50   Hands-on Lab (20 min)
             ├── Guided step-by-step (5 min setup)
             ├── Independent work + Q&A (15 min)

0:50 - 1:00   Debrief & Discussion (10 min)
             ├── Show solutions (5 min)
             ├── Key takeaways + questions (5 min)
```

### Lab Components

Each week's lab directory includes:
```
lab-NN-topic/
├── README.md              # Lab instructions (step-by-step)
├── CLAUDE.md              # AI prompts for code analysis
├── contracts/
│   ├── Vulnerable.sol     # Target contract with inline comments
│   ├── SafeVersion.sol    # (Optional) Secure pattern
│   └── Interfaces.sol     # (If needed)
├── poc/
│   └── Exploit.t.sol      # Foundry test / proof-of-concept
├── solutions/             # (Unlocked after session)
│   └── findings.md        # Expected findings + analysis
└── resources/             # Further reading + references
    └── case-studies.md
```

### Contract Annotation Style
```solidity
// VULNERABLE: Reentrancy - contract calls external code before updating state
function withdraw() external {
    uint amount = balances[msg.sender];
    (bool success, ) = msg.sender.call{value: amount}("");
    require(success);
    balances[msg.sender] = 0;  // State update AFTER call — WRONG
}
```

---

## 🌐 Platform Architecture (learning.vln.gg)

### Technology Stack
- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS + VLN design tokens
- **Code Rendering**: `react-syntax-highlighter` (Solidity support)
- **Diagrams**: Mermaid.js (embedded in pages)
- **Hosting**: Vercel or GitHub Pages
- **Storage**: GitHub repo (source of truth)

### Data Flow
```
GitHub Repo (source)
    ↓
Next.js Build (weekly CI/CD)
    ↓
Static Site (learning.vln.gg)
    ↓
User accesses curriculum + labs
```

### Page Structure

**Landing (`/`)**
- Hero: "Learn Web3 security hands-on"
- Module grid (0-4, bonus)
- Quick start guide
- Upcoming sessions (linked to Discord/calendar)

**Module View (`/module-[0-3]`)**
- Module overview + learning outcomes
- Week cards (clickable to detail)
- Resources section

**Week Detail (`/module-[0-3]/week-[num]`)**
- Session plan (timing, slides, demo)
- Lab overview + GitHub link
- Resources + further reading
- Submit findings (link to GitHub issues)

**Lab Page (`/labs/week-[num]`)**
- ⚠️ Security warning (top, clear but not overwhelming)
- Lab instructions (step-by-step)
- Embedded contract viewer (syntax highlighted)
- Foundry test output preview
- GitHub "Clone & Run" button

**Simulator (`/simulator`)**
- Upload or paste `.sol` file
- Syntax highlighting + vulnerability annotation
- Run Foundry test (display output)
- Link to learning resources

**Resources (`/resources`)**
- Glossary (vulnerability types, protocols, tools)
- Tool guides (Foundry, Slither, Mythril, Claude Code)
- Security frameworks (CVSS, severity scoring)
- Further reading (papers, case studies, external links)

### Deployment Pipeline
```
1. Push to main
2. GitHub Actions runs:
   - Linting (solhint on contracts)
   - Structure validation (check required files)
   - Generate Mermaid diagrams (from docs)
   - Build Next.js site
3. Deploy to learning.vln.gg
4. Discord notification: "Week N content live"
```

---

## 🚀 Growth & Automation Strategy

### Social Media Automation

**Twitter Thread Pattern (weekly)**
```
🧵 Week N: [Vulnerability Name]

1/ This week we're tackling [vulnerability].
   In 2024, [number] protocols were affected.
   Let's learn how to exploit & prevent it.

2/ [Key concept explanation]

3/ [Code snippet or diagram]

4/ Join Web3-Wednesdays [when/where]
   Register: [link]

#SmartContractSecurity #Solidity #Web3
```

**GitHub Actions + Twitter Bot**
- Trigger: New session plan pushed
- Action: Extract vulnerability name + date
- Output: Draft thread → Post to Twitter
- Effort: ~2 hours setup, automated thereafter

**Discord Reminders**
- Trigger: Day before session (scheduled workflow)
- Message: "Web3-Wednesdays starts tomorrow! [slides/lab link]"
- Auto-post: New findings from participants

### Event Calendar Strategy

**Target Events (Bay Area, Q2-Q4 2026)**
- DEFCON/BSides Bay Area (summer)
- Consensus (if online/accessible)
- DevCon offsites
- Local blockchain meetups (Blockchain at Berkeley, etc.)
- Gaming industry conferences (Fused Gaming network)

**Promotion Strategy**
1. Create "Web3-Wednesdays Intro" 5-min talk for conferences
2. Set up booth/table at events (distribute flyers, QR codes)
3. Announce cohort start dates at events
4. Recruit guest speakers from attendee network
5. Feature event attendees in weekly Twitter threads

**Effort** (low-touch automation)
- Create event calendar in Google Sheets
- GitHub Actions: Weekly check for upcoming events → Discord post
- Reuse same talking points / deck across events
- Leverage Fused Gaming's existing partnerships

### Community Building

**Showcase Mechanism**
- Weekly "Best Finding" award (winner mentioned on social media)
- Participant submission: GitHub discussion thread per week
- Voting: Discord reaction emoji count
- Prize: Shoutout + featured in next week's Twitter thread

**Guest Speakers**
- Invite auditors, researchers, protocol teams
- 30-min Q&A or 15-min talk (added to bonus sessions)
- Cross-promote their work/projects

---

## 📊 Metrics & Success Criteria

### MVP Success (Weeks 0-4 launch)
- [ ] All 4 weeks scaffolded and validated
- [ ] 2+ public sessions completed with >5 attendees
- [ ] learning.vln.gg deployed and accessible
- [ ] First 50 Twitter followers / 20 Discord members

### Phase 2 (by end of Q2)
- [ ] Weeks 5-8 deployed (Attack Surfaces)
- [ ] 100+ attendees across sessions
- [ ] 3+ event partnerships confirmed
- [ ] Automated social media posts running

### Phase 3 (by end of Q3)
- [ ] Full 16-week curriculum live
- [ ] 500+ community members
- [ ] Guest speaker series established
- [ ] Capstone audit projects submitted

---

## 🔄 Iteration & Feedback

### Weekly Cycle
```
Mon-Wed: Session prep (slides, lab testing)
Thu: Live session (60 min)
Fri: Gather feedback (GitHub issues, surveys)
Weekend: Refine next week based on feedback
```

### Feedback Sources
- GitHub issues (session-feedback.md, lab-bug-report.md)
- Discord polls (weekly sentiment check)
- Post-session surveys (Google Forms or Typeform)
- Participant submissions (quality of findings, engagement)

### Iteration Process
1. Identify common questions/pain points
2. Update lab README or add clarification
3. Record session walkthrough (post to YouTube, optional)
4. Adjust pacing for subsequent cohorts

---

## 🛡️ Security & Ethics Governance

### Contract Annotations
- Every vulnerable line: `// VULNERABLE: [reason]`
- Every fix: `// FIXED: [solution]`
- External risk: `// WARN: [external dependency]`

### Responsible Disclosure
- Labs reference OpenZeppelin's policy
- Encourage participants to disclose real bugs responsibly
- Feature responsible disclosure in bonus sessions

### Anti-Misuse Policy
- Clear warning on every lab: "for education only"
- Encourage ethical hacking, discourage malicious use
- Include incident response protocols (Module 4)

---

## 📁 Governance & Maintenance

### Repo Roles
- **Maintainer** (org admin): Merge PRs, manage milestones
- **Content Lead**: Week planning, lab design, speaker coordination
- **Documentation**: Keep docs in sync, update CLAUDE.md
- **DevOps**: GitHub Actions, deployment, learning.vln.gg uptime

### PR Review Checklist
- [ ] Contracts annotated (VULNERABLE/FIXED comments)
- [ ] Lab steps are clear and tested
- [ ] CLAUDE.md updated for the week
- [ ] Security warning present (if lab page)
- [ ] Resources link to public, accessible sources
- [ ] Solhint passes (GitHub Actions)
- [ ] Session plan timing is realistic (60 min total)

---

## 🎯 Next Steps (Immediate)

1. **Set up Next.js** (learning.vln.gg scaffolding)
2. **Create Week 0 content** (onboarding session plan + lab)
3. **Implement contract simulator** (code viewer + syntax highlight)
4. **Deploy MVP to learning.vln.gg**
5. **Set up GitHub Actions** (linting, validation, auto-deploy)
6. **Launch social media automation** (Twitter + Discord bots)
7. **Schedule first session** (announce on all channels)
8. **Build Week 1-4** (in parallel during first sessions)

