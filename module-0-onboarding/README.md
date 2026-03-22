# Module 0 — Onboarding

Welcome to Web3 Wednesdays! This module gets you set up and ready for the curriculum.

## Week 0: Setup & Security Mindset

### What We Cover
- Install Foundry (Ethereum testing framework)
- Set up Claude Code for security analysis
- Learn the security mindset
- Complete your first "exploit" (guided lab)

### Learning Outcomes
By the end of this week, you'll:
- ✅ Have a working Foundry + Solidity environment
- ✅ Understand Web3 Wednesdays goals and format
- ✅ Know how to use Claude Code for code analysis
- ✅ Have completed a basic exploit lab

### Session Details
- **Date/Time**: [TBD - See Discord for scheduling]
- **Duration**: 60 minutes
- **Format**: Presentation (30 min) → Lab (20 min) → Discussion (10 min)
- **Location**: Oakland meetup + Zoom available

### Session Prep

Before the session, please:
1. Install Foundry (see below)
2. Clone this repository
3. Read `CLAUDE.md` in the lab folder

---

## 🛠️ Setup Instructions

### 1. Install Foundry

**macOS / Linux:**
```bash
curl -L https://foundry.paradigm.xyz | bash
foundryup
```

**Windows (WSL):**
```bash
curl -L https://foundry.paradigm.xyz | bash
foundryup
```

**Verify:**
```bash
forge --version
```

Should output: `forge 0.2.x ...` (version may vary)

### 2. Clone Web3-Wednesdays

```bash
git clone https://github.com/Fused-Gaming/Web3-Wednesdays.git
cd Web3-Wednesdays
```

### 3. Build Week 0 Lab

```bash
cd module-0-onboarding/labs/lab-00-claude-code-setup
forge build
```

Should output: `Compiler run successful`

### 4. Run Week 0 Lab

```bash
forge test -vv
```

Should show 1 passing test ✓

---

## 📚 Resources

### Foundry
- [Foundry Book](https://book.getfoundry.sh/) — Full documentation
- [Foundry GitHub](https://github.com/foundry-rs/foundry) — Source code
- [Forge Cheatsheet](https://book.getfoundry.sh/reference/forge/) — Quick reference

### Solidity
- [Solidity Docs](https://docs.soliditylang.org/) — Language reference
- [Smart Contract Security](https://ethereum.org/en/developers/docs/smart-contracts/security/) — Best practices

### Claude Code
- [Claude Code Guide](https://claude.ai/code) — Interactive code assistance
- [Example Prompts](shared/prompts/) — Copy-paste security analysis prompts

### Communities
- **Discord**: [Join Web3-Wednesdays Discord](https://discord.gg/) [TBD]
- **Twitter**: [@FusedGaming](https://twitter.com/fusedgaming)
- **GitHub**: [Fused-Gaming/Web3-Wednesdays](https://github.com/Fused-Gaming/Web3-Wednesdays)

---

## ⚠️ Security Warning

All contracts in this curriculum are **intentionally vulnerable** for educational purposes.

- **DO NOT** deploy these to mainnet
- **DO NOT** send real funds to these contracts
- These labs teach you to recognize and prevent vulnerabilities

Learn responsibly. More at [OWASP Smart Contracts Top 10](https://owasp.org/www-community/vulnerabilities/).

---

## FAQ

**Q: Do I need prior Solidity experience?**
A: No! This curriculum is beginner-friendly. We teach you Solidity from scratch.

**Q: Can I attend remotely?**
A: Yes! Sessions are on Zoom. Check Discord for the link.

**Q: What if I miss a session?**
A: No problem! We record all sessions and post them in Discord.

**Q: What tools do I need?**
A: Just Foundry (free, open-source) and a text editor. We'll provide the rest.

**Q: Can I suggest topics?**
A: Absolutely! Open a GitHub issue with your suggestion.

---

## Next Steps

1. Complete setup above
2. Join the Discord (link in #announcements on Fused Gaming server)
3. Attend Week 0 session (or watch recording)
4. Move on to Module 1 (Foundations)

See you Wednesday! 🚀

