# Contributing to Web3-Wednesdays

Thanks for your interest in Web3-Wednesdays! Here's how to contribute.

## Ways to Contribute

### 1. Report Issues
Found a bug in a lab or unclear instructions? [Open an issue](https://github.com/Fused-Gaming/Web3-Wednesdays/issues).

**Issue templates:**
- `lab-bug-report.md` — Bug in a lab or contract
- `session-feedback.md` — Feedback on a session
- `new-topic-proposal.md` — Suggest a new topic

### 2. Submit Findings
Completed a lab? Submit your findings!

1. Fork the repo
2. Create a findings file: `module-N/week-[num]/labs/lab-[num]-[topic]/findings/[your-name].md`
3. Include:
   - Vulnerability: [name]
   - Severity: [High/Medium/Low]
   - Explanation: [your analysis]
   - PoC: [link to test or code snippet]
4. Open a PR

### 3. Create a Lab
Want to create a new lab? Great!

1. Open an issue: "Lab proposal: [topic]"
2. Discuss scope and difficulty
3. Create a branch: `lab/[topic]`
4. Follow the lab structure:
   ```
   lab-[NUM]-[topic]/
   ├── README.md          # Instructions
   ├── CLAUDE.md          # AI prompts
   ├── contracts/
   │   ├── Vulnerable.sol
   │   └── SafeVersion.sol (optional)
   ├── poc/
   │   └── Exploit.t.sol
   └── resources/
       └── case-studies.md
   ```
5. Test thoroughly
6. Open a PR with description

### 4. Improve Documentation
- Fix typos in README, ARCHITECT.md, CLAUDE.md
- Add resources (links, case studies, tools)
- Clarify facilitator guide
- Improve glossary

### 5. Share Case Studies
Found an interesting real-world exploit? Share it!

1. Create: `docs/case-studies/[exploit-name].md`
2. Include:
   - Vulnerability type
   - Project/protocol affected
   - Timeline and impact
   - Technical breakdown
   - Links and references
3. PR to `docs/` folder

---

## Pull Request Process

1. **Fork** the repo
2. **Create a branch**: `git checkout -b feature/your-feature`
3. **Make changes** and test thoroughly
4. **Commit** with clear messages: `git commit -am "Add lab on reentrancy"`
5. **Push**: `git push origin feature/your-feature`
6. **Open PR** with description:
   - What's new?
   - Why is this useful?
   - Any testing done?
7. **Respond to feedback** from maintainers
8. **Merge** once approved

### PR Checklist
- [ ] Contracts compile: `forge build`
- [ ] Tests pass: `forge test -vv`
- [ ] No linting errors: `solhint **/*.sol`
- [ ] Documentation updated (README, CLAUDE.md, etc.)
- [ ] Security warning present (if new lab)
- [ ] No secrets or private keys in code

---

## Code Style

### Solidity
- Use Solidity 0.8.x (^0.8.0)
- Annotate vulnerabilities: `// VULNERABLE: [reason]`
- Annotate fixes: `// FIXED: [solution]`
- Use OpenZeppelin naming conventions
- Explain external dependencies: `// WARN: [risk]`

Example:
```solidity
// VULNERABLE: Reentrancy - updates state after external call
function withdraw() external {
    uint amount = balances[msg.sender];
    (bool ok, ) = msg.sender.call{value: amount}("");
    require(ok);
    balances[msg.sender] = 0;  // State update AFTER call
}
```

### Markdown
- Use clear headings (H2, H3)
- Code blocks with language: ` ```solidity `
- Links to external resources: `[text](url)`
- Numbered lists for steps
- Bullet points for details

---

## Content Guidelines

### Labs
- **Audience**: Beginners learning Solidity
- **Scope**: 1 vulnerability per lab
- **Difficulty**: Should be completable in 20 min
- **Clarity**: Step-by-step instructions, no ambiguity
- **Ethics**: Only for education, not exploitation

### Documentation
- **Tone**: Encouraging, beginner-friendly
- **Clarity**: Explain jargon, provide links
- **Accuracy**: Check all external links
- **Maintenance**: Update when curriculum changes

### Case Studies
- **Sources**: Link to public reports, blogs, post-mortems
- **Analysis**: Explain the vulnerability, not just the loss
- **Education**: Focus on what can be learned

---

## Recognition

Contributors are recognized in:
- `CREDITS.md` (added after first contribution)
- GitHub `CONTRIBUTORS` badge
- Discord `#contributors` shoutout
- Monthly Twitter thread highlighting community

---

## Questions?

- Open a discussion: GitHub Discussions
- Ask in Discord: #contributors
- Email: [TBD]

---

## Code of Conduct

- Be respectful and constructive
- No harassment, discrimination, or hate speech
- Assume good intent
- Disagree thoughtfully

Read our full [Code of Conduct](CODE_OF_CONDUCT.md).

---

## License

By contributing, you agree that your work will be licensed under the same license as this repo (see [LICENSE](LICENSE)).

---

Thanks for contributing to Web3-Wednesdays! 🎉

